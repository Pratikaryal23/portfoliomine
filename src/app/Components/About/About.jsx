'use client'
import React, { useState, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [skillsProgress, setSkillsProgress] = useState(false);
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      setTimeout(() => setSkillsProgress(true), 800);
    }
  }, [controls, isInView]);

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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const skills = [
    { name: "HTML/CSS", years: 3, level: 95, color: "from-orange-400 to-red-500" },
    { name: "JavaScript", years: 0.5, level: 75, color: "from-yellow-400 to-orange-500" },
    { name: "React/Next.js", years: 3, level: 90, color: "from-blue-400 to-cyan-500" },
    { name: "Graphics Design", years: 0.5, level: 60, color: "from-purple-400 to-pink-500" },
  ];

  const personalInfo = [
    { label: "Age", value: "20", icon: "🎂" },
    { label: "Residence", value: "Nepal", icon: "🏠" },
    { label: "Address", value: "Gulmi", icon: "📍" },
    { label: "Email", value: "aryalpratik057@gmail.com", icon: "📧" },
    { label: "Phone", value: "9845455112", icon: "📱" },
    { label: "Freelance", value: "Available", icon: "💼" }
  ];

  const achievements = [
    { number: "3+", label: "Years Experience", icon: "⚡" },
    { number: "50+", label: "Projects Done", icon: "🚀" },
    { number: "30+", label: "Happy Clients", icon: "😊" },
    { number: "24/7", label: "Support", icon: "🔧" }
  ];

  const tabs = [
    { id: "about", label: "About", icon: "👋" },
    { id: "skills", label: "Skills", icon: "⚡" },
    { id: "experience", label: "Experience", icon: "💼" }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
              About Me
            </span>
          </h2>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Side - Profile Card */}
          <motion.div 
            className="lg:col-span-5"
            variants={itemVariants}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center relative overflow-hidden group">
              {/* Animated Background Glow */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-40"
                animate={{
                  scale: [1, 1.02, 1],
                  rotate: [0, 1, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <div className="relative z-10">
                {/* Profile Image with Complex Animation */}
                <motion.div 
                  className="relative mx-auto w-56 h-56 mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Rotating Rings */}
                  <motion.div
                    className="absolute inset-0 border-2 border-purple-400/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-2 border border-pink-400/30 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Profile Picture Placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 rounded-full flex items-center justify-center text-6xl font-black text-white relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                    <span className="relative z-10">PA</span>
                    
                    {/* Floating Elements */}
                    {['⚡', '🎯', '✨', '🚀'].map((icon, index) => (
                      <motion.div
                        key={index}
                        className="absolute text-lg"
                        style={{
                          left: `${50 + 35 * Math.cos((index * Math.PI) / 2)}%`,
                          top: `${50 + 35 * Math.sin((index * Math.PI) / 2)}%`,
                        }}
                        animate={{
                          y: [0, -8, 0],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          y: { duration: 2 + index * 0.3, repeat: Infinity },
                          rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                        }}
                      >
                        {icon}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Name and Title */}
                <motion.h3 
                  className="text-3xl font-bold mb-2"
                  animate={{ 
                    textShadow: [
                      "0 0 10px rgba(147, 51, 234, 0.5)", 
                      "0 0 20px rgba(219, 39, 119, 0.5)", 
                      "0 0 10px rgba(147, 51, 234, 0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Pratik Aryal
                </motion.h3>
                
                <motion.div
                  className="text-purple-300 text-lg mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <motion.span
                    animate={{ 
                      background: [
                        "linear-gradient(to right, #a855f7, #ec4899)",
                        "linear-gradient(to right, #ec4899, #3b82f6)",
                        "linear-gradient(to right, #3b82f6, #a855f7)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="bg-clip-text text-transparent font-semibold"
                  >
                    Frontend Developer & UI/UX Designer
                  </motion.span>
                </motion.div>

                {/* Social Links */}
                <div className="flex justify-center gap-4 mb-6">
                  {['💻', '💼', '🐦', '📷'].map((icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-xl hover:bg-white/20 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotateY: 180 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                    >
                      {icon}
                    </motion.a>
                  ))}
                </div>

                {/* Download CV Button */}
                <motion.button
                  className="relative px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    📄 Download CV
                  </span>
                </motion.button>
              </div>
            </div>

            {/* Achievement Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-4 mt-6"
              variants={itemVariants}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center group hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2 + index * 0.1 }}
                >
                  <div className="text-2xl mb-2">{achievement.icon}</div>
                  <div className="text-2xl font-bold text-purple-400">{achievement.number}</div>
                  <div className="text-sm text-gray-300">{achievement.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Content Tabs */}
          <motion.div 
            className="lg:col-span-7"
            variants={itemVariants}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full">
              {/* Tab Navigation */}
              <div className="flex gap-2 mb-8 bg-white/5 rounded-2xl p-2">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeTab === tab.id 
                        ? "bg-gradient-to-r to -purple-600  text-white" 
                        : "text-gray-400 hover:text-white hover:bg-white/40"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      {tab.icon} {tab.label}
                    </span>
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTabBg"
                        className="absolute inset-0 bg-gradient-to-r to-purple-600 rounded-xl -z-10"
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Tab Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === "about" && (
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold mb-4">
                      <span className="text-purple-400">Hello!</span> I'm Pratik
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      I'm a passionate software developer and open-source enthusiast. I love exploring 
                      how technology can improve efficiency and building scalable systems that make a difference.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      My journey in web development started 3 years ago, and I've been constantly learning 
                      and evolving my skills to stay current with the latest technologies.
                    </p>
                    
                    {/* Personal Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                      {personalInfo.map((info, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300"
                          whileHover={{ scale: 1.02, x: 5 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * index }}
                        >
                          <span className="text-2xl">{info.icon}</span>
                          <div>
                            <span className="text-purple-300 font-semibold">{info.label}:</span>
                            <span className="text-gray-300 ml-2">{info.value}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "skills" && (
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold mb-6">
                      <span className="text-purple-400">My</span> Skills
                    </h3>
                    
                    <div className="space-y-6">
                      {skills.map((skill, index) => (
                        <motion.div
                          key={index}
                          className="group"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-lg">{skill.name}</span>
                            <span className="text-purple-300">{skill.years} years</span>
                          </div>
                          <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                              initial={{ width: 0 }}
                              animate={{ 
                                width: skillsProgress ? `${skill.level}%` : 0 
                              }}
                              transition={{ 
                                delay: index * 0.2, 
                                duration: 1.5, 
                                ease: "easeOut" 
                              }}
                            >
                              <motion.div
                                className="absolute inset-0 bg-white/30"
                                animate={{ x: ["0%", "100%"] }}
                                transition={{ 
                                  duration: 2, 
                                  repeat: Infinity, 
                                  ease: "linear" 
                                }}
                                style={{ width: "20%" }}
                              />
                            </motion.div>
                          </div>
                          <div className="text-right text-sm text-gray-400 mt-1">
                            {skill.level}%
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "experience" && (
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold mb-6">
                      <span className="text-purple-400">My</span> Journey
                    </h3>
                    
                    <div className="space-y-6">
                      {[
                        {
                          period: "2021 - Present",
                          title: "Frontend Developer",
                          company: "Freelance",
                          description: "Building modern web applications with React, Next.js, and cutting-edge technologies.",
                          icon: "🚀"
                        },
                        {
                          period: "2020 - 2021",
                          title: "Graphics Designer",
                          company: "Various Clients",
                          description: "Created visual designs and branding materials for local businesses.",
                          icon: "🎨"
                        },
                        {
                          period: "2019 - 2020",
                          title: "Web Development Journey",
                          company: "Self-taught",
                          description: "Started learning HTML, CSS, and JavaScript through online courses and practice projects.",
                          icon: "💡"
                        }
                      ].map((exp, index) => (
                        <motion.div
                          key={index}
                          className="relative pl-8 pb-6 border-l-2 border-purple-400/30 last:border-l-0"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 }}
                        >
                          <motion.div 
                            className="absolute -left-4 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-lg"
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            {exp.icon}
                          </motion.div>
                          <div className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                            <div className="text-purple-300 text-sm font-semibold mb-1">{exp.period}</div>
                            <h4 className="text-xl font-bold mb-1">{exp.title}</h4>
                            <div className="text-gray-400 mb-2">{exp.company}</div>
                            <p className="text-gray-300">{exp.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;