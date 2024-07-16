'use client'
import { useGetExpertByIdQuery } from "@/rtkquery";
import React from "react";
import ChatTop from "../chattop";

function Chats(req:any) {
  const expertId = req.params.id 
  const {data} = useGetExpertByIdQuery(expertId) 
  console.log('data: ', data);
  return (
    <>
    <ChatTop {...data} />
      <div>
        
      </div>
    </>
  );
}

export default Chats;
