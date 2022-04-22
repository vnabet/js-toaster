
import {toasts} from './JSToaster.store';

export default class JSToasterService {
  private static instance:JSToasterService | null;

  constructor() {
    if(JSToasterService.instance === null) {
      JSToasterService.instance = this;
    }
    return JSToasterService.instance;
  }

  public toast(t:any) {
    toasts.update((ts) => [...ts, t]);
  }


}