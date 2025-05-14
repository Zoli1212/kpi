import React from 'react';

interface FilterComponentProps {
  name: string;
  options: string[];
}

const FilterComponent: React.FC<FilterComponentProps> = ({ name, options }) => {
  return (
    <div className="filter-component">
      <label className="block text-sm font-medium text-gray-700">{name}</label>
      <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterComponent;
