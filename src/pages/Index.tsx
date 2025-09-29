import Hero from "@/components/Hero";
import WhoWeServe from "@/components/WhoWeServe";
import Impact from "@/components/Impact";
import Programs from "@/components/Programs";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhoWeServe />
      <Impact />
      <Programs />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
