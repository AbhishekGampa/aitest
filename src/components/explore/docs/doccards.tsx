import React, { useState } from "react";
import { PiDotsThreeBold } from "react-icons/pi";
import { GoArrowUpRight } from "react-icons/go";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

interface AgentCardProps {
  title: string;
  description: string;

}

const DocCard: React.FC<AgentCardProps> = ({
  title,
  description,

}) => {
    const [hovered, setHovered] = useState(false);
  return (
    <div className="bg-gray-50 p-5 h-[25vh] rounded-2xl relative transition-transform transform  hover:bg-gray-200 "
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}>
{/* <h3 className="font-bold mb-3">{tags}</h3> */}
      <h3 className="font-bold mb-3">{title}</h3>
      <p className="text-sm">{description}</p>
      <div className="absolute top-4 right-4 flex items-center space-x-6">
        <PiDotsThreeBold className="cursor-pointer text-gray-700" />
        <GoArrowUpRight className="cursor-pointer" />
      </div>
      {hovered && (
        <div className="absolute bottom-5 left-5 flex space-x-3">
          <button className=" px-3 py-1 rounded-2xl text-xs text-gray-500 border border-gray-500 flex items-center">
            <span>
              <HiOutlineChatBubbleLeftRight className="mx-1" />
            </span>
            Ask Expert
          </button>
          <button className="px-3 py-1 border border-gray-500 rounded-2xl text-gray-500 text-xs">
            Open
          </button>
        </div>
      )}
    </div>
  );
};

export default DocCard;
