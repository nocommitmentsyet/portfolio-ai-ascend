
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

const AIPortfolioBuilder = () => {
  const [inputText, setInputText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPortfolio, setGeneratedPortfolio] = useState<GeneratedPortfolio | null>(null);
  const { toast } = useToast();

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setIsGenerating(true);
    
    // Backend integration will happen here
    // For now, simulate the generation process
    setTimeout(() => {
      // Mock generated portfolio data
      const mockPortfolio: GeneratedPortfolio = {
        name: "John Doe",
        title: "Full Stack Developer",
        summary: "Passionate full-stack developer with 3+ years of experience building scalable web applications using modern technologies. Skilled in React, Node.js, and cloud deployment.",
        skills: ["React", "Node.js", "TypeScript", "Python", "AWS", "MongoDB", "PostgreSQL", "Docker"],
        experience: [
          {
            company: "Tech Solutions Inc.",
            role: "Senior Full Stack Developer",
            duration: "2022 - Present",
            description: "Led development of customer-facing web applications serving 10K+ users. Implemented microservices architecture reducing load times by 40%."
          },
          {
            company: "StartupCo",
            role: "Frontend Developer",
            duration: "2021 - 2022",
            description: "Built responsive React applications and collaborated with design team to implement pixel-perfect UI components."
          },
          {
            company: "Digital Agency",
            role: "Junior Developer",
            duration: "2020 - 2021",
            description: "Developed websites for clients using HTML, CSS, JavaScript and worked on multiple CMS integrations."
          }
        ]
      };
      
      setGeneratedPortfolio(mockPortfolio);
      setIsGenerating(false);
      
      toast({
        title: "Portfolio Generated Successfully!",
        description: "Your portfolio site is ready to view and share.",
      });
    }, 2000);
  };

  const handleViewFullSite = () => {
    // This would open the generated portfolio in a new tab
    window.open('#', '_blank');
  };

  const handleDownload = () => {
    // This would trigger the HTML download
    toast({
      title: "Download Started",
      description: "Your portfolio HTML file will be downloaded shortly.",
    });
  };

  const handleCopyLink = () => {
    // This would copy the shareable link
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
          <div className="space-y-6 animate-fade-in">
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

                  {/* Experience */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Work Experience</h3>
                    <div className="space-y-6">
                      {generatedPortfolio.experience.slice(0, 3).map((exp, index) => (
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
