import { Card, CardContent } from "@/components/ui/card";
import { Quote, Award } from "lucide-react";
import vaishnaviDeokarImg from "@/assets/student-vaishnavi-deokar.png";
import varunGuleriaImg from "@/assets/student-varun-guleria.png";
import asthaNegiImg from "@/assets/student-astha-negi.png";
import ayushiShahiImg from "@/assets/student-ayushi-shahi.png";

const Testimonials = () => {
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
    <section id="testimonials" className="py-24 bg-gradient-to-br from-light-beige to-pure-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from real learners who transformed their careers through Zuvy's programs.
          </p>
        </div>

        {/* Continuous moving testimonials */}
        <div className="relative">
          <div className="flex animate-scroll-left space-x-8 mb-8">
            {duplicatedTestimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="flex-shrink-0 w-96 group relative overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-500 bg-pure-white"
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
                
                <CardContent className="relative z-10 p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-moss-green/20">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.placement}</p>
                      <div className="text-xs font-semibold text-moss-green bg-moss-green/10 px-2 py-1 rounded mt-1 inline-block">
                        {testimonial.highlight}
                      </div>
                    </div>
                    <Award className="w-6 h-6 text-sunbeam-yellow" />
                  </div>
                  
                  <div className="mb-4">
                    <Quote className="w-6 h-6 text-moss-green opacity-60 mb-2" />
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-block bg-pure-white rounded-3xl p-8 shadow-medium border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Join thousands of learners who have transformed their careers with Zuvy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-primary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-medium transition-all duration-300">
                Start Your Journey
              </button>
              <button className="border border-border bg-white text-forest-green px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;