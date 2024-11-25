"use client"

import { RewrittenContext, RewrittenItem } from "@/contexts/rewritten";
import { getSavedRewrites, saveRewrittens } from "@/utils/history";
import moment from "moment";
import { ReactNode, useState } from "react";

export const INITIAL_Rewritten = {
    id: '',
    originalText: '',
    rewrittenText: '',
    date: '',
    explaination: ''
}


export const RewrittenProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [rewrittens, setNewRewrittens] = useState<RewrittenItem[]>(getSavedRewrites());
    const [newRewritten, setNewRewritten] = useState<RewrittenItem>(INITIAL_Rewritten)
    const [tone, setTone] = useState('');
    const [len, setLen] = useState('');

    const addRewritten = (originalText: string, rewrittenText: string, explaination: string='') => {
        const newRewritten: RewrittenItem = {
            id: crypto.randomUUID(),
            originalText,
            rewrittenText,
            date: moment(new Date()).format("MMM Do YY"),
            explaination
        };
        setNewRewritten(newRewritten)
        setNewRewrittens((prev: RewrittenItem[]) => [newRewritten, ...prev]);
        saveRewrittens([newRewritten, ...rewrittens])
    };

    const deleteRewritten = (id: string) => {
        setNewRewrittens((prev: RewrittenItem[]) => prev.filter((rewritten: RewrittenItem) => rewritten.id !== id));
        const newRewrittenList = rewrittens.filter((rewritten: RewrittenItem) => rewritten.id !== id)
        saveRewrittens(newRewrittenList)
    };

    const handleTonechange = (tone: string) => setTone(tone)
    const handleLengthchange = (tone: string) => setLen(tone)    

    return (
        <RewrittenContext.Provider value={{
            rewrittens,
            newRewritten,
            addRewritten,
            deleteRewritten,
            tone,
            handleTonechange,
            handleLengthchange,
            len,
        }}>
            {children}
        </RewrittenContext.Provider>
    );
};


