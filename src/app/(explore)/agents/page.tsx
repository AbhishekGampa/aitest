import Header from "../../../components/explore/agents/header";
import MainContent from "../../../components/explore/agents/maincontent";
import SearchFilter from "@/components/tasks/search";

const Agents: React.FC = () => {
  return (
    <div className="flex h-full bg-white px-5">
      <div className="flex-1 flex flex-col overflow-scroll">
        <Header />
        <SearchFilter />
        <MainContent />
      </div>
    </div>
  );
};

export default Agents;
