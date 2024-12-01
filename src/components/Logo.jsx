import React from 'react';

function Logo({ width = '100px' }) {
  return (
    <div
      className="flex items-center justify-center font-bold text-white uppercase tracking-wide bg-gradient-to-r from-blue-400 to-indigo-500 py-2 px- rounded-full shadow-xl transform transition duration-300 hover:scale-110"
      style={{width: width}}
    >
      BlogAPP
    </div>
  );
}

export default Logo;
