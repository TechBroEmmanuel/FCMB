import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="h-64 w-64 rounded-md overflow-hidden shadow-lg bg-yellow-400">
      <div className="px-6 py-4 h-full">
        <div className="font-bold text-2xl mb-2 text-white">{title}</div>
        <p className="text-gray-700 text-lg">{description}</p>
      </div>
    </div>
  );
};

export default Card;
