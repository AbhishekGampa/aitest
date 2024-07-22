import React from "react";
import ZySecAppAndSettings from "../../../components/settings/systemcontrols/applicense";
import Mode from "../../../components/settings/systemcontrols/cyberpodmode";
import UserManagement from "@/components/settings/usermanagement/content";

const SystemSetting = () => {
  return (
    <div className="main-container flex justify-start px-6 w-full">
      <div className="flex flex-col  h-full">
        <div className="text-3xl text-gray-500">Settings</div>
        <div className="text-3xl font-semibold">User Management</div>
        <div className="flex flex-col items-center h-full overflow-y-auto  space-y-10">
          <UserManagement />
        </div>
      </div>
    </div>
  );
};

export default SystemSetting;
