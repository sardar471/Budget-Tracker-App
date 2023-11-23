

import React from 'react';

interface DatePickerProps {
  selectedDate: string;
  handleDateChange: (date: string) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ selectedDate, handleDateChange }) => {
  return (
    <input className='Date-input'
      type="date"
      value={selectedDate}
    
      onChange={(e) => handleDateChange(e.target.value)}
    />
  );
};

export default DatePicker;
