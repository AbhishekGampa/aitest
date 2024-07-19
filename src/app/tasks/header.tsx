import React from 'react';
import { FiSearch} from 'react-icons/fi';

const Header: React.FC = () => {
  return (
    <div className="items-center px-8 flex flex-col md:flex-row  justify-between">
      <div className="flex flex-col">
        <div className="heading text-2xl text-gray-600">Streamline Your Workflow</div>
        <div className="text-2xl font-bold mb-2">Task Automation Hub</div>
        <div className="relative flex items-center my-3">
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
