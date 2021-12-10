import { useMemo, useState } from 'react';
import { getCurrentDates, getCurrentWeek, getYearMonthDate } from 'utils/date';

function useDate(date?: Date) {
  const [currentDate, setCurrentDate] = useState<Date>(date ?? new Date());
  const setNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1),
    );
  };
  const setPrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1),
    );
  };
  const { currentYear, currentMonth } = useMemo(
    () => getYearMonthDate(currentDate),
    [currentDate],
  );

  const currentWeek = useMemo(() => getCurrentWeek(currentDate), [currentDate]);

  const [currentDates, currentWeeks] = useMemo(
    () => getCurrentDates(currentYear, currentMonth),
    [currentYear, currentMonth],
  );

  return {
    currentDates,
    currentWeeks,
    currentDate,
    currentWeek,
    setNextMonth,
    setPrevMonth,
    setCurrentDate,
  };
}

export default useDate;
