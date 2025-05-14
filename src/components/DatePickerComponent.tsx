import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="date-picker-component">
      <label className="block text-sm font-medium text-gray-700">Select Date</label>
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      />
    </div>
  );
};

export default DatePickerComponent;
