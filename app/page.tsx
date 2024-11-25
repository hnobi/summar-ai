"use client"

import RewrttenInput from "@/components/RewrttenInput";
import RewrttenOutput from "@/components/RewrttenOutput";
import RewrittenHistory from "@/components/RewrittenHistory";
import { useRewrittenContext } from "@/contexts/rewritten";

export default function Home() {
  const {
    newRewritten,
    rewrittens,
    handleTonechange,
    tone,
    len,
    handleLengthchange,
  } = useRewrittenContext()


  return (
    <main className="p-4 sm:p-8 min-h-screen bg-slate-100">
      <section>
        <div className="flex items-center justify-center flex-col md:flex-row mb-2">
          <div className="flex items-center mb-3 md:mb-0 min-w-full md:min-w-[350px]">
            <label className="mr-2 font-semibold" htmlFor="length">Length: </label>
            <select
              name="length"
              value={tone}
              onChange={(e) => handleLengthchange(e.target.value)}
              className="p-2  border-0 rounded-lg outline-none w-full"
            >
              <option value="" className="bg-white">Select Length</option>
              <option value="shorter">Shorter</option>
              <option value="longer">Longer</option>
              <option value="concise">Concise</option>
            </select>
          </div>
          <div className="min-w-full md:min-w-[350px] flex items-center md:ml-4 ">
            <label className="mr-1 font-semibold" htmlFor="tone">Tone:</label>
            <input
              name='tone'
              onChange={(e) => handleTonechange(e.target.value)}
              placeholder=" e.g formal, casual, persuasive"
              className="px-2 py-1 outline-none flex-1" />
          </div>
        </div>
        <div className="rounded-lg border border-[#f1f5f9] bg-slate-100 sm:bg-white-300 flex flex-col sm:flex-row max-w-[1400px] mx-auto">
          <RewrttenInput />
          <RewrttenOutput text={newRewritten.rewrittenText} />
        </div>
      </section>
      <section>
        <RewrittenHistory rewrittens={rewrittens} />
      </section>
    </main>
  );
}
