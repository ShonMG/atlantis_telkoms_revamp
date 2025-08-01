import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Satellite, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import logo from "../../images/logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (location !== "/") {
      setLocation("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (path: string, sectionId?: string) => {
    if (sectionId) {
      scrollToSection(sectionId);
    } else {
      setLocation(path);
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    { id: "services", label: "Services", sectionId: "services" },
    { id: "portfolio", label: "Portfolio", sectionId: "portfolio" },
    { id: "contact", label: "Contact", sectionId: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? "floating-nav py-3" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => setLocation("/")}
          >
             <img src={logo} alt="Logo" className="h-24 w-auto rounded" />
            
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleNavigation(item.path || "/", item.sectionId)}
                className={`transition-colors duration-300 font-medium ${
                  (item.path && location === item.path) || (item.sectionId && location === "/")
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                {item.label}
              </motion.button>
            ))}

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg overflow-hidden"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.path || "/", item.sectionId)}
                className={`block w-full text-left transition-colors duration-300 font-medium py-2 ${
                  (item.path && location === item.path) || (item.sectionId && location === "/")
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                {item.label}
              </button>
            ))}

          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
