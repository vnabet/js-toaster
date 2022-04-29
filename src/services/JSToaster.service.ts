import { defaultToastConf } from './../defaultToastConf';
import type { Toast, ToasterConf } from './../types/toast';
import {toasts} from '../stores/JSToaster.store';
import {get} from 'svelte/store';

/**
 * JSToaster Service interface
 */
export interface IJSToasterService {
  toast(t:Toast):number;
  closeToast(t:Toast);
  conf:Toast;
}

/**
 * JSToaster Service
 */
class JSToasterService implements IJSToasterService {
  // JSToaster configuration
  private toasterConf:ToasterConf;
  // Notifications default definition
  private toastConf:Toast;
  private timeout:number | null = null;

  /**
   * Configuration getter
   */
  public get conf():ToasterConf {
    return this.toasterConf;
  }

  /**
   * Configuration setter
   */
  public set conf(toasterConf:Toast) {
    // Overrides JSToaster configuration
    this.toasterConf = {...this.toasterConf, ...toasterConf};
    // Overrides notifications default definition
    this.toastConf = {
      position: toasterConf.position || this.toastConf.position,
      type: toasterConf.type || this.toastConf.type,
      displayTime: toasterConf.displayTime >= 0?toasterConf.displayTime:this.toastConf.displayTime,
      dark: toasterConf.dark || this.toastConf.dark
    }
  }

  constructor() {
    // Default JSToaster configuration
    this.toasterConf = defaultToastConf;
    // Default notifications definition
    this.toastConf = {
      position: defaultToastConf.position,
      type: defaultToastConf.type,
      displayTime: defaultToastConf.displayTime,
      dark: defaultToastConf.dark
    }
  }

  /**
   * Send a Toast (notification)
   * @param t Toast
   */
  public toast(t:Toast):number {
    // Completes toast missing values with default definition
    t = {...this.toastConf, ...t};
    // Defines toast end of life
    t.timestamp = (new Date()).getTime() + (t.displayTime * 1000);
    // Defines a toast Id
    t.id = parseInt(`${Math.round(Math.random()*1000)}${t.timestamp}`)
    // Toasts store update with this new toast
    toasts.update((ts) => [...ts, t]);
    // updates the next toast to hide
    this.toastsUpdated();

    return t.id;
  }

  /**
   * Close a toast
   * @param toast toast to close
   */
  public closeToast(toast:Toast) {
    if(toast) {
      // Toasts store update without the toast to close
      toasts.update((toasts:Toast[]) => toasts.filter((t) => t.id !== toast.id));
      // updates the next toast to hide
      this.toastsUpdated();
    }
  }

  /**
   * Updates the next toast to hide
   */
  private toastsUpdated() {
    // Retrieves toasts list from store
    let toastsArr:Toast[] = get(toasts);

    if(toastsArr && toastsArr.length > 0) {
      // Clear previous timeout handler
      if(this.timeout) {
        window.clearTimeout(this.timeout);
        this.timeout = null;
      }
      
      // Removes toasts withs display time <=0 (indefinit)
      // then sorts them by end of life 
      toastsArr = toastsArr
      .filter((t:Toast) => t.displayTime > 0)
      .sort((t1:Toast, t2:Toast) => t1.timestamp - t2.timestamp);

      if(toastsArr.length > 0) {
        // Takes the first toast to hide
        const toastToDelete:Toast = toastsArr[0];
        // Calculates timeout duration
        let duration = toastToDelete.timestamp - (new Date()).getTime();
        if(duration < 0) duration = 0;
        // Defines the timeout
        this.timeout = window.setTimeout(() => {
          // Toasts store update without the toast to hide
          toasts.update((toasts:Toast[]) => {
            return toasts.filter((t:Toast) => t.id !== toastToDelete.id);
          })
          this.toastsUpdated();
        }, duration);
      }
    }
  }
}

// * Module exports an instance of JSToaster Service
export const jsToasterService:IJSToasterService = new JSToasterService();