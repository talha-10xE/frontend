
import React from 'react';

interface ProgressBarProps {
  catPercentage: number;
  dogPercentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ catPercentage, dogPercentage }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-10 dark:bg-gray-700 shadow-inner overflow-hidden flex">
      <div
        className="bg-[#8e44ad] h-10 text-xs font-medium text-purple-100 text-center p-2 leading-none rounded-l-full flex items-center justify-center transition-all duration-500 ease-out"
        style={{ width: `${catPercentage}%` }}
      >
        {catPercentage > 10 && `🐱 ${catPercentage.toFixed(1)}%`}
      </div>
      <div
        className="bg-[#e67e22] h-10 text-xs font-medium text-orange-100 text-center p-2 leading-none rounded-r-full flex items-center justify-center transition-all duration-500 ease-out"
        style={{ width: `${dogPercentage}%` }}
      >
        {dogPercentage > 10 && `${dogPercentage.toFixed(1)}% 🐶`}
      </div>
    </div>
  );
};

export default ProgressBar;
