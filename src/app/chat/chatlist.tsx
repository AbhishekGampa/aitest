"use client";
import addIcon from "@/Images/addIcon.svg";
import sendIcon from "@/Images/sendIcon.svg";
import Image from "next/image";
import vectorIcon from "@/Images/Vector.svg";
import { useRef } from "react";
import { Input } from "@/components/ui/input";

function ChatList({ data }: { data: any }) {
  console.log("ChatList data: ", data);
  const textref = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    console.log(textref.current?.value);
  };
  return (
    <div className="flex-grow relative flex flex-col overflow-auto">
      <div className="px-10 mt-7">
        <div>
          <div className="flex flex-col">
            <div
              className="text-4xl font-normal font-display "
              style={{ color: "#455166" }}
            >
              <h1>Chat List</h1>
            </div>
            <div className="text-4xl font-medium font-display">
              <h1>Chat List</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow bg-red-300 overflow-auto hide-scrollbar">
        {/* <div className="h-[1000px] bg-green-300"></div> */}
        {Array(10).fill('').map(()=><div className="h-[100px] w-[100px] bg-green-300 mb-10"></div>)}
      </div>
      <div className="px-10 py-1 absolute left-0 bottom-2 right-0">
        <div className="flex relative">
          <Input
            type="text"
            className="rounded-lg relative h-12 pl-14 focus:outline-none focus:border-none focus:ring-0"
            placeholder="Ask or search for anything. Use @ to mention AI expert or / to run a task"
            style={{ backgroundColor: "#f9f9fa" }}
            ref={textref}
          />

          <Image
            src={addIcon}
            alt="addIcon"
            height={40}
            width={40}
            className="absolute"
          />
          <Image
            src={vectorIcon}
            alt="vectorIcon"
            height={2}
            width={2}
            className="absolute ml-8"
          />
          <Image
            src={sendIcon}
            alt="sendIcon"
            height={40}
            width={40}
            className="absolute right-0 cursor-pointer"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}

export default ChatList;
