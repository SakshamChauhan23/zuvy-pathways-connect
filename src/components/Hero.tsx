import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import heroBackgroundLearning from "@/assets/hero-background-learning.png";

const Hero = () => {
  return (
    <>
      <Navigation />

      <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden pt-24">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroBackgroundLearning}
            alt="Students learning together in collaborative environment"
            className="w-full h-full object-cover"
            onError={(e) => {
              console.log('Hero background image failed to load, using fallback');
              // Show a solid background if image fails to load
              (e.currentTarget.parentElement as HTMLElement).style.background = 'linear-gradient(135deg, hsl(120 37% 35% / 0.8), hsl(79 35% 64% / 0.7))';
              e.currentTarget.style.display = 'none';
            }}
            onLoad={() => {
              console.log('Hero background image loaded successfully');
            }}
          />
          {/* Balanced overlay for visibility and readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-forest-green/55 to-moss-green/45"></div>
        </div>

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-forest-green/10 to-moss-green/10"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center py-12">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Intelligent Learning Solutions for{" "}
                <span className="bg-gradient-to-r from-sunbeam-yellow to-moss-green bg-clip-text text-transparent">
                  all
                </span>
              </h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                From custom Learning Management System solutions for organisations to industry-ready bootcamps for learners, we enable communities and companies to thrive through accessible, future-focused learning opportunities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-sunbeam-yellow text-forest-green hover:bg-sunbeam-yellow/90 shadow-medium font-semibold px-8 py-4 text-lg"
                >
                  Partner With Us
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white hover:text-forest-green bg-white text-forest-green px-8 py-4 text-lg"
                  onClick={() => {
                    const impactSection = document.getElementById('impact');
                    if (impactSection) {
                      impactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Explore Our Platform
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
                      <div className="text-3xl font-bold text-white mb-2">6,000+</div>
                      <div className="text-white/80 text-sm">Learners Trained</div>
                    </div>
                    <div className="text-center animate-scale-in" style={{animationDelay: '0.1s'}}>
                      <div className="text-3xl font-bold text-white mb-2">18+</div>
                      <div className="text-white/80 text-sm">States Reached</div>
                    </div>
                    <div className="text-center animate-scale-in" style={{animationDelay: '0.2s'}}>
                      <div className="text-2xl font-bold text-white mb-2">90%</div>
                      <div className="text-white/80 text-sm">completion rate</div>
                    </div>
                    <div className="text-center animate-scale-in" style={{animationDelay: '0.3s'}}>
                      <div className="text-3xl font-bold text-white mb-2">500+</div>
                      <div className="text-white/80 text-sm">Learners Placed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;