import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Code, Handshake } from "lucide-react";

const WhoWeServe = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Zuvy Learning Solutions",
      subtitle: "For Businesses & NGOs",
      description: "Custom LMS tailored for large-scale training with end-to-end content, delivery, and reporting tools. Enable workforce upskilling or community-based digital education.",
      features: [
        "Custom LMS tailored for large-scale training",
        "End-to-end content, delivery, and reporting tools",
        "Enable workforce upskilling or community-based digital education"
      ],
      cta: "Discover Solutions",
      gradient: "from-forest-green to-moss-green"
    },
    {
      icon: Code,
      title: "Zuvy Tech Bootcamps",
      subtitle: "For Learners",
      description: "Full-stack development, DSA, and more with hands-on projects and placement readiness. Subsidized or sponsored through partner funding.",
      features: [
        "Full-stack development, DSA, and more",
        "Hands-on projects + placement readiness",
        "Subsidized or sponsored through partner funding"
      ],
      cta: "Start Learning",
      gradient: "from-moss-green to-sunbeam-yellow"
    },
    {
      icon: Handshake,
      title: "Zuvy Partnerships",
      subtitle: "For Funders & Employers",
      description: "Sponsor underserved learners, access a diverse job-ready talent pool, and collaborate on impactful education initiatives.",
      features: [
        "Sponsor underserved learners",
        "Access a diverse, job-ready talent pool",
        "Collaborate on impactful education initiatives"
      ],
      cta: "Join Our Mission",
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

        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-2 bg-pure-white h-full flex flex-col"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>

                <CardHeader className="relative z-10 pb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${program.gradient} mb-4 shadow-medium group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors min-h-[4rem]">
                    {program.title}
                  </CardTitle>

                  <div className={`text-sm font-semibold bg-gradient-to-r ${program.gradient} bg-clip-text text-transparent`}>
                    {program.subtitle}
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 pt-0 flex-1 flex flex-col">
                  <CardDescription className="text-muted-foreground mb-6 leading-relaxed min-h-[6rem]">
                    {program.description}
                  </CardDescription>

                  <ul className="space-y-3 mb-6 flex-1">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-moss-green mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full bg-gradient-to-r ${program.gradient} text-white hover:shadow-medium transition-all duration-300 font-semibold mt-auto`}
                  >
                    {program.cta}
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