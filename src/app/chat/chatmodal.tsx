import { useGetExpertsQuery } from "@/rtkquery/chatapis";
import Image from "next/image";
import Link from "next/link";
import { forwardRef, ForwardRefRenderFunction, useEffect, useState } from "react";
import closeButton from "../../Images/closeButton.svg";

type ChatModalProps = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  onModalChange: (isOpen: boolean) => void;
};

const ChatModal = forwardRef<HTMLDivElement, ChatModalProps>(
  ({ setShowModal, onModalChange }) => {
  const { data } = useGetExpertsQuery({}); 
  const handleClick = (event:any) => {
    event.stopPropagation();
    setShowModal(false);
    onModalChange(false);
  };


  return (
    <>
      <div  className="absolute top-1 left-5 mt-1 bg-white shadow-md rounded-lg p-5 z-10 w-[350px] h-screen overflow-scroll hide-scrollbar" style={{height: 'calc(100vh - 1.2rem)' }}>
        <div className="flex flex-col items-start gap-3 self-stretch">
          <div className="flex flex-row justify-between w-full items-center">
            <div
              className="rounded-full border flex flex-row"
              style={{
                borderColor: "var(--button-secondary-stroke, #758399)",
              }}
            >
              <div className="py-1 px-3 text-sm">Manage AI Experts</div>
            </div>
            <div>
                <Image src={closeButton} width={30} height={30} alt="closeButton" className="cursor-pointer" onClick={handleClick}/>
                </div>
          </div>
          <div>
            <h5 className="text-xs font-normal leading-tight custom-font-family custom-letter-spacing text-custom-color">
              Select AI Expert
            </h5>
          </div>
          {data?.map((item: any) => (
            <div className="flex justify-between items-center">
              <div className="flex flex-row w-[300px] py-1 items-center gap-2 self-stretch hover:backdrop-blur-md hover:bg-gray-200 rounded-lg " style={{padding:"12px"}}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL + item.avatar}`}
                  alt={`${item.expert_name}`}
                  className="rounded-full"
                  width={30}
                  height={30}
                />
                <Link href={`/chat/${item.id}`}>
                  <h5 onClick={(event) => handleClick(event)}>
                    {item.expert_name}
                  </h5>
                </Link>
              </div>
              <div className=" text-text-secondary overflow-hidden text-right truncate font-custom text-sm font-normal leading-tight tracking-tight-custom text-custom-secondary">
                {item.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
})

export default ChatModal;
