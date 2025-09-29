import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Building, Users } from "lucide-react";

const WhoWeServe = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "For Learners",
      description: "Job-ready tech bootcamps designed for industry success. Placement support with top companies.",
      cta: "Join Our Bootcamp",
      gradient: "from-forest-green to-moss-green"
    },
    {
      icon: Building,
      title: "For Businesses & NGOs",
      description: "Comprehensive LMS and digital training solutions tailored to your workforce or community needs.",
      cta: "Explore Learning Solutions",
      gradient: "from-moss-green to-sunbeam-yellow"
    },
    {
      icon: Users,
      title: "For Partners",
      description: "Fund a bootcamp, create impact at scale, or hire from our pool of trained, diverse talent.",
      cta: "Become a Partner",
      gradient: "from-sunbeam-yellow to-forest-green"
    }
  ];

  return (
    <section id="programs" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Who We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're an individual looking to upskill, an organization seeking training solutions, or a partner wanting to create impact, we have the perfect program for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <CardHeader className="relative z-10 text-center pt-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} mb-4 shadow-medium`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10 text-center pb-8">
                  <CardDescription className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  <Button 
                    className={`bg-gradient-to-r ${service.gradient} text-white hover:shadow-medium transition-all duration-300 font-semibold px-6 py-3`}
                  >
                    {service.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;