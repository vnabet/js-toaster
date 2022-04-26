import { ToastPosition, ToastType, ToasterConf } from './types/toast';

export const defaultToastConf:ToasterConf = {
  position: ToastPosition.topRight,
  type: ToastType.info,
  displayTime: 20,
  dark: false
}