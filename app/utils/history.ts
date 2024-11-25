import { SummaryItem } from "@/contexts/summary";

export const savedSummaries = (summaries: SummaryItem[]) => {
    const summaryHistory = JSON.stringify(summaries);
    localStorage.setItem('summaryHistory', summaryHistory)
}

export const getSavedSummaries = (): SummaryItem[] => {
    if (typeof window === 'undefined') {
        return [];
    }
    const summaryHistory = localStorage.getItem('summaryHistory') || ""
     if(summaryHistory.length > 0){
        return JSON.parse(summaryHistory);
     }
  
    return []
}
