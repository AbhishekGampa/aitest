"use client";
import { useGetExpertsQuery } from "@/rtkquery/chatapis";
import { useGetDashboardDataQuery } from "@/rtkquery/homeapis";
import React, { useEffect } from "react";
import Experts from "./home/experts";
import SavedTime from "./home/savedtime";
import SaveAutomation from "./home/saveautomation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingModal from "../components/ui/loading";
import { useSelector } from "react-redux";

function Home() {
  const { data, error, isLoading } = useGetDashboardDataQuery({});

  React.useEffect(() => {
    if (error?.data?.detail || error?.detail) {
      const errorMessage = error?.data?.detail || error?.detail;
      console.log("error: ", errorMessage);
      toast.error(`Error: ${errorMessage}`);
    }
  }, [error]);

  console.log("Home data", data);
  return (
    <>
      {isLoading && <LoadingModal />}
      <ToastContainer />
      <div className="px-10 w-full overflow-hidden">
        <div className="flex flex-col ">
          <div
            className="text-2xl font-normal font-display max-md:text-sm "
            style={{ color: "#455166" }}
          >
            <h1>Hello, John</h1>
          </div>
          <div className="text-2xl font-medium font-display max-md:text-lg ">
            How can I help you today?
          </div>
        </div>
        <div className="mt-5 flex flex-row gap-4 overflow-scroll hide-scrollbar w-full">
          <>
            {/* {Array(10).fill('').map(()=><div className="w-[200px] h-[300px] m-2 bg-blue-400 flex-shrink-0"></div>)} */}
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
