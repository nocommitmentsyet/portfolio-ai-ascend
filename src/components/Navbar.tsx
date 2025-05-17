import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Navbar = () => {
  return <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between py-[10px]">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-portfolioai-purple text-white font-bold rounded-md p-1.5">
            PA
          </div>
          <span className="text-xl font-display font-bold">Portfolio AI</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          
          
          
        </div>

        <div className="flex items-center gap-4">
          
          
        </div>
      </div>
    </nav>;
};
export default Navbar;