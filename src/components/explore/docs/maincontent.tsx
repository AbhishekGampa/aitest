import React from "react";
import DocCard from "./doccards";
import { docData } from "../mockdata";
import knowledge from '../../../Images/Book_Open.svg';
import figma from '../../../Images/Socials.svg'

const MainContent: React.FC = () => {
  return (
    <div className="py-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {docData.map((doc, index) => (
          <DocCard
            key={index}
            title={doc.title}
            description={doc.description}
            tag1={doc.tag1}
            tag2={doc.tag2}
            knowledgeImg={knowledge}
            figmaImg={figma}
          />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
