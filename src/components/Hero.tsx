import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import heroBackgroundLearning from "@/assets/hero-background-learning.png";
import collage1 from "@/assets/collage-1.jpg";
import collage2 from "@/assets/collage-2.jpg";
import collage3 from "@/assets/collage-3.jpg";
import collage4 from "@/assets/collage-4.jpg";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <>
      <Navigation />

      <section className="relative min-h-screen flex items-center overflow-hidden pt-24 bg-light-beige">

        {/* Floating geometric shapes for motion graphics */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Square shapes */}
          <div className="absolute top-20 left-[10%] w-16 h-16 border-2 border-moss-green/20 rounded-lg animate-float" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-40 right-[15%] w-12 h-12 border-2 border-sunbeam-yellow/20 rounded-lg animate-float-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 right-[8%] w-14 h-14 bg-forest-green/5 rounded-xl animate-drift" style={{animationDelay: '4s'}}></div>

          {/* Circle shapes */}
          <div className="absolute bottom-32 left-[20%] w-20 h-20 border-2 border-forest-green/15 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-[60%] right-[10%] w-8 h-8 bg-moss-green/10 rounded-full animate-float-slow" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-[25%] right-[30%] w-10 h-10 border-2 border-sunbeam-yellow/15 rounded-full animate-drift" style={{animationDelay: '3.5s'}}></div>

          {/* Triangle shapes using border trick */}
          <div className="absolute top-[30%] left-[5%] w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-sunbeam-yellow/20 animate-spin-slow"></div>
          <div className="absolute bottom-[25%] right-[25%] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[16px] border-b-moss-green/15 animate-spin-slow" style={{animationDelay: '3s'}}></div>

          {/* Plus signs */}
          <div className="absolute top-[45%] left-[15%] text-3xl text-forest-green/10 animate-float" style={{animationDelay: '1.5s'}}>+</div>
          <div className="absolute bottom-[40%] right-[20%] text-2xl text-moss-green/15 animate-float-slow" style={{animationDelay: '2.5s'}}>+</div>
          <div className="absolute top-[35%] right-[5%] text-4xl text-sunbeam-yellow/10 animate-spin-slow" style={{animationDelay: '4.5s'}}>+</div>

          {/* Dots */}
          <div className="absolute top-[55%] right-[5%] w-3 h-3 bg-sunbeam-yellow/20 rounded-full animate-pulse-subtle" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-[45%] left-[25%] w-4 h-4 bg-moss-green/15 rounded-full animate-pulse-subtle" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-[15%] left-[30%] w-5 h-5 bg-forest-green/10 rounded-full animate-pulse-subtle" style={{animationDelay: '3.5s'}}></div>
        </div>

        <div className="container mx-auto px-6 py-12 relative z-10">
          {/* Hero Content - Asymmetric Layout */}
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
            {/* Left Content - Takes 7 columns */}
            <div className="lg:col-span-7 space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-moss-green/10 rounded-full border border-moss-green/20">
                <CheckCircle className="w-4 h-4 text-moss-green" />
                <span className="text-small font-medium text-forest-green">Trusted by 6,000+ Learners Across India</span>
              </div>

              {/* Main Heading with creative layout */}
              <div>
                <h4 className="font-bold text-forest-green leading-tight mb-4">
                  Intelligent Learning
                  <br />
                  <span className="relative inline-block">
                    <span className="relative z-10">Solutions for all</span>
                    <span className="absolute bottom-1 left-0 w-full h-3 bg-sunbeam-yellow/30 -z-0"></span>
                  </span>
                </h4>
              </div>

              <p className="text-forest-green/80 max-w-2xl text-lg leading-relaxed">
                From custom Learning Management System solutions for organisations to industry-ready bootcamps for learners, we enable communities and companies to thrive through accessible, future-focused learning opportunities.
              </p>

              {/* CTA Buttons with icon */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-forest-green text-white hover:bg-forest-green/90 font-semibold px-8 py-6 rounded-2xl group"
                >
                  Partner With Us
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-forest-green text-forest-green hover:bg-forest-green hover:text-white px-8 py-6 rounded-2xl"
                  onClick={() => {
                    const impactSection = document.getElementById('impact');
                    if (impactSection) {
                      impactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Explore Platform
                </Button>
              </div>
            </div>

            {/* Right Content - Takes 5 columns - Image Collage */}
            <div className="lg:col-span-5 relative hidden lg:block">
              {/* Image Collage Grid - Fixed height */}
              <div className="grid grid-cols-2 gap-3 h-[450px]">
                {/* Large image top-left */}
                <div className="col-span-1 row-span-2">
                  <div className="relative h-full p-2 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-float-slow">
                    <img
                      src={heroBackgroundLearning}
                      alt="Collaborative Learning"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>

                {/* Small image top-right */}
                <div className="col-span-1">
                  <div className="relative h-full p-2 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-float" style={{animationDelay: '0.5s'}}>
                    <img
                      src={collage1}
                      alt="Student Success"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>

                {/* Small image middle-right */}
                <div className="col-span-1">
                  <div className="relative h-full p-2 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-float" style={{animationDelay: '1s'}}>
                    <img
                      src={collage2}
                      alt="Learning Together"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>

                {/* Bottom row - two small images */}
                <div className="col-span-1">
                  <div className="relative h-full p-2 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-float-slow" style={{animationDelay: '1.5s'}}>
                    <img
                      src={collage3}
                      alt="Tech Education"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>

                <div className="col-span-1">
                  <div className="relative h-full p-2 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-float" style={{animationDelay: '2s'}}>
                    <img
                      src={collage4}
                      alt="Zuvy Community"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Metrics - Redesigned as cards with icons */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-forest-green/10 hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              <div className="w-10 h-10 bg-sunbeam-yellow/10 rounded-lg flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6 text-sunbeam-yellow" />
              </div>
              <h5 className="font-bold text-forest-green mb-1">18+</h5>
              <p className="text-small text-forest-green/70">States Reached</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-forest-green/10 hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              <div className="w-10 h-10 bg-moss-green/10 rounded-lg flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6 text-moss-green" />
              </div>
              <h5 className="font-bold text-forest-green mb-1">90%</h5>
              <p className="text-small text-forest-green/70">Completion Rate</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-forest-green/10 hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              <div className="w-10 h-10 bg-sunbeam-yellow/10 rounded-lg flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6 text-sunbeam-yellow" />
              </div>
              <h5 className="font-bold text-forest-green mb-1">500+</h5>
              <p className="text-small text-forest-green/70">Learners Placed</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;