import SummarizerInput from "@/components/SummarizerInput";
import SummarizerOutput from "@/components/SummarizerOutput";
import { Slider } from "./components/RangeSlider";

export default function Home() {
  return (
    <main className="p-4 sm:p-8 h-screen bg-slate-100">
      <div className="flex items-center justify-center flex-col md:flex-row mb-2">
        <div className="flex items-center mb-3 md:mb-0 min-w-full md:min-w-[350px]">
          <label className="mr-2 font-semibold">Length:</label>
          <span className="">Short</span>
          <Slider value={[10]} max={100} step={1} />
          <span>Long</span>
        </div>
        <div className="min-w-full md:min-w-[350px] flex items-center md:ml-4 ">
          <label className="mr-1 font-semibold">Tone:</label>
          <input placeholder="e.g formal, casual, persuasive" className="px-2 py-1 outline-none flex-1" />
        </div>
      </div>
      <div className="rounded-lg border border-[#f1f5f9] bg-slate-100 sm:bg-white-300 flex flex-col sm:flex-row max-w-[1400px] mx-auto">
        <SummarizerInput />
        <SummarizerOutput text="" />
      </div>
    </main>
  );
}
