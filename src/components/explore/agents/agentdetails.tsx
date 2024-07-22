import Image from 'next/image';
import React, { useState } from 'react';
import globe from '../../../Images/Globe1.svg';
import link from '../../../Images/Link.svg';
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  agent: {
    title: string;
    description: string;
    image: string;
  } | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, agent }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  if (!isOpen || !agent) return null;

  const toggleEnabled = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-xl  h-[80vh] relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 text-2xl">&times;</button>
        <div className="flex items-center mb-2">
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_URL + agent.image}`}
            alt={agent.title}
            className="w-14 h-14 rounded-full mr-4"
          />
          <div>
            <h2 className="text-2xl text-gray-500 font-normal">About</h2>
            <p className="text-2xl font-semibold">{agent.title}</p>
          </div>
        </div>
        <h3 className="text-sm">{agent.description}</h3>
        <div className="h-[50vh] w-[40vw] p-6 text-sm">
          <h6 className="pb-3">Description</h6>
          <div className="flex text-xs">
            <div className='flex'>
              <Image className='w-4 h-4 mr-2' alt='globe' src={globe}/>
            <p className=" mr-6"> Without internet access</p>
            </div>
            <div className='flex'>
            <Image className='w-4 h-4 mr-2' alt='globe' src={link}/>
               <p > Created by Zysec</p>
               </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={toggleEnabled} className="flex items-center">
            <span>{isEnabled ? 'Enabled' : 'Disabled'}</span>
              <div className={`w-11 h-6 rounded-full ${isEnabled ? 'bg-black' : 'bg-gray-200'} relative ml-2`}>
                <div
                  className={`h-5 w-5 rounded-full bg-white absolute top-[2px] -left-[2px] transition-transform ${
                    isEnabled ? 'transform translate-x-6' : 'transform translate-x-0'
                  }`}
                />
              </div>
            
            </button>
          </div>
          <div>
            <button className="px-4 py-2 bg-gray-100 rounded-full mr-2 text-sm">Details</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm">Start chat</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
