import { useGetExpertByIdQuery } from "@/rtkquery";
import React from "react";

function Chats(req:any) {
  const expertId = req.params.id 
  const {data} = useGetExpertByIdQuery({expertId}) 
  return (
    <>
      <div>
        {expertId}
      </div>
    </>
  );
}

export default Chats;
