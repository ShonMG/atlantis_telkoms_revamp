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
      category: "institutions",
      title: "Kenya National Examinations Council (KNEC)",
      description: "ICT infrastructure deployment for secure exam data transmission. Included structured cabling, VoIP setup, and high-density network centers for reliable communication and compliance.",
      
      tag: "Education",
      tagColor: "text-green-600 bg-green-100",
    },
    {
      id: 2,
      category: "saccos",
      title: "Unaitais Sacco (2013 - Present)",
      description:`Network point upgrades, structured cabling, and ICT support 
                    across multiple branches (Githumu, Kangari, Gatura, Embu, Gatindu, Cardinal Otunga, Mlolongo Branches among others). Offered structured cabling, cctvs, Biometrics, fire alarms,  Intruders, CCTV, and provided ongoing maintenance.`,
      tag: "Saccos",
      tagColor: "text-blue-600 bg-blue-100",
    },
    {
      id: 3,
      category: "institutions",
      title: "Cooperative Bank Branches Countrwide.",
      description:  `Bank Transformation Waves 1 to 5 (2013–2016) Structured cabling and network upgrades for 40+ branches including Coop Trust, Coop House, and branches in Kiambu,Machakos, Thika, Digo,
                     Nkurumah, Wakulima, Githurai, Zimmerman, Ruaka, TRM, Ruiru,Embakasi, Athi River, Kisumu,
                      Mbale, Mbita, Yala, Malaba, Kimilili, Keroka, Nyamira, Mwingi,Wote, Kutus, Isiolo, Mwea,
                       Siakago, Nyali, Kongowea, Voi, and Malindi. Projects included backbone fiber installations,
                        switch configurations, CAT6/CAT6a cabling, and redundant failover designs. Improved uptime, performance, and customer satisfaction across the network.`,
      tag: "Banking",
      tagColor: "text-purple-600 bg-purple-100",
    },
    {
      id: 4,
      category: "institutions",
      title: "Technical University of Mombasa (TUM)",
      description: "Campus-wide structured cabling and intercom network enabling real-time research, learning, and collaboration.",
      tag: "Education",
      tagColor: "text-green-600 bg-green-100",
    },
    {
      id: 5,
      category: "ai",
      title: "Charge 24 AI Analytics",
      description: ` AI Analytics for Smart Sensors &amp; Smart Screens AI-powered analytics transform ordinary sensors and digital screens into intelligent 
                    systems capable of real-time decision-making, predictive insights, and adaptive responses. This solution, deployed for Charge 24, enhances both environmental monitoring and user interaction.`,
      tag: "AI",
      tagColor: "text-blue-600 bg-blue-100",
    },
    {
      id: 6,
      category: "saccos",
      title: "Stima SACCO & Elimu SACCO",
      description: " Structured cabling, intercoms, CCTV, and biometric access projects with standardized security and network design across branches.",
     
      tag: "Saccos",
      tagColor: "text-purple-600 bg-purple-100",
    },
    {
      id: 7,
      category: "saccos",
      title: "Fundilima SACCO",
      description: "Smart Gated Community Turnkey smart estate project integrating motion sensors, smart lights, access control, solar, automation platforms, CCTV surveillance, Biometrics, Telephony and Structured Cabling..",
     
      tag: "Saccos",
      tagColor: "text-purple-600 bg-purple-100",
    },
    {
      id: 8,
      category: "institutions",
      title: "Kenya Forest Service (KFS)",
      description: "Installed ruggedized ICT systems including solar CCTV and IP intercoms across regional forestry offices to improve data capture and HQ coordination.",
      tag: "Government",
      tagColor: "text-purple-600 bg-purple-100",
    },
    {
      id: 9,
      category: "institutions",
      title: "Global Communities",
      description: "Installed Structured Cabling Biometrics and cctvs",
      tag: "NGO",
      tagColor: "text-purple-600 bg-purple-100",
    },
    {
      id: 10,
      category: "real_estate",
      title: "Welivia Apartments",
      description: "Did Solar Power Installations",
      tag: "Flat",
      tagColor: "text-purple-600 bg-purple-100",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "ai", label: "AI" },
    { id: "institutions", label: "Institutions" },
    { id: "saccos", label: "Saccos" },
    { id: "real_estate", label: "Real Estate"},
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
              {/* <div className="h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div> */}
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
