import { defaultToastConf } from './../defaultToastConf';
import type { Toast, Configuration } from './../types/toast';
import {toasts} from '../stores/JSToaster.store';
import {get} from 'svelte/store';

export interface IJSToasterService {
  toast(t:Toast);
  conf:Toast;
}

class JSToasterService implements IJSToasterService {
  private toasterConf:Configuration;
  private toastConf:Toast;
  private timeout:number | null = null;

  public get conf():Configuration {
    return this.toasterConf;
  }

  public set conf(toasterConf:Toast) {
    this.toasterConf = {...this.toasterConf, ...toasterConf};
    this.toastConf = {
      position: toasterConf.position || this.toastConf.position,
      type: toasterConf.type || this.toastConf.type,
      displayTime: toasterConf.displayTime >= 0?toasterConf.displayTime:this.toastConf.displayTime,
      dark: toasterConf.dark || this.toastConf.dark
    }
  }

  constructor() {
    this.toasterConf = defaultToastConf;
    this.toastConf = {
      position: defaultToastConf.position,
      type: defaultToastConf.type,
      displayTime: defaultToastConf.displayTime,
      dark: defaultToastConf.dark
    }
  }

  public toast(t:Toast) {
    t = {...this.toastConf, ...t};
    t.timestamp = (new Date()).getTime() + (t.displayTime * 1000);
    
    t.id = parseInt(`${Math.round(Math.random()*1000)}${t.timestamp}`)
    toasts.update((ts) => [...ts, t]);

    this.toastsUpdated();
  }

  public closeToast(toast:Toast) {
    if(toast) {
      toasts.update((toasts:Toast[]) => toasts.filter((t) => t.id !== toast.id));
      this.toastsUpdated();
    }
  }

  private toastsUpdated() {
    let toastsArr:Toast[] = get(toasts);

    if(toastsArr && toastsArr.length > 0) {
      if(this.timeout) {
        window.clearTimeout(this.timeout);
        this.timeout = null;
      }
  
      toastsArr = toastsArr
      .filter((t:Toast) => t.displayTime)
      .sort((t1:Toast, t2:Toast) => t1.timestamp - t2.timestamp);

      if(toastsArr.length > 0) {
        const toastToDelete:Toast = toastsArr[0];
        let time = toastToDelete.timestamp - (new Date()).getTime();
        if(time < 0) time = 0;
        this.timeout = window.setTimeout(() => {
          toasts.update((toasts:Toast[]) => {
            return toasts.filter((t:Toast) => t.id !== toastToDelete.id);
          })
          this.toastsUpdated();
        }, time);
      }
    }
  }
}

export const jsToasterService = new JSToasterService();