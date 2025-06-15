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
        <DashboardPreview />
        <Testimonials />
        <CTA />
        <section className="my-12 max-w-5xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
          <Link
            to="/mock-interview-coach"
            className="block rounded-xl shadow-lg hover:shadow-2xl border bg-gradient-to-br from-portfolioai-purple/10 to-portfolioai-bright-blue/10 hover:bg-gradient-to-tl transition px-6 py-8 group"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block bg-portfolioai-purple text-white rounded-full p-2 text-xl font-bold">
                🧑‍💼
              </span>
              <span className="text-xl font-semibold group-hover:text-portfolioai-bright-blue transition">
                Mock Interview Coach
              </span>
            </div>
            <p className="text-gray-600">
              Practice technical and behavioral interviews in a chat with your AI coach &mdash; get tailored feedback, tips, and boost your skills!
            </p>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
