import React, { useState } from "react";
import { PiDotsThreeBold } from "react-icons/pi";
import { GoArrowUpRight } from "react-icons/go";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import Image from "next/image";

interface DocCardProps {
  title: string;
  description: string;
  tag1?: string;
  tag2?: string;
  knowledgeImg: string;
  figmaImg: string;
}

const DocCard: React.FC<DocCardProps> = ({
  title,
  description,
  tag1,
  tag2,
  knowledgeImg,
  figmaImg,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="bg-gray-50 p-5 h-[27vh] rounded-2xl relative transition-transform transform hover:bg-gray-200"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className=" flex items-center space-x-2 ">
        <div className="flex items-center border border-gray-200 px-1 rounded-100">
        {tag1 === "Knowledge Base" && (
          <>
   
            <Image src={knowledgeImg} alt="Knowledge Base" className="w-5 h-5 mr-1" />
            <span className="text-xs">{tag1}</span>
   
          </>
        )}
        </div>
        <div className="flex items-center border border-gray-200 px-1 rounded-100">
        {tag2 === "Figma" && (
          <>
            <Image src={figmaImg} alt="Figma" className="w-5 h-5 mr-1 p-1" />
            <span className="text-xs">{tag2}</span>
          </>
        )}
        </div>
      </div>
      <h3 className="font-bold mb-3 mt-2">{title}</h3>
      <p className="text-sm pt-1">{description}</p>
      <div className="absolute top-4 right-4 flex items-center space-x-6">
        <PiDotsThreeBold className="cursor-pointer text-gray-700" />
        <GoArrowUpRight className="cursor-pointer" />
      </div>
      {hovered && (
        <div className="absolute bottom-5 left-5 flex space-x-3">
          <button className="px-3 py-1 rounded-2xl text-xs text-gray-500 border border-gray-500 flex items-center">
            <HiOutlineChatBubbleLeftRight className="mx-1" />
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
