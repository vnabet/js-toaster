import type { Toast, ToastClickHandler } from './types/toast';
import JSToasterComponent from './JSToaster.svelte';
import {jsToasterService, IJSToasterService} from './services/JSToaster.service';

/**
 * JSToaster Class
 * *Instantiates JSToaster svelte component and exposes public methods to control it
 */
class JSToaster {
  private app:JSToasterComponent | null;
  private service:IJSToasterService | null;
  //Toasts click handlers list
  private clickHandlers:ToastClickHandler[] = [];

  constructor() {
    this.app = new JSToasterComponent({
      target: document.body
    });

    //On svelte toast click event we call each handler registered in the JSToaster handlers list
    this.app.$on('toast-clicked', (event:CustomEvent) => {
      this.clickHandlers.forEach((handler:ToastClickHandler) => handler(event.detail));
    })
  
    this.service = jsToasterService;
  }

  /**
   * JSToaster configuration setter
   */
  public set conf(toastConf:Toast) {
    this.service.conf = toastConf;
  }

  /**
   * Send a notification
   * @param toast notification detail (string or Toast object)
   */
  toast(toast:Toast | string):number {
    let t:Toast;
    if(typeof toast === 'string') {
      t = {
        message: toast
      };
    } else {
      t = toast;
    }

    if(this.service) {
      return this.service.toast(t);
    } else {
      return 0;
    }
  }

  /**
   * Register a toast click handler
   * @param handler handler function
   */
  onClickToast(handler:ToastClickHandler):void {
    this.clickHandlers.push(handler);
  }
}

// * Module exports an instance of JToaster
export const jsToaster = new JSToaster();