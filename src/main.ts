import type { Toast } from './types/toast';
import JSToasterComponent from './JSToaster.svelte';
import {jsToasterService, IJSToasterService} from './services/JSToaster.service';

class JSToaster {
  private app:JSToasterComponent | null;
  private service:IJSToasterService | null;

  constructor() {
    this.app = new JSToasterComponent({
      target: document.body
    });

    this.service = jsToasterService;
  }

  toast(toast:Toast | string) {
    let t:Toast;
    if(typeof toast === 'string') {
      t = {
        content : toast
      };
    } else {
      t = toast;
    }
    // if(JSToaster.app) JSToaster.app.toast();

    if(this.service) this.service.toast(t);
  }

}

export const jsToaster = new JSToaster();