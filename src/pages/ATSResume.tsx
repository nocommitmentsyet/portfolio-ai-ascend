
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Upload, FileText, CheckCircle, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";

const ATSResume = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState('');
  const [analyzed, setAnalyzed] = useState(false);
  const [score] = useState(78);

  const sampleJobDescription = `We are seeking a Frontend Developer to join our dynamic team. The ideal candidate will have:

• 3+ years of experience with React, JavaScript, and TypeScript
• Strong knowledge of HTML5, CSS3, and responsive design
• Experience with Git, Webpack, and modern development tools
• Proven track record of collaborating with cross-functional teams
• Bachelor's degree in Computer Science or related field
• Strong problem-solving skills and attention to detail
• Experience with Agile development methodologies

Responsibilities include developing user interfaces, optimizing application performance, and mentoring junior developers.`;

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setResumeFile(file);
    }
  };

  const handleAnalyze = () => {
    setAnalyzed(true);
  };

  const isAnalyzeDisabled = !resumeFile || !jobDescription.trim();

  const suggestions = [
    {
      category: "Formatting Fixes",
      items: [
        "Ensure consistent bullet point formatting throughout",
        "Use standard section headers (Experience, Education, Skills)",
        "Maintain consistent font sizes and spacing"
      ]
    },
    {
      category: "Keyword Gaps",
      items: [
        "Add 'React' and 'TypeScript' to your skills section",
        "Include 'Agile' or 'Scrum' experience",
        "Mention 'cross-functional collaboration'"
      ]
    },
    {
      category: "Achievement Phrasing",
      items: [
        "Quantify accomplishments with specific numbers",
        "Use action verbs like 'Developed', 'Implemented', 'Optimized'",
        "Focus on impact rather than just responsibilities"
      ]
    }
  ];

  const rewriteSuggestions = [
    {
      before: "Helped with website development projects",
      after: "Developed 5+ responsive web applications using React and TypeScript, improving user engagement by 25%"
    },
    {
      before: "Worked on team projects",
      after: "Collaborated with cross-functional teams of 8+ members to deliver projects 15% ahead of schedule"
    },
    {
      before: "Used various programming languages",
      after: "Utilized JavaScript, TypeScript, and React to build scalable frontend solutions serving 10,000+ users"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-portfolioai-vivid-purple to-portfolioai-bright-blue">
              ATS-Friendly Resume Optimizer
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Upload your resume and paste a job description to get personalized feedback and optimization suggestions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* File Upload Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload size={20} />
                  Upload Your Resume
                </CardTitle>
                <CardDescription>
                  Upload your resume in PDF or DOCX format
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-portfolioai-purple transition-colors">
                  <Input
                    type="file"
                    accept=".pdf,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="resume-upload"
                  />
                  <label htmlFor="resume-upload" className="cursor-pointer">
                    <FileText size={48} className="mx-auto mb-4 text-gray-400" />
                    {resumeFile ? (
                      <div>
                        <p className="text-sm font-medium text-portfolioai-purple">
                          {resumeFile.name}
                        </p>
                        <p className="text-xs text-gray-500">Click to change file</p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-sm font-medium">Click to upload resume</p>
                        <p className="text-xs text-gray-500">PDF or DOCX, max 5MB</p>
                      </div>
                    )}
                  </label>
                </div>
              </CardContent>
            </Card>

            {/* Job Description Section */}
            <Card>
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
                <CardDescription>
                  Paste the job description you're targeting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder={sampleJobDescription}
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  className="min-h-[200px] text-sm"
                />
              </CardContent>
            </Card>
          </div>

          {/* Analyze Button */}
          <div className="text-center mb-8">
            <Button
              size="lg"
              onClick={handleAnalyze}
              disabled={isAnalyzeDisabled}
              className="bg-portfolioai-purple hover:bg-portfolioai-vivid-purple"
            >
              Analyze My Resume
            </Button>
          </div>

          {/* Results Section */}
          {analyzed && (
            <div className="space-y-8 animate-fade-in">
              {/* Score Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Resume Score
                    <span className="text-2xl font-bold text-portfolioai-purple">{score}/100</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Progress value={score} className="h-3 mb-2" />
                  <p className="text-sm text-gray-600">
                    Your resume shows good potential! Here are some areas for improvement.
                  </p>
                </CardContent>
              </Card>

              {/* Suggestions Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle size={20} />
                    Improvement Suggestions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {suggestions.map((section, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-portfolioai-purple mb-3">
                          {section.category}
                        </h4>
                        <ul className="space-y-2">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2 text-sm">
                              <div className="w-2 h-2 bg-portfolioai-purple rounded-full mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Rewrite Suggestions Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle size={20} />
                    Rewrite Suggestions
                  </CardTitle>
                  <CardDescription>
                    See how to transform weak bullet points into powerful achievements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {rewriteSuggestions.map((suggestion, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium text-red-600 mb-2">Before:</h5>
                            <p className="text-sm text-gray-600 bg-red-50 p-3 rounded">
                              {suggestion.before}
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-green-600 mb-2">After:</h5>
                            <p className="text-sm text-gray-600 bg-green-50 p-3 rounded">
                              {suggestion.after}
                            </p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Button variant="outline" size="sm" className="text-portfolioai-purple border-portfolioai-purple hover:bg-portfolioai-soft-purple">
                            Apply Fix
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ATSResume;
