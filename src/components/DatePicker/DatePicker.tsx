import { useDate } from 'hooks/useDate';
import React, { useState } from 'react';
import {
  IoCalendarClearOutline,
  IoChevronBackOutline,
  IoChevronForwardOutline,
} from 'react-icons/io5';
import {
  DatePickerWrapper,
  DatePickerButton,
  CalendarActionWrapper,
  CalendarBody,
  CalendarHeaderWrapper,
  CalendarWrapper,
  Day,
  DayOfWeek,
} from './DatePicker.styles';

interface DatePickerProps {
  startDate: Date;
  onChange: (date: Date) => void;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  startDate,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { dates, currentDate, setPrevMonth, setNextMonth } = useDate(startDate);
  const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

  const compareDate = (date1: Date, date2: Date) => {
    return (
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };
  const handleChange = (date: Date) => {
    onChange(date);
    setIsOpen(false);
  };

  return (
    <DatePickerWrapper>
      <DatePickerButton type="button" onClick={() => setIsOpen(!isOpen)}>
        <span>
          {startDate.getMonth() + 1}월 {startDate.getDate()}일
        </span>
        <IoCalendarClearOutline size={16} />
      </DatePickerButton>
      {isOpen && (
        <CalendarWrapper>
          <CalendarHeaderWrapper>
            <span>
              {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
            </span>
            <CalendarActionWrapper>
              <button onClick={() => setPrevMonth()}>
                <IoChevronBackOutline />
              </button>
              <button onClick={() => setNextMonth()}>
                <IoChevronForwardOutline />
              </button>
            </CalendarActionWrapper>
          </CalendarHeaderWrapper>
          <CalendarBody>
            {dayOfWeek.map((item) => (
              <DayOfWeek className="day-of-week" key={item}>
                {item}
              </DayOfWeek>
            ))}
            {dates.map((date, index) => (
              <Day
                key={index}
                isActive={date ? compareDate(date, startDate) : false}
                onClick={date && (() => handleChange(date))}
                disabled={!date}
              >
                {date ? date.getDate() : ''}
              </Day>
            ))}
          </CalendarBody>
        </CalendarWrapper>
      )}
    </DatePickerWrapper>
  );
};
