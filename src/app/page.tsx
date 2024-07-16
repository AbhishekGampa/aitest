"use client";
import { useGetExpertsQuery } from "@/rtkquery/chatapis";
import { useGetDashboardDataQuery } from "@/rtkquery/homeapis";
import React from "react";
import Experts from "./home/experts";

function Home() {
  const { data, error } = useGetDashboardDataQuery({});
  console.log("Home data", data);
  return (
    <>
      <div className="px-10 ">
        <div className="flex flex-col">
          <div
            className="text-4xl font-normal font-display "
            style={{ color: "#455166" }}
          >
            <h1>Hello, John</h1>
          </div>
          <div className="text-4xl font-medium font-display">
            How can I help you today?
          </div>
        </div>
        <div className="mt-10 flex flex-row gap-4">
          <>
            {data?.map((item: any, index: any) =>
              item.card_type === "expert" ? (
                <Experts key={index} data={item} />
              ) : null
            )}
          </>
        </div>
      </div>
    </>
  );
}

export default Home;
