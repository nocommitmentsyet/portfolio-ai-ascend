
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
            className="block rounded-2xl shadow-lg hover:shadow-2xl border bg-white hover:bg-gray-50 transition px-8 py-10 group focus:outline-none focus:ring-2 focus:ring-portfolioai-purple"
            style={{ textDecoration: "none" }}
            tabIndex={0}
          >
            <div className="flex items-center gap-4 mb-5">
              <span className="inline-block text-[2.1rem] leading-none">
                🎯
              </span>
              <span className="text-2xl font-extrabold text-gray-900 group-hover:text-portfolioai-purple transition">
                Mock Interview Coach
              </span>
            </div>
            <p className="text-xl text-gray-600">
              Practice with AI-powered interview simulations and get real-time feedback.
            </p>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
