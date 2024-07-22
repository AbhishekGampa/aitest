"use client";
import React, { useState, useEffect } from "react";
import { FiSearch, FiFilter, FiChevronDown } from "react-icons/fi";
import CreateAssistantModal from "./createassistant";

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="items-center flex flex-col md:flex-row justify-between">
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
        </div>
      </div>
      <div className="flex mt-4 md:mt-0">
        <button
          onClick={handleOpenModal}
          className="w-full py-1 bg-blue-700 text-white rounded-full hover:bg-blue-700 px-3 text-sm"
        >
          + Create assistant
        </button>
      </div>
      {isModalOpen && <CreateAssistantModal onClose={handleCloseModal} />}
    </div>
  );
};

export default Header;
