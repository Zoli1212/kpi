import React from 'react';

interface FilterComponentProps {
  name: string;
  options: string[];
  className?: string;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ name, options, className = '' }) => {
  return (
    <div className={`filter-component border border-gray-200 rounded ${className}`}>
      <label className="block text-sm font-medium text-gray-700">{name}</label>
      <select className="mt-1 block w-full pl-3 pr-10 py-1 text-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded">
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterComponent;
