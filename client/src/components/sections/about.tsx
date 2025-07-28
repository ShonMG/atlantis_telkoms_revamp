import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          >
            About <span className="text-primary">Atlantis Telkoms</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            A visionary ICT and AI innovation firm transforming Africa's technological landscape since 2011
          </motion.p>
        </motion.div>

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
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h3>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2011 by visionary engineer Agnes Wanjiru Mwangi, Atlantis Telkoms Ltd emerged from a simple
              frustration with outdated, fragile systems. What began as a mission to fix broken telephony systems has
              evolved into a climate-tech powerhouse.
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
          className="grid md:grid-cols-3 gap-8"
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
  );
}
