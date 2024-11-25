"use client"
import React, { FC, useState } from "react";
import SummaryCard from "./SummaryCard";
import { SummaryItem, useSummaryContext } from "@/contexts/summary";
import Modal from "./Modal";
import { INITIAL_SUMMARY } from "@/providers/summary";

interface RewrittenHistoryProp {
  summaries: SummaryItem[]
}

const RewrittenHistory: FC<RewrittenHistoryProp> = ({ summaries }) => {
  const [selected, setSelected] = useState<SummaryItem>(INITIAL_SUMMARY)

  const { deleteSummary } = useSummaryContext();

  const viewSummary = (summary: SummaryItem) => {
    setSelected(summary)
  }

  const handleClose = () => {
    setSelected(INITIAL_SUMMARY)
  }

  if(summaries.length ===0){
    return <h1 className="text-2xl text-center mt-10 text-gray-500">No Recent Summaries</h1>
  }

  return (
    <div className="px-2 md:px-6 pt-6 space-y-4 mt-6">
      <h1 className="text-2xl font-semibold text-center">Saved Summaries</h1>
      <div className="flex flex-col justify-center items-center md:flex-row gap-2 flex-wrap">
        {summaries.map((summary, index) => (
          <SummaryCard
            key={index}
            summary={summary}
            deleteSummary={deleteSummary}
            viewSummary={viewSummary}
          />
        ))}
      </div>
      <Modal isOpen={!!selected.id} onClose={handleClose} title={"Summary detail"}>
        <div className="items-center justify-center">
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2 ">Original Text</h3>
            <div className="p-3 rounded-lg h-full overflow-y-auto">
              <p className="text-sm text-gray-700">{selected.summaryText}</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg mb-2 font-semibold">Summary Text</h3>
            <div className="p-3 rounded-lg h-full">
              <p className="text-sm text-gray-700">{selected.summaryText}</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default RewrittenHistory;
