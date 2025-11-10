import {
  format,
  formatDistanceToNow as dateFnsFormatDistanceToNow,
} from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDatetime(rawDate: string): string {
  const date = new Date(rawDate);

  return format(date, "dd/MM/yyyy HH:mm", { locale: ptBR });
}

export function formatDistanceToNow(rawDate: string): string {
  const date = new Date(rawDate);

  return dateFnsFormatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: false,
  });
}
const rawDate = "2024-06-15T12:34:56Z";
console.log(rawDate);
