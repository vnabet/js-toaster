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
export type ToasterConf = BaseToast & {
  marginTop?: number;
  marginBottom?: number;
  mobilePosition?: ToastMobilePosition;
  mobileMargin?: number;
};

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
 * Toast screen position on mobile
 */
export enum ToastMobilePosition {
  top = 'top',
  bottom = 'bottom'
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