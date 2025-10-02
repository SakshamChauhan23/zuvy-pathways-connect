import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Code, BookOpen, Activity, Video, Shield, Wand2 } from "lucide-react";
import { useState } from "react";

// Feature card component with image loading state
const FeatureCard = ({ feature, index, isEven }: {
  feature: any;
  index: number;
  isEven: boolean;
}) => {
  const [imageError, setImageError] = useState(false);
  const Icon = feature.icon;

  // Array of screenshot images for each feature
  const featureImages = [
    "/screenshots/dashboard-analytics.png", // Real-time Analytics Dashboard
    "/screenshots/code-compiler.png", // Built-in Code Compiler
    "/screenshots/course-creation-studio.png", // Course Creation Studio
    "/screenshots/submission-analysis.png", // Detailed Submission Analysis
    "/screenshots/live-lectures.png", // Live Lectures & Recordings
    "/screenshots/role-access-control.png", // Role-based Access Control
    "/screenshots/ai-content-creation.png" // AI-Powered Content Creation
  ];

  return (
    <div className={`flex flex-col lg:flex-row items-center gap-12 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
      {/* Content Side */}
      <div className="flex-1 text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-moss-green shadow-strong">
            <Icon className="w-10 h-10 text-white" />
          </div>
          <div className="ml-6 hidden lg:block">
            <div className="text-sm text-muted-foreground font-medium mb-1">Feature {String(index + 1).padStart(2, '0')}</div>
            <div className="w-16 h-1 bg-forest-green rounded-full"></div>
          </div>
        </div>

        <h3 className={`text-3xl font-bold ${feature.color} mb-4`}>
          {feature.title}
        </h3>

        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          {feature.description}
        </p>

      </div>

      {/* Visual Side - Screenshot Display */}
      <div className="flex-1 relative">
        <div className="relative max-w-md mx-auto">
          <div className="relative">
            <div className="bg-white rounded-3xl p-4 shadow-xl border border-gray-200">
              <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100">
                {!imageError ? (
                  <img
                    src={featureImages[index]}
                    alt={feature.title}
                    className="w-full h-full object-contain transition-transform duration-300 hover:scale-105 bg-white"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  // Fallback when image fails to load
                  <div className="w-full h-full bg-moss-green flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <Icon className="w-12 h-12" />
                      </div>
                      <h4 className="text-lg font-bold">{feature.title}</h4>
                    </div>
                  </div>
                )}
              </div>
              {/* Metrics Display */}
              <div className="mt-4 grid grid-cols-2 gap-2">
                {feature.metrics.slice(0, 4).map((metric: any, i: number) => (
                  <div key={i} className="text-center p-2 bg-gray-50 rounded-lg">
                    <div className={`text-lg font-bold ${feature.color}`}>{metric.value}</div>
                    <div className="text-xs text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Impact = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Real-time Analytics Dashboard",
      description: "Monitor learner engagement, progress, and performance with comprehensive analytics and insights to optimize your teaching effectiveness",
      color: "text-forest-green",
      gradient: "from-forest-green to-moss-green",
      metrics: [
        { value: "1,247", label: "Active Learners", color: "text-forest-green" },
        { value: "84%", label: "Course Completion", color: "text-moss-green" },
        { value: "23", label: "Live Courses", color: "text-sunbeam-yellow" },
        { value: "856", label: "Practice Questions", color: "text-forest-green" }
      ]
    },
    {
      icon: Code,
      title: "Built-in Code Compiler",
      description: "Execute and test code directly within the platform with our integrated compiler supporting multiple programming languages and instant feedback",
      color: "text-moss-green",
      gradient: "from-moss-green to-sunbeam-yellow",
      metrics: [
        { value: "15+", label: "Programming Languages", color: "text-moss-green" },
        { value: "Instant", label: "Code Execution", color: "text-sunbeam-yellow" },
        { value: "Cloud", label: "Infrastructure", color: "text-forest-green" },
        { value: "99.9%", label: "Uptime", color: "text-moss-green" }
      ]
    },
    {
      icon: BookOpen,
      title: "Course Creation Studio",
      description: "Build comprehensive courses with our intuitive course builder featuring multimedia content, interactive elements, and customizable curriculum paths",
      color: "text-sunbeam-yellow",
      gradient: "from-sunbeam-yellow to-forest-green",
      metrics: [
        { value: "Drag & Drop", label: "Course Builder", color: "text-sunbeam-yellow" },
        { value: "Video", label: "Content Support", color: "text-forest-green" },
        { value: "Custom", label: "Learning Paths", color: "text-moss-green" },
        { value: "50+", label: "Course Templates", color: "text-sunbeam-yellow" }
      ]
    },
    {
      icon: Activity,
      title: "Detailed Submission Analysis",
      description: "Get comprehensive insights into student submissions with detailed analysis, performance metrics, and automated feedback generation",
      color: "text-forest-green",
      gradient: "from-forest-green to-moss-green",
      metrics: [
        { value: "Auto", label: "Code Review", color: "text-forest-green" },
        { value: "Memory", label: "Usage Tracking", color: "text-moss-green" },
        { value: "Performance", label: "Benchmarking", color: "text-sunbeam-yellow" },
        { value: "Detailed", label: "Test Results", color: "text-forest-green" }
      ]
    },
    {
      icon: Video,
      title: "Live Lectures & Recordings",
      description: "Conduct engaging live sessions with students and provide access to recorded lectures for flexible learning schedules",
      color: "text-moss-green",
      gradient: "from-moss-green to-sunbeam-yellow",
      metrics: [
        { value: "4K", label: "Video Quality", color: "text-moss-green" },
        { value: "Interactive", label: "Live Sessions", color: "text-sunbeam-yellow" },
        { value: "Automatic", label: "Recording", color: "text-forest-green" },
        { value: "Multilingual", label: "Language Support", color: "text-moss-green" }
      ]
    },
    {
      icon: Shield,
      title: "Role-based Access Control",
      description: "Secure your platform with granular permission management, allowing precise control over user access and administrative functions",
      color: "text-sunbeam-yellow",
      gradient: "from-sunbeam-yellow to-forest-green",
      metrics: [
        { value: "Multi-tier", label: "Admin Control", color: "text-sunbeam-yellow" },
        { value: "Scalable", label: "User Management", color: "text-forest-green" },
        { value: "Enterprise", label: "Security", color: "text-moss-green" },
        { value: "Custom", label: "Role Creation", color: "text-sunbeam-yellow" }
      ]
    },
    {
      icon: Wand2,
      title: "AI-Powered Content Creation",
      description: "Generate high-quality educational content automatically with our AI-powered tools for creating questions, explanations, and course materials",
      color: "text-forest-green",
      gradient: "from-forest-green to-moss-green",
      metrics: [
        { value: "AI-Generated", label: "Content", color: "text-forest-green" },
        { value: "Smart MCQ", label: "Creation", color: "text-moss-green" },
        { value: "Adaptive", label: "Difficulty Levels", color: "text-sunbeam-yellow" },
        { value: "Topic-based", label: "Question Bank", color: "text-forest-green" }
      ]
    }
  ];

  return (
    <section id="impact" className="py-20 bg-light-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Zuvy?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience a comprehensive learning platform designed to transform your career with industry-leading features and unmatched support.
          </p>
        </div>

        {/* New Layout - Alternating Left/Right Design */}
        <div className="space-y-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;

            return (
              <FeatureCard key={index} feature={feature} index={index} isEven={isEven} />
            );
          })}
        </div>

        {/* Enhanced visual element */}
        <div className="mt-16 relative">
          <div className="relative bg-pure-white rounded-3xl p-8 border border-border shadow-medium">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Trusted by Industry Leaders
              </h3>
              <div className="overflow-hidden">
                <div className="flex items-center justify-center gap-12 animate-scroll-left">
                  {/* Company logos - including all industry partners */}
                  {[
                    { name: "Infosys", src: "/Infosys_logo.svg.png" },
                    { name: "TCS", src: "/Tata_Consultancy_Services_old_logo.svg.png" },
                    { name: "Wipro", src: "/Wipro_Primary_Logo_Color_RGB.svg.png" },
                    { name: "SAP", src: "/SAP-logo-01.png" },
                    { name: "Deutsche Bank", src: "/DEUTSCHE-BANK_11-1024x576.jpg" },
                    { name: "Amazon", src: "/amazon-logo-amazon-icon-free-free-vector.jpg" },
                    { name: "Mindtree", src: "/mindtree-logo.webp" },
                    // Duplicate for seamless loop
                    { name: "Infosys", src: "/Infosys_logo.svg.png" },
                    { name: "TCS", src: "/Tata_Consultancy_Services_old_logo.svg.png" },
                    { name: "Wipro", src: "/Wipro_Primary_Logo_Color_RGB.svg.png" },
                    { name: "SAP", src: "/SAP-logo-01.png" },
                    { name: "Deutsche Bank", src: "/DEUTSCHE-BANK_11-1024x576.jpg" },
                    { name: "Amazon", src: "/amazon-logo-amazon-icon-free-free-vector.jpg" },
                    { name: "Mindtree", src: "/mindtree-logo.webp" }
                  ].map((company, index) => (
                    <div key={index} className="flex items-center justify-center h-16 px-6 flex-shrink-0">
                      <img
                        src={company.src}
                        alt={company.name}
                        className="max-h-12 max-w-32 object-contain transition-all duration-300 hover:scale-110 opacity-80 hover:opacity-100"
                        onError={(e) => {
                          // Fallback to text if image fails to load
                          e.currentTarget.style.display = 'none';
                          const fallback = document.createElement('div');
                          fallback.className = 'text-lg font-semibold text-muted-foreground whitespace-nowrap';
                          fallback.textContent = company.name;
                          e.currentTarget.parentNode?.appendChild(fallback);
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;