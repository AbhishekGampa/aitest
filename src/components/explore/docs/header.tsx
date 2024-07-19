import React from 'react';
import { FiSearch} from 'react-icons/fi';

const Header: React.FC = () => {
  return (
    <div className="items-center px-8 flex flex-col md:flex-row h-[30vh] justify-between">
      <div className="flex flex-col">
        <div className="heading">Explore</div>
        <div className="text-3xl">Documentation & knowledge Base</div>
        <div className="relative flex items-center mt-2">
          <FiSearch className="absolute text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search"
            className="pl-7 pr-4 py-2 text-lg border-gray-300 rounded mb-4 md:mb-0 w-[30vw]"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
