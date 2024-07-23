// MainContent.tsx

"use client";

import React from "react";
import { useGetApplicationsQuery } from "@/store/api/applications";
import LoadingModal from "@/components/ui/loading";
import ApplicationCard from "./applicationcards";

const MainContent: React.FC = () => {
  const { data, isLoading, } = useGetApplicationsQuery({});

  return (
    <div >
      {isLoading && <LoadingModal/>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {data&&data.map((app: any, index: number) => (
          <ApplicationCard
            key={index}
            title={app.name}
            description={app.description}
            image={app.logo_url}
          />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
