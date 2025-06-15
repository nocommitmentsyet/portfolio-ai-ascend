
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DashboardPreview from "@/components/DashboardPreview";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import InterviewCard from "@/components/InterviewCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        
        {/* Custom section to ensure Mock Interview Coach card is properly linked */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">AI-Powered Career Tools</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Enhance your job search with our comprehensive suite of AI tools
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link to="/cover-letter-writer" className="block transition-transform hover:scale-105">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer border">
                  <h3 className="font-semibold mb-2">Cover Letter Writer</h3>
                  <p className="text-sm text-muted-foreground">
                    Generate personalized cover letters in seconds
                  </p>
                </div>
              </Link>
              
              <Link to="/mock-interview-coach" className="block transition-transform hover:scale-105">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer border">
                  <h3 className="font-semibold mb-2">Mock Interview Coach</h3>
                  <p className="text-sm text-muted-foreground">
                    Practice interviews with AI-powered coaching
                  </p>
                </div>
              </Link>
              
              <Link to="/ats-resume" className="block transition-transform hover:scale-105">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer border">
                  <h3 className="font-semibold mb-2">ATS Resume</h3>
                  <p className="text-sm text-muted-foreground">
                    Optimize your resume for applicant tracking systems
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        
        <DashboardPreview />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
