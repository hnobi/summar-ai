import { getWordCount } from "@/utils/wordCount";
import React, { FC } from "react";

interface Props {
    text?: string;
}
const WordCount: FC<Props> = ({text=''}) => {
    const count = getWordCount(text);
  return <span className="flex-1 text-sm">{count}{ count > 1 ? " words": " word"}</span>;
};

export default WordCount;
