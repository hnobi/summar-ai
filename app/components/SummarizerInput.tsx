'use client';

import React, { ChangeEvent, useState } from "react";
import WordCount from "./WordCount";
import { useSummaryContext } from "@/contexts/summary";
import { Loader2 } from "lucide-react"

const SummarizerInput = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const {addSummary, tone, len} = useSummaryContext()

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleClear = () => {
    setText('');
  };


  const handleSummarize = async () => {
    if (!text) return;

    setLoading(true);
    try {
      const response = await fetch('/api/summarize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text, tone, length: len}),
      });

      if (!response.ok) {
        throw new Error('Summarization failed');
      }

      const data = await response.json();
      addSummary(text, data.summary_text)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <div className="w-full sm:w-1/2 sm:h-full h-1/2 sm:border-r-[1px] bg-white">
      <textarea
        className="h-[200px] sm:h-[350px] w-full outline-none px-4 py-4 resize-none"
        placeholder="Enter text here ..."
        rows={10}
        onChange={handleChange}
        value={text}
      />
      <div className="flex items-center px-4 py-2 border-t-[1px]">
        <WordCount text={text} />
        <button
          className="mr-3 text-gray-400 hover:text-gray-500"
          onClick={handleClear}
        >
          Clear
        </button>
        <button
          className= "flex items-center bg-primary hover:bg-opacity-90 text-white text-sm md:text-md font-semibold rounded-3xl px-6 py-1"
          onClick={handleSummarize}
          disabled={loading}
        >
          { loading &&  <Loader2 className="animate-spin mr-2" size={18}/>}
         {loading ?  "Summarizing...": "Summarize"}
        </button>
      </div>
    </div>
  );
};

export default SummarizerInput;
