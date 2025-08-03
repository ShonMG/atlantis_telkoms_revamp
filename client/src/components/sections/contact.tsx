import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useForm } from "@formspree/react";


interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  // const contactMutation = useMutation({
  //   mutationFn: async (data: ContactFormData) => {
  //     return await apiRequest("POST", "/api/contact", data);
  //   },
  //   onSuccess: () => {
  //     toast({
  //       title: "Message sent successfully!",
  //       description: "Thank you for your message. We will get back to you soon.",
  //     });
  //     setFormData({
  //       name: "",
  //       email: "",
  //       phone: "",
  //       service: "",
  //       message: "",
  //     });
  //   },
  //   onError: () => {
  //     toast({
  //       title: "Error sending message",
  //       description: "Please try again later.",
  //       variant: "destructive",
  //     });
  //   },
  // });
  const contactMutation = useMutation({
  mutationFn: async (data: ContactFormData) => {
    const formspreeEndpoint = `https://formspree.io/f/xpwlqkoa`; // e.g. "xyzabc"
    const response = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.service,
        message: data.message,
        // optionally add a honeypot field here to trap bots, e.g.:
        // _gotcha: data._gotcha,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      // Formspree returns errors array or a single error
      const errorMsg =
        result.error ||
        (Array.isArray(result.errors)
          ? result.errors.map((e: any) => e.message).join(", ")
          : "Failed to send message");
      throw new Error(errorMsg);
    }

    return result; // could be used if needed
  },
  onSuccess: () => {
    toast({
      title: "Message sent successfully!",
      description: "Thank you for your message. We will get back to you soon.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  },
  onError: (error: any) => {
    toast({
      title: "Error sending message",
      description: error?.message || "Please try again later.",
      variant: "destructive",
    });
  },
});


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Kenrail Towers 7th Floor, Westlands", "Nairobi"],
      gradient: "from-primary/5 to-secondary/5",
      iconBg: "bg-primary",
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+254 769 481 793", "+254 705 976953"],
      gradient: "from-accent/5 to-yellow-300/5",
      iconBg: "bg-accent",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@atlantistelkoms.com", "Quick response guaranteed"],
      gradient: "from-green-500/5 to-emerald-500/5",
      iconBg: "bg-green-500",
    },
  ];

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
    <section id="contact" className="py-20 bg-white" ref={ref}>
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
            Get In <span className="text-primary">Touch</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Ready to transform your business with smart technology? Let's discuss your project.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`text-center p-8 bg-gradient-to-br ${info.gradient} rounded-2xl hover-lift`}
            >
              <div className={`w-16 h-16 ${info.iconBg} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <info.icon className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{info.title}</h3>
              <div className="text-gray-600">
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex}>{detail}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-gray-50 rounded-2xl p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <Input
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <Input
                    type="tel"
                    placeholder="+254 123 456 789"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Service Interest</label>
                  <Select onValueChange={(value) => handleInputChange("service", value)} required>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="smart-agriculture">Smart Agriculture</SelectItem>
                      <SelectItem value="smart-home">Smart Home Automation</SelectItem>
                      <SelectItem value="enterprise-ict">Enterprise ICT Solutions</SelectItem>
                      <SelectItem value="consultation">Consultation</SelectItem>
                      
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Project Details</label>
                <Textarea
                  rows={5}
                  placeholder="Tell us about your project requirements..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <Send className="mr-2 h-4 w-4" />
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
