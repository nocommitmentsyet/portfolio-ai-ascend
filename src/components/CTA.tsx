import { Button } from "@/components/ui/button";
const CTA = () => {
  return <section className="py-20 bg-portfolioai-purple text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Job Search?</h2>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Join thousands of job seekers who are landing interviews faster with less stress.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-portfolioai-purple hover:bg-gray-100">
              Get Started for Free
            </Button>
            <Button size="lg" variant="outline" className="border-white hover:bg-white/10 text-[portfolioai-bright-orange] text-black">
              Schedule Demo
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-white/80">
            <p>No credit card required. Start building your professional presence today.</p>
          </div>
        </div>
      </div>
    </section>;
};
export default CTA;