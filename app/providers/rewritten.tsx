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
	explanation: ''
}


export const RewrittenProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [rewrittens, setNewRewrittens] = useState<RewrittenItem[]>(getSavedRewrites());
	const [newRewritten, setNewRewritten] = useState<RewrittenItem>(INITIAL_Rewritten)
	const [tone, setTone] = useState('');
	const [len, setLen] = useState('');
	const [text, setText] = useState('');

	const addRewritten = (originalText: string, rewrittenText: string, explanation: string = '') => {
		const newRewritten: RewrittenItem = {
			id: crypto.randomUUID(),
			originalText,
			rewrittenText,
			date: moment(new Date()).format("MMM Do YY") ,
			explanation 
		};
		setNewRewritten(newRewritten)
		setNewRewrittens((prev: RewrittenItem[]) => [newRewritten, ...prev]);
		saveRewrittens([newRewritten, ...rewrittens])
	};

	const handleClear = () => {
		setText('');
		setNewRewritten(INITIAL_Rewritten)
	}

	const deleteRewritten = (id: string) => {
		if (!id) {
			return;
		}
		setNewRewrittens((prev: RewrittenItem[]) => prev.filter((rewritten: RewrittenItem) => rewritten.id !== id));
		const newRewrittenList = rewrittens.filter((rewritten: RewrittenItem) => rewritten.id !== id)
		saveRewrittens(newRewrittenList)
		if(newRewritten.id  === id){
			handleClear()
		}
	};

	const handleTonechange = (tone: string) => setTone(tone)
	const handleLengthchange = (tone: string) => setLen(tone)
	const handleTextChange = (text: string) => setText(text)
	
	return (
		<RewrittenContext.Provider value={{
			rewrittens,
			newRewritten,
			addRewritten,
			deleteRewritten,
			tone,
			handleTonechange,
			handleLengthchange,
			handleTextChange,
			handleClear,
			len,
			text,
		}}>
			{children}
		</RewrittenContext.Provider>
	);
};


