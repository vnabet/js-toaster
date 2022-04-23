/**
 * Toast definition
 */
export type Toast = {
  id?:number;
  title?: string;
  message?: string;
  timestamp?:number;
  link?: string;
  position?: ToastPosition;
  type?: ToastType;
  displayTime?: number; //secondes
  dark?: boolean;
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