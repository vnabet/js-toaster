import JSToasterComponent from './JSToaster.svelte';
import JSToasterService from './JSToaster.service';


export default class JSToaster {
  private static app:JSToasterComponent | null;
  private static service:JSToasterService | null;

  constructor() {
    return null;
  }

  static init() {
    if(!JSToaster.app && !JSToaster.service) {
        JSToaster.app = new JSToasterComponent({
        target: document.body
      });

      JSToaster.service = new JSToasterService();

    }
  }

  static toast(t:any) {
    // if(JSToaster.app) JSToaster.app.toast();

    if(JSToaster.service) JSToaster.service.toast(t);
  }
}