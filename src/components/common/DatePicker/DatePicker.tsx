import React, { forwardRef } from 'react';
import { DatePickerInput, DatePickerWrapper } from './DatePicker.style';

interface DatePickerProps {
  id?: string;
  handleChange?: (date: Date) => void;
  children: React.ReactNode;
}

const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  ({ children, handleChange, ...inputProps }, ref) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      handleChange && handleChange(new Date(e.target.value));
    };

    return (
      <DatePickerWrapper>
        {children}
        <DatePickerInput
          onChange={onChange}
          {...inputProps}
          type="date"
          min="2020-01-01"
          ref={ref}
        />
      </DatePickerWrapper>
    );
  },
);

export default DatePicker;
