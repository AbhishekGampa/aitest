import React from 'react';
import { FiSearch, FiFilter, FiChevronDown } from 'react-icons/fi';



const Header: React.FC = () => {
  return (
    <div className="items-center px-8 flex flex-col md:flex-row justify-between">
      <div className="flex flex-col">
        <div className="text-2xl text-gray-500 text-semibold">Explore</div>
        <div className="text-2xl">Agents</div>
        <div className="relative flex items-center mt-2">
          <FiSearch className="absolute text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search"
            className="pl-7 pr-4 py-2 text-lg border-gray-300 rounded mb-4 md:mb-0 w-[30vw]"
          />
          <button className="flex items-center px-4 py-2 translate-y-4 relative left-full rounded">
            <FiFilter className="mr-2" />
            Filter
            <FiChevronDown className="ml-1" />
          </button>
        </div>
      </div>
      <div className="flex mt-4 md:mt-0">
        <button
       
          className="w-full py-2 bg-blue-700 text-white rounded-xl hover:bg-blue-700 px-3"
        >
          + Create assistant
        </button>
      </div>
    </div>
  );
};

export default Header;
