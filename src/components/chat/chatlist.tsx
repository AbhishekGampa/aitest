"use client";
import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  useGetMessagesByChatIdQuery,
  usePromptChatMutation,
} from "@/store/api/LLM";
import ChatBottom from "./chatbottom";
import { socket } from "./chatsocket";
import Image from "next/image";
import ChatHistory from "./chathistory";

function ChatList({
  chatData,
  expertData,
}: {
  chatData: any;
  expertData: any;
}) {
  const textref = useRef<HTMLInputElement>(null);
  const [promptChat, { data: promtResponse, isSuccess, isError }] =
    usePromptChatMutation();
  const [messages, setMessages] = useState<any>([]);
  const [socketResponse, setSocketResponse] = useState<boolean>(false);
  const [socketMessage, setSocketMessage] = useState<string[]>([]);
  console.log("messages: ", messages);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  // const messageParts = useRef<string[]>([]);
  const { data } = useGetMessagesByChatIdQuery(chatData?.[0]?.id);

  useEffect(() => {
    if (data) {
      console.log("chathistory data:", data);
      const messages = data?.flatMap((msg: any) => {
        const userPrompt = {
          text: msg.user_prompt,
          role: "user",
        };

        const expertMessage = {
          text: msg.response[0].choices[0].message.content,
          role: "expert",
        };

        return [userPrompt, expertMessage];
      });
      setMessages(messages);
    }
  }, [data]);

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
    setSocketResponse(true);
  };

  useEffect(() => {
    if (isSuccess) {
      console.log("isSuccess: ", isSuccess);
      const expertMessage = {
        text: promtResponse?.response[0].choices[0].message.content,
        role: "expert",
      };
      setMessages((prevMessages: any) => [...prevMessages, expertMessage]);
      setSocketMessage([]);
    }
  }, [isSuccess, promtResponse?.response]);

  useEffect(() => {
    socket.connect();
    console.log("working");
    const onMessageReceived = (msg: any) => {
      console.log("msg: ", msg);
      setSocketMessage((prev) => [...prev, msg]);
      setSocketResponse(false);
    };

    socket.on("chat_message", onMessageReceived);

    return () => {
      socket.off("chat_message", onMessageReceived);
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      setTimeout(() => {
        messagesEndRef?.current?.scrollIntoView({ behavior: "smooth" });
      }, 100); 
    }
  },[data, messages, socketResponse]);

  return (
    <div
      className="flex-grow relative flex flex-col"
      style={{ height: "calc(100vh - 10rem)" }}
    >
      <ChatHistory
        message={messages}
        expertData={expertData}
        messagesEndRef={messagesEndRef}
        socketResponse={socketResponse}
        socketMessage={socketMessage}
      />
      <div className="px-10 py-2 absolute left-0 bottom-0 right-0 bg-white">
        <ChatBottom textref={textref} handleSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default ChatList;
