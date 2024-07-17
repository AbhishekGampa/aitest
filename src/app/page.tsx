"use client";
import { useGetExpertsQuery } from "@/rtkquery/chatapis";
import { useGetDashboardDataQuery } from "@/rtkquery/homeapis";
import React, { useEffect } from "react";
import Experts from "./home/experts";
import SavedTime from "./home/savedtime";
import SaveAutomation from "./home/saveautomation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoadingModal = () => (
  <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-5 rounded-lg flex justify-center items-center">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  </div>
);

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
        <div className="mt-5 flex flex-row gap-4 overflow-scroll hide-scrollbar">
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
