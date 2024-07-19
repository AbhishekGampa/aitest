import React from "react";
import ZySecAppAndSettings from "./applicense";
import Mode from "./cyberpodmode";


const SystemSetting = () => {
    return (
        <div className="main-container flex justify-start px-6">
            <div className="flex flex-col  max-w-[1200px] h-full">
                <div className="text-3xl text-gray-500">Settings</div>
                 <div className="text-3xl font-semibold">Zysec App License</div>

                <div className="flex flex-col items-center h-full overflow-y-auto space-y-10">
                    <ZySecAppAndSettings  />
                    <Mode/>

                </div>
            </div>
        </div>
    );
};

export default SystemSetting;