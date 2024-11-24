"use client"
import React from "react";
import SummaryCard from "./SummaryCard";
import Modal from "./Modal";

const RewrittenHistory = () => {
    const summaries = [
        { title: "Summarization 01", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con", date: "23/12/2024" },
        { title: "Summarization 01", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con", date: "23/12/2024" },
        { title: "Summarization 01", description: "d enim aminim veniam, quis nostrud minim veniam, quis nostrud exercitationexercitation minim veniam, eeeeuis nostrud exercitationd minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con  Ut enim ad minimUt enim aminim veniam, quis nostrud minim veniam, quis nostrud exercitationexercitation minim veniam, quis nostrud exercitationd minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con  Ut enim ad minim veni  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con", date: "23/12/2024" },

        { title: "Summarization 01", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con", date: "23/12/2024" },
        { title: "Summarization 01", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con", date: "23/12/2024" },

        { title: "Summarization 01", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con", date: "23/12/2024" },
        { title: "Summarization 01", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con", date: "23/12/2024" },

        { title: "Summarization 01", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con", date: "23/12/2024" },
        { title: "Summarization 01", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con", date: "23/12/2024" },
      ];
    
      return (
        <div className="p-6 space-y-4 mt-6">
          <h1 className="text-2xl font-semibold text-center">Saved Summaries</h1>
          <div className="flex flex-col md:flex-row gap-2 flex-wrap">
            {summaries.map((summary, index) => (
              <SummaryCard
                key={index}
                description={summary.description}
                date={summary.date}
              />
            ))}
          </div>
          {/* <Modal isOpen={true} onClose={ () => {true}} title={"ddddddd"}><>jdjdjdjdjdj</></Modal> */}
        </div>
      );
};

export default RewrittenHistory;
