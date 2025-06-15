
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const MockInterviewCoach = () => {
  const [resume, setResume] = useState("");
  const [jobDesc, setJobDesc] = useState("");

  const canStart = resume.trim() && jobDesc.trim();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-[#f8f8ff] to-[#fcfcfe] font-sans">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-start px-2 sm:px-4 md:pt-8 pt-5 w-full">
        <section className="w-full max-w-[600px] mx-auto">
          {/* Title & Feature Purpose */}
          <header className="mb-2 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-portfolioai-vivid-purple to-portfolioai-bright-blue">
              Mock Interview Coach
            </h1>
            <p className="text-base sm:text-lg text-gray-700 font-medium mx-auto max-w-md mb-3">
              Let’s simulate a mock interview for the job you’re targeting, with questions tailored to your résumé and the job description.
            </p>
          </header>
          {/* Inputs */}
          <form
            className="bg-white/90 border border-portfolioai-soft-purple/30 px-5 sm:px-7 py-7 rounded-2xl shadow-sm flex flex-col gap-5 md:gap-7 transition"
            style={{
              boxShadow:
                "0 2px 8px 0 rgba(170,150,250,0.07), 0 1.5px 6px 0 rgba(220,220,240,0.04)"
            }}
            onSubmit={e => {
              e.preventDefault();
              // Future: start interview chat logic
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
                className="min-h-[96px] md:min-h-[128px] rounded-lg border border-portfolioai-soft-purple/40 bg-portfolioai-soft-purple/15 text-base px-4 py-3"
                required
                rows={5}
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
                className="min-h-[96px] md:min-h-[128px] rounded-lg border border-portfolioai-soft-purple/40 bg-portfolioai-soft-blue/10 text-base px-4 py-3"
                required
                rows={5}
                autoComplete="off"
                spellCheck={true}
              />
            </div>
            <Button
              type="submit"
              className="mt-3 font-bold text-lg w-full bg-portfolioai-purple hover:bg-portfolioai-vivid-purple shadow-none py-2 transition"
              disabled={!canStart}
            >
              Start Interview Chat
            </Button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default MockInterviewCoach;
