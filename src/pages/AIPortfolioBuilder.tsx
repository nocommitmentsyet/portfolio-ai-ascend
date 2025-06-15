
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
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

    // Simulate backend response delay (replace with your real fetch logic)
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
    <div className="min-h-screen bg-gradient-to-b from-portfolioai-soft-purple/50 via-white to-portfolioai-soft-blue/40 flex flex-col">
      <Navbar />
      {/* MAIN CENTERED CONTENT */}
      <div className="flex-1 flex flex-col items-center justify-center px-2 sm:px-4 py-10 md:py-16">
        <section className="w-full max-w-2xl">
          <Card className="pt-2 pb-8 px-0 md:px-0 shadow-xl border border-portfolioai-soft-purple/60 bg-white/70">
            <CardHeader className="px-7 md:px-14 pt-6 pb-2 flex flex-col gap-0 items-center">
              <CardTitle asChild>
                <h1 className="text-4xl md:text-5xl font-extrabold font-display mt-6 mb-3 text-portfolioai-vivid-purple text-center">
                  AI Portfolio Builder
                </h1>
              </CardTitle>
              <CardDescription asChild>
                <p className="text-base md:text-lg mt-0 mb-1 text-gray-600 font-medium text-center max-w-2xl tracking-tight">
                  Turn your résumé or LinkedIn summary into a professional portfolio website in seconds.
                </p>
              </CardDescription>
            </CardHeader>
            <CardContent className="px-7 md:px-14">
              <form onSubmit={handleGenerate} className="flex flex-col gap-8">
                <div className="flex flex-col gap-1">
                  <label htmlFor="resume-text" className="block text-sm font-semibold text-gray-700 mb-2">
                    Paste your résumé or LinkedIn summary below
                  </label>
                  <Textarea
                    id="resume-text"
                    required
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                    placeholder="Example: I'm a full-stack developer with 3 years of experience in React, Node.js…"
                    className="min-h-[144px] text-base rounded-lg border-portfolioai-soft-purple/60 bg-portfolioai-soft-purple/10  resize-none focus:outline-none focus:ring-2 focus:ring-portfolioai-purple"
                    disabled={generationStatus === "generating" || generationStatus === "success"}
                    rows={4}
                  />
                </div>
                {generationStatus === "idle" && (
                  <Button
                    type="submit"
                    className="w-full text-lg font-bold bg-portfolioai-purple hover:bg-portfolioai-vivid-purple shadow-none py-3 mt-1 mb-4"
                    disabled={!inputText.trim()}
                  >
                    Generate Portfolio Site
                  </Button>
                )}
                {generationStatus === "generating" && (
                  <div className="flex flex-col gap-4 items-center mt-3 mb-6 py-8">
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
                    <span className="font-medium text-lg text-gray-700 text-center">
                      Generating your portfolio… this may take a few seconds.
                    </span>
                  </div>
                )}
                {generationStatus === "success" && (
                  <div className="flex flex-col items-center gap-6 mt-3 mb-6 py-8">
                    <div className="flex items-center gap-2 text-green-700 font-semibold bg-green-50 py-3 px-5 rounded-md border border-green-200 text-base">
                      <CheckCircle size={22} />
                      Your portfolio is ready!
                    </div>
                    <Button
                      onClick={handleDownload}
                      type="button"
                      className="w-full md:w-auto bg-portfolioai-purple hover:bg-portfolioai-vivid-purple font-bold text-lg py-3 mt-2 mb-2"
                    >
                      Download Portfolio (.html)
                    </Button>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default AIPortfolioBuilder;
