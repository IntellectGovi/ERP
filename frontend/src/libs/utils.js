import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {toast} from "react-toastify"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const notify = (message, type = "success") => {
  if (type === "success") {
    toast.success(message, { autoClose: 3000 });
  } else if (type === "warn") {
    toast.warn(message, { autoClose: 3000 });
  } else if (type === "error") {
    toast.error(message, { autoClose: 3000 });
  }
};
