import React from "react";
import { taskData } from "../explore/mockdata";
import TaskCard from "@/components/tasks/taskcards";

const MainContent: React.FC = () => {
  return (
    <div className=" py-2 w-[84vw] p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {taskData.map((doc, index) => (
          <TaskCard
            key={index}
            title={doc.title}
            description={doc.description}
          />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
