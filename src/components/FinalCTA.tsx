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

        {/* Redesigned Contact CTA Section */}
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-sunbeam-yellow to-moss-green rounded-3xl blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 text-center group-hover:-translate-y-2 transition-all duration-500">
              <div className="w-20 h-20 bg-gradient-to-br from-sunbeam-yellow to-moss-green rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-strong">
                <ArrowRight className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Future?
              </h3>

              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Whether you're an individual learner, organization, or partner, we're here to help you succeed.
                Let's discuss how Zuvy can create the perfect learning solution for your needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-sunbeam-yellow text-forest-green hover:bg-sunbeam-yellow/90 font-semibold px-8 py-4 text-lg shadow-medium"
                >
                  Contact Us Today
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-forest-green font-semibold px-8 py-4 text-lg"
                >
                  Schedule a Call
                </Button>
              </div>

              <div className="mt-8 text-white/70">
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