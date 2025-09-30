import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import zuvyLogo from "@/assets/zuvy-logo-new.png";

interface NavigationProps {
  currentPage?: string;
}

const Navigation = ({ currentPage = "" }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLoginClick = () => {
    window.open("https://app.zuvy.org/", "_blank");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <nav className="container mx-auto">
        <div className="bg-white border-2 border-forest-green/20 rounded-3xl shadow-xl px-4 md:px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <a href="/">
                <div className="bg-forest-green/10 rounded-2xl p-2 hover:bg-forest-green/20 transition-all duration-300">
                  <img src={zuvyLogo} alt="Zuvy" className="h-8 md:h-10 w-auto" />
                </div>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-2">
              <a
                href="/#programs"
                className="text-forest-green/80 hover:text-forest-green hover:bg-forest-green/10 px-4 py-2 rounded-2xl transition-all duration-300 font-medium"
              >
                Programs
              </a>
              <a
                href="/about"
                className={`px-4 py-2 rounded-2xl transition-all duration-300 font-medium ${
                  currentPage === "about"
                    ? "text-forest-green bg-forest-green/15 hover:bg-forest-green/20"
                    : "text-forest-green/80 hover:text-forest-green hover:bg-forest-green/10"
                }`}
              >
                About Us
              </a>
              <a
                href="/#testimonials"
                className="text-forest-green/80 hover:text-forest-green hover:bg-forest-green/10 px-4 py-2 rounded-2xl transition-all duration-300 font-medium"
              >
                Success Stories
              </a>
              <div className="mx-2 w-px h-6 bg-forest-green/20"></div>
              <Button
                className="bg-forest-green text-white hover:bg-forest-green/90 font-semibold px-6 py-2 rounded-2xl shadow-md transform hover:scale-105 transition-all duration-300"
                onClick={handleLoginClick}
              >
                Login to Zuvy
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                className="text-forest-green hover:bg-forest-green/10 rounded-2xl p-2 transition-colors"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t border-forest-green/10">
              <div className="flex flex-col space-y-2">
                <a
                  href="/#programs"
                  className="text-forest-green hover:text-white hover:bg-forest-green px-4 py-3 rounded-2xl transition-all duration-300 font-medium text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Programs
                </a>
                <a
                  href="/about"
                  className={`px-4 py-3 rounded-2xl transition-all duration-300 font-medium text-center ${
                    currentPage === "about"
                      ? "text-white bg-forest-green"
                      : "text-forest-green hover:text-white hover:bg-forest-green"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </a>
                <a
                  href="/#testimonials"
                  className="text-forest-green hover:text-white hover:bg-forest-green px-4 py-3 rounded-2xl transition-all duration-300 font-medium text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Success Stories
                </a>
                <Button
                  className="bg-sunbeam-yellow text-forest-green hover:bg-sunbeam-yellow/90 font-bold px-6 py-3 rounded-2xl shadow-md transition-all duration-300 w-full"
                  onClick={() => {
                    handleLoginClick();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Login to Zuvy
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;