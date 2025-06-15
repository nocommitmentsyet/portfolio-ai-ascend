import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DashboardPreview from "@/components/DashboardPreview";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        {/* Mock Interview Coach card */}
        <section className="my-10 px-4">
          <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
            {/* Other cards/components could go here */}
            <Link
              to="/mock-interview-coach"
              className="block"
              aria-label="Open Mock Interview Coach"
            >
              <div className="rounded-2xl border border-portfolioai-purple bg-white shadow-md transition-transform hover:scale-[1.025] hover:shadow-lg cursor-pointer p-7 flex flex-col h-full">
                <span className="text-sm font-semibold text-portfolioai-purple mb-2 uppercase tracking-wide">
                  NEW
                </span>
                <h2 className="text-2xl font-display font-bold mb-1 text-gray-900">
                  Mock Interview Coach
                </h2>
                <p className="text-gray-700 mb-2">
                  Paste your résumé and job description to start a tailored interview chat
                </p>
                <ul className="list-disc list-inside text-gray-500 text-sm">
                  <li>Practice realistic interviews</li>
                  <li>Get context-aware questions</li>
                  <li>Receive feedback tailored to your résumé</li>
                </ul>
              </div>
            </Link>
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
