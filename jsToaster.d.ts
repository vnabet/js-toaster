declare class JSToaster {
  toast(toast: string | Toast): number;
  conf:Toast;
  onClickToast(handler:ToastClickHandler):void
}

declare type BaseToast = {
  position?: ToastPosition;
  type?: ToastType;
  displayTime?: number; //secondes
  dark?: boolean;
}

declare type ToasterConf = BaseToast;

declare type Toast = BaseToast & {
  title?: string;
  message?: string;
  link?: string | boolean;
}

declare type ToastPosition = 'topLeft' | 'topRight' | 'bottomRight' | 'bottomLeft';
declare type ToastType = 'info' | 'success' | 'warning' | 'danger';

declare type ToastClickHandler = {(id:number):void};


export const jsToaster:JSToaster;