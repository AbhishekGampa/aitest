"use client";
import Header from "../../../components/explore/docs/header";
import MainContent from "../../../components/explore/docs/maincontent";
import SearchFilter from "@/components/tasks/search";

const Doc: React.FC = () => {
  return (
    <div className="flex h-screen bg-white ">
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <SearchFilter />
        <MainContent />
      </div>
    </div>
  );
};

export default Doc;
