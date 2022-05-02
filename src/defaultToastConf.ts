import { ToastPosition, ToastType, ToasterConf, ToastMobilePosition } from './types/toast';

export const defaultToastConf:ToasterConf = {
  position: ToastPosition.topRight,
  type: ToastType.info,
  displayTime: 20,
  dark: false,
  marginBottom: 0,
  marginTop: 0,
  // mobileMargin: 100,
  mobilePosition: ToastMobilePosition.top
}