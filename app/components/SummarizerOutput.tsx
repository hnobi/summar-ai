import { Download, Trash2, Copy } from "lucide-react";
import WordCount from "./WordCount";

const SummarizerOutput = ({ text = '' }: { text: string }) => {

  return (
    <div className="w-full sm:w-1/2 sm:h-full h-1/2 bg-white mt-10 sm:mt-0">
      <div className="h-[200px] sm:h-[357px] w-full px-4 py-4 ">
        {text}
      </div>
      <div className="flex items-center px-4 py-2 border-t-[1px] h-[44px] ">
        <div className="flex-1">
          <WordCount text={text} />
        </div>
        <Download className="mr-2 cursor-pointer"  color="gray"/>
        <Copy className="mr-2 cursor-pointer" color="gray"/>
        <Trash2 className="mr-2 cursor-pointer"  color="red" />
      </div>
    </div>
  )
};

export default SummarizerOutput;
