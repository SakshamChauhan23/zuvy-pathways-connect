import { Button } from "@/components/ui/button";
import zuvyLogo from "@/assets/zuvy-logo-new.png";

interface NavigationProps {
  currentPage?: string;
}

const Navigation = ({ currentPage = "" }: NavigationProps) => {
  const handleLoginClick = () => {
    window.open("https://app.zuvy.org/", "_blank");
  };

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <nav className="container mx-auto">
        <div className="bg-white/60 backdrop-blur-sm border border-forest-green/5 rounded-3xl shadow-md px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <a href="/">
                <div className="bg-forest-green/5 rounded-2xl p-2 hover:bg-forest-green/10 transition-all duration-300">
                  <img src={zuvyLogo} alt="Zuvy" className="h-10 w-auto" />
                </div>
              </a>
            </div>

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
              <Button
                variant="ghost"
                className="text-forest-green hover:bg-forest-green/10 rounded-2xl p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;