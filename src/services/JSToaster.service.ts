import { defaultToastConf } from './../defaultToastConf';
import type { Toast } from './../types/toast';
import {toasts} from '../stores/JSToaster.store';
import {get} from 'svelte/store';

export interface IJSToasterService {
  toast(t:Toast);
  conf:Toast;
}

class JSToasterService implements IJSToasterService {
  private toastConf:Toast;

  public get conf() {
    return this.toastConf;
  }

  public set conf(toastConf:Toast) {
    this.toastConf = {...this.toastConf, ...toastConf};
  }

  constructor() {
    this.toastConf = defaultToastConf;

    // window.setInterval(() => {
    //   console.log('STORE', get(toasts))
    // }, 10000)
  }

  public toast(t:Toast) {
    t.timestamp = (new Date()).getTime();
    t.id = parseInt(`${Math.round(Math.random()*1000)}${t.timestamp}`)
    t = {...this.toastConf, ...t};
    toasts.update((ts) => [...ts, t]);
  }
}

export const jsToasterService = new JSToasterService();