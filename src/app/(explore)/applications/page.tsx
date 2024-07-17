"use client"
import Header from "./header";
import MainContent from "./maincontent";
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
