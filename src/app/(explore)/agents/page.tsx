import Header from "../../../components/explore/agents/header";
import MainContent from "../../../components/explore/agents/maincontent";
import SearchFilter from "./categories";

const Agents: React.FC = () => {
  return (
    <div className="flex  bg-white px-6">
      <div className="flex-1 flex flex-col">
        <Header />
        <SearchFilter />
        <MainContent />
      </div>
    </div>
  );
};

export default Agents;
