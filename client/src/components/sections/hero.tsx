import { motion } from "framer-motion";
import { Rocket, Calendar, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import team from "../../images/atlantis_4.jpg";
import hero_section from "../../images/integrated_ai.jpg";
export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const floatingParticles = [
    { size: "w-2 h-2", color: "bg-white/30", delay: 0, position: "top-20 left-10" },
    { size: "w-3 h-3", color: "bg-accent/40", delay: 1, position: "top-40 right-20" },
    { size: "w-2 h-2", color: "bg-primary/40", delay: 2, position: "bottom-40 left-20" },
    { size: "w-4 h-4", color: "bg-white/20", delay: 3, position: "bottom-20 right-10" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 parallax-bg">
        <img
          src={team}
          alt="Modern African technology scene"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {floatingParticles.map((particle, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: particle.delay, duration: 1 }}
            className={`absolute ${particle.position} ${particle.size} ${particle.color} rounded-full animate-float`}
            style={{ animationDelay: `${particle.delay}s` }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-shadow">
                Engineering{" "}
                <span className="bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
                  Africa's Future
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                With AI, Solar & Secure Connectivity
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                From Smart Homes to Smart Agriculture, Atlantis Telkoms Ltd delivers intelligent,
                sustainable, and inclusive technologies that respond to Africa's most urgent needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={() => scrollToSection("services")}
                className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Rocket className="mr-2 h-4 w-4" />
                Explore Services
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="glass-effect text-black border-white/20 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book Consultation
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="relative"
          >
            <div className="relative">
              <img
                src={hero_section}
                alt="African technology innovation"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center animate-bounce"
              >
                <Lightbulb className="text-white text-2xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}
