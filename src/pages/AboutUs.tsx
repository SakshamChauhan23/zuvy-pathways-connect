import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Lightbulb, Users, Rocket } from "lucide-react";
import aboutHeroBg from "@/assets/about-hero-bg.jpg";
import teamPhoto from "@/assets/team-photo.jpg";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-light-beige">
      <Navigation currentPage="about" />

      {/* Hero Section with Background Image */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={aboutHeroBg}
            alt="Zuvy Learning Environment"
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-forest-green/70"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-3xl mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-bold text-white mb-6">
              About Zuvy
            </h2>
            <p className="text-white/90 max-w-3xl mx-auto">
              Transforming how India learns technology through accessible, industry-aligned education that bridges opportunity gaps
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white/90 backdrop-blur-sm rounded-2xl">
              <h5 className="font-bold text-forest-green mb-1">6,000+</h5>
              <p className="text-small text-forest-green/70 font-medium">Students Trained</p>
            </div>
            <div className="text-center p-4 bg-white/90 backdrop-blur-sm rounded-2xl">
              <h5 className="font-bold text-forest-green mb-1">18+</h5>
              <p className="text-small text-forest-green/70 font-medium">States Reached</p>
            </div>
            <div className="text-center p-4 bg-white/90 backdrop-blur-sm rounded-2xl">
              <h5 className="font-bold text-forest-green mb-1">400+</h5>
              <p className="text-small text-forest-green/70 font-medium">Internships</p>
            </div>
            <div className="text-center p-4 bg-white/90 backdrop-blur-sm rounded-2xl">
              <h5 className="font-bold text-forest-green mb-1">1,000</h5>
              <p className="text-small text-forest-green/70 font-medium">Women Trained Annually</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="pb-20 relative overflow-hidden">
        {/* Floating geometric shapes for motion graphics */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          {/* Circles */}
          <div className="absolute top-40 left-[8%] w-24 h-24 border-2 border-moss-green/20 rounded-full animate-float" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-[60%] right-[10%] w-20 h-20 border-2 border-sunbeam-yellow/15 rounded-full animate-drift" style={{animationDelay: '2s'}}></div>

          {/* Squares */}
          <div className="absolute top-[30%] right-[15%] w-16 h-16 bg-forest-green/5 rounded-xl animate-float-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-[40%] left-[12%] w-14 h-14 border-2 border-moss-green/15 rounded-lg animate-drift" style={{animationDelay: '3s'}}></div>

          {/* Dots and Plus */}
          <div className="absolute top-[50%] left-[5%] w-4 h-4 bg-sunbeam-yellow/20 rounded-full animate-pulse-subtle" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-[25%] right-[20%] w-5 h-5 bg-moss-green/20 rounded-full animate-pulse-subtle" style={{animationDelay: '2.5s'}}></div>
          <div className="absolute top-[70%] right-[5%] text-3xl text-forest-green/10 animate-spin-slow" style={{animationDelay: '1.5s'}}>+</div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Mission & Vision Cards */}
          <section className="mb-24">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Our Mission */}
              <Card className="border-0 shadow-lg bg-white overflow-hidden group hover:shadow-xl transition-all duration-500">
                <CardContent className="p-10 relative">
                  <div className="absolute top-6 right-6 w-16 h-16 bg-moss-green/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-forest-green" />
                  </div>
                  <h5 className="font-bold text-forest-green mb-6">Our Mission</h5>
                  <p className="text-forest-green/80">
                    Zuvy transforms how India learns technology. As part of NavGurukul's digital ecosystem,
                    we bridge the gap between traditional education and industry demands, creating pathways
                    for underserved communities to access meaningful career opportunities in tech.
                  </p>
                  <div className="mt-8 flex items-center">
                    <div className="w-12 h-1 bg-moss-green rounded-full"></div>
                  </div>
                </CardContent>
              </Card>

              {/* Our Vision */}
              <Card className="border-0 shadow-lg bg-white overflow-hidden group hover:shadow-xl transition-all duration-500">
                <CardContent className="p-10 relative">
                  <div className="absolute top-6 right-6 w-16 h-16 bg-sunbeam-yellow/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="w-8 h-8 text-forest-green" />
                  </div>
                  <h5 className="font-bold text-forest-green mb-6">Our Vision</h5>
                  <p className="text-forest-green/80">
                    Technology education should be a bridge to opportunity, not a barrier. We work toward a future
                    where every capable learner, regardless of background or location, can access the training needed
                    to build a meaningful career in tech.
                  </p>
                  <div className="mt-8 flex items-center">
                    <div className="w-12 h-1 bg-sunbeam-yellow rounded-full"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Our Team Section */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <h5 className="font-bold text-forest-green mb-4">Our Team</h5>
              <p className="text-forest-green/70 max-w-3xl mx-auto">
                Meet the passionate individuals driving educational transformation across India
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Team Image */}
                <div className="relative h-[400px] lg:h-auto">
                  <img
                    src={teamPhoto}
                    alt="Zuvy Team"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                {/* Team Description */}
                <div className="p-12 flex flex-col justify-center">
                  <h6 className="font-bold text-forest-green mb-6">
                    Passionate Educators & Tech Innovators
                  </h6>
                  <div className="space-y-4 text-forest-green/80">
                    <p>
                      Our team brings together diverse expertise in education, technology, and social impact.
                      With backgrounds spanning software engineering, pedagogy, and community development,
                      we're united by a shared mission to democratize quality tech education.
                    </p>
                    <p>
                      Every team member is committed to creating learning experiences that are not just effective,
                      but also accessible and empowering. We work closely with learners, understanding their challenges
                      and aspirations, to build programs that truly make a difference.
                    </p>
                    <p>
                      From curriculum design to platform development, from mentor training to student support,
                      our team operates with one goal: ensuring every learner has the opportunity to build a
                      successful career in technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Video Section */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <h5 className="font-bold text-forest-green mb-4">See Zuvy in Action</h5>
              <p className="text-forest-green/70 max-w-3xl mx-auto">
                Watch how we're transforming lives through technology education
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-4 max-w-5xl mx-auto">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl">
                <iframe
                  src="https://drive.google.com/file/d/12N8iqpua2TF4MnguUf8sWEMblCXaYUo9/preview"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="autoplay"
                  allowFullScreen
                  loading="lazy"
                  title="Zuvy Platform Video"
                ></iframe>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-white rounded-3xl shadow-lg p-12 lg:p-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-moss-green rounded-3xl mb-8 shadow-lg">
                <Rocket className="w-10 h-10 text-white" />
              </div>

              <h4 className="font-bold text-forest-green mb-6">
                Ready to Transform Learning?
              </h4>

              <p className="text-forest-green/70 mb-12 max-w-4xl mx-auto">
                Join us in creating meaningful opportunities through technology education that bridges gaps and builds futures
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-md mx-auto">
                <Button
                  size="lg"
                  className="bg-sunbeam-yellow text-forest-green hover:bg-sunbeam-yellow/90 shadow-lg font-bold px-10 py-6 rounded-2xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => window.location.href = "/#programs"}
                >
                  Explore Programs
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-forest-green text-forest-green hover:bg-forest-green hover:text-white font-bold px-10 py-6 rounded-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Partner With Us
                </Button>
              </div>

              <div className="mt-12 text-center">
                <p className="text-small text-forest-green/60 font-medium">
                  Your success drives our purpose
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
