
import Header from "./header";
import MainContent from "./maincontent";
import SearchFilter from "./search&filter";

const Agents: React.FC = () => {
  return (
    <div className="flex h-screen bg-white px-8">
      <div className="flex-1 flex flex-col">
        <Header />
        <SearchFilter />
        <MainContent />
      </div>
    </div>
  );
};

export default Agents;
