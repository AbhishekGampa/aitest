import Categories from "@/components/settings/workspace/categories";
import GeneralSettings from "@/components/settings/workspace/generalsettings";
import React from "react";

const WorkSpace = () => {
  return (
    <div className="main-container flex justify-start px-6 w-[45vw]">
      <div className="flex flex-col w-full h-full">
        <div className="text-3xl text-gray-500">Settings</div>
        <div className="text-3xl font-semibold">Workspace Settings</div>
        <div className="flex-1 flex flex-col">
          <GeneralSettings />
   <Categories/>
        </div>
      </div>
    </div>
  );
};

export default WorkSpace;
