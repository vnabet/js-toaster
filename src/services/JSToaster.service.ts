import type { Toast } from './../types/toast';
import {toasts} from '../stores/JSToaster.store';

export default class JSToasterService {
  private static instance:JSToasterService | null;

  constructor() {
    if(JSToasterService.instance === null) {
      JSToasterService.instance = this;
    }
    return JSToasterService.instance;
  }

  public toast(t:Toast) {
    t.timestamp = (new Date()).getTime();
    toasts.update((ts) => [...ts, t]);
  }


}