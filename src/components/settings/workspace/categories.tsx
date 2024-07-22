'use client';

import React, { useState } from "react";
import { useGetCategoriesQuery } from "@/store/api/categories";
import { XIcon } from "lucide-react";


const Categories: React.FC = () => {
  const { data, error, isLoading } = useGetCategoriesQuery({});
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  console.log(data, "-----");

  return (
    <div className="w-full py-4">
      <div className="text-xl py-3 font-semibold">Categories</div>
      <p className="text-sm text-gray-500">Some description here</p>

      <div className="mb-4 w-full">
        {error && <p className="text-red-500">Failed to load categories</p>}
        {isLoading ? (
          <p>Loading categories...</p>
        ) : (
          <div className="flex flex-wrap gap-3 my-6">
            {data && data.map((category: any) => (
              <div
                key={category.id}
                className="relative flex items-center border font-light border-gray-300 px-3 py-0.5 rounded-full text-sm text-gray-800"
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <span>{category.name}</span>
                {hoveredCategory === category.id && (
                  <button className="ml-2 text-black hover:text-gray-600">
                    <XIcon className="h-4 w-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <button className="px-2 p-1 rounded-full hover:bg-gray-100 text-sm">
        + Create new Category
      </button>
    </div>
  );
};

export default Categories;
