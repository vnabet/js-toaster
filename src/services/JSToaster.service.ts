import { defaultToastConf } from './../defaultToastConf';
import type { Toast } from './../types/toast';
import {toasts} from '../stores/JSToaster.store';
import { defaultToastConf } from '../defaultToastConf';

export interface IJSToasterService {
  toast(t:Toast);
}

class JSToasterService implements IJSToasterService {
  //private static instance:JSToasterService | null;

  private toastConf:Toast;

  constructor() {
    this.toastConf = defaultToastConf;
    // if(JSToasterService.instance === null) {
    //   JSToasterService.instance = this;
    // }
    // return JSToasterService.instance;
  }

  public toast(t:Toast) {
    t.timestamp = (new Date()).getTime();
    t = {...this.toastConf, ...t};
    toasts.update((ts) => [...ts, t]);
  }
}

export const jsToasterService = new JSToasterService();