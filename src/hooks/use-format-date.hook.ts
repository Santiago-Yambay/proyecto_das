import { format } from "date-fns";

export function useFormatDate(date: string, toFormat: string) {
  if (date) {
    return format(new Date(date), toFormat);
  }
  return "";
}
