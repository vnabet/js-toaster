/**
 * Base for Toast & Config
 */
export type BaseToast = {
  position?: ToastPosition;
  type?: ToastType;
  displayTime?: number; //secondes
  dark?: boolean;
}

/**
 * Configuration definition
 */
export type ToasterConf = BaseToast;

/**
 * Toast definition
 */
export type Toast = BaseToast & {
  id?:number;
  title?: string;
  message?: string;
  timestamp?:number;
  link?: string;
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
 * Toast type defines the css Toast color
 */
export enum ToastType {
  info = 'info',
  success = 'success',
  warning = 'warning',
  danger = 'danger'
}