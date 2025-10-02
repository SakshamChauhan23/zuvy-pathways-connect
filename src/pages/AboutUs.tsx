import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { Target, Lightbulb, Users, Rocket, Linkedin } from "lucide-react";
import aboutHeroBg from "@/assets/about-hero-bg.jpg";
import teamPhoto from "@/assets/team-photo.jpg";
import abhishekGupta from "@/assets/abhishek-gupta.png";
import sandhyaDittakavi from "@/assets/sandhya-dittakavi.png";
import nileshYadav from "@/assets/nilesh-yadav.png";

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
      <main className="pb-20 relative overflow-hidden pt-12">
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
                  <div className="absolute top-6 right-6 w-16 h-16 bg-moss-green/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="w-8 h-8 text-forest-green" />
                  </div>
                  <h5 className="font-bold text-forest-green mb-6">Our Vision</h5>
                  <p className="text-forest-green/80">
                    Technology education should be a bridge to opportunity, not a barrier. We work toward a future
                    where every capable learner, regardless of background or location, can access the training needed
                    to build a meaningful career in tech.
                  </p>
                  <div className="mt-8 flex items-center">
                    <div className="w-12 h-1 bg-moss-green rounded-full"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Our Leadership Section - Unique Timeline Design */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <h5 className="font-bold text-forest-green mb-4">Our Leadership</h5>
              <p className="text-lg text-forest-green/70 max-w-3xl mx-auto">
                Meet the visionary leaders driving Zuvy's mission to transform technology education in India
              </p>
            </div>

            <div className="space-y-12">
              {/* Abhishek Gupta - Left Aligned */}
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="lg:w-1/3 flex justify-center lg:justify-end">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-forest-green to-moss-green rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
                    <img
                      src={abhishekGupta}
                      alt="Abhishek Gupta"
                      className="relative w-64 h-64 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="lg:w-2/3 bg-white rounded-3xl shadow-xl p-8 lg:p-10 relative">
                  <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-forest-green rounded-full shadow-lg hidden lg:flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-forest-green/10 text-forest-green rounded-full text-xs font-semibold">Forbes 30u30</span>
                    <span className="px-3 py-1 bg-moss-green/10 text-moss-green rounded-full text-xs font-semibold">TEDx Speaker</span>
                    <span className="px-3 py-1 bg-sunbeam-yellow/10 text-forest-green rounded-full text-xs font-semibold">IIT Delhi</span>
                  </div>

                  <h6 className="text-2xl font-bold text-forest-green mb-2">Abhishek Gupta</h6>
                  <p className="text-moss-green font-semibold mb-4">Partner & CEO at NavGurukul</p>

                  <p className="text-forest-green/80 leading-relaxed mb-3">
                    A visionary social entrepreneur and technologist committed to democratizing tech education across India. As Partner & CEO of NavGurukul, Abhishek has pioneered innovative residential programs that have transformed the lives of thousands of underprivileged youth.
                  </p>
                  <p className="text-forest-green/80 leading-relaxed">
                    He brings deep technical expertise from IIT Delhi (CSE) combined with a passion for creating scalable impact in education and employment opportunities for marginalized communities.
                  </p>
                </div>
              </div>

              {/* Sandhya Dittakavi - Right Aligned */}
              <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
                <div className="lg:w-1/3 flex justify-center lg:justify-start">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-moss-green to-sunbeam-yellow rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
                    <img
                      src={sandhyaDittakavi}
                      alt="Sandhya Dittakavi"
                      className="relative w-64 h-64 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="lg:w-2/3 bg-white rounded-3xl shadow-xl p-8 lg:p-10 relative">
                  <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-moss-green rounded-full shadow-lg hidden lg:flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-moss-green/10 text-moss-green rounded-full text-xs font-semibold">SIG Awardee</span>
                    <span className="px-3 py-1 bg-forest-green/10 text-forest-green rounded-full text-xs font-semibold">IIM Bangalore</span>
                    <span className="px-3 py-1 bg-sunbeam-yellow/10 text-forest-green rounded-full text-xs font-semibold">SJSU</span>
                  </div>

                  <h6 className="text-2xl font-bold text-forest-green mb-2">Sandhya Dittakavi</h6>
                  <p className="text-moss-green font-semibold mb-4">Co-Founder & CEO at Zuvy</p>

                  <p className="text-forest-green/80 leading-relaxed mb-3">
                    A distinguished technology leader and serial entrepreneur with over two decades of global experience spanning product management, engineering, and social impact. Sandhya has held pivotal roles at industry giants including Cisco, ServiceNow, Apple, and Infosys, where she drove innovation and scaled products globally.
                  </p>
                  <p className="text-forest-green/80 leading-relaxed">
                    She combines her technical acumen with a passion for creating accessible education pathways, bringing strategic vision and operational excellence to democratize quality tech education across India.
                  </p>
                </div>
              </div>

              {/* Nilesh Yadav - Left Aligned */}
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="lg:w-1/3 flex justify-center lg:justify-end">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-sunbeam-yellow to-forest-green rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
                    <img
                      src={nileshYadav}
                      alt="Nilesh Yadav"
                      className="relative w-64 h-64 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="lg:w-2/3 bg-white rounded-3xl shadow-xl p-8 lg:p-10 relative">
                  <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-sunbeam-yellow rounded-full shadow-lg hidden lg:flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-sunbeam-yellow/10 text-forest-green rounded-full text-xs font-semibold">15+ Years</span>
                    <span className="px-3 py-1 bg-forest-green/10 text-forest-green rounded-full text-xs font-semibold">Growth Expert</span>
                    <span className="px-3 py-1 bg-moss-green/10 text-moss-green rounded-full text-xs font-semibold">Data Analytics</span>
                  </div>

                  <h6 className="text-2xl font-bold text-forest-green mb-2">Nilesh Yadav</h6>
                  <p className="text-moss-green font-semibold mb-4">Product Leader</p>

                  <p className="text-forest-green/80 leading-relaxed mb-3">
                    A seasoned product strategist with 15+ years of experience building and scaling startups from ground zero to market leadership. Nilesh specializes in growth strategy, data analytics, digital marketing, and business operations, with a proven track record of driving user retention and revenue optimization.
                  </p>
                  <p className="text-forest-green/80 leading-relaxed">
                    Having held key leadership positions at Unacademy and Oyo, he brings analytical rigor and strategic thinking to accelerate Zuvy's mission of transforming technology education.
                  </p>
                </div>
              </div>
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
              <h5 className="font-bold text-forest-green mb-4">Our Impact in Action</h5>
              <p className="text-forest-green/70 max-w-3xl mx-auto">
                Watch how we're transforming lives through technology education
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-4 max-w-5xl mx-auto">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl">
                <iframe
                  src="https://www.youtube.com/embed/ryv-NmCAXfk"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  title="Zuvy Impact Video"
                ></iframe>
              </div>
            </div>
          </section>

        </div>
      </main>

      <FinalCTA />
      <Footer />
    </div>
  );
};

export default AboutUs;
