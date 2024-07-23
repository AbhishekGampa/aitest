"use client";
import Header from "../../../components/explore/applications/header";
import MainContent from "../../../components/explore/applications/maincontent";
import SearchFilter from "@/components/tasks/search";

const Applications: React.FC = () => {
  return (
    <div className="flex bg-white px-5">
      <div className="flex-1 flex flex-col overflow-scroll pb-4">
        <Header />
        <SearchFilter />
        <MainContent />
      </div>
    </div>
  );
};

export default Applications;
