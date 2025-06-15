
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type GenerationStatus = "idle" | "generating" | "success";

const AIPortfolioBuilder = () => {
  const [inputText, setInputText] = useState('');
  const [generationStatus, setGenerationStatus] = useState<GenerationStatus>("idle");
  const [portfolioUrl, setPortfolioUrl] = useState<string>('');
  const { toast } = useToast();

  // Simulate backend call (replace with real API call when backend is ready)
  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || generationStatus === "generating") return;
    setGenerationStatus("generating");
    setPortfolioUrl('');

    // Simulate backend response delay
    setTimeout(() => {
      const blob = new Blob([
        `<!DOCTYPE html>
        <html lang="en"><head><meta charset="UTF-8"><title>Portfolio</title></head>
        <body><h1>Your Portfolio</h1><p>${inputText.replace(/\n/g, "<br />")}</p></body></html>`
      ], { type: "text/html" });
      const url = URL.createObjectURL(blob);

      setPortfolioUrl(url);
      setGenerationStatus("success");
      toast({
        title: "Your portfolio is ready!",
        description: "You can now download your HTML portfolio.",
      });
    }, 2000);
  };

  const handleDownload = () => {
    if (!portfolioUrl) return;
    const link = document.createElement('a');
    link.href = portfolioUrl;
    link.download = 'portfolio.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(portfolioUrl), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-portfolioai-soft-purple/50 via-white to-portfolioai-soft-blue/40 flex flex-col font-sans">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center px-2 sm:px-6 py-10 md:py-16">
        <section
          className="w-full max-w-[950px] md:max-w-[950px] mx-auto px-0 md:px-12"
        >
          {/* Title & Subtitle */}
          <header className="text-center mt-10 mb-7 md:mt-14 md:mb-10">
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-portfolioai-vivid-purple tracking-tight leading-tight mb-2">
              AI Portfolio Builder
            </h1>
            <p className="font-sans text-lg md:text-2xl text-gray-700 font-medium max-w-2xl mx-auto mb-4">
              Turn your résumé or LinkedIn summary into a professional portfolio website in seconds.
            </p>
          </header>

          <form
            onSubmit={handleGenerate}
            className="flex flex-col gap-10 md:gap-12 w-full"
          >
            <div
              className="flex flex-col gap-0 bg-white/75 border border-portfolioai-soft-purple/40 rounded-2xl shadow-md shadow-portfolioai-soft-purple/10 p-7 sm:p-10 md:p-12 transition-all"
              style={{
                boxShadow:
                  "0 2.5px 12px 0 rgba(160,139,255,0.07), 0 1.5px 8px 0 rgba(180,180,210,0.04)",
              }}
            >
              <label
                htmlFor="resume-text"
                className="block text-base font-semibold text-gray-700 mb-0.5 font-sans"
              >
                Paste your résumé or LinkedIn summary below
              </label>
              <Textarea
                id="resume-text"
                required
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                placeholder="Example: I'm a full-stack developer with 3 years of experience in React, Node.js…"
                className="min-h-[210px] md:min-h-[260px] rounded-lg border border-portfolioai-soft-purple/60 bg-portfolioai-soft-purple/25 text-base px-6 py-6 focus:outline-none focus:ring-2 focus:ring-portfolioai-purple resize-none transition font-sans mt-2"
                disabled={generationStatus === "generating" || generationStatus === "success"}
                rows={10}
              />

              {generationStatus === "idle" && (
                <Button
                  type="submit"
                  className="w-full text-lg font-bold bg-portfolioai-purple hover:bg-portfolioai-vivid-purple shadow-none py-3 mt-7 mb-10 md:mb-14 font-sans"
                  disabled={!inputText.trim()}
                >
                  Generate Portfolio Site
                </Button>
              )}

              {generationStatus === "generating" && (
                <div className="flex flex-col gap-4 items-center mt-5 mb-10 py-6">
                  <svg className="animate-spin h-7 w-7 text-portfolioai-purple mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle
                      className="opacity-30"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-80"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                  <span className="font-sans font-medium text-lg text-gray-700 text-center">
                    Generating your portfolio… this may take a few seconds.
                  </span>
                </div>
              )}

              {generationStatus === "success" && (
                <div className="flex flex-col items-center gap-6 mt-5 mb-10 py-6">
                  <div className="flex items-center gap-2 text-green-700 font-semibold bg-green-50 py-3 px-5 rounded-md border border-green-200 text-base font-sans">
                    <CheckCircle size={22} />
                    Your portfolio is ready!
                  </div>
                  <Button
                    onClick={handleDownload}
                    type="button"
                    className="w-full md:w-auto bg-portfolioai-purple hover:bg-portfolioai-vivid-purple font-bold text-lg py-3 mt-2 mb-2 font-sans"
                  >
                    Download Portfolio (.html)
                  </Button>
                </div>
              )}
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AIPortfolioBuilder;
