import React from "react";

interface ChatTopProps {
  expert_name?: string;
}

function ChatTop({ expert_name }: ChatTopProps) {
  console.log("expert_name: ", expert_name);
  return (
    <div className="px-10">
      <div className="flex flex-col">
        <div
          className="text-4xl font-normal font-display max-md:text-sm "
          style={{ color: "#455166" }}
        >
          <h1>Chat With</h1>
        </div>
        <div className="text-4xl font-medium font-display max-md:text-lg">
          <h1>{expert_name}</h1>
        </div>
      </div>
    </div>
  );
}

export default ChatTop;
