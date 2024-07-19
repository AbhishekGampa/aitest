"use client";
import { useGetExpertsQuery } from "@/store/api/chat";
import { useGetDashboardDataQuery } from "@/store/api/home";
import React, { useEffect, useRef, useState } from "react";
import Experts from "../components/pages/home/experts";
import SavedTime from "../components/pages/home/savedtime";
import SaveAutomation from "../components/pages/home/saveautomation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingModal from "../components/ui/loading";


const ScrollableCardsContainer = ({ data }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - (scrollContainerRef.current?.offsetLeft ?? 0);
      const walk = (x - startX) * 3; // Adjust scroll speed here
      scrollContainerRef.current!.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUpOrLeave = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUpOrLeave);
      document.addEventListener('mouseleave', handleMouseUpOrLeave);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUpOrLeave);
      document.removeEventListener('mouseleave', handleMouseUpOrLeave);
    };
  }, [isDragging, startX, scrollLeft]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft ?? 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft ?? 0);
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return;
    const { deltaY } = e;
    const newScrollLeft = scrollContainerRef.current.scrollLeft + deltaY;
    scrollContainerRef.current.scrollLeft = newScrollLeft;
    e.preventDefault(); // Prevent the page from scrolling vertically
  };

  return (
    <div
      className="mt-5 flex flex-row gap-4 overflow-scroll hide-scrollbar w-full h-[490px] overflow-y-hidden"
      ref={scrollContainerRef}
      onMouseDown={handleMouseDown}
      onWheel={handleWheel}
    >
      {data?.map((item, index) => {
        switch (item.card_type) {
          case "expert":
            return <Experts key={index} data={item} />;
          case "saved_time":
            return <SavedTime key={index} data={item} />;
          case "saved_automation":
            return <SaveAutomation key={index} data={item} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

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
      <div className="pl-7 pr-4 w-full h-80vh">
        <div className="flex flex-col">
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
        <ScrollableCardsContainer data={data} />
      </div>
    </>
  );
}

export default Home;
