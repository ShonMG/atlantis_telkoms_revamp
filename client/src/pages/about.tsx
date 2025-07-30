import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Code, Lightbulb } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ceo from "../images/ceo.jpg"

export default function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const teamMembers = [
    {
      name: "Agnes Wanjiru Mwangi",
      role: "CEO & Head Engineer",
      image: "",
      expertise: ["CCNA & CCNP Certified", "Smart Automation", "AI Infrastructure", "Climate-Tech Solutions"],
      gradient: "from-primary/5 to-secondary/5",
      iconBg: "bg-primary",
    },
    {
      name: "Hansel",
      role: "Lead Systems Engineer",
      image: "",
      expertise: [],
      gradient: "from-accent/5 to-yellow-300/5",
      iconBg: "bg-accent",
    },
    {
      name: "Brenda Mwaura",
      role: "",
      image: "",
      description: "",
      expertise: [""],
      gradient: "from-green-500/5 to-emerald-500/5",
      iconBg: "bg-green-500",
    },
    {
      name: "Brian Limo",
      role: "",
      image: "",
      description: "",
      expertise: [],
      gradient: "from-purple-500/5 to-blue-500/5",
      iconBg: "bg-purple-500",
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
                src={ceo}
                alt="Agnes Wanjiru Mwangi - CEO and Founder"
                className="rounded-2xl shadow-xl hover-lift"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                
              </p>
              <p className="text-gray-600 leading-relaxed">
                Fourteen years ago, I founded Atlantis Telkoms Ltd with a clear vision: to integrate technology and intelligence into the very fabric of our lives—transforming homes, businesses, and communities across Kenya.

The idea was born out of frustration. Back then, I was assigned to a major bank to maintain their analog PABX system and messy telephony wiring. Every time someone so much as touched a wire, the entire system would glitch—bringing operations to a halt and prompting desperate calls to tech support. It was clear: systems weren’t just outdated; they were fragile, inefficient, and totally unsustainable.

What began as a one-woman mission to fix broken systems has since grown into a respected player in the tech and security space. Atlantis Telkoms has delivered high-impact solutions for government bodies, financial institutions, universities, Saccos, and private enterprises—including Co-operative Bank of Kenya, Kenya National Examination Council, Elimu Sacco, Unaitas, and the Technical University of Mombasa. Each project reaffirmed our commitment to building solutions that are not just smart — but resilient and reliable.

With certifications in CCNA, CCNP, and Computer Systems & Applications, I bring a strong technical foundation and hands-on experience in ICT infrastructure, smart automation, and electronic security. But what drives me isn’t just the tech — it’s the belief that intelligent systems can truly transform how people live and work.

Today, Atlantis Telkoms is building the future with AI-powered platforms, predictive maintenance systems, and smart infrastructure that anticipates needs before problems arise. We’re not just adapting to innovation — we’re driving it.

Whether you're a visionary client, a strategic partner, or a fellow changemaker, I’m always open to collaborating with those who believe in creating a future anchored in trust, purpose, and transformation.</p>
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
                  <div className="text-3xl font-bold text-primary mb-2">17+</div>
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