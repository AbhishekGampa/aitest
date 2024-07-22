"use client";

import React, { useState } from "react";

import { useGetExpertsQuery } from "@/store/api/chat";
import { staticagents } from "../mockdata";
import AgentCard from "./agentcards";
import Modal from "./agentdetails";

const MainContent: React.FC = () => {
  const { data, isLoading, isError } = useGetExpertsQuery({});
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const agents =
    isError || !data
      ? staticagents
      : data.map((expert: any) => ({
          title: expert.expert_name,
          description: expert.description,
          image: expert.avatar,
        }));

  const handleOpenModal = (agent: any) => {
    setSelectedAgent(agent);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedAgent(null);
  };

  return (
    <div className="px-7 w-[85vw] py-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {agents.map((agent: any, index: any) => (
          <AgentCard
            key={index}
            title={agent.title}
            description={agent.description}
            image={agent.image}
            onOpenModal={() => handleOpenModal(agent)}
          />
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        agent={selectedAgent}
      />
    </div>
  );
};

export default MainContent;
