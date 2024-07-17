"use client";
import { useGetChatIdQuery, useGetExpertByIdQuery } from "@/rtkquery/chatapis";
import React from "react";
import ChatTop from "../chattop";
import ChatList from "../chatlist";

function Chats(req: any) {
  const expertId = req.params.id;
  const { data: expertData } = useGetExpertByIdQuery(expertId);
  const { data: chatData } = useGetChatIdQuery(expertId);
  console.log("chatData: ", chatData);
  return (
    <>
      <ChatTop {...expertData} />
      <ChatList data={expertData} />
      <div></div>
    </>
  );
}

export default Chats;
