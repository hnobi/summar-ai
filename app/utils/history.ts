import { RewrittenItem } from "@/contexts/rewritten";

export const saveRewrittens = (rewrittens: RewrittenItem[]) => {
    const rewriteHistory = JSON.stringify(rewrittens);
    localStorage.setItem('rewriteHistory', rewriteHistory)
}

export const getSavedRewrites = (): RewrittenItem[] => {
    if (typeof window === 'undefined') {
        return [];
    }
    const rewriteHistory = localStorage.getItem('rewriteHistory') || ""
     if(rewriteHistory.length > 0){
        return JSON.parse(rewriteHistory);
     }
  
    return []
}
