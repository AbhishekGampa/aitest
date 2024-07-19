"use client";
import addIcon from "@/Images/addIcon.svg";
import sendIcon from "@/Images/sendIcon.svg";
import Image from "next/image";
import vectorIcon from "@/Images/Vector.svg";
import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { usePromptChatMutation } from "@/rtkquery/LLMapis";

function ChatList({
  chatData,
  expertData,
}: {
  chatData: any;
  expertData: any;
}) {
  console.log("ChatList data: ", chatData);
  console.log("expertData: ", expertData);
  const textref = useRef<HTMLInputElement>(null);
  const [promptChat, { data: promtResponse }] = usePromptChatMutation();
  const [messages, setMessages] = useState<any>([]);
  console.log("promtResponse", promtResponse);

  const handleSendMessage = () => {
    let prompt = "";
    if (textref.current) {
      prompt = textref.current.value;
      textref.current.value = "";
    }
    console.log("promttt", prompt, chatData);
    const payload = {
      chat_id: `${chatData?.[0]?.id}`,
      expert_id: `${chatData[0].expert_ids[0]}`,
      files: [],
      category_id: "",
      stream: false,
      appDetails: {
        version: "1.0.0",
        addition_field: "addition_field",
      },
      messages: [
        {
          role: "user",
          content: `${prompt}`,
        },
      ],
    };
    setMessages((pre: any) => [...pre, { text: prompt, role: "user" }]);
    promptChat(payload);
  };

  return (
    <div className="flex-grow relative flex flex-col overflow-auto">
      <div className="px-10 mt-7">
        <div>
          <div className="flex flex-col">
            <div
              className="text-4xl font-normal font-display max-md:text-lg"
              style={{ color: "#455166" }}
            >
              <h1>Chat List</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow overflow-auto hide-scrollbar">
        {messages.map((message: any) => (
          <div>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <div className="px-10 py-2 absolute  left-0 bottom-0 right-0 bg-white">
        <div className="flex relative mb-2 items-center">
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
            className="absolute left-10"
          />
          <Image
            src={sendIcon}
            alt="sendIcon"
            height={40}
            width={40}
            className="absolute right-2 cursor-pointer"
            onClick={handleSendMessage}
          />
        </div>
      </div>
    </div>
  );
}

export default ChatList;
