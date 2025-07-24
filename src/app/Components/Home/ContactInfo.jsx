import React, { useState, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const ContactInformation = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const contactDetails = [
    {
      icon: "📍",
      title: "Location",
      detail: "Gulmi, Nepal",
      color: "from-emerald-400 to-teal-600",
      bgGlow: "emerald",
      description: "Beautiful mountain region",
    },
    {
      icon: "📧",
      title: "Email",
      detail: "aryalpratik29@gmail.com",
      color: "from-blue-400 to-indigo-600",
      bgGlow: "blue",
      description: "Drop me a message anytime",
    },
    {
      icon: "📱",
      title: "Phone",
      detail: "+977-9845455112",
      color: "from-purple-400 to-pink-600",
      bgGlow: "purple",
      description: "Available 24/7 for urgent queries",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.8 },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const floatingElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 2,
    duration: Math.random() * 4 + 3,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white py-20 px-4 relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Mouse Follower Glow */}
      <motion.div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-10"
        style={{
          background: `radial-gradient(circle, rgba(139, 69, 255, 0.1) 0%, transparent 70%)`,
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        animate={{
          scale: hoveredIndex !== null ? 1.5 : 1,
          opacity: hoveredIndex !== null ? 0.3 : 0.1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      <div className="max-w-6xl mx-auto relative z-20">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-black mb-4"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(147, 51, 234, 0.5)", 
                "0 0 30px rgba(219, 39, 119, 0.5)", 
                "0 0 20px rgba(147, 51, 234, 0.5)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
              Get In Touch
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Ready to start your next project? Let's connect and bring your ideas to life!
          </motion.p>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-6"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information Cards */}
          <motion.div 
            ref={ref}
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.h3 
              className="text-3xl font-bold mb-8 text-center lg:text-left"
              variants={itemVariants}
            >
              <span className="text-purple-400">Contact</span> Information
            </motion.h3>

            {contactDetails.map((item, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden"
                variants={itemVariants}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Animated Background Glow */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500">
                  <div className="flex items-center gap-6">
                    {/* Animated Icon Container */}
                    <motion.div 
                      className={`relative w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-2xl font-bold shadow-lg`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -10, 10, 0],
                      }}
                      transition={{ 
                        rotate: { duration: 0.5 },
                        scale: { type: "spring", stiffness: 300 }
                      }}
                    >
                      {/* Pulsing Ring */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-full`}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.8, 0.3, 0.8],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      
                      {/* Icon */}
                      <motion.span 
                        className="relative z-10 text-white"
                        animate={{
                          y: [0, -2, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2,
                        }}
                      >
                        {item.icon}
                      </motion.span>

                      {/* Rotating Border */}
                      <motion.div
                        className="absolute inset-0 border-2 border-white/30 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ 
                          duration: 8, 
                          repeat: Infinity, 
                          ease: "linear" 
                        }}
                      />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <motion.h4 
                        className="text-xl font-bold mb-1 text-white"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                      >
                        {item.title}
                      </motion.h4>
                      
                      <motion.p 
                        className={`text-lg font-semibold bg-gradient-to-r ${item.color} text-transparent bg-clip-text mb-2`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        {item.detail}
                      </motion.p>
                      
                      <motion.p 
                        className="text-gray-400 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                      >
                        {item.description}
                      </motion.p>
                    </div>

                    {/* Interactive Arrow */}
                    <motion.div
                      className="text-purple-400 text-xl opacity-0 group-hover:opacity-100"
                      animate={{
                        x: hoveredIndex === index ? [0, 5, 0] : 0,
                      }}
                      transition={{
                        x: { duration: 1, repeat: Infinity },
                        opacity: { duration: 0.3 }
                      }}
                    >
                      →
                    </motion.div>
                  </div>

                  {/* Sliding Underline */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${item.color} rounded-full`}
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}

            {/* Quick Connect Section */}
            <motion.div
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mt-8"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-xl font-bold mb-4 text-center">
                <span className="text-purple-400">Quick</span> Connect
              </h4>
              <div className="flex justify-center gap-4">
                {[
                  { icon: "💬", label: "Chat", color: "from-green-400 to-emerald-600" },
                  { icon: "📞", label: "Call", color: "from-blue-400 to-indigo-600" },
                  { icon: "📅", label: "Schedule", color: "from-purple-400 to-pink-600" },
                  { icon: "💼", label: "LinkedIn", color: "from-indigo-400 to-blue-600" }
                ].map((social, index) => (
                  <motion.button
                    key={index}
                    className={`w-14 h-14 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: [0, -5, 5, 0],
                      boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    title={social.label}
                  >
                    {social.icon}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive Contact Form */}
          <motion.div
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            whileHover={{ boxShadow: "0 20px 40px rgba(147, 51, 234, 0.1)" }}
          >
            <motion.h3 
              className="text-3xl font-bold mb-6 text-center"
              animate={{
                background: [
                  "linear-gradient(to right, #a855f7, #ec4899)",
                  "linear-gradient(to right, #ec4899, #3b82f6)",
                  "linear-gradient(to right, #3b82f6, #a855f7)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ backgroundClip: "text", WebkitBackgroundClip: "text", color: "transparent" }}
            >
              Send Me a Message
            </motion.h3>

            <div className="space-y-6">
              {[
                { label: "Your Name", type: "text", icon: "👤" },
                { label: "Email Address", type: "email", icon: "📧" },
                { label: "Subject", type: "text", icon: "📝" }
              ].map((field, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                    <span>{field.icon}</span>
                    {field.label}
                  </div>
                  <motion.input
                    type={field.type}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                    whileFocus={{ scale: 1.02 }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                    initial={{ width: "0%" }}
                    whileFocus={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}

              <motion.div
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <div className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                  <span>💬</span>
                  Your Message
                </div>
                <motion.textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              <motion.button
                onClick={() => alert('Message sent! (This is a demo)')}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-xl relative overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  🚀 Send Message
                </span>
              </motion.button>
            </div>

            {/* Response Time Indicator */}
            <motion.div
              className="text-center mt-6 p-4 bg-white/5 rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <div className="flex items-center justify-center gap-2 text-green-400">
                <motion.div
                  className="w-3 h-3 bg-green-400 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <span className="text-sm">Usually responds within 24 hours</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;