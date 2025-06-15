
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
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-xl">
          <Card>
            <CardHeader>
              <CardTitle>
                <h1 className="text-3xl md:text-4xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-portfolioai-vivid-purple to-portfolioai-bright-blue">
                  AI Portfolio Builder
                </h1>
              </CardTitle>
              <CardDescription className="mb-2 text-gray-600">
                Turn your résumé or LinkedIn summary into a professional portfolio website with one click.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleGenerate} className="space-y-6">
                <div>
                  <label htmlFor="resume-text" className="block text-sm font-medium text-gray-700 mb-2">
                    Paste your résumé or LinkedIn summary
                  </label>
                  <Textarea
                    id="resume-text"
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                    placeholder="Example: I'm a full-stack developer with 3 years of experience in React, Node.js…"
                    className="min-h-[120px] text-sm"
                    disabled={generationStatus === "generating" || generationStatus === "success"}
                    required
                  />
                </div>
                {generationStatus === "idle" && (
                  <Button
                    type="submit"
                    className="w-full bg-portfolioai-purple hover:bg-portfolioai-vivid-purple"
                    disabled={!inputText.trim()}
                  >
                    Generate Portfolio Site
                  </Button>
                )}
                {generationStatus === "generating" && (
                  <div className="flex gap-3 items-center justify-center mt-2 text-portfolioai-purple animate-pulse">
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
                      type="button"
                      className="w-full md:w-auto bg-portfolioai-purple hover:bg-portfolioai-vivid-purple"
                    >
                      Download Portfolio (.html)
                    </Button>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AIPortfolioBuilder;
