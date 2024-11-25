"use client"

import React, { useState } from "react";
import { Copy, CopyCheck } from "lucide-react";

const CopyButton: React.FC<{ content: string }> = ({ content }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: { stopPropagation: () => void; }) => {
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center py-2 px-4 rounded-lg transition"
    >
     {copied ? (
        <span className="flex">
          <span className="text-xs text-primary mr-0.5">Copied</span>
          <CopyCheck size={20} color="#753fea"  />
        </span>
      ) : (
        <>
          <Copy size={20} className="cursor-pointer hover:text-primary" color="gray" />
        </>
      )}
    </button>
  );
};

export default CopyButton;
