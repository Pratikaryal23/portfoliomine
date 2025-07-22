'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import image from '/public/prateek.jpg'; // Adjust the path as necessary

const AnimatedHero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const roles = [
    { text: "Frontend Developer", emoji: "🚀", color: "from-blue-400 to-purple-600" },
    { text: "UI/UX Designer", emoji: "🎨", color: "from-pink-400 to-red-600" },
    { text: "Creative Thinker", emoji: "💡", color: "from-yellow-400 to-orange-600" },
    { text: "Problem Solver", emoji: "🧩", color: "from-green-400 to-teal-600" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  const socialLinks = [
    { name: 'GitHub', icon: '💻', url: '#', color: 'hover:bg-gray-700' },
    { name: 'LinkedIn', icon: '💼', url: '#', color: 'hover:bg-blue-600' },
    { name: 'Twitter', icon: '🐦', url: '#', color: 'hover:bg-sky-500' },
    { name: 'Dribbble', icon: '🎯', url: '#', color: 'hover:bg-pink-500' }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Animated Background Particles */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute w-1 h-1 bg-white rounded-full opacity-20"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Mouse Follower Glow */}
      <motion.div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle, rgba(139, 69, 255, 0.1) 0%, transparent 70%)`,
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          opacity: isHovered ? 0.3 : 0.1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-10">
        <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left Content */}
          <motion.div 
            className="flex-1 space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Greeting Animation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.p 
                className="text-xl md:text-2xl text-purple-300 mb-2"
                animate={{ 
                  textShadow: ["0 0 10px rgba(147, 51, 234, 0.5)", "0 0 20px rgba(147, 51, 234, 0.8)", "0 0 10px rgba(147, 51, 234, 0.5)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Hello, World! 👋
              </motion.p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black">
                <span className="block text-white mb-2">I am</span>
                <motion.span 
                  className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Pratik Aryal
                </motion.span>
              </h1>
            </motion.div>

            {/* Animated Role Display */}
            <div className="h-20 flex items-center justify-center lg:justify-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRole}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -50, scale: 0.8 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex items-center gap-4"
                >
                  <motion.span 
                    className="text-4xl"
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    {roles[currentRole].emoji}
                  </motion.span>
                  <span className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${roles[currentRole].color} text-transparent bg-clip-text`}>
                    {roles[currentRole].text}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Description with Typing Effect */}
            <motion.p 
              className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Crafting digital experiences that blend innovation with user-centric design. 
              I transform ideas into interactive realities that make a difference.
            </motion.p>

            {/* Social Links with Magnetic Effect */}
            <motion.div 
              className="flex justify-center lg:justify-start gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className={`w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-2xl transition-all duration-300 ${social.color}`}
                  whileHover={{ 
                    scale: 1.1, 
                    rotateZ: 5,
                    boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <motion.button
                className="relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Let's Create Together ✨</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Interactive Avatar */}
          <motion.div 
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="relative">
              {/* Rotating Ring */}
              <motion.div
                className="absolute inset-0 w-96 h-96 border-2 border-purple-400/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Pulsing Glow */}
              <motion.div
                className="absolute inset-0 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Avatar Placeholder with Geometric Shape */}
              <motion.div
                className="relative w-96 h-96 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 rounded-full flex items-center justify-center text-8xl font-black text-white shadow-2xl"
                style={{
                  clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotateY: 15,
                }}
                animate={{
                  rotateY: [0, 5, 0, -5, 0],
                }}
                transition={{ 
                  rotateY: { duration: 6, repeat: Infinity },
                  scale: { type: "spring", damping: 10 }
                }}
              >
               
               <Image
            src={image}
            alt="Pratik Aryal"
            width={320}
            height={320}
            className="rounded-full border-4 w-[80%] sm:w-[300px] md:w-[500px] lg:w-[500px] border-gray-600 shadow-xl transition-transform hover:scale-105"
            priority
            style={{ borderRadius: "100% 100% 100% 100% / 100% 100% 100% 100%" }}
          />
        
                {/* Floating Icons */}
                {['⚡', '🎯', '✨', '🚀'].map((icon, index) => (
                  <motion.div
                    key={index}
                    className="absolute text-2xl"
                    style={{
                      left: `${50 + 40 * Math.cos((index * Math.PI) / 2)}%`,
                      top: `${50 + 40 * Math.sin((index * Math.PI) / 2)}%`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 360],
                    }}
                    transition={{
                      y: { duration: 2 + index * 0.5, repeat: Infinity },
                      rotate: { duration: 10, repeat: Infinity, ease: "linear" }
                    }}
                  >
                    {icon}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedHero;