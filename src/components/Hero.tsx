import { Button } from "@/components/ui/button";
const Hero = () => {
  return <div className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolioai-soft-purple via-white to-portfolioai-soft-blue opacity-70 z-0"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl lg:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-portfolioai-vivid-purple to-portfolioai-bright-blue font-bold md:text-5xl">Your All In One Job Toolkit</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Automated portfolios, résumés, and interview prep to make your job search less stressful and more successful.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-portfolioai-purple hover:bg-portfolioai-vivid-purple text-white">Get Started</Button>
            
          </div>
          
          <div className="mt-12 text-sm text-gray-500">
            <p>✨ No more staring at blank pages. Let us do the heavy lifting.</p>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;