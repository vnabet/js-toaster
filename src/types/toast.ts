/**
 * Base type for Toast & Config
 */
export type BaseToast = {
  position?: ToastPosition;
  type?: ToastType;
  displayTime?: number; // seconds. 0 if there is no end
  dark?: boolean;
}

/**
 * Configuration type definition
 */
export type ToasterConf = BaseToast;

/**
 * Toast (notification) type definition
 */
export type Toast = BaseToast & {
  id?:number;
  title?: string;
  message?: string;
  timestamp?:number;
  link?: string | boolean;
  //TODO soundUrl
  //TODO click event on toast
  //TODO Image ?
}

/**
 * Toast screen position
 */
export enum ToastPosition {
  topLeft = 'topLeft',
  topRight =  'topRight',
  bottomRight = 'bottomRight',
  bottomLeft = 'bottomLeft'
}

/**
 * Toast type (defines the css Toast color)
 */
export enum ToastType {
  info = 'info',
  success = 'success',
  warning = 'warning',
  danger = 'danger'
}

export type ToastHandler = {(id:number):void};