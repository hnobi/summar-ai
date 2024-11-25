"use client"
import React, { FC, useState } from "react";
import RewrttenCard from "./RewrttenCard";
import { RewrittenItem, useRewrittenContext } from "@/contexts/rewritten";
import Modal from "./Modal";
import { INITIAL_Rewritten } from "@/providers/rewritten";

interface RewrittenHistoryProp {
  rewrittens: RewrittenItem[]
}

const RewrittenHistory: FC<RewrittenHistoryProp> = ({ rewrittens }) => {
  const [selected, setSelected] = useState<RewrittenItem>(INITIAL_Rewritten)

  const { deleteRewritten } = useRewrittenContext();

  const viewRewrites = (rewritten: RewrittenItem) => {
    setSelected(rewritten)
  }

  const handleClose = () => {
    setSelected(INITIAL_Rewritten)
  }

  if(rewrittens.length ===0){
    return <h1 className="text-2xl text-center mt-10 text-gray-500">No Recent rewrite</h1>
  }

  return (
    <div className="px-2 md:px-6 pt-6 space-y-4 mt-6">
      <h1 className="text-2xl font-semibold text-center"> Rewritte History</h1>
      <div className="flex flex-col justify-center items-center md:flex-row gap-2 flex-wrap">
        {rewrittens.map((rewritten, index) => (
          <RewrttenCard
            key={index}
            rewritten={rewritten}
            deleteRewritten={deleteRewritten}
            viewRewrites={viewRewrites}
          />
        ))}
      </div>
      <Modal isOpen={!!selected.id} onClose={handleClose} title={"Rewrite detail"}>
        <div className="items-center justify-center">
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2 ">Original Text</h3>
            <div className="p-3 rounded-lg h-full overflow-y-auto">
              <p className="text-sm text-gray-700">{selected.rewrittenText}</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg mb-2 font-semibold">Rewrite Text</h3>
            <div className="p-3 rounded-lg h-full">
              <p className="text-sm text-gray-700">{selected.rewrittenText}</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default RewrittenHistory;
