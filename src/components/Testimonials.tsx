import { Card, CardContent } from "@/components/ui/card";
import { Quote, Award, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import vaishnaviDeokarImg from "@/assets/student-vaishnavi-deokar.png";
import varunGuleriaImg from "@/assets/student-varun-guleria.png";
import asthaNegiImg from "@/assets/student-astha-negi.png";
import ayushiShahiImg from "@/assets/student-ayushi-shahi.png";

const Testimonials = () => {
  const [expandedCards, setExpandedCards] = useState<{[key: number]: boolean}>({});

  const toggleExpand = (index: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  const testimonials = [
    {
      name: "Vaishnavi Deokar",
      placement: "Amazon",
      quote: "Hi, I'm Vaishnavi Deokar, a B.Tech Computer Engineering student with a keen interest in DSA, competitive programming, web development, and problem-solving. Completing the DSA course with Zuvy greatly improved my problem-solving skills and helped me secure an SDE Internship at Amazon, along with cracking placement rounds of companies like Google, DE Shaw, Citi, Walmart CodeHers, and Deutsche Bank. Thank you Zuvy for the valuable mentorship and support that made a big difference in my journey.",
      highlight: "Multiple Top-Tier Placements",
      image: vaishnaviDeokarImg
    },
    {
      name: "Varun Guleria",
      placement: "Noticeboard",
      quote: "Hi, I'm Varun Guleria, an engineering student passionate about web development, programming, and problem-solving. I completed my Data Structures and Algorithms (DSA) course in Java from NavGurukul, which laid a solid foundation for my career. During the course, I learned core Java concepts, DSA, and problem-solving techniques that helped me crack interviews and secure an internship at Noticeboard. Thanks to the guidance and mentorship provided by the instructors, I feel confident and prepared for future challenges in the tech industry.",
      highlight: "Strong Foundation Building",
      image: varunGuleriaImg
    },
    {
      name: "Astha Negi",
      placement: "Amazon",
      quote: "I completed an intensive Java-based Data Structures and Algorithms (DSA) course through Zuvy, which played a pivotal role in shaping my technical journey. Driven by a passion for problem-solving, I dedicated myself to consistent daily practice mastering DSA, revisiting computer science fundamentals such as databases and operating systems, and continuously striving for improvement. These sustained efforts and focused preparation led to my placement at Amazon. I am deeply grateful for the mentorship and learning experiences that have guided me.",
      highlight: "Placement at Amazon",
      image: asthaNegiImg
    },
    {
      name: "Ayushi Shahi",
      placement: "Amazon",
      quote: "I recently cracked an internship at Amazon, which has been a major milestone in my journey. My consistent practice in Data Structures and Algorithms (DSA) using Java, along with focused preparation on problem-solving platforms like LeetCode and guidance from mentors, played a crucial role in my success. Participating in hackathons, projects involving real-world applications, and staying dedicated to continuous Learning helped me build the confidence and skillset needed to succeed.",
      highlight: "Amazon Internship",
      image: ayushiShahiImg
    },
    {
      name: "Pallavi Laxman Dongare",
      placement: "Tatyasaheb Kore Institute",
      quote: "Zuvy Bootcamp helped me strengthen my coding fundamentals, improve problem-solving skills, and gain hands-on practice with real-world projects. It also improved my confidence for interviews and taught me how to approach technical challenges systematically.",
      highlight: "Interview Confidence",
      image: vaishnaviDeokarImg // Reusing image as placeholder
    },
    {
      name: "Vaishnavi Saggurthi",
      placement: "Amazon AFE Program",
      quote: "Zuvy Bootcamp played a key role in helping me secure the Amazon SDE Internship. The structured learning path strengthened my fundamentals in data structures and algorithms, while the guided coding practice improved my speed and accuracy for online assessments. The bootcamp's one-shot videos and coding bootcamp sessions closely aligned with the type of problems asked in Amazon's OA, which gave me a big advantage. Mock assessments and mentorship sessions helped me understand the exam pattern and boosted my confidence. Overall, Zuvy not only enhanced my technical skills but also prepared me with the right strategies to clear the Amazon AFE program.",
      highlight: "Amazon AFE Success",
      image: asthaNegiImg // Reusing image as placeholder
    }
  ];

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-20 bg-light-beige overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h5 className="font-bold text-forest-green mb-6">
            Success Stories
          </h5>
          <p className="text-forest-green/70 max-w-3xl mx-auto">
            Real stories from real learners who transformed their careers through Zuvy's programs.
          </p>
        </div>

        {/* Continuous moving testimonials with hover pause */}
        <div className="relative">
          <div className="flex animate-scroll-left hover:[animation-play-state:paused] space-x-8 mb-8">
            {duplicatedTestimonials.map((testimonial, index) => {
              const isExpanded = expandedCards[index];
              return (
                <Card
                  key={index}
                  className={`flex-shrink-0 w-80 group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 bg-white hover:z-10 ${isExpanded ? 'h-auto' : 'h-[380px]'}`}
                >
                  <CardContent className="relative z-10 p-5 h-full flex flex-col">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-moss-green/20 flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h6 className="font-semibold text-forest-green text-base truncate">{testimonial.name}</h6>
                        <p className="text-sm text-forest-green/70">{testimonial.placement}</p>
                        <div className="text-xs font-semibold text-moss-green bg-moss-green/10 px-2 py-0.5 rounded mt-1 inline-block">
                          {testimonial.highlight}
                        </div>
                      </div>
                      <Award className="w-5 h-5 text-sunbeam-yellow flex-shrink-0 ml-2" />
                    </div>

                    <div className="mb-3 flex-1 overflow-hidden">
                      <Quote className="w-5 h-5 text-moss-green opacity-60 mb-2" />
                      <p className={`text-forest-green/80 leading-relaxed text-sm ${isExpanded ? '' : 'line-clamp-6'}`}>
                        "{testimonial.quote}"
                      </p>
                    </div>

                    <button
                      onClick={() => toggleExpand(index)}
                      className="flex items-center gap-1 text-moss-green hover:text-forest-green font-semibold text-xs transition-colors self-start"
                    >
                      {isExpanded ? (
                        <>
                          View Less <ChevronUp className="w-3 h-3" />
                        </>
                      ) : (
                        <>
                          View More <ChevronDown className="w-3 h-3" />
                        </>
                      )}
                    </button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;