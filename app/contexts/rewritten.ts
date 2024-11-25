"use client"
import { createContext, useContext } from "react";

export interface RewrittenItem {
  id: string;
  originalText: string;
  rewrittenText: string;
  date: string;
  explanation: string;
}

export interface ReContextType {
  rewrittens: RewrittenItem[];
  newRewritten: RewrittenItem 
  addRewritten: (originalText: string, rewrittenText: string, explanation?: string) => void;
  deleteRewritten: (id: string) => void;
  tone: string;
  len: string;
  text: string;
  handleTonechange: (tone: string) => void;
  handleTextChange: (text: string) => void;
  handleLengthchange: (length: string) => void;
  handleClear: () => void;
}

export const RewrittenContext = createContext<ReContextType | undefined>(undefined);


export const useRewrittenContext = (): ReContextType => {
  const context = useContext(RewrittenContext);
  if (!context) {
    throw new Error("useRewrittenContext must be used within a RewrittenProvider");
  }
  return context;
};
