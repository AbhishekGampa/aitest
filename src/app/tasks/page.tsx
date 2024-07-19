

import Header from "./header";
import MainContent from "./maincontent";
import SearchFilter from "./search";

const Tasks: React.FC = () => {
  return (
    <div className="flex h-screen px-10">
      <div className="flex-1 flex flex-col ">
        <Header />
        <SearchFilter />
        <MainContent />
      </div>
    </div>
  );
};

export default Tasks;