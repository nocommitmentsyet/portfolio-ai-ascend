import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Navbar = () => {
  return <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-portfolioai-purple text-white font-bold rounded-md p-1.5">
            PA
          </div>
          <span className="text-xl font-display font-bold">Portfolio AI</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/features" className="text-sm font-medium hover:text-portfolioai-purple transition-colors">
            Features
          </Link>
          <Link to="/pricing" className="text-sm font-medium hover:text-portfolioai-purple transition-colors">
            Pricing
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-portfolioai-purple transition-colors">
            About
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            Log in
          </Button>
          <Button size="sm" className="bg-portfolioai-purple hover:bg-portfolioai-vivid-purple">
            Get Started
          </Button>
        </div>
      </div>
    </nav>;
};
export default Navbar;