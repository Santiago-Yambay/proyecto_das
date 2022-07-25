import { toast, ToastOptions } from "react-toastify";

const notificationProps: ToastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export class NotificationsUtil {
  static showInfo(message: string): void {
    toast.info(message, notificationProps);
  }

  static showSuccess(message: string): void {
    toast.success(message, notificationProps);
  }

  static showWarning(message: string): void {
    toast.warning(message, notificationProps);
  }

  static showError(message: string): void {
    toast.error(message, notificationProps);
  }

  static clearAllQueue(): void {
    toast.dismiss();
  }
}
