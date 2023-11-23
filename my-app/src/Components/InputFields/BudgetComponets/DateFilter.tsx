
import React, { useState } from 'react';

interface DateFilterProps {
  onDateFilter: (date: string) => void;
}

const DateFilter: React.FC<DateFilterProps> = ({ onDateFilter }) => {
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
  };

  const handleFilterClick = () => {
    onDateFilter(selectedDate);
  };

  return (
    <div className="date-filter">
      <label htmlFor="filterDate"></label>
      <input
        type="date"
        id="filterDate"
        name="filterDate"
        value={selectedDate}
        onChange={(e) => handleDateChange(e.target.value)}
      />
      <button className='filters-btn' onClick={handleFilterClick}>
        Filter
      </button>
    </div>
  );
};

export default DateFilter;
