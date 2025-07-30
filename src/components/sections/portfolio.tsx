import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      category: "agriculture",
      title: "Solar-Powered Farm Monitoring",
      description: "Complete IoT implementation for greenhouse monitoring with solar power integration.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tag: "Agriculture",
      tagColor: "text-green-600 bg-green-100",
    },
    {
      id: 2,
      category: "smart-home",
      title: "Smart Estate Automation",
      description: "Complete smart home integration for luxury residential development in Nairobi.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tag: "Smart Home",
      tagColor: "text-blue-600 bg-blue-100",
    },
    {
      id: 3,
      category: "enterprise",
      title: "Banking Infrastructure Upgrade",
      description: "Complete network overhaul and security system implementation for Co-operative Bank.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tag: "Enterprise",
      tagColor: "text-purple-600 bg-purple-100",
    },
    {
      id: 4,
      category: "agriculture",
      title: "AI-Powered Crop Analysis",
      description: "Machine learning system for automated crop health monitoring and yield prediction.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tag: "Agriculture",
      tagColor: "text-green-600 bg-green-100",
    },
    {
      id: 5,
      category: "smart-home",
      title: "Luxury Villa Automation",
      description: "Full home automation system with voice control and mobile app integration.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tag: "Smart Home",
      tagColor: "text-blue-600 bg-blue-100",
    },
    {
      id: 6,
      category: "enterprise",
      title: "University Network Upgrade",
      description: "Campus-wide network infrastructure and security system for Technical University of Mombasa.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      tag: "Enterprise",
      tagColor: "text-purple-600 bg-purple-100",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "agriculture", label: "Agriculture" },
    { id: "smart-home", label: "Smart Homes" },
    { id: "enterprise", label: "Enterprise" },
  ];

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="portfolio" className="py-20 bg-white" ref={ref}>
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
            Our <span className="text-primary">Portfolio</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Showcasing successful implementations across Kenya and East Africa
          </motion.p>
        </motion.div>

        {/* Portfolio Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.div key={filter.id} variants={itemVariants}>
              <Button
                onClick={() => setActiveFilter(filter.id)}
                variant={activeFilter === filter.id ? "default" : "outline"}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-primary hover:text-white"
                }`}
              >
                {filter.label}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift group"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className={`text-sm px-3 py-1 rounded-full ${item.tagColor}`}>
                    {item.tag}
                  </span>
                  <button className="text-primary hover:text-secondary transition-colors duration-300">
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
