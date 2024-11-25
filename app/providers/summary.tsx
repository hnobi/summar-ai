"use client"

import { SummaryContext, SummaryItem } from "@/contexts/summary";
import { getSavedSummaries, savedSummaries } from "@/utils/history";
import moment from "moment";
import { ReactNode, useState } from "react";

export const INITIAL_SUMMARY = {
    id: '',
    originalText: '',
    summaryText: '',
    date: ''
}


export const SummaryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [summaries, setSummaries] = useState<SummaryItem[]>(getSavedSummaries());
    const [newSummary, setnewSummary] = useState<SummaryItem>(INITIAL_SUMMARY)
    const [tone, setTone] = useState('');
    const [len, setLen] = useState('');

    const addSummary = (originalText: string, summaryText: string) => {
        const newSummary: SummaryItem = {
            id: crypto.randomUUID(),
            originalText,
            summaryText,
            date: moment(new Date()).format("MMM Do YY"),
        };
        setnewSummary(newSummary)
        setSummaries((prev: SummaryItem[]) => [newSummary, ...prev]);
        savedSummaries([newSummary, ...summaries])
    };

    const deleteSummary = (id: string) => {
        setSummaries((prev: SummaryItem[]) => prev.filter((summary: SummaryItem) => summary.id !== id));
        const newSummaryList = summaries.filter((summary: SummaryItem) => summary.id !== id)
        savedSummaries(newSummaryList)
    };

    const handleTonechange = (tone: string) => setTone(tone)
    const handleLengthchange = (tone: string) => setLen(tone)    

    return (
        <SummaryContext.Provider value={{
            summaries,
            newSummary,
            addSummary,
            deleteSummary,
            tone,
            handleTonechange,
            handleLengthchange,
            len,
        }}>
            {children}
        </SummaryContext.Provider>
    );
};


