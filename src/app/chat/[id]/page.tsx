"use client";
import { useGetChatIdQuery, useGetExpertByIdQuery } from "@/store/api/chat";
import React from "react";
import ChatTop from "../../../components/chat/chattop";
import ChatList from "../../../components/chat/chatlist";

function Chats(req: any) {
  const expertId = req.params.id;
  const { data: expertData } = useGetExpertByIdQuery(expertId);
  console.log('expertData: ', expertData);
  const { data: chatData } = useGetChatIdQuery(expertId);
  console.log("chatData: ", chatData);
  return (
    <div className="flex flex-col" style={{ height: "calc(100vh - 5rem)" }}>
      <ChatTop {...expertData} />
      <ChatList chatData={chatData} expertData={expertData} />
    </div>
  );
}

export default Chats;
