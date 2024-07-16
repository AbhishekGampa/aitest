import React from 'react';
import { categorie } from '../mockdata';



const SearchFilter: React.FC = () => {
  return (
    <div className="px-8 py-2 bg-white flex flex-col">
      <div className="flex space-x-4 mb-4 md:mb-0">
        {categorie.map((category, index) => (
          <div key={index} className="px-4 py-2 text-sm bg-gray-100 rounded-full">
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchFilter;

