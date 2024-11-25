import React from "react";
import { Download, Trash2, Eye } from "lucide-react";
import { RewrittenItem } from "@/contexts/rewritten";
import CopyButton from "./CopyButton";
import { downloadTexFile } from "@/utils/download";

interface RewrttenCardProps {
  rewritten: RewrittenItem;
  deleteRewritten: (id: string) => void
  viewRewrites: (rewritten: RewrittenItem) => void
}

const RewrttenCard: React.FC<RewrttenCardProps> = ({ rewritten, deleteRewritten, viewRewrites }) => {

  return (
    <div
      className="rounded-lg p-2 shadow-md flex flex-col  space-y-2 bg-secondary hover:border-gray-500 h-[150px] w-full sm-1/2 md:w-1/3 lg:w-1/4"
    >
      <div className="flex justify-end items-center">
        <button
          onClick={() => viewRewrites(rewritten)}
          className="flex items-center py-2 pr-2 rounded-lg transition text-gray-500 hover:text-primary ">
          <Eye size={20}  />
        </button>
        <button
          onClick={() => downloadTexFile("rewritten.txt", rewritten.rewrittenText)}
          className="flex items-center py-2  rounded-lg transition hover:text-primary">
          <Download size={20}/>
        </button>

        <CopyButton content={rewritten.rewrittenText} />
      </div>
      <p className="flex-1 px-2 text-sm text-gray-600 line-clamp-3">{rewritten.rewrittenText}</p>
      <div className="flex px-2 items-center justify-between text-sm text-gray-500">
        <span >Date: {rewritten.date}</span>
        <button className="text-red-500 hover:text-red-700">
          <Trash2 size={18}
            className="cursor:pointer"
            onClick={(e) => {
              e.stopPropagation()
              deleteRewritten(rewritten.id)
            }} />
        </button>
      </div>
    </div>
  );
};

export default RewrttenCard