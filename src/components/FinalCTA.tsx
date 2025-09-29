import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-green/20 to-moss-green/20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Build the Future of Work{" "}
            <span className="bg-gradient-to-r from-sunbeam-yellow to-moss-green bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Whether you're looking to advance your career, upskill your workforce, or create meaningful impact, 
            Zuvy has the perfect solution for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Learners CTA */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-sunbeam-yellow to-moss-green rounded-2xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center group-hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-sunbeam-yellow to-moss-green rounded-xl mx-auto mb-4 flex items-center justify-center shadow-medium">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">For Learners</h3>
              <p className="text-white/80 mb-6">Start your tech career with industry-ready bootcamps</p>
              <Button 
                className="w-full bg-sunbeam-yellow text-forest-green hover:bg-sunbeam-yellow/90 font-semibold"
              >
                Join a Bootcamp
              </Button>
            </div>
          </div>

          {/* Organizations CTA */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-moss-green to-forest-green rounded-2xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center group-hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-moss-green to-forest-green rounded-xl mx-auto mb-4 flex items-center justify-center shadow-medium">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">For Organizations</h3>
              <p className="text-white/80 mb-6">Transform your workforce with custom learning solutions</p>
               <Button 
                variant="outline"
                className="w-full border-white/30 bg-white text-forest-green hover:bg-white/90 font-semibold"
               >
                Explore Learning Solutions
              </Button>
            </div>
          </div>

          {/* Partners CTA */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-forest-green to-sunbeam-yellow rounded-2xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center group-hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-forest-green to-sunbeam-yellow rounded-xl mx-auto mb-4 flex items-center justify-center shadow-medium">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">For Partners</h3>
              <p className="text-white/80 mb-6">Create impact and access diverse talent pools</p>
               <Button 
                variant="outline"
                className="w-full border-white/30 bg-white text-forest-green hover:bg-white/90 font-semibold"
               >
                Collaborate With Us
              </Button>
            </div>
          </div>
        </div>

        {/* Contact information */}
        <div className="text-center mt-16">
          <div className="inline-block bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <p className="text-white/90 mb-4">Ready to get started? Let's talk!</p>
            <Button 
              size="lg"
              className="bg-white text-forest-green hover:bg-white/90 font-semibold px-8"
            >
              Contact Us Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;