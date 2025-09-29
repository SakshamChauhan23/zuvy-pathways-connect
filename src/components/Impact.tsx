import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Building2, Award } from "lucide-react";

const Impact = () => {
  const stats = [
    {
      icon: Users,
      number: "2,000+",
      label: "learners trained across 18+ states",
      color: "text-forest-green"
    },
    {
      icon: Award,
      number: "Top-tier",
      label: "placements at Amazon, Google, SAP, and more",
      color: "text-moss-green"
    },
    {
      icon: Building2,
      number: "Customizable",
      label: "LMS for NGOs & businesses",
      color: "text-sunbeam-yellow"
    },
    {
      icon: TrendingUp,
      number: "Proven",
      label: "employability outcomes bridging academia and industry",
      color: "text-forest-green"
    }
  ];

  return (
    <section id="impact" className="py-24 bg-gradient-to-br from-pure-white to-light-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Zuvy Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our track record speaks for itself. We've built a proven system that transforms lives and empowers organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={index}
                className="group text-center border-0 shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-2 bg-pure-white"
              >
                <CardContent className="pt-8 pb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary mb-4 shadow-medium group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className={`text-3xl font-bold ${stat.color} mb-2 group-hover:scale-105 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced visual element */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-primary rounded-3xl opacity-5"></div>
          <div className="relative bg-pure-white rounded-3xl p-8 border border-border shadow-medium">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Trusted by Industry Leaders
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="text-lg font-semibold text-muted-foreground">Amazon</div>
                <div className="text-lg font-semibold text-muted-foreground">Google</div>
                <div className="text-lg font-semibold text-muted-foreground">SAP</div>
                <div className="text-lg font-semibold text-muted-foreground">Noticeboard</div>
                <div className="text-lg font-semibold text-muted-foreground">Deutsche Bank</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;