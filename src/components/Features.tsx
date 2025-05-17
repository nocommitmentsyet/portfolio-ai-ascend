
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const featuresData = [
  {
    title: "AI Portfolio Builder",
    description: "Convert your resume or LinkedIn profile into a stunning portfolio website in minutes.",
    icon: "✨",
  },
  {
    title: "ATS-Friendly Resume",
    description: "Generate or optimize resumes that pass through Applicant Tracking Systems with ease.",
    icon: "📄",
  },
  {
    title: "Cover Letter Writer",
    description: "Create personalized cover letters for each job application with one click.",
    icon: "✉️",
  },
  {
    title: "Mock Interview Coach",
    description: "Practice with AI-powered interview simulations and get real-time feedback.",
    icon: "🎯",
  },
  {
    title: "Career Coaching",
    description: "Receive personalized advice to bridge skill gaps and boost your employability.",
    icon: "🚀",
  },
  {
    title: "Smart Job Alerts",
    description: "Get notified about relevant job opportunities matching your skills and preferences.",
    icon: "🔔",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-portfolioai-soft-purple/30">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">All-in-One Job Search Assistant</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to stand out in the job market, powered by AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-all animate-scale-in">
              <CardHeader>
                <div className="text-3xl mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
