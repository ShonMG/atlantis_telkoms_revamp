import { motion } from "framer-motion";
import { Sprout, Home, Network, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Sprout,
      title: "Smart Agriculture (AgTech)",
      description: "Revolutionary farming solutions powered by IoT, AI, and renewable energy.",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      gradient: "from-green-400 to-green-600",
      features: [
        "IoT Sensors for monitoring",
        "Automated irrigation systems",
        "AI-driven diagnostics",
        "Solar-powered solutions",
      ],
      buttonColor: "from-green-500 to-green-600",
    },
    {
      icon: Home,
      title: "Smart Home Automation",
      description: "Transform your living space with intelligent automation and security systems.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      gradient: "from-blue-400 to-blue-600",
      features: [
        "Voice-controlled automation",
        "Security & access control",
        "Smart lighting & curtains",
        "Estate management platforms",
      ],
      buttonColor: "from-blue-500 to-blue-600",
    },
    {
      icon: Network,
      title: "Telecom & Enterprise ICT",
      description: "Enterprise-grade communication and networking solutions for modern businesses.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      gradient: "from-purple-400 to-purple-600",
      features: [
        "Structured cabling systems",
        "IP telephony solutions",
        "CCTV & surveillance systems",
        "Network infrastructure",
      ],
      buttonColor: "from-purple-500 to-purple-600",
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
    <section id="services" className="py-20 bg-gray-50" ref={ref}>
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
            Our <span className="text-primary">Services</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive technology solutions designed for Africa's unique challenges and opportunities
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift group"
            >
              <div className={`h-64 bg-gradient-to-br ${service.gradient} relative overflow-hidden`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center`}>
                    <service.icon className="text-white text-lg" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 h-4 w-4" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full bg-gradient-to-r ${service.buttonColor} text-white py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
