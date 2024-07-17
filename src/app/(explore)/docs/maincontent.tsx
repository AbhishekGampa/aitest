import React from 'react';
import DocCard from './doccards';
import { docData } from '../mockdata';


const MainContent: React.FC = () => {
  return (
    <div className="px-8 py-2 overflow-auto  ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {docData.map((doc, index) => (
          <DocCard
            key={index}
            // tags={doc.tags}
            title={doc.title}
            description={doc.description}
          />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
