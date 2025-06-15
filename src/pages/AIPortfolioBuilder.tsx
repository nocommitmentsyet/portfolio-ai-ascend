
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import { CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type GenerationStatus = "idle" | "generating" | "success";

const AIPortfolioBuilder = () => {
  const [inputText, setInputText] = useState('');
  const [generationStatus, setGenerationStatus] = useState<GenerationStatus>("idle");
  const [portfolioUrl, setPortfolioUrl] = useState<string>('');
  const { toast } = useToast();

  // Simulate backend call
  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || generationStatus === "generating") return;

    setGenerationStatus("generating");
    setPortfolioUrl('');

    // Simulate backend portfolio generation and file hosting
    setTimeout(() => {
      // In a real scenario, this URL should come from your backend.
      // Here, we generate a Blob URL for demonstration.
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
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-grow flex justify-center items-center px-4 py-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center mb-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-portfolioai-vivid-purple to-portfolioai-bright-blue">
              AI Portfolio Builder
            </h1>
            <p className="text-gray-600">Turn your résumé or LinkedIn summary into a professional portfolio website with one click.</p>
          </div>
          <form onSubmit={handleGenerate} className="space-y-4">
            <div>
              <label htmlFor="resume-text" className="block text-sm font-medium text-gray-700 mb-2">
                Paste your résumé or LinkedIn summary
              </label>
              <Textarea
                id="resume-text"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                placeholder="Example: I'm a full-stack developer with 3 years of experience in React, Node.js…"
                className="min-h-[160px] text-sm"
                disabled={generationStatus === "generating" || generationStatus === "success"}
                required
              />
            </div>
            {generationStatus !== "success" && (
              <Button
                type="submit"
                className="w-full bg-portfolioai-purple hover:bg-portfolioai-vivid-purple"
                disabled={!inputText.trim() || generationStatus === "generating"}
              >
                {generationStatus === "generating" ? "Generating your portfolio..." : "Generate Portfolio Site"}
              </Button>
            )}
          </form>
          {/* Progress/Success Output */}
          {generationStatus === "generating" && (
            <div className="flex items-center justify-center gap-3 text-portfolioai-purple mt-2 animate-pulse">
              <svg className="animate-spin h-5 w-5 text-portfolioai-purple" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
              <span className="font-medium">Generating your portfolio… this may take a few seconds.</span>
            </div>
          )}
          {generationStatus === "success" && (
            <div className="space-y-5 flex flex-col items-center transition-all">
              <div className="flex items-center gap-2 text-green-700 font-medium bg-green-50 py-3 px-4 rounded-md">
                <CheckCircle size={20} />
                Your portfolio is ready!
              </div>
              <Button
                onClick={handleDownload}
                className="w-full md:w-auto bg-portfolioai-purple hover:bg-portfolioai-vivid-purple"
              >
                Download Portfolio (.html)
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIPortfolioBuilder;

