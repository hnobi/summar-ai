"use client"

import { Download, Trash2 } from "lucide-react";
import WordCount from "./WordCount";
import { downloadTexFile } from "@/utils/download";
import CopyButton from "./CopyButton";
import { useRewrittenContext } from "@/contexts/rewritten";
import Modal from "./Modal";
import { useState } from "react";

const RewrttenOutput = ({ text }: { text: string }) => {
  const { deleteRewritten, newRewritten } = useRewrittenContext()
  const [open, setOpen] = useState(false)

  return (
    <div className="w-full sm:w-1/2 sm:h-full h-1/2 bg-white mt-10 sm:mt-0">
      <div className="h-[200px] sm:h-[357px] w-full px-4 py-4 ">
        {text}
      </div>
      <div className="flex items-center px-4 py-2 border-t-[1px] h-[44px] ">
        <div className="flex-1">
          <div className="inline-flex items-center">
            <WordCount text={newRewritten.rewrittenText || ""} />
            {newRewritten.explanation &&
              <div>  <button
                className="ml-2 items-center border border-primary text-primary hover:bg-opacity-90  text-sm md:text-md font-medium rounded-3xl px-2 py-1"
                onClick={() => setOpen(true)}
              >
                Explain
              </button> </div>
            }
          </div>

        </div>
        <Download className="cursor-pointer"
          size={20}
          color="gray"
          onClick={() => downloadTexFile("rewrite.txt", newRewritten.rewrittenText)} />
        <CopyButton content={newRewritten.rewrittenText} />
        <Trash2
          size={20}
          className="cursor-pointer"
          color="red"
          onClick={() => {
            deleteRewritten(newRewritten.id)
          }}
        />
      </div>
      <Modal isOpen={open} onClose={() => setOpen(false)} title={""}>
        <div className="p-4">
          {newRewritten.explanation}
        </div>
      </Modal>
    </div>
  )
};

export default RewrttenOutput;
