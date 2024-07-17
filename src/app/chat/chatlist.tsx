"use client";
import { Input } from "@/components/ui/input";
import addIcon from "@/Images/addIcon.svg";
import sendIcon from "@/Images/sendIcon.svg";
import Image from "next/image";
import vectorIcon from "@/Images/Vector.svg";
import { useRef } from "react";

function ChatList({ data }: { data: any }) {
  console.log("ChatList data: ", data);
  const textref = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    console.log(textref.current?.value);
  };
  return (
    <>
      <div className="px-10 mt-7 h-[70%]">
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
      <div className="px-10">
        <div className="flex items-center">
          <Input
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
            className="absolute right-12 cursor-pointer"
            onClick={handleClick}
          />
        </div>
      </div>
    </>
  );
}

export default ChatList;
