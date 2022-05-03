import type { Toast, ToastHandler, ToasterConf } from './types/toast';
import JSToasterComponent from './JSToaster.svelte';
import {jsToasterService, IJSToasterService} from './services/JSToaster.service';
import { defaultToastConf } from './defaultToastConf';

/**
 * JSToaster Class
 * *Instantiates JSToaster svelte component and exposes public methods to control it
 */
class JSToaster {
  private app:JSToasterComponent | null;
  private service:IJSToasterService | null;
  //Toasts click handlers list
  private clickHandlers:ToastHandler[] = [];
  //Toasts click handlers list
  private closeHandlers:ToastHandler[] = [];
  // JSToaster configuration
  private toasterConf:ToasterConf;

  constructor() {
    this.app = new JSToasterComponent({
      target: document.body
    });

    //On svelte toast click event we call each handler registered in the JSToaster handlers list
    this.app.$on('toast-clicked', (event:CustomEvent) => {
      this.clickHandlers.forEach((handler:ToastHandler) => handler(event.detail));
    });

    //On svelte toast close event we call each handler registered in the JSToaster handlers list
    this.app.$on('toast-closed', (event:CustomEvent) => {
      this.closeHandlers.forEach((handler:ToastHandler) => handler(event.detail));
    });
  
    this.service = jsToasterService;
    this.toasterConf = defaultToastConf;
    this.service.conf = defaultToastConf;
  }

  /**
   * JSToaster configuration setter
   */
  public set conf(toasterConf:ToasterConf) {
    // Overrides JSToaster configuration
    this.toasterConf = {...this.toasterConf, ...toasterConf};
    this.service.conf = this.toasterConf;
    this.app.$set({conf: this.toasterConf})
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
  onClickToast(handler:ToastHandler):void {
    this.clickHandlers.push(handler);
  }

  /**
   * Register a toast close handler
   * @param handler handler function
   */
  onCloseToast(handler:ToastHandler):void {
    this.closeHandlers.push(handler);
  }
}

// * Module exports an instance of JToaster
export const jsToaster = new JSToaster();