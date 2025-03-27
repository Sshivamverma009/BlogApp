import React, { useId, forwardRef } from "react";

const Select = forwardRef(({ options, label, className = "", ...props }, ref) => {
  const id = useId();

  return (
    <div className="w-full">
      {/* Label */}
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label}
        </label>
      )}

      {/* Select Dropdown */}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 w-full 
          focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition duration-200 hover:bg-gray-50 dark:hover:bg-gray-700 ${className}`}
      >
        {options?.map((option) => (
          <option key={option} value={option} className="text-black">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
});

export default Select;
