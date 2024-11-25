'use client';

import React, { useState } from "react";
import WordCount from "./WordCount";
import { useRewrittenContext } from "@/contexts/rewritten";
import { Loader2 } from "lucide-react"

const RewrttenInput = () => {
  const [loading, setLoading] = useState(false);
  const {addRewritten, tone, len, text, handleTextChange, handleClear} = useRewrittenContext()


  const handleRewritten = async () => {
    if (!text) return;

    setLoading(true);
    try {
      const response = await fetch('/api/rewrite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text, tone, length: len}),
      });

      if (!response.ok) {
        throw new Error('Rewrite failed');
      }

      const data = await response.json();
      addRewritten(text, data.rewritten_text, data.explanation)
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
        onChange={(e) => handleTextChange(e.target.value)}
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
          className= {`flex items-center hover:bg-opacity-90 text-white text-sm md:text-md font-semibold rounded-3xl px-6 py-1 ${
              !text ? "bg-gray-400 cursor-not-allowed"
              : "bg-primary hover:bg-opacity-90"
          }`}
          onClick={handleRewritten}
          disabled={loading}
        >
          { loading &&  <Loader2 className="animate-spin mr-2" size={18}/>}
         {loading ?  "Rewriting...": "Rewrite"}
        </button>
      </div>
    </div>
  );
};

export default RewrttenInput;
