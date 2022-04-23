import { Toast, ToastPosition, ToastType } from './types/toast';

export const defaultToastConf:Toast = {
  position: ToastPosition.topRight,
  type: ToastType.info,
  displayTime: 20
}