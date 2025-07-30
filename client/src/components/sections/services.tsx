import { motion } from "framer-motion";
import { Sprout, Home, Network, CheckCircle, Zap, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Description } from "@radix-ui/react-toast";
import ai from "../../images/AI.webp";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Sprout,
      title: "Smart Agriculture (AgTech)",
      description: "Revolutionary farming solutions powered by IoT, AI, and renewable energy.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      gradient: "from-green-400 to-green-600",
      features: [
        "IoT Sensors for poultry and greenhouse monitoring (gas, temperature, humidity)",
        "Automated irrigation and misting systems",
        "GSM-powered alerts and data dashboards",
        "Off-grid solar installations for sustainable farming",
        "Drone-enabled smart mapping and analytics",
        "Live demo support & farmer training"
      ],
      buttonColor: "from-green-500 to-green-600",
    },
    {
      icon: Home,
      title: "Smart Home & Estate Automation",
      description: "Transform your living space with intelligent automation and security systems.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      gradient: "from-blue-400 to-blue-600",
      features: [
        "Voice-controlled home automation (via Siri & Google Assistant)",
        "Gate automation, curtain control, and smart lights",
        "Robotic vacuum integration",
        "Piped music systems",
        "Intrusion detection and real-time alerts",
        "Solar street lighting, garden fairy lights",
        "Integrated estate management platforms"
      ],
      buttonColor: "from-blue-500 to-blue-600",
    },
    {
      icon: Network,
      title: "Telecom & Enterprise ICT Solutions",
      description: "Enterprise-grade communication and networking solutions for modern businesses.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      gradient: "from-purple-400 to-purple-600",
      features: [
        "SStructured cabling (Cat6/6a/7, Fiber)",
        "Network infrastructure audits & upgrades",
        "IP telephony, intercoms, & access control",
        "CCTV Surveillance (IP-enabled, solar-ready)",
        "Alarm Systems &amp; Fire Detection",
        "Smart kiosks, digital displays & content management",
        "Hybrid (AC + Solar) infrastructure design"
      ],
      buttonColor: "from-purple-500 to-purple-600",
    },
    {
      icon: Zap,
      title: "Renewable Energy & Solar Solutions",
      description: "We light up tomorrow with clean, sustainable energy systems",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      gradient: "from-blue-400 to-blue-600",
      features: [
        "Solar Street Lighting: Intelligent dusk-to-dawn lights with motion sensors",
        "Flower Fairy Garden Lights: Aesthetic, solar-powered path lighting",
        "Off-grid Solar Power: Inverter systems, charge controllers, and lithium-ion batteries",
        "Solar Water Pumps: Ideal for borehole and agricultural irrigation"
      ],
      buttonColor: "from-yellow-500 to-yellow-600",
    },
    {
      icon: BrainCircuit,
      title: "Integrated AI Platforms",
      description: "All our services converge under one AI-powered umbrella. This integrated intelligence coordinates all systems into a user-centric interface",
      image: ai,
      gradient: "from-blue-400 to-blue-600",
      features: [
        "One Dashboard, All Systems: Control security, energy, automation, and more",
        "Real-Time Monitoring: Status reports, analytics, and performance updates",
        "Remote Access & Alerts: Instant notifications and mobile command functions",
        "Automated Triggers: Environmental and behavior-based logic sets"
      ],
      buttonColor: "from-blue-500 to-blue-600",
    }
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
