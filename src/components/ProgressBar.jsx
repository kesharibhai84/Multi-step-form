import React from 'react';

const ProgressBar = ({ step }) => {
  const progress = (step - 1) * 33.33; // Adjust based on the number of steps

  return (
    <div className="relative mb-4 w-full">
      <div className="w-full bg-gray-200 h-2 rounded">
        <div
          className="bg-blue-600 h-2 rounded"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-6 text-sm font-semibold">
        {Math.min(progress, 100).toFixed(0)}% {/* Display the percentage */}
      </div>
    </div>
  );
};

export default ProgressBar;
