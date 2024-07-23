import React from "react";
import chatgpt from "../../../Images/chatgpt.svg";
import gemini from "../../../Images/gemini.svg";
import perflexity from "../../../Images/perflexity.svg";
import Image from "next/image";

interface LanguageModelModalProps {
  onClose: () => void;
  onSelect: (model: string) => void;
}

const LanguageModelModal: React.FC<LanguageModelModalProps> = ({
  onClose,
  onSelect,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[50vw] h-[85vh]">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-semibold">Language model</h2>
            <p className="text-sm text-gray-500">
              Edit your personal information
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div
            className=" p-4 rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-100 "
            onClick={() => onSelect("Open AI")}
          >
            <div >
              <Image src={chatgpt} alt="Open AI" className="w-10 h-10 mr-4" />
              <div>
                <h3 className="text-lg font-semibold py-2">Open AI</h3>
                <p className="text-xs text-gray-500 py-2">
                  Limited to 100 pages – Ask website pages for anything
                </p>
              </div>
            </div>
            <button className="text-xs py-1 mt-2 px-4 border border-gray-300 text-black rounded-full hover:bg-gray-200">
              Select
            </button>
          </div>
          <div
            className=" p-4 rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-100 "
            onClick={() => onSelect("Gemini ")}
          >
            <div >
              <Image src={gemini} alt="Open AI" className="w-10 h-10 mr-4" />
              <div>
                <h3 className="text-lg font-semibold py-2">Google Gemini</h3>
                <p className="text-xs text-gray-500 py-2">
                  Limited to 100 pages – Ask website pages for anything
                </p>
              </div>
            </div>
            <button className="text-xs py-1 mt-2 px-4 border border-gray-300 text-black rounded-full hover:bg-gray-200">
              Select
            </button>
          </div>
          <div
            className=" p-4 rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-100 "
            onClick={() => onSelect("perflexity")}
          >
            <div >
              <Image src={perflexity} alt="Open AI" className="w-10 h-10 mr-4" />
              <div>
                <h3 className="text-lg font-semibold py-2">Open AI</h3>
                <p className="text-xs text-gray-500 py-2">
                  Limited to 100 pages – Ask website pages for anything
                </p>
              </div>
            </div>
            <button className="text-xs py-1 mt-2 px-4 border border-gray-300 text-black rounded-full hover:bg-gray-200">
              Select
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs bg-gray-100 text-black rounded-3xl hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs  bg-blue-700 text-white rounded-3xl hover:bg-blue-500"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageModelModal;
