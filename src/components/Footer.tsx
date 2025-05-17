
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-portfolioai-purple text-white font-bold rounded-md p-1">
                PA
              </div>
              <span className="text-lg font-display font-bold">PortfolioAI</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              AI-powered job search tools to help you land your dream role.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-sm text-gray-900 mb-4">PRODUCT</h3>
            <ul className="space-y-3">
              <li><Link to="/features" className="text-sm text-gray-600 hover:text-portfolioai-purple transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-sm text-gray-600 hover:text-portfolioai-purple transition-colors">Pricing</Link></li>
              <li><Link to="/testimonials" className="text-sm text-gray-600 hover:text-portfolioai-purple transition-colors">Testimonials</Link></li>
              <li><Link to="/faqs" className="text-sm text-gray-600 hover:text-portfolioai-purple transition-colors">FAQs</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm text-gray-900 mb-4">COMPANY</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-gray-600 hover:text-portfolioai-purple transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-sm text-gray-600 hover:text-portfolioai-purple transition-colors">Blog</Link></li>
              <li><Link to="/careers" className="text-sm text-gray-600 hover:text-portfolioai-purple transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-600 hover:text-portfolioai-purple transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm text-gray-900 mb-4">LEGAL</h3>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="text-sm text-gray-600 hover:text-portfolioai-purple transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-gray-600 hover:text-portfolioai-purple transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-sm text-gray-600 hover:text-portfolioai-purple transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">© 2025 PortfolioAI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-600 hover:text-portfolioai-purple">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-portfolioai-purple">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
