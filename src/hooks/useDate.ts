import { useState } from 'react';

export const useDate = (date: Date) => {
  const [currentDate, setCurrentDate] = useState<Date>(date);
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  const prevLast = new Date(currentYear, currentMonth - 1, 0);
  const currentLast = new Date(currentYear, currentMonth, 0);

  const prevLastDay = prevLast.getDay();

  const currentLastDate = currentLast.getDate();
  const currentLastDay = currentLast.getDay();

  let prevDates = [];
  if (prevLastDay !== 6) {
    prevDates = new Array(prevLastDay + 1).fill(null);
  }

  const currentDates = Array.from(
    Array(currentLastDate),
    (_, i) => new Date(currentYear, currentMonth - 1, i + 1),
  );
  const nextDates = new Array(6 - currentLastDay).fill(null);

  const dates = prevDates.concat(currentDates, nextDates);

  const setPrevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 0));
  };

  const setNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 0));
  };

  const setCurrentMonth = () => {
    setCurrentDate(new Date());
  };

  return { dates, currentDate, setPrevMonth, setNextMonth, setCurrentMonth };
};
