"use client"
import { createContext, useContext } from "react";

export interface SummaryItem {
  id: string;
  originalText: string;
  summaryText: string;
  date: string;
}

export interface SummaryContextType {
  summaries: SummaryItem[];
  newSummary: SummaryItem 
  addSummary: (originalText: string, summaryText: string) => void;
  deleteSummary: (id: string) => void;
  tone: string;
  handleTonechange: (tone: string) => void;
  handleLengthchange: (length: string) => void;
  len: string;
}

export const SummaryContext = createContext<SummaryContextType | undefined>(undefined);


export const useSummaryContext = (): SummaryContextType => {
  const context = useContext(SummaryContext);
  if (!context) {
    throw new Error("useSummaryContext must be used within a SummaryProvider");
  }
  return context;
};
