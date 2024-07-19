"use client";
import Header from "../../../components/explore/applications/header";
import MainContent from "../../../components/explore/applications/maincontent";
import SearchFilter from "./categories";

const Applications: React.FC = () => {
  return (
    <div className="flex h-screen bg-white ">
      <div className="flex-1 flex flex-col">
        <Header />
        <SearchFilter />
        <MainContent />
      </div>
    </div>
  );
};

export default Applications;
