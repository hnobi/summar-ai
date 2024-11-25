"use client"

import { Download, Trash2, Copy } from "lucide-react";
import WordCount from "./WordCount";
import { downloadTexFile } from "@/utils/download";
import CopyButton from "./CopyButton";

const RewrttenOutput = ({ text }: { text: string }) => {

  return (
    <div className="w-full sm:w-1/2 sm:h-full h-1/2 bg-white mt-10 sm:mt-0">
      <div className="h-[200px] sm:h-[357px] w-full px-4 py-4 ">
        {text}
      </div>
      <div className="flex items-center px-4 py-2 border-t-[1px] h-[44px] ">
        <div className="flex-1">
          <WordCount text={text} />
          <button> </button>
        </div>
        <Download className="cursor-pointer"
          size={20} 
          color="gray"
          onClick={() => downloadTexFile("rewritten.txt", text)} />
          <CopyButton content={text} />
        <Trash2 size={20}  className="cursor-pointer" color="red" />
      </div>
    </div>
  )
};

export default RewrttenOutput;
