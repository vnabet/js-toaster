declare class JSToaster {
  toast(toast: string | Toast): number;
  conf:ToasterConf;
  onClickToast(handler:ToastHandler):void
  onCloseToast(handler:ToastHandler):void
}

declare type BaseToast = {
  position?: ToastPosition;
  type?: ToastType;
  displayTime?: number; //secondes
  dark?: boolean;
}

declare type ToasterConf = BaseToast & {
  marginTop?: number;
  marginBottom?: number;
  mobilePosition?: ToastMobilePosition;
  mobileMargin?: number;
};

declare type Toast = BaseToast & {
  title?: string;
  message?: string;
  link?: string | boolean;
}

declare type ToastPosition = 'topLeft' | 'topRight' | 'bottomRight' | 'bottomLeft';
declare type ToastMobilePosition = 'top' | 'bottom';
declare type ToastType = 'info' | 'success' | 'warning' | 'danger';

declare type ToastHandler = {(id:number):void};


export const jsToaster:JSToaster;