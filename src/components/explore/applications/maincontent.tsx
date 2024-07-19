"use client";

import React from "react";
import ApplicationCard from "./applicationcards";
import { useGetApplicationsQuery } from "@/store/api/applicationsapis";
import { applications } from "../mockdata";

const MainContent: React.FC = () => {
  const { data, isLoading, isError } = useGetApplicationsQuery({});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return (
      <div className="px-8 py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {applications.map((app, index) => (
            <ApplicationCard
              key={index}
              title={app.title}
              description={app.description}
              image={app.image}
            />
          ))}
        </div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return <div className="text-center mt-10">Data not found</div>;
  }

  return (
    <div className="px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {data.map((app: any, index: number) => (
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
