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
    try {
      const response = await fetch('http://127.0.0.1:8000/generate-cover-letter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          job_description: values.jobDescription,
          resume_summary: values.resume,
          tone: values.tone
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }

      // Get the blob from the response since backend returns a .docx file
      const blob = await response.blob();

      // Create a URL for the blob
      const url = window.URL.createObjectURL(blob);

      // Create a temporary link element
      const link = document.createElement('a');
      link.href = url;
      link.download = 'cover_letter.docx';

      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up the URL
      window.URL.revokeObjectURL(url);

      toast.success("Cover letter generated and downloaded successfully!");
    } catch (error) {
      console.error('Error generating cover letter:', error);
      toast.error(error instanceof Error ? error.message : "Failed to generate cover letter. Please try again.");
    } finally {
      setIsGenerating(false);
    }
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
      </Card>}
    </div>
  </div>;
}