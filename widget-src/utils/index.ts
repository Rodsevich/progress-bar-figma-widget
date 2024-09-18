import { makeRgbParams } from "../types/index";

export const generateUniqueId = (): string => {
  const timestamp = new Date().getTime();
  const random = Math.floor(Math.random() * 1000); // Adjust the range as needed
  return `${timestamp}-${random}`;
};

export const dateNow = (): string => {
  const date = new Date();
  const daysInSpanish: Array<string> = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const day: string = daysInSpanish[date.getDay()];

  return `${day}/${date.getDate()}`;
};

export function rgbToHex(int: number) {
  let hex = Number(int).toString(16);
  if (hex.length < 2) {
    hex = `0${hex}`;
  }
  return hex;
}

export function makeHex(r: number, g: number, b: number) {
  const red = rgbToHex(r);
  const green = rgbToHex(g);
  const blue = rgbToHex(b);
  return `#${red}${green}${blue}`;
}

export function makeRgb(color: makeRgbParams) {
  const r = Math.round(255 * color.r);
  const g = Math.round(255 * color.g);
  const b = Math.round(255 * color.b);
  // TODO * 100 and round
  const a = Math.round(100 * color.a) / 100;
  return { r, g, b, a };
}
export function generateDate(): string {
  const date: Date = new Date();

  // Obtener el día de la semana
  const diasSemana: string[] = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const diaSemana: string = diasSemana[date.getDay()];

  // Obtener el día, mes y año en el formato deseado
  const dia: number = date.getDate();
  const mes: number = date.getMonth() + 1; // Los meses están basados en cero
  const anio: string = date.getFullYear().toString().slice(-2); // Obtener los últimos dos dígitos del año

  // Formatear el resultado final
  const fechaFormateada: string = `${diaSemana} ${dia}/${mes} '${anio}`;

  return fechaFormateada;
};

export function capitalizeFirstLetter(name: string) {
  if (!name) return name;
  return name.charAt(0).toUpperCase() + name.slice(1).toLocaleLowerCase();
};