"use client";
import { useGetExpertsQuery } from "@/rtkquery/chatapis";
import { useGetDashboardDataQuery } from "@/rtkquery/homeapis";
import React from "react";
import Experts from "./home/experts";
import SavedTime from "./home/savedtime";
import SaveAutomation from "./home/saveautomation";

function Home() {
  const { data, error } = useGetDashboardDataQuery({});
  console.log("Home data", data);
  return (
    <>
      <div className="px-10 ">
        <div className="flex flex-col">
          <div
            className="text-2xl font-normal font-display "
            style={{ color: "#455166" }}
          >
            <h1>Hello, John</h1>
          </div>
          <div className="text-2xl font-medium font-display">
            How can I help you today?
          </div>
        </div>
        <div className="mt-5 flex flex-row gap-4">
          <>
            {data?.map((item: any, index: any) =>
              item.card_type === "expert" ? (
                <Experts key={index} data={item} />
              ) : null
            )}
            {data?.map((item: any, index: any) =>
              item.card_type === "saved_time" ? <SavedTime data={item} /> : null
            )}
            {data?.map((item: any, index: any) =>
              item.card_type === "saved_automation" ? (
                <SaveAutomation data={item} />
              ) : null
            )}
          </>
        </div>
      </div>
    </>
  );
}

export default Home;
