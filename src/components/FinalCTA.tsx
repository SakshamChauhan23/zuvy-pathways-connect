import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-light-beige relative overflow-hidden">

      {/* Floating geometric shapes for motion graphics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Circles */}
        <div className="absolute top-20 left-[8%] w-24 h-24 border-2 border-moss-green/15 rounded-full animate-drift" style={{animationDelay: '0s'}}></div>
        <div className="absolute bottom-32 right-[12%] w-16 h-16 border-2 border-sunbeam-yellow/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>

        {/* Squares */}
        <div className="absolute top-40 right-[20%] w-20 h-20 border-2 border-forest-green/10 rounded-xl animate-float-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-[15%] w-12 h-12 bg-moss-green/5 rounded-lg animate-drift" style={{animationDelay: '3s'}}></div>

        {/* Dots */}
        <div className="absolute top-[30%] left-[5%] w-4 h-4 bg-sunbeam-yellow/20 rounded-full animate-pulse-subtle" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-[35%] right-[8%] w-5 h-5 bg-moss-green/20 rounded-full animate-pulse-subtle" style={{animationDelay: '2.5s'}}></div>

        {/* Plus signs */}
        <div className="absolute top-[50%] right-[5%] text-4xl text-forest-green/10 animate-spin-slow" style={{animationDelay: '1.5s'}}>+</div>
        <div className="absolute bottom-[45%] left-[10%] text-3xl text-moss-green/10 animate-spin-slow" style={{animationDelay: '3.5s'}}>+</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-forest-green mb-6">
            Let's Build the Future of Work{" "}
            <span className="text-moss-green">
              Together
            </span>
          </h2>
          <p className="text-xl text-forest-green/80 max-w-3xl mx-auto">
            Whether you're looking to advance your career, upskill your workforce, or create meaningful impact,
            Zuvy has the perfect solution for you.
          </p>
        </div>

        {/* Redesigned Contact CTA Section */}
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            <div className="relative bg-white rounded-3xl p-12 border border-forest-green/10 text-center group-hover:-translate-y-2 transition-all duration-500 shadow-xl">
              <div className="w-20 h-20 bg-moss-green rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                <ArrowRight className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-3xl lg:text-4xl font-bold text-forest-green mb-6">
                Ready to Transform Your Future?
              </h3>

              <p className="text-xl text-forest-green/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                Whether you're an individual learner, organization, or partner, we're here to help you succeed.
                Let's discuss how Zuvy can create the perfect learning solution for your needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-forest-green text-white hover:bg-forest-green/90 font-semibold px-8 py-4 text-lg shadow-md"
                >
                  Contact Us Today
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-forest-green bg-white text-forest-green hover:bg-forest-green hover:text-white font-semibold px-8 py-4 text-lg"
                >
                  Schedule a Call
                </Button>
              </div>

              <div className="mt-8 text-forest-green/60">
                <p className="text-sm">Get in touch with our team • Free consultation • Custom solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;