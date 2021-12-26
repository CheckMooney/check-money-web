import { useMemo, useState } from 'react';
import { getCurrentDates, getYearMonthDate } from 'utils/date';

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

  const { year: currentYear, month: currentMonth } = useMemo(
    () => getYearMonthDate(currentDate),
    [currentDate],
  );

  const currentDates = useMemo(
    () => getCurrentDates(currentYear, currentMonth),
    [currentYear, currentMonth],
  );

  return {
    currentDates,
    currentDate,
    setNextMonth,
    setPrevMonth,
    setCurrentDate,
  };
}

export default useDate;
