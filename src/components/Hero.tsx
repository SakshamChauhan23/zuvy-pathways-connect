import { Button } from "@/components/ui/button";
import zuvyLogo from "@/assets/zuvy-logo-new.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-green/20 to-moss-green/20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <header className="absolute top-0 left-0 right-0 pt-6">
          <nav className="container mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={zuvyLogo} alt="Zuvy" className="h-8 w-auto" />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#programs" className="text-white/90 hover:text-white transition-smooth">Programs</a>
              <a href="#impact" className="text-white/90 hover:text-white transition-smooth">Impact</a>
              <a href="#testimonials" className="text-white/90 hover:text-white transition-smooth">Success Stories</a>
              <Button variant="outline" className="border-white/30 bg-white text-forest-green hover:bg-white/90">
                Contact Us
              </Button>
            </div>
          </nav>
        </header>

        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center pt-24">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Intelligent Learning Solutions for{" "}
              <span className="bg-gradient-to-r from-sunbeam-yellow to-moss-green bg-clip-text text-transparent">
                Businesses, NGOs & Learners
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Zuvy, powered by NavGurukul, offers a smart learning platform that bridges the gap between education and employability. From custom LMS solutions for organizations to industry-ready bootcamps for learners, we enable communities and companies to thrive through accessible, future-focused tech education.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-sunbeam-yellow text-forest-green hover:bg-sunbeam-yellow/90 shadow-medium font-semibold px-8 py-4 text-lg"
              >
                Start Your Tech Journey
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-forest-green bg-white text-forest-green px-8 py-4 text-lg"
              >
                Partner With Us
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Floating elements with animations */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-sunbeam-yellow/20 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-moss-green/20 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-white/10 rounded-full animate-ping"></div>
              
              <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-3xl opacity-30 transform rotate-6 animate-pulse"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 animate-fade-in">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center animate-scale-in">
                    <div className="text-3xl font-bold text-sunbeam-yellow mb-2">2,000+</div>
                    <div className="text-white/80 text-sm">Learners Trained</div>
                  </div>
                  <div className="text-center animate-scale-in" style={{animationDelay: '0.1s'}}>
                    <div className="text-3xl font-bold text-moss-green mb-2">18+</div>
                    <div className="text-white/80 text-sm">States Reached</div>
                  </div>
                  <div className="text-center animate-scale-in" style={{animationDelay: '0.2s'}}>
                    <div className="text-3xl font-bold text-sunbeam-yellow mb-2">Top Tier</div>
                    <div className="text-white/80 text-sm">Placements</div>
                  </div>
                  <div className="text-center animate-scale-in" style={{animationDelay: '0.3s'}}>
                    <div className="text-3xl font-bold text-moss-green mb-2">100%</div>
                    <div className="text-white/80 text-sm">Industry Ready</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;