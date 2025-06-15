
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const MockInterviewCoach = () => {
  const [resume, setResume] = useState("");
  const [jobDesc, setJobDesc] = useState("");

  const canStart = resume.trim().length > 0 && jobDesc.trim().length > 0;

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      <main className="flex-1 flex flex-col w-full py-10 px-2 sm:px-4 md:px-8">
        {/* Feature header */}
        <div className="w-full max-w-4xl mx-auto">
          <h1 className="text-[2rem] sm:text-4xl md:text-5xl font-bold text-portfolioai-purple mb-3 text-left leading-tight">
            Mock Interview Coach
          </h1>
          <p className="text-lg text-gray-700 font-medium mb-6 max-w-2xl text-left">
            Let users simulate a mock interview based on the specific job they’re applying to and their own résumé. This helps them prepare with context-aware questions and feedback.
          </p>
        </div>
        {/* Form Inputs */}
        <form
          className="w-full max-w-4xl mx-auto bg-white/90 border border-portfolioai-soft-purple/30 px-4 md:px-8 py-8 rounded-2xl shadow-sm flex flex-col gap-8"
          style={{
            boxShadow:
              "0 2px 8px 0 rgba(170,150,250,0.07), 0 1.5px 6px 0 rgba(220,220,240,0.04)"
          }}
          onSubmit={e => {
            e.preventDefault();
            // To be connected with chat logic in the future
          }}
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="resume"
              className="block text-base font-semibold text-gray-700 mb-1"
            >
              Paste your résumé
            </label>
            <Textarea
              id="resume"
              value={resume}
              onChange={e => setResume(e.target.value)}
              placeholder="e.g. I’m a full-stack developer with 3+ years of experience in React, Node.js…"
              className="min-h-[112px] rounded-lg border border-portfolioai-soft-purple/40 bg-portfolioai-soft-purple/15 text-base px-4 py-3"
              required
              autoComplete="off"
              spellCheck={true}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="jobdesc"
              className="block text-base font-semibold text-gray-700 mb-1"
            >
              Paste the job description
            </label>
            <Textarea
              id="jobdesc"
              value={jobDesc}
              onChange={e => setJobDesc(e.target.value)}
              placeholder="e.g. We’re hiring a frontend engineer with strong communication and leadership skills…"
              className="min-h-[112px] rounded-lg border border-portfolioai-soft-purple/40 bg-portfolioai-soft-blue/10 text-base px-4 py-3"
              required
              autoComplete="off"
              spellCheck={true}
            />
          </div>

          <Button
            type="submit"
            className="font-bold text-base md:text-lg w-full bg-portfolioai-purple hover:bg-portfolioai-vivid-purple shadow-none py-2 transition"
            disabled={!canStart}
          >
            Start Interview Chat
          </Button>
        </form>
      </main>
    </div>
  );
};

export default MockInterviewCoach;
