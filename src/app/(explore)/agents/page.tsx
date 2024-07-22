import Header from "../../../components/explore/agents/header";
import MainContent from "../../../components/explore/agents/maincontent";
import SearchFilter from "@/components/tasks/search";

const Agents: React.FC = () => {
  return (
    <div className="flex h-full bg-white px-8">
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <SearchFilter />
        <MainContent />
      </div>
    </div>
  );
};

export default Agents;
