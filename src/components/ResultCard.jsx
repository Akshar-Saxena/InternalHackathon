import React from 'react';

const ResultCard = ({ title, description, result }) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="flex justify-center text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="text-xl font-bold text-blue-500">{result}</div>
    </div>
  );
};

export default ResultCard;