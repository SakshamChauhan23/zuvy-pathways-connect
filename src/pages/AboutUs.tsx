import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Target, Lightbulb, Award, Heart, Rocket } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light-beige via-pure-white to-moss-green/10">
      <Navigation currentPage="about" />

      {/* Hero Section with Visual Elements */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-sunbeam-yellow/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-moss-green/30 rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-forest-green/20 rounded-full blur-xl animate-ping"></div>
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-forest-green to-moss-green rounded-3xl mb-8 shadow-strong">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-forest-green via-moss-green to-forest-green bg-clip-text text-transparent mb-8 leading-tight">
              About Zuvy
            </h1>
            <p className="text-2xl text-forest-green/80 max-w-4xl mx-auto leading-relaxed font-light">
              Transforming how India learns technology through accessible, industry-aligned education that bridges opportunity gaps
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-3xl shadow-soft">
              <div className="text-4xl font-bold text-forest-green mb-2">6,000+</div>
              <div className="text-forest-green/70 font-medium">Students Trained</div>
            </div>
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-3xl shadow-soft">
              <div className="text-4xl font-bold text-forest-green mb-2">18+</div>
              <div className="text-forest-green/70 font-medium">States Reached</div>
            </div>
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-3xl shadow-soft">
              <div className="text-4xl font-bold text-forest-green mb-2">400+</div>
              <div className="text-forest-green/70 font-medium">Internships</div>
            </div>
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-3xl shadow-soft">
              <div className="text-4xl font-bold text-forest-green mb-2">1,000</div>
              <div className="text-forest-green/70 font-medium">Women Trained Annually</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="pb-20">
        <div className="container mx-auto px-6">
          {/* Mission & Vision Cards */}
          <section className="mb-24">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Our Mission */}
              <Card className="border-0 shadow-strong bg-gradient-to-br from-white to-moss-green/5 overflow-hidden group hover:shadow-xl transition-all duration-500">
                <CardContent className="p-10 relative">
                  <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-forest-green/20 to-moss-green/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-forest-green" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-forest-green mb-8 leading-tight">Our Mission</h2>
                  <p className="text-lg text-forest-green/80 leading-relaxed">
                    Zuvy transforms how India learns technology. As part of NavGurukul's digital ecosystem,
                    we bridge the gap between traditional education and industry demands, creating pathways
                    for underserved communities to access meaningful career opportunities in tech.
                  </p>
                  <div className="mt-8 flex items-center">
                    <div className="w-12 h-1 bg-gradient-to-r from-forest-green to-moss-green rounded-full"></div>
                  </div>
                </CardContent>
              </Card>

              {/* Our Vision */}
              <Card className="border-0 shadow-strong bg-gradient-to-br from-white to-sunbeam-yellow/5 overflow-hidden group hover:shadow-xl transition-all duration-500">
                <CardContent className="p-10 relative">
                  <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-sunbeam-yellow/20 to-moss-green/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="w-8 h-8 text-forest-green" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-forest-green mb-8 leading-tight">Our Vision</h2>
                  <p className="text-lg text-forest-green/80 leading-relaxed">
                    Technology education should be a bridge to opportunity, not a barrier. We work toward a future
                    where every capable learner, regardless of background or location, can access the training needed
                    to build a meaningful career in tech.
                  </p>
                  <div className="mt-8 flex items-center">
                    <div className="w-12 h-1 bg-gradient-to-r from-sunbeam-yellow to-moss-green rounded-full"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Our Impact Section */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-moss-green to-sunbeam-yellow rounded-2xl mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-forest-green mb-6">Our Impact</h2>
              <p className="text-xl text-forest-green/70 max-w-3xl mx-auto">Creating meaningful change in tech education across India</p>
            </div>

            <div className="bg-gradient-to-br from-forest-green via-moss-green to-forest-green rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
              <div className="relative space-y-8">
                <p className="text-xl leading-relaxed opacity-95">
                  Over 6,000 students across 18+ states have strengthened their technical skills through our programs.
                  Today, our graduates intern at leading companies including <span className="font-semibold text-sunbeam-yellow">Amazon, Google, and SAP</span>.
                </p>
                <p className="text-xl leading-relaxed opacity-95">
                  Through our Amazon Future Engineer partnership, we train 1,000 women annually and have facilitated 400+ internships,
                  demonstrating our commitment to inclusive tech education.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mt-8">
                  <p className="text-lg leading-relaxed font-medium">
                    "We recognize that talent exists everywhere, but opportunity does not. Our approach addresses this gap through
                    comprehensive training that combines rigorous technical education with mentorship and real-world project experience."
                  </p>
                </div>
              </div>
            </div>
          </section>


          {/* Our Approach */}
          <section className="mb-24">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-forest-green/5 to-moss-green/5 rounded-3xl"></div>
              <div className="relative bg-gradient-to-br from-forest-green to-moss-green rounded-3xl shadow-strong overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <div className="relative p-12 lg:p-16 text-white">
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl mb-6">
                      <Lightbulb className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Approach</h2>
                    <p className="text-xl opacity-90 max-w-3xl mx-auto">Combining technology with human-centered learning</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <p className="text-xl leading-relaxed opacity-95">
                        Our Smart Learning Platform delivers a complete educational experience through personalized
                        study paths, live interactive sessions, and comprehensive content libraries.
                      </p>
                      <p className="text-xl leading-relaxed opacity-95">
                        Students receive dedicated mentorship throughout their journey, engage in practical project work,
                        and earn industry-recognized certifications.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                      <h3 className="text-2xl font-bold mb-6 text-sunbeam-yellow">Digital-First, Human-Centered</h3>
                      <p className="text-lg leading-relaxed opacity-95">
                        We maintain a digital-first methodology while preserving the human elements that make learning
                        effective. This combination has proven successful across diverse geographic and economic contexts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="relative overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-40 h-40 bg-sunbeam-yellow/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-moss-green/20 rounded-full blur-2xl animate-bounce"></div>
              </div>

              <div className="relative bg-gradient-to-br from-white to-moss-green/10 rounded-3xl shadow-strong p-12 lg:p-16">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-forest-green to-moss-green rounded-3xl mb-8 shadow-strong">
                  <Rocket className="w-10 h-10 text-white" />
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold text-forest-green mb-8 leading-tight">
                  Ready to Transform Learning?
                </h2>

                <p className="text-2xl text-forest-green/70 mb-12 max-w-4xl mx-auto font-light">
                  Join us in creating meaningful opportunities through technology education that bridges gaps and builds futures
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-md mx-auto">
                  <Button
                    size="lg"
                    className="bg-sunbeam-yellow text-forest-green hover:bg-sunbeam-yellow/90 shadow-strong font-bold px-10 py-6 text-xl rounded-2xl transform hover:scale-105 transition-all duration-300"
                    onClick={() => window.location.href = "/#programs"}
                  >
                    Explore Programs
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-forest-green/40 text-forest-green hover:bg-forest-green hover:text-white font-bold px-10 py-6 text-xl rounded-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    Partner With Us
                  </Button>
                </div>

                <div className="mt-12 text-center">
                  <p className="text-lg text-forest-green/60 font-medium">
                    Your success drives our purpose
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;