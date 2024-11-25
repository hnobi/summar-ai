import React from "react";
import { Download, Trash2 } from "lucide-react";
import { SummaryItem } from "@/contexts/summary";
import CopyButton from "./CopyButton";
import { downloadTexFile } from "@/utils/download";

interface SummaryCardProps {
  summary: SummaryItem;
  deleteSummary: (id: string) => void
  viewSummary: (summary: SummaryItem) => void
}

const SummaryCard: React.FC<SummaryCardProps> = ({ summary, deleteSummary, viewSummary }) => {

  return (
    <div
      className="cursor-pointer rounded-lg p-2 shadow-md flex flex-col  space-y-2 bg-secondary hover:border-gray-500 h-[150px] w-full sm-1/2 md:w-1/3 lg:w-1/4"
      onClick={() => viewSummary(summary)}
    >
      <div className="flex justify-end items-center">
        <Download className="cursor-pointer"
          size={20}
          color="gray"
          onClick={(e) => {
            e.stopPropagation();
            downloadTexFile("summary.txt", summary.summaryText)
          }} />
        <CopyButton content={summary.summaryText} />
      </div>
      <p className="flex-1 px-2 text-sm text-gray-600 line-clamp-3">{summary.summaryText}</p>
      <div className="flex px-2 items-center justify-between text-sm text-gray-500">
        <span >Date: {summary.date}</span>
        <button className="text-red-500 hover:text-red-700">
          <Trash2 size={18}
            className="cursor:pointer"
            onClick={(e) => {
              e.stopPropagation()
              deleteSummary(summary.id)
            }} />
        </button>
      </div>
    </div>
  );
};

export default SummaryCard