import React from 'react';
import AgentCard from './agentcards';

const agents = [
  {
    title: 'Security Co-Pilot',
    description: 'Talk to Security Expert, Stay Secure!',
    image: 'https://via.placeholder.com/48'
  },
  {
    title: 'Incident Handler',
    description: 'Consult Incident Handler, Manage crises.',
    image: 'https://via.placeholder.com/48'
  },
  {
    title: 'Security Analyst',
    description: 'Meet Security Analyst, Analyze threats.',
    image: 'https://via.placeholder.com/48'
  },
  {
    title: 'Privacy Expert',
    description: 'Discuss with Privacy Consultant, Safeguard data.',
    image: 'https://via.placeholder.com/48'
  },
  {
    title: 'My Playbooks',
    description: 'Discuss with Privacy Consultant, Safeguard data.',
    image: 'https://via.placeholder.com/48'
  },
  {
    title: 'Policy Expert',
    description: 'Connect with Pen Tester, Test defenses.',
    image: 'https://via.placeholder.com/48'
  },
];

const MainContent: React.FC = () => {
  return (
    <div className="px-8 py-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {agents.map((agent, index) => (
          <AgentCard
            key={index}
            title={agent.title}
            description={agent.description}
            image={agent.image}
          />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
