import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileText, Download } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
const formSchema = z.object({
  jobDescription: z.string().min(10, "Job description must be at least 10 characters"),
  resume: z.string().min(10, "Resume must be at least 10 characters"),
  tone: z.string().min(1, "Please select a tone")
});
export default function CoverLetterWriter() {
  const [coverLetter, setCoverLetter] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobDescription: "",
      resume: "",
      tone: ""
    }
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsGenerating(true);

    // Simulate API call with timeout
    setTimeout(() => {
      // Placeholder cover letter content based on tone
      let generatedContent = "";
      switch (values.tone) {
        case "formal":
          generatedContent = `Dear Hiring Manager,\n\nI am writing to express my interest in the position advertised. With my background and experience, I believe I would be an excellent fit for this role.\n\nBased on the job description, I understand you're looking for someone with expertise in ${values.jobDescription.split(' ').slice(0, 3).join(' ')}...\n\nMy experience includes ${values.resume.split(' ').slice(0, 5).join(' ')}...\n\nThank you for considering my application. I look forward to the opportunity to discuss my qualifications further.\n\nSincerely,\nYour Name`;
          break;
        case "friendly":
          generatedContent = `Hi there,\n\nI'm excited to apply for this role! When I saw the position posted, I knew it would be a great match for my skills and interests.\n\nI noticed you're looking for someone who can ${values.jobDescription.split(' ').slice(0, 4).join(' ')}...\n\nDuring my career, I've ${values.resume.split(' ').slice(0, 6).join(' ')}...\n\nI'd love to chat more about how my background could benefit your team!\n\nWarmly,\nYour Name`;
          break;
        case "bold":
          generatedContent = `To whom it may concern,\n\nI'm the candidate you've been searching for.\n\nYour job posting mentions ${values.jobDescription.split(' ').slice(0, 3).join(' ')}... I don't just meet these requirements — I exceed them.\n\nMy track record speaks for itself: ${values.resume.split(' ').slice(0, 5).join(' ')}...\n\nI'm ready to bring these results to your organization. Let's talk soon.\n\nConfidently,\nYour Name`;
          break;
        case "conversational":
          generatedContent = `Hello!\n\nI came across your job posting and thought, "Wow, this is exactly what I've been looking for!"\n\nFrom what I understand, you need someone who can handle ${values.jobDescription.split(' ').slice(0, 4).join(' ')}...\n\nA bit about me: ${values.resume.split(' ').slice(0, 7).join(' ')}...\n\nI'd really enjoy talking more about this opportunity when you have time!\n\nCheers,\nYour Name`;
          break;
        default:
          generatedContent = `Dear Hiring Manager,\n\nI am writing to express my interest in the position advertised. With my background and experience, I believe I would be an excellent fit for this role.\n\nThank you for considering my application.\n\nSincerely,\nYour Name`;
      }
      setCoverLetter(generatedContent);
      setIsGenerating(false);
      toast.success("Cover letter generated successfully!");
    }, 1500);
  };
  const downloadCoverLetter = () => {
    toast.success("Cover letter download started!");
    // In a real implementation, this would download a .docx file
  };
  return <div className="container py-10 max-w-5xl">
      <Button onClick={() => navigate("/")} variant="ghost" className="mb-6">
        ← Back to home
      </Button>
      
      <div className="flex flex-col space-y-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-portfolioai-vivid-purple to-portfolioai-bright-blue mb-2">
            Cover Letter Writer
          </h1>
          <p className="text-muted-foreground text-lg">Generate a tailored cover letter that matches the job description in seconds.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Generate Your Cover Letter</CardTitle>
            <CardDescription>
              Paste your job description and resume below to get started.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField control={form.control} name="jobDescription" render={({
                field
              }) => <FormItem>
                      <FormLabel>Job Description</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Paste job description here..." className="min-h-[150px] resize-none" {...field} />
                      </FormControl>
                    </FormItem>} />

                <FormField control={form.control} name="resume" render={({
                field
              }) => <FormItem>
                      <FormLabel>Your Resume</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Paste your resume or LinkedIn text here..." className="min-h-[150px] resize-none" {...field} />
                      </FormControl>
                    </FormItem>} />

                <FormField control={form.control} name="tone" render={({
                field
              }) => <FormItem>
                      <FormLabel>Select Tone</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose a tone for your letter" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="formal">Formal</SelectItem>
                          <SelectItem value="friendly">Friendly</SelectItem>
                          <SelectItem value="bold">Bold</SelectItem>
                          <SelectItem value="conversational">Conversational</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>} />

                <Button type="submit" className="w-full bg-portfolioai-purple hover:bg-portfolioai-vivid-purple" disabled={isGenerating || !form.formState.isValid}>
                  <FileText className="mr-2 h-4 w-4" />
                  {isGenerating ? "Generating..." : "Generate Cover Letter"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {coverLetter && <Card>
            <CardHeader>
              <CardTitle>Your Cover Letter</CardTitle>
              <CardDescription>
                Edit your cover letter below before downloading.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea value={coverLetter} onChange={e => setCoverLetter(e.target.value)} className="min-h-[400px] p-4 font-sans text-base leading-relaxed" />
            </CardContent>
            <CardFooter>
              <Button onClick={downloadCoverLetter} className="bg-portfolioai-bright-blue hover:bg-blue-600">
                <Download className="mr-2 h-4 w-4" />
                Download Cover Letter
              </Button>
            </CardFooter>
          </Card>}
      </div>
    </div>;
}