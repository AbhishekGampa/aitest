import Header from "../../components/tasks/header";
import MainContent from "../../components/tasks/maincontent";
import SearchFilter from "../../components/tasks/search";

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
