import { motion } from "framer-motion";
import { Satellite, MapPin, Phone, Mail } from "lucide-react";
import { SiFacebook, SiX, SiLinkedin, SiInstagram } from "react-icons/si";
import logo from "../../images/logo.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    "Smart Agriculture",
    "Home Automation",
    "Enterprise ICT",
    "Solar Solutions",
    "Consultation",
  ];

  const socialLinks = [
    { icon: SiFacebook, href: "https://web.facebook.com/atlantistelkoms" },
    { icon: SiX, href: "#" },
    { icon: SiLinkedin, href: "#" },
    { icon: SiInstagram, href: "https://www.instagram.com/atlantistelkomsltd" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3 mb-6"
            >
              <span className="text-2xl font-bold">Atlantis Telkoms</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 mb-6 max-w-md"
            >
              Engineering Africa's future through intelligent, sustainable, and inclusive technologies.
              Transforming lives one smart solution at a time.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-300">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-white transition-colors duration-300"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <MapPin className="mr-3 text-primary h-4 w-4" />
                Kenrail Towers, 7th Floor<br />Westlands, Nairobi
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-primary h-4 w-4" />
                +254 769 481 793
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-primary h-4 w-4" />
                info@atlantistelkoms.com
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-gray-700 pt-8 text-center text-gray-400"
        >
          <p>
            &copy; 2025 Atlantis Telkoms Ltd. All rights reserved. | Engineering Africa's Future |
            Powered by Innovation. Grounded in Excellence. Built for Africa
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
