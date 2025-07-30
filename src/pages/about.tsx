import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Code, Lightbulb } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const teamMembers = [
    {
      name: "Agnes Wanjiru Mwangi",
      role: "CEO & Head Engineer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "A visionary engineer with over 14 years of experience in ICT infrastructure and smart automation. Agnes founded Atlantis Telkoms with a mission to transform Africa's technological landscape through innovative, sustainable solutions.",
      expertise: ["CCNA & CCNP Certified", "Smart Automation", "AI Infrastructure", "Climate-Tech Solutions"],
      gradient: "from-primary/5 to-secondary/5",
      iconBg: "bg-primary",
    },
    {
      name: "Samuel Kiprotich",
      role: "Lead Systems Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Samuel specializes in enterprise network infrastructure and security systems. With 10+ years of experience, he leads our technical implementation teams and ensures robust, scalable solutions for our clients.",
      expertise: ["Network Security", "Enterprise ICT", "CCTV Systems", "Structured Cabling"],
      gradient: "from-accent/5 to-yellow-300/5",
      iconBg: "bg-accent",
    },
    {
      name: "Mary Wanjiku",
      role: "Smart Agriculture Specialist",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Mary leads our AgTech division, developing IoT solutions for modern farming. Her background in agricultural engineering and technology integration makes her instrumental in our smart farming initiatives.",
      expertise: ["IoT Sensors", "Agricultural Engineering", "Solar Integration", "Data Analytics"],
      gradient: "from-green-500/5 to-emerald-500/5",
      iconBg: "bg-green-500",
    },
    {
      name: "David Mutinda",
      role: "AI & Software Development Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "David drives our AI initiatives and software development projects. He specializes in machine learning applications for predictive maintenance and intelligent automation systems.",
      expertise: ["Machine Learning", "Predictive Analytics", "Software Architecture", "AI Automation"],
      gradient: "from-purple-500/5 to-blue-500/5",
      iconBg: "bg-purple-500",
    },
    {
      name: "Grace Akinyi",
      role: "Project Manager & Client Relations",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Grace oversees project delivery and maintains client relationships. Her expertise in project management ensures timely delivery and client satisfaction across all our technology implementations.",
      expertise: ["Project Management", "Client Relations", "Quality Assurance", "Business Development"],
      gradient: "from-pink-500/5 to-rose-500/5",
      iconBg: "bg-pink-500",
    },
    {
      name: "James Ochieng",
      role: "Solar & Renewable Energy Engineer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "James leads our renewable energy solutions, specializing in solar installations and off-grid power systems. His expertise ensures sustainable, reliable power for all our technology deployments.",
      expertise: ["Solar Installation", "Off-grid Systems", "Energy Storage", "Sustainable Design"],
      gradient: "from-orange-500/5 to-red-500/5",
      iconBg: "bg-orange-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-white to-accent/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
              About <span className="text-primary">Atlantis Telkoms</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              A visionary ICT and AI innovation firm transforming Africa's technological landscape since 2011
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-16 items-center mb-20"
          >
            <motion.div variants={itemVariants}>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Agnes Wanjiru Mwangi - CEO and Founder"
                className="rounded-2xl shadow-xl hover-lift"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2011 by visionary engineer Agnes Wanjiru Mwangi, Atlantis Telkoms Ltd emerged from a simple
                frustration with outdated, fragile systems. What began as a mission to fix broken telephony systems has
                evolved into a climate-tech powerhouse.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Fourteen years ago, our founder was assigned to maintain analog PABX systems at a major bank. Every time
                someone touched a wire, the entire system would glitch, bringing operations to a halt. This experience
                sparked a vision: to build systems that are not just functional, but resilient, intelligent, and sustainable.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we blend artificial intelligence, renewable energy, and inclusive design to power the next
                generation of African infrastructure, serving government bodies, financial institutions, and enterprises
                across Kenya and beyond.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <motion.div
                  variants={itemVariants}
                  className="text-center p-4 bg-gray-50 rounded-xl hover-lift"
                >
                  <div className="text-3xl font-bold text-primary mb-2">14+</div>
                  <div className="text-gray-600">Years Experience</div>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="text-center p-4 bg-gray-50 rounded-xl hover-lift"
                >
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-gray-600">Projects Delivered</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Mission, Vision, Values */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            <motion.div
              variants={itemVariants}
              className="text-center p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl hover-lift"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Mission</h3>
              <p className="text-gray-600">
                To revolutionize how Africa connects, secures, and powers its future through smart,
                AI-driven and solar-powered technologies.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center p-8 bg-gradient-to-br from-accent/5 to-yellow-300/5 rounded-2xl hover-lift"
            >
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Vision</h3>
              <p className="text-gray-600">
                A self-sustaining, digitally inclusive Africa powered by indigenous innovation
                and ethical engineering.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center p-8 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl hover-lift"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Values</h3>
              <p className="text-gray-600">
                Integrity in Innovation, Accessibility & Inclusion, Excellence through Execution,
                Climate Responsibility, and Collaborative Growth.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The brilliant minds behind Atlantis Telkoms, bringing together expertise in engineering,
              technology, and innovation to transform Africa's digital future.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover-lift group bg-gradient-to-br ${member.gradient}`}
              >
                <div className="h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${member.iconBg} rounded-full flex items-center justify-center mr-4`}>
                      <Award className="text-white text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                      <p className="text-primary font-semibold">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{member.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 text-sm">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let our expert team help you implement smart, sustainable technology solutions
              that drive growth and innovation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/#contact'}
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300"
            >
              <Lightbulb className="inline mr-2 h-5 w-5" />
              Start Your Project Today
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}