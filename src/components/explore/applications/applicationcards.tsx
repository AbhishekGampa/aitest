"use client";

import React, { useState } from "react";
import { PiDotsThreeBold } from "react-icons/pi";
import { GoArrowUpRight } from "react-icons/go";
import ModalComponent from "./appdetails";

interface ApplicationCardProps {
  title: string;
  description: string;
  image: string;
}

const ApplicationCard: React.FC<ApplicationCardProps> = ({
  title,
  description,
  image,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-50 p-6 rounded-2xl relative transform hover:bg-gray-200 ">
      <img src={image} alt={title} className="w-12 h-12 rounded-full mb-3" />
      <h3 className="font-medium mb-2 text-lg">{title}</h3>
      <p className="text-sm font-normal">{description}</p>
      <div className="absolute top-4 right-4 flex items-center space-x-6">
        <PiDotsThreeBold className="cursor-pointer text-gray-700" />
        <GoArrowUpRight className="cursor-pointer" onClick={handleModalOpen} />
      </div>
      <button className="px-3 py-1 border border-gray-500 rounded-2xl text-gray-500 text-xs mt-10">
        Connect
      </button>
      <ModalComponent
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title={title}
        image={image}
        description={description}
        appId="API Key (2022-47-20 13:17:23)"
        secretKey="API Key (2022-47-20 13:17:23)"
        rating={4.9}
        reviewsCount={1365}
      />
    </div>
  );
};

export default ApplicationCard;
