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
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return { year, month, day };
}

export function getCurrentDates(currentYear: number, currentMonth: number) {
  const monthEnd = new Date(currentYear, currentMonth, 0);

  const currentDates: Date[] = Array.from(
    {
      length: monthEnd.getDate(),
    },
    (_, i) => new Date(currentYear, currentMonth - 1, i + 1),
  );

  return currentDates;
}

export function getPrevDays(date: Date, prev: number) {
  const { year, month, day } = getYearMonthDate(date);
  const prevDays = [];
  for (let i = 1; i <= prev; i++) {
    prevDays.push(
      dateToString(new Date(year, month - 1, day - prev + i), 'yyyy-mm-dd'),
    );
  }
  return prevDays;
}

export function getPrevMonth(date: Date, prev: number) {
  const prevMonths = [];
  const { year, month } = getYearMonthDate(date);
  for (let i = 0; i < prev; i++) {
    prevMonths.push(dateToString(new Date(year, month - prev + i), 'yyyy-mm'));
  }
  return prevMonths;
}
