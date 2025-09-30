import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronDown, ChevronUp, Code2, Cpu, Database, Binary, Clock, Users, Award, BookOpen } from "lucide-react";

const Programs = () => {
  const [openDropdowns, setOpenDropdowns] = useState<{[key: number]: boolean}>({});

  const toggleDropdown = (index: number) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const programs = [
    {
      icon: Code2,
      title: "Website Development",
      description: "Master full-stack web development with modern technologies and frameworks",
      duration: "16 Weeks",
      level: "Beginner to Advanced",
      students: "2,500+ Enrolled",
      modules: [
        "HTML5 & CSS3 Fundamentals",
        "JavaScript ES6+ & DOM Manipulation",
        "React.js & State Management",
        "Node.js & Express.js",
        "Database Design & MongoDB",
        "RESTful APIs & Authentication",
        "Deployment & DevOps Basics",
        "Version Control with Git"
      ],
      gradient: "from-forest-green to-moss-green",
      accentColor: "bg-forest-green"
    },
    {
      icon: Cpu,
      title: "Artificial Intelligence",
      description: "Dive deep into AI technologies, machine learning, and neural networks",
      duration: "20 Weeks",
      level: "Intermediate to Advanced",
      students: "1,800+ Enrolled",
      modules: [
        "Python Programming Fundamentals",
        "Mathematics for AI (Linear Algebra, Statistics)",
        "Machine Learning Algorithms",
        "Deep Learning & Neural Networks",
        "Natural Language Processing",
        "Computer Vision",
        "TensorFlow & PyTorch",
        "AI Ethics & Deployment"
      ],
      gradient: "from-moss-green to-sunbeam-yellow",
      accentColor: "bg-moss-green"
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Transform raw data into actionable insights using statistical methods and tools",
      duration: "18 Weeks",
      level: "Beginner to Advanced",
      students: "2,100+ Enrolled",
      modules: [
        "Python for Data Analysis",
        "Statistics & Probability",
        "Data Visualization (Matplotlib, Seaborn)",
        "Pandas & NumPy",
        "SQL & Database Management",
        "Machine Learning for Data Science",
        "Big Data Technologies (Spark, Hadoop)",
        "Business Intelligence & Reporting"
      ],
      gradient: "from-sunbeam-yellow to-forest-green",
      accentColor: "bg-sunbeam-yellow"
    },
    {
      icon: Binary,
      title: "Data Structures & Algorithm using Java",
      description: "Master programming fundamentals with Java and algorithmic problem-solving",
      duration: "12 Weeks",
      level: "Beginner to Intermediate",
      students: "3,200+ Enrolled",
      modules: [
        "Java Fundamentals & OOP Concepts",
        "Arrays, Strings & Basic Data Structures",
        "Linked Lists, Stacks & Queues",
        "Trees & Binary Search Trees",
        "Graphs & Graph Algorithms",
        "Sorting & Searching Algorithms",
        "Dynamic Programming",
        "System Design Basics"
      ],
      gradient: "from-forest-green to-sunbeam-yellow",
      accentColor: "bg-forest-green"
    }
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive learning solutions designed to meet the unique needs of every stakeholder in the education ecosystem.
          </p>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {programs.map((program, index) => {
            const Icon = program.icon;
            const isOpen = openDropdowns[index] || false;

            return (
              <div key={index} className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Program Header */}
                <div
                  className="p-8 cursor-pointer hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all duration-300"
                  onClick={() => toggleDropdown(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      {/* Program Icon */}
                      <div className={`relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${program.gradient} shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>

                      {/* Program Info */}
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {program.title}
                        </h3>
                        <p className="text-muted-foreground text-lg mb-3">
                          {program.description}
                        </p>

                        {/* Program Stats */}
                        <div className="flex items-center space-x-6 text-sm">
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span className="font-medium">{program.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <Award className="w-4 h-4" />
                            <span className="font-medium">{program.level}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <Users className="w-4 h-4" />
                            <span className="font-medium">{program.students}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Expand/Collapse Icon */}
                    <div className="flex items-center space-x-4">
                      <Button
                        className={`bg-gradient-to-r ${program.gradient} text-white hover:shadow-lg transition-all duration-300 font-semibold px-6 py-3`}
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle enrollment
                        }}
                      >
                        Enroll Now
                      </Button>
                      <div className={`p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-gray-100' : 'hover:bg-gray-100'}`}>
                        {isOpen ? (
                          <ChevronUp className="w-6 h-6 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-muted-foreground" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dropdown Content - Curriculum */}
                {isOpen && (
                  <div className="border-t border-gray-100 bg-gradient-to-br from-gray-50/50 to-white">
                    <div className="p-8">
                      <div className="mb-6">
                        <h4 className="text-xl font-bold text-foreground mb-2 flex items-center">
                          <BookOpen className="w-5 h-5 mr-2" />
                          Complete Curriculum
                        </h4>
                        <p className="text-muted-foreground">
                          Comprehensive modules designed to take you from beginner to industry-ready professional
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        {program.modules.map((module, moduleIndex) => (
                          <div
                            key={moduleIndex}
                            className="flex items-start space-x-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-200"
                          >
                            <div className="flex-shrink-0">
                              <div className={`w-8 h-8 rounded-lg ${program.accentColor} flex items-center justify-center`}>
                                <span className="text-white font-bold text-sm">{moduleIndex + 1}</span>
                              </div>
                            </div>
                            <div>
                              <h5 className="font-semibold text-foreground text-sm mb-1">{module}</h5>
                              <div className="w-full bg-gray-200 rounded-full h-1">
                                <div className={`${program.accentColor} h-1 rounded-full`} style={{width: '100%'}}></div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 text-center">
                        <Button
                          variant="outline"
                          className="border-gray-300 text-muted-foreground hover:bg-gray-50 px-8 py-3"
                        >
                          Download Full Syllabus
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;