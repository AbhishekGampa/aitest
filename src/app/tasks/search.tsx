"use client"
import React, { useRef } from 'react';
import { taskcat } from '../(explore)/mockdata';

const SearchFilter: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (event: React.MouseEvent) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.dataset.isDragging = 'true';
      scrollContainerRef.current.dataset.startX = String(event.pageX - scrollContainerRef.current.offsetLeft);
      scrollContainerRef.current.dataset.scrollLeft = String(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (scrollContainerRef.current && scrollContainerRef.current.dataset.isDragging === 'true') {
      event.preventDefault();
      const x = event.pageX - scrollContainerRef.current.offsetLeft;
      const walk = x - Number(scrollContainerRef.current.dataset.startX);
      scrollContainerRef.current.scrollLeft = Number(scrollContainerRef.current.dataset.scrollLeft) - walk;
    }
  };

  const handleMouseUp = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.dataset.isDragging = 'false';
    }
  };

  return (
    <div className="w-[90vw] px-8">
      <div
        ref={scrollContainerRef}
        className="flex space-x-4 md:mb-0 overflow-x-auto py-2 hide-scrollbar cursor-pointer"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {taskcat.map((category, index) => (
          <div key={index} className="px-4 py-2 text-sm bg-gray-100 rounded-3xl max-w-fit whitespace-nowrap">
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchFilter;
