const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

export const getMonth = (date: Date) => MONTHS[date.getMonth()];

/**
 *
 * Return a label for a Date object
 */

const createDateLabel = (date: Date) => {
  let day: string | number = date.getDate();

  if (day < 10) day = `0${day}`; //Ex. 9 --> 09

  return `${day} ${getMonth(date)}, ${date.getFullYear()}`; // Ex. 01 Nov, 2021
};

/**
 *
 * Return an ideal parsed date for the UI
 * @example
 * "01 Nov, 2021 to 15 Jan, 2022"
 * "01 Nov, 2021 to Present"
 */

export const parseDates = (from: string, to?: string) => {
  const fromLabel = createDateLabel(new Date(from));
  const toLabel = to ? createDateLabel(new Date(to)) : "Present";

  return `${fromLabel} to ${toLabel}`;
};
