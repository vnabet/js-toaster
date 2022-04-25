declare class JSToaster {
  toast(toast: string | Toast): void;
  conf:Toast;
}

declare type Toast = {
  id?:number;
  title?: string;
  message?: string;
  timestamp?:number;
  link?: string;
  position?: ToastPosition;
  type?: ToastType;
  displayTime?: number; //secondes
  dark?: boolean;
}

declare enum ToastPosition {
  topLeft = 'topLeft',
  topRight =  'topRight',
  bottomRight = 'bottomRight',
  bottomLeft = 'bottomLeft'
}

declare enum ToastType {
  info = 'info',
  success = 'success',
  warning = 'warning',
  danger = 'danger'
}

export const jsToaster:JSToaster;