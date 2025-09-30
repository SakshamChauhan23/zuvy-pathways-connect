import zuvyLogo from "@/assets/zuvy-logo-new.png";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-forest-green text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={zuvyLogo} alt="Zuvy" className="h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-white/80 mb-6 max-w-md leading-relaxed">
              Intelligent learning solutions bridging the gap between education and employability. 
              Powered by NavGurukul, we're transforming careers and communities through accessible, 
              future-focused tech education.
            </p>
            <div className="text-sm text-white/60">
              © 2024 Zuvy. All rights reserved.
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Programs</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="/#programs" className="hover:text-white transition-colors">Website Development</a></li>
              <li><a href="/#programs" className="hover:text-white transition-colors">Artificial Intelligence</a></li>
              <li><a href="/#programs" className="hover:text-white transition-colors">Data Science</a></li>
              <li><a href="/#programs" className="hover:text-white transition-colors">Data Structures & Algorithm using Java</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="https://www.navgurukul.org/about" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">About NavGurukul</a></li>
              <li><a href="/#testimonials" className="hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/20 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            Powered by NavGurukul | Building the future of work through education
          </div>
          <div className="flex space-x-6 text-sm text-white/80">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Careers</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;