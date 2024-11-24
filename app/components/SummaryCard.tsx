import React from "react";
import { Trash2 } from "lucide-react";

interface SummaryCardProps {
  description: string;
  date: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({  description, date }) => {
  return (
    <div className="rounded-lg p-4 shadow-md flex flex-col sm:flex space-y-2 bg-[#e9e8fe] hover:border-gray-500 h-[100px] w-full md:w-[400px]">
      <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>Date: {date}</span>
        <button className="text-red-500 hover:text-red-700">
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default SummaryCard