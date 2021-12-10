import { WEEK_DAYS } from 'constants/date';

export function dateToString(date: Date, format: string): string {
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const dateString = format
    .replace('yyyy', year)
    .replace('mm', month)
    .replace('dd', day)
    .replace('D', WEEK_DAYS[date.getDay()]);
  return dateString;
}

export function compareDate(date1: Date, date2: Date): boolean {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}

export function getYearMonthDate(date: Date) {
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;
  const currentDay = date.getDate();
  return { currentYear, currentMonth, currentDay };
}

export function getCurrentWeek(date: Date) {
  const { currentYear, currentMonth, currentDay } = getYearMonthDate(date);
  const monthStartDay = new Date(currentYear, currentMonth - 1, 1).getDay();
  const currentWeek = Math.floor((currentDay + monthStartDay - 1) / 7);
  return currentWeek;
}

export function getCurrentDates(currentYear: number, currentMonth: number) {
  const monthStart = new Date(currentYear, currentMonth - 1, 1);
  const monthEnd = new Date(currentYear, currentMonth, 0);

  const currentDates: Date[] = Array.from(
    {
      length: monthEnd.getDate(),
    },
    (_, i) => new Date(currentYear, currentMonth - 1, i + 1),
  );

  const weekStartDate = 1 - monthStart.getDay();
  const currentWeeksLength =
    monthStart.getDay() + monthEnd.getDate() > 35 ? 42 : 35;

  const currentWeeks = Array.from(
    { length: currentWeeksLength },
    (_, i) => new Date(currentYear, currentMonth - 1, weekStartDate + i),
  );
  return [currentDates, currentWeeks];
}
