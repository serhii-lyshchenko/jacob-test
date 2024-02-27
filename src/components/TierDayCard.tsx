import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface TierDayCardProps {
  date: string;
  label: string;
  tierLevel: string;
  onClose: () => void;
}

const TierDayCard: React.FC<TierDayCardProps> = ({ date, label, tierLevel, onClose }) => {
  return (
    <div className="relative w-full max-w-xs h-60 bg-blue-800 rounded-md shadow-md">
      <div className="flex justify-between items-start px-4 pt-4">
        <div className="flex flex-col">
          <span className="text-xs font-medium uppercase text-white leading-none tracking-wider">{date}</span>
          <h2 className="text-3xl font-medium text-white leading-none mt-2">{label}</h2>
        </div>
        <button onClick={onClose} className="flex justify-center items-center w-6 h-6 bg-white rounded-full">
          {/* <FontAwesomeIcon icon={faTimes} className="text-blue-800" /> */}
          <span className="text-blue-800">X</span>
        </button>
      </div>
      <div className="absolute top-4 right-4 flex items-center justify-center w-16 h-16 bg-teal-300 shadow-md rounded-full">
        <div className="w-12 h-12 bg-blue-700 rounded-full"></div>
      </div>
      <div className="absolute top-14 right-4 w-20 h-12 bg-blue-700 rounded-md"></div>
      <div className="absolute top-28 right-4 w-20 h-9 bg-blue-700 rounded-md"></div>
      <div className="absolute top-16 right-16 w-6 h-6 bg-blue-800 rounded-full"></div>
      <div className="absolute top-30 right-16 w-6 h-6 bg-teal-300 rounded-full"></div>
      <div className="absolute top-30 right-16 w-6 h-6 bg-blue-800 rounded-full"></div>
      <div className="absolute bottom-0 w-full h-26 bg-white rounded-b-md">
        <div className="flex items-center px-4 py-4">
          <span className="text-base font-medium text-gray-900">You’re now in</span>
          <div className="ml-4 w-16 h-6 bg-purple-700 rounded-full flex justify-center items-center">
            <span className="text-xs font-medium text-white">{tierLevel}</span>
          </div>
        </div>
        <p className="px-4 text-base font-light text-gray-900">
          Your savings percentage has reset, so start saving towards your next Tier!
        </p>
      </div>
    </div>
  );
};

export default TierDayCard;