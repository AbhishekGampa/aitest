"use client";
import { useGetExpertByIdQuery } from "@/rtkquery/chatapis";
import React from "react";
import ChatTop from "../chattop";
import ChatList from "../chatlist";

function Chats(req: any) {
  const expertId = req.params.id;
  const { data } = useGetExpertByIdQuery(expertId);
  console.log("data: ", data);
  return (
    <>
      <ChatTop {...data} />
      <ChatList data={data} />
      <div></div>
    </>
  );
}

export default Chats;
