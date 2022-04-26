declare class JSToaster {
  toast(toast: string | Toast): void;
  conf:Toast;
}

declare type BaseToast = {
  position?: ToastPosition;
  type?: ToastType;
  displayTime?: number; //secondes
  dark?: boolean;
}

declare type ToasterConf = BaseToast;

declare type Toast = BaseToast & {
  id?:number;
  title?: string;
  message?: string;
  timestamp?:number;
  link?: string;
}

declare type ToastPosition = 'topLeft' | 'topRight' | 'bottomRight' | 'bottomLeft';
declare type ToastType = 'info' | 'success' | 'warning' | 'danger';


export const jsToaster:JSToaster;