
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Download, Copy, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useToast } from "@/hooks/use-toast";

interface GeneratedPortfolio {
  name: string;
  title: string;
  summary: string;
  skills: string[];
  experience: {
    company: string;
    role: string;
    duration: string;
    description: string;
  }[];
}

function parseResumeText(input: string): GeneratedPortfolio {
  // Extremely basic parsing logic for demonstration. REAL parsing should be backend AI-powered.
  const lines = input.split('\n').map(l => l.trim()).filter(Boolean);

  let name = "";
  let title = "";
  let summary = "";
  let skills: string[] = [];
  let experience: { company: string; role: string; duration: string; description: string }[] = [];

  // Try to infer fields from the resume-like pattern
  // Assume first non-empty line(s) are name & title
  if (lines.length) {
    name = lines[0];
  }
  if (lines.length > 1) {
    title = lines[1];
  }

  // Try finding "Skills" or "Technical Skills" section
  let skillsIdx = lines.findIndex(l => l.toLowerCase().startsWith("skills"));
  if (skillsIdx !== -1 && lines[skillsIdx + 1]) {
    skills = lines[skillsIdx + 1]
      .replace(/•/g, ',')
      .split(/,|·|•|\|/)
      .map(s => s.trim())
      .filter(Boolean);
  }

  // Try to find Work Experience section
  let expIdx = lines.findIndex(
    l => l.toLowerCase().includes("experience") || l.toLowerCase().includes("work history")
  );

  if (expIdx !== -1) {
    let expLines = lines.slice(expIdx + 1);
    // Naively chunk work experience by empty lines or dashes
    let block: string[] = [];
    for (const line of expLines) {
      if (!line || /^-+$/.test(line)) {
        if (block.length >= 2) {
          // Try to parse block into entry
          let [roleLine, ...rest] = block;
          let company = "";
          let role = roleLine;
          let duration = "";
          let description = "";
          if (rest.length) {
            company = rest[0];
            duration = rest[1] || "";
            description = rest.slice(2).join(" ");
          }
          experience.push({
            company: company,
            role: role,
            duration: duration,
            description: description,
          });
        }
        block = [];
      } else {
        block.push(line);
      }
    }
    // Last block
    if (block.length >= 2) {
      let [roleLine, ...rest] = block;
      let company = "";
      let role = roleLine;
      let duration = "";
      let description = "";
      if (rest.length) {
        company = rest[0];
        duration = rest[1] || "";
        description = rest.slice(2).join(" ");
      }
      experience.push({
        company: company,
        role: role,
        duration: duration,
        description: description,
      });
    }
    if (experience.length === 0) experience = [{ company: '', role: '', duration: '', description: expLines.join(' ') }];
  }

  // Summary is everything before skills or experience, after title
  let beforeSkillsOrExp = Math.min(
    skillsIdx !== -1 ? skillsIdx : lines.length,
    expIdx !== -1 ? expIdx : lines.length
  );
  let summaryLines = lines.slice(2, beforeSkillsOrExp);
  summary = summaryLines.join(' ');
  if (!summary && lines.length >= 3) summary = lines.slice(2).join(' ');

  // Fallbacks: If parsing failed, fill the fields to something reasonable
  if (!name) name = "(Your Name)";
  if (!title) title = "Professional Title";
  if (!summary) summary = input;
  if (!skills.length) skills = [];
  if (!experience.length) experience = [];

  return { name, title, summary, skills, experience: experience.slice(0, 3) };
}

const AIPortfolioBuilder = () => {
  const [inputText, setInputText] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPortfolio, setGeneratedPortfolio] = useState<GeneratedPortfolio | null>(null);
  const { toast } = useToast();

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setIsGenerating(true);

    setTimeout(() => {
      const parsedPortfolio = parseResumeText(inputText);

      setGeneratedPortfolio(parsedPortfolio);
      setIsGenerating(false);

      toast({
        title: "Portfolio Generated Successfully!",
        description: "Your portfolio site is ready to view and share.",
      });
    }, 800);
  };

  const handleViewFullSite = () => {
    // In a real app, this would open the user's portfolio site
    window.open('#', '_blank');
  };

  const handleDownload = () => {
    toast({
      title: "Download Started",
      description: "Your portfolio HTML file will be downloaded shortly.",
    });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://your-portfolio-url.com');
    toast({
      title: "Link Copied!",
      description: "Portfolio link has been copied to your clipboard.",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-portfolioai-vivid-purple to-portfolioai-bright-blue">
            AI Portfolio Builder
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your résumé into a stunning portfolio website in seconds. Just paste your content and let AI do the rest.
          </p>
        </div>

        {/* Input Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Create Your Portfolio</CardTitle>
            <CardDescription>
              Paste your résumé content or LinkedIn summary below to get started.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleGenerate} className="space-y-4">
              <div>
                <label htmlFor="resume-text" className="block text-sm font-medium text-gray-700 mb-2">
                  Paste your résumé or LinkedIn summary
                </label>
                <Textarea
                  id="resume-text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Example: I'm a full-stack developer with 3 years of experience in React, Node.js…"
                  className="min-h-[200px] text-sm"
                  disabled={isGenerating}
                />
              </div>

              <Button 
                type="submit" 
                disabled={!inputText.trim() || isGenerating}
                className="w-full bg-portfolioai-purple hover:bg-portfolioai-vivid-purple"
              >
                {isGenerating ? "Generating Portfolio Site..." : "Generate Portfolio Site"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Generated Portfolio Preview */}
        {generatedPortfolio && (
          <div className="space-y-6">
            {/* Success Message */}
            <div className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-lg">
              <CheckCircle size={20} />
              <span className="font-medium">Portfolio generated successfully!</span>
            </div>

            {/* Preview Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Here's a preview of your portfolio</h2>

              <Card className="shadow-lg">
                <CardContent className="p-8">
                  {/* Name and Title */}
                  <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{generatedPortfolio.name}</h1>
                    <p className="text-xl text-portfolioai-purple font-medium">{generatedPortfolio.title}</p>
                  </div>

                  {/* Summary */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">About Me</h3>
                    <p className="text-gray-700 leading-relaxed">{generatedPortfolio.summary}</p>
                  </div>

                  {/* Skills */}
                  {generatedPortfolio.skills.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {generatedPortfolio.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="bg-portfolioai-soft-purple text-portfolioai-purple">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  )}

                  {/* Experience */}
                  {generatedPortfolio.experience.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Work Experience</h3>
                    <div className="space-y-6">
                      {generatedPortfolio.experience.map((exp, index) => (
                        <div key={index} className="border-l-2 border-portfolioai-purple pl-4">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h4 className="font-semibold text-gray-900">{exp.role}</h4>
                            <span className="text-sm text-gray-600">{exp.duration}</span>
                          </div>
                          <p className="text-portfolioai-purple font-medium mb-2">{exp.company}</p>
                          <p className="text-gray-700 text-sm">{exp.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleViewFullSite}
                className="flex-1 bg-portfolioai-purple hover:bg-portfolioai-vivid-purple"
              >
                <ExternalLink size={16} className="mr-2" />
                View Full Site
              </Button>
              
              <Button 
                onClick={handleDownload}
                variant="outline"
                className="flex-1"
              >
                <Download size={16} className="mr-2" />
                Download Portfolio (HTML)
              </Button>
              
              <Button 
                onClick={handleCopyLink}
                variant="outline"
                className="flex-1"
              >
                <Copy size={16} className="mr-2" />
                Copy Shareable Link
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIPortfolioBuilder;

