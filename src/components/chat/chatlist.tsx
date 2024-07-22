"use client";
import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { usePromptChatMutation } from "@/store/api/LLM";
import ChatBottom from "./chatbottom";

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

  useEffect(() => {
    // socket.connect();
    // console.log("INSIDE_SOCKET");
    // socket.on("6637b454c268f891f62b7c39", (msg: any) => {
    //   console.log("msg", msg);
    // });

    // return () => {
    //   socket.disconnect();
    // }
  }, []);
  
  return (
    <div className="flex-grow relative flex flex-col overflow-auto">
      <div className="pl-7 mt-7">
        <div>
          <div className="flex flex-col h-full">
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
          <div key={message}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <div className="px-10 py-2 absolute  left-0 bottom-0 right-0 bg-white">
        <ChatBottom textref={textref} handleSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default ChatList;
