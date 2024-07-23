import Image from "next/image";
import risk from "../../Images/Avatar.svg";
import React from "react";

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

const TaskModal: React.FC<TaskModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl p-8 w-[780px] h-[630px]">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl text-gray-500">Tasks details</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-500 text-xs w-[450px] mb-4">{description}</p>
        <div className="p-3">
          <div className="mb-4 ">
            <p className="font-semibold my-2">Role</p>
            <p className="flex text-sm    items-center hover:bg-gray-200 w-[23vw] rounded-lg">
              <Image
                src={risk}
                alt="risk"
                width={25}
                height={25}
                className="p-1  "
              />
              Risk Specialist
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className=" text-sm text-gray-600 mb-3">
                Information Needed
              </h4>
              <p className="bg-gray-100 p-3 text-xs rounded-lg h-[33vh]">
                Historical incident data, industry standards, best practices
              </p>
            </div>
            <div className="text-xs">
              <h4 className="text-sm text-gray-600 mb-3 ">Task Outcome</h4>
              <div className=" h-[33vh] bg-gray-100 rounded-lg p-3">
                <p className=" rounded cursor-pointer pb-1">
                  Link to documentation{" "}
                </p>
                <p className=" rounded cursor-pointer">
                  Link to documentation{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <button
              onClick={onClose}
              className="bg-gray-100
           hover:bg-gray-300 text-gray-700 py-2 px-4 text-sm rounded-full"
            >
              Cancel
            </button>
            <div>
            <button
            
              className="bg-gray-100
           hover:bg-gray-300 text-gray-700 py-2 px-4 text-xs rounded-full mr-3"
            >
              As AI Expert
            </button>
            <button
              className="bg-blue-600 hover:bg-blue-800
           text-white py-2 px-4 rounded-full text-xs"
            >
              Run task
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
