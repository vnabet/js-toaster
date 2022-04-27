import type { Toast } from './types/toast';
import JSToasterComponent from './JSToaster.svelte';
import {jsToasterService, IJSToasterService} from './services/JSToaster.service';

/**
 * JSToaster Class
 * *Instantiates JSToaster svelte component and exposes public methods to control it
 */
class JSToaster {
  private app:JSToasterComponent | null;
  private service:IJSToasterService | null;

  constructor() {
    this.app = new JSToasterComponent({
      target: document.body
    });
  
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
  toast(toast:Toast | string) {
    let t:Toast;
    if(typeof toast === 'string') {
      t = {
        message: toast
      };
    } else {
      t = toast;
    }

    if(this.service) this.service.toast(t);
  }

}

// * Module exports an instance of JToaster
export const jsToaster = new JSToaster();