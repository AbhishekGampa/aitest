"use client";
import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import risk from "../../Images/Image-serface.png";
import Image from "next/image";
import TaskModal from "./taskmodal";


interface TaskCardProps {
  title: string;
  description: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, description }) => {
  const [hovered, setHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="bg-gray-100 p-6 h-[40vh] w-[25vw] rounded-2xl  transition-transform transform hover:bg-gray-200"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex items-center space-x-6 justify-between">
          <div className="text-xs flex justify-center items-center border border-gray-200 rounded-full ">
            <Image src={risk} alt="risk" width={25} height={25} className="p-1" />
            <p className="pr-1">Risk Specialist</p>
          </div>
          <GoArrowUpRight className="cursor-pointer" onClick={() => setIsModalOpen(true)} />
        </div>
        <h3 className="font-bold my-2">{title}</h3>
        {hovered && (
          <div className="absolute bottom-5">
            <div className="text-xs text-gray-600 py-2">
              <p>{description}</p>
            </div>
            <button className="p-2 rounded-2xl text-xs text-gray-500 border border-gray-500 flex items-center">
              Run Task
            </button>
          </div>
        )}
      </div>
      <TaskModal
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={title}
        description={description} 
      />
    </>
  );
};

export default TaskCard;
