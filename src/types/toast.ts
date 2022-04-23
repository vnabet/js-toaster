/**
 * Toast definition
 */
export type Toast = {
  title?: string;
  content: string;
  timestamp?:number;
  link?: string;
  position?: ToastPosition;
  type?: ToastType;
  displayTime?: number; //secondes
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
  bottomLeft = 'botomLeft'
}

/**
 * Toast type defines the css Toast color
 */
export enum ToastType {
  info = 'info',
  success = 'success',
  warning = 'warning',
  error = 'error'
}