import React, { useRef, useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import githubProfile from "../assets/github dp.jpg";
import userAvatar from "../assets/im/g.png";

gsap.registerPlugin(ScrollTrigger);

// Typewriter effect for heading
const useTypewriter = (text, speed = 60) => {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayed;
};

const CARD_GRADIENTS = [
  "from-pink-500 via-red-400 to-yellow-400",
  "from-blue-500 via-purple-500 to-pink-400",
  "from-green-400 via-cyan-400 to-blue-500",
  "from-yellow-400 via-orange-400 to-pink-500",
];

const ServiceCard = ({ index, title, icon }) => {
  const cardRef = useRef(null);
  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 60, scale: 0.85 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
          delay: index * 0.18,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`group w-full max-w-xs min-h-[260px] flex flex-col items-center justify-center p-1 rounded-2xl shadow-xl bg-gradient-to-br ${CARD_GRADIENTS[index % CARD_GRADIENTS.length]} transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden`}
      style={{ backdropFilter: 'blur(12px) saturate(160%)' }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-10 rounded-2xl pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center justify-center py-8 px-4">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white bg-opacity-30 shadow-lg mb-4 animate-card-icon-float">
          <img src={icon} alt={title} className="w-10 h-10 object-contain" />
        </div>
        <h3 className="text-white text-[20px] font-extrabold text-center drop-shadow-lg mb-2">
          {title}
        </h3>
      </div>
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-40 h-16 bg-white bg-opacity-20 blur-2xl rounded-full group-hover:opacity-60 opacity-40 transition-all duration-300" />
    </div>
  );
};

const About = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const containerRef = useRef(null);
  const typewriterText = useTypewriter("About Me.");

  useEffect(() => {
    if (containerRef.current) {
      // Futuristic entrance animation
      gsap.fromTo(
        containerRef.current,
        { 
          opacity: 0, 
          scale: 0.8,
          rotationY: -15,
          transformPerspective: 1000
        },
        { 
          opacity: 1, 
          scale: 1,
          rotationY: 0,
          duration: 1.5, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        }
      );
    }
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, x: -50, y: 30 },
        { opacity: 1, x: 0, y: 0, duration: 1.2, ease: "power2.out", delay: 0.3 }
      );
    }
    if (paragraphRef.current) {
      gsap.fromTo(
        paragraphRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.4, ease: "power3.out", delay: 0.6 }
      );
    }
  }, []);

  return (
    <div className="relative flex justify-center items-center min-h-[600px] py-12 px-4 sm:px-8 overflow-hidden">
      {/* Futuristic Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] opacity-90" />
        <div className="absolute inset-0 cyber-grid" />
        <div className="absolute inset-0 floating-particles" />
        <div className="absolute inset-0 energy-field" />
      </div>
      
      {/* Glassmorphism Card */}
      <div ref={containerRef} className="relative z-10 max-w-3xl w-full mx-auto glass-card rounded-3xl shadow-2xl px-8 py-12 flex flex-col items-center">
        {/* Profile Image with Futuristic Border */}
        <div className="relative mb-8">
          <div className="absolute inset-0 rounded-full cyber-border" />
          <img
            src={userAvatar}
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = githubProfile; }}
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover border-4 border-white relative z-10 profile-img-anim"
          />
        </div>
        
        {/* Animated Headline */}
        <div ref={headingRef} className="text-center">
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText + " inline-block"}>
            <span>{typewriterText}</span>
            <span className="text-cyan-400 cyber-cursor">|</span>
          </h2>
        </div>
        
        {/* Improved Bio */}
        <p ref={paragraphRef} className="mt-4 text-secondary text-[18px] max-w-2xl leading-[32px] mx-auto text-center font-medium">
          Passionate about shaping the future at the crossroads of <span className="text-[#00ffff] font-semibold">AI</span>, <span className="text-[#7366ff] font-semibold">VR</span>, and <span className="text-[#00e6e6] font-semibold">Web</span> platforms. I excel at designing elegant, scalable solutions that bridge academic research with real-world applications. Skilled in software development, data structures & algorithms, and cloud-native systems, I thrive in collaborative, cross-functional teams. Driven by curiosity, I'm always learning, always innovating.
        </p>
        
        {/* Call-to-Action Buttons - Less Shiny */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center w-full">

          <a
            href="http://www.linkedin.com/in/gagandeep1278"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-[#0077b5] to-[#00a0dc] text-white font-bold text-lg transition-transform duration-200 hover:scale-105 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/gagandeepsingh76"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-[#333] to-[#24292e] text-white font-bold text-lg transition-transform duration-200 hover:scale-105 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
          <a
            href="https://leetcode.com/u/Gagansingh23454321/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-[#FFA116] to-[#FF8C00] text-white font-bold text-lg transition-transform duration-200 hover:scale-105 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a1.64 1.64 0 0 0-.049 2.114 1.671 1.671 0 0 0 2.265.049L9.64 8.114l4.924-5.249a1.474 1.474 0 0 0-.317-2.116A1.479 1.479 0 0 0 13.483 0zm-2.866 12.841a1.208 1.208 0 0 0-.439.09L7.266 15.84l-1.918 1.918a1.263 1.263 0 0 0-.049 1.704 1.277 1.277 0 0 0 1.704.049l2.208-2.208 3.854-4.126a1.149 1.149 0 0 0 .049-1.704 1.155 1.155 0 0 0-1.704-.049z"/></svg>
            LeetCode
          </a>
        </div>
        
        {/* Service Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
      
      {/* Futuristic CSS Effects */}
      <style>{`
        .glass-card {
          background: rgba(26, 26, 46, 0.6);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(0, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 255, 255, 0.1);
        }
        
        .cyber-grid {
          background-image: 
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }
        
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        .floating-particles::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(circle, rgba(0, 255, 255, 0.3) 1px, transparent 1px);
          background-size: 100px 100px;
          animation: particleFloat 15s linear infinite;
        }
        
        @keyframes particleFloat {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(-100px) rotate(360deg); }
        }
        
        .energy-field {
          background: radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 70%);
          animation: energyPulse 4s ease-in-out infinite;
        }
        
        @keyframes energyPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        
        .cyber-border {
          z-index: 1;
          display: block;
          width: 170px;
          height: 170px;
          border-radius: 50%;
          background: conic-gradient(from 0deg, #00ffff, #7366ff, #00e6e6, #00ffff 100%);
          filter: blur(6px) brightness(1.1);
          animation: cyberSpin 6s linear infinite;
        }
        
        @keyframes cyberSpin {
          0% { transform: rotate(0deg) scale(1); }
          100% { transform: rotate(360deg) scale(1.02); }
        }
        
        .cyber-cursor {
          animation: cyberBlink 1.5s infinite;
        }
        
        @keyframes cyberBlink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .profile-img-anim {
          transition: all 0.4s ease;
        }
        
        .profile-img-anim:hover {
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
          transform: scale(1.05);
        }
        
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradientMove 12s ease-in-out infinite;
        }
        
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes card-icon-float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        
        .animate-card-icon-float {
          animation: card-icon-float 2.2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SectionWrapper(About, "about");
