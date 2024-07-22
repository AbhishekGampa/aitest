"use client";
import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { usePromptChatMutation } from "@/store/api/LLM";
import ChatBottom from "./chatbottom";
import { socket } from "./chatsocket";
import Image from "next/image";

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
  console.log("messages: ", messages);
  // const [socketMessage, setSocketMessage] = useState<any>([]);
  // console.log('socketMessage: ', socketMessage);
  const messageParts = useRef<string[]>([]);
  console.log("promtResponse", promtResponse);

  const handleSendMessage = () => {
    let prompt = "";
    if (textref.current) {
      prompt = textref.current.value;
      textref.current.value = "";
    }
    console.log("chatList chatData:", chatData[0]?.id);
    const payload = {
      chat_id: `${chatData?.[0]?.id}`,
      expert_id: `${chatData[0]?.expert_ids[0]}`,
      files: [],
      category_id: "",
      stream: true,
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
    setMessages((prevMessages: any) => [
      ...prevMessages,
      { text: prompt, role: "user" },
    ]);
    promptChat(payload);
  };

  useEffect(() => {
    socket.connect();
    console.log("INSIDE_SOCKET");

    const onMessageReceived = (msg: any) => {
      console.log("msg: ", msg);
      if (!messageParts.current.includes(msg)) {
        messageParts.current.push(msg);
        if (msg.endsWith(".")) {
          const fullMessage = messageParts.current.join(" ");

          setMessages((prevMessages) => {
            const lastMessage = prevMessages[prevMessages.length - 1];
            console.log("lastMessage: ", lastMessage);
            if (lastMessage && lastMessage.text === fullMessage) {
              return prevMessages;
            }

            if (lastMessage && lastMessage.role === "expert") {
              // Assuming messages is an array of objects, this part might need adjustment based on actual data structure
              return [
                ...prevMessages.slice(0, -1),
                { ...lastMessage, text: `${lastMessage.text} ${fullMessage}` },
              ];
            } else {
              return [...prevMessages, { text: fullMessage, role: "expert" }];
            }
          });
          messageParts.current = [];
        }
      }
    };

    socket.on("6637b454c268f891f62b7c39", onMessageReceived);

    return () => {
      socket.off("6637b454c268f891f62b7c39", onMessageReceived);
      socket.disconnect();
    };
  }, [promtResponse]);

  return (
    <div
      className="flex-grow relative flex flex-col"
      style={{ height: "calc(100vh - 10rem)" }}
    >
      <div className=" flex flex-col overflow-scroll gap-3 pr-10 pl-7 pb-32  mt-7">
        {messages?.map((item: any, i: any) => (
          <div key={i} className="flex flex-col gap-9">
            {item.role === "user" ? (
              <div className="flex justify-end">
                <div className="w-max">
                  <div
                    key={item.id} 
                    className="flex-grow overflow-auto hide-scrollbar flex rounded-radius-100 bg-gray-100 w-max p-3"
                    style={{ justifyContent: "end" }}
                  >
                    <div>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
            {item.role === "expert" ? (
              <div className="flex flex-col">
                <div>
                  <div className="flex flex-row gap-3">
                    <div className="flex gap-3 items-center">
                      <Image
                        src={`${
                          process.env.NEXT_PUBLIC_BASE_URL + expertData?.avatar
                        }`}
                        alt={`${expertData?.expert_name}`}
                        className="rounded-full"
                        width={15}
                        height={15}
                      />
                      <div className="text-xs font-normal leading-tight custom-font-family custom-letter-spacing text-custom-color">
                        {expertData?.expert_name}
                      </div>
                    </div>
                  </div>
                    <div  className="flex flex-col gap-2 messages">
                      <div className="pl-7">
                        <p  className="message whitespace-pre-wrap">{item.text}</p>
                      </div>
                    </div>
                </div>
              </div>
            ) : null}
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
