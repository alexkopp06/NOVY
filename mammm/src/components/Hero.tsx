"use client";

import React, { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * HeroSection - COMPLETE FIX
 * * Fixed all stuttering issues:
 * 1. H1 word animation - uses CSS stagger
 * 2. Subheadline paragraph - uses CSS fadeIn (NO MOTION!)
 * 3. Buttons - simple motion (lightweight)
 * 4. All GPU accelerated
 */

export const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  const springConfig = useMemo(() => ({ damping: 40, stiffness: 80 }), []);
  const y = useSpring(useTransform(scrollY, [0, 800], [0, 100]), springConfig);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const words = useMemo(
    () => "Automatizuji firemní procesy. Učím lidi pracovat s AI efektivně a prakticky.".split(" "),
    []
  );

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black"
    >
      {/* BACKGROUND LAYER */}
      <motion.div
        className="absolute inset-0 w-full h-full will-change-transform transform-gpu"
        style={{ y }}
      >
        <div className="relative w-full h-full">
          <motion.img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop"
            alt="Modern Architecture"
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover grayscale-[0.3] contrast-[1.1] transform-gpu will-change-transform"
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/50 to-transparent opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        </div>
      </motion.div>

      {/* CONTENT LAYER */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 text-white"
      >
        {/* H1 Headline - CSS STAGGER - ZMENŠENÁ A ELEGANTNĚJŠÍ VELIKOST PÍSMA */}
        <div className="overflow-visible mb-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] flex flex-wrap">
            {words.map((word, i) => (
              <span 
                key={i} 
                className="inline-block overflow-hidden mr-[0.25em] py-2"
              >
                <span
                  className="inline-block word-reveal"
                  style={{
                    animationDelay: `${0.1 + i * 0.05}s`,
                  }}
                >
                  {word}
                </span>
              </span>
            ))}
          </h1>
        </div>

        {/* Subheadline & Stats Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          {/* SUBHEADLINE - CSS ONLY (NO MOTION!) */}
          <div className="max-w-xl">
            <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light mb-10 animate-fadeInSubtitle">
              Jmenuji se <strong className="font-medium text-white">Michal Kraus</strong>. Pomáhám malým a středním firmám ušetřit čas, peníze a nervy pomocí chytrých automatizací a praktických AI školení. Vše stavěné na míru vašim potřebám. 

            </p>

            <div className="flex flex-wrap gap-6 animate-fadeInButtons">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-white text-black font-bold text-sm tracking-widest uppercase overflow-hidden rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-shadow hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
              >
                <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
                <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors">
                  Konzultace <ArrowRight className="w-4 h-4" />
                </span>
              </motion.button>

              <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all rounded-full">
                Portfolio
              </button>
            </div>
          
          </div>
        </div>
      </motion.div>

      {/* CSS ANIMATIONS - ALL HARDWARE ACCELERATED */}
      <style jsx>{`
        @keyframes wordReveal {
          from {
            opacity: 0;
            transform: translateY(100%) translateZ(0);
          }
          to {
            opacity: 1;
            transform: translateY(0) translateZ(0);
          }
        }

        @keyframes fadeInSubtitle {
          from {
            opacity: 0;
            transform: translateY(10px) translateZ(0);
          }
          to {
            opacity: 1;
            transform: translateY(0) translateZ(0);
          }
        }

        @keyframes fadeInButtons {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInStats {
          from {
            opacity: 0;
            transform: translateX(20px) translateZ(0);
          }
          to {
            opacity: 1;
            transform: translateX(0) translateZ(0);
          }
        }

        .word-reveal {
          animation: wordReveal 0.6s cubic-bezier(0.25, 1, 0.5, 1);
          animation-fill-mode: both;
          will-change: transform, opacity;
          transform: translateZ(0);
        }

        /* SUBTITLE - Smooth & lightweight */
        .animate-fadeInSubtitle {
          animation: fadeInSubtitle 0.5s ease-out;
          animation-fill-mode: both;
          animation-delay: 0.6s;
          will-change: transform, opacity;
          transform: translateZ(0);
        }

        /* BUTTONS - Simple fade */
        .animate-fadeInButtons {
          animation: fadeInButtons 0.5s ease-out;
          animation-fill-mode: both;
          animation-delay: 0.8s;
        }

        /* STATS - Slide from right */
        .animate-fadeInStats {
          animation: fadeInStats 0.6s ease-out;
          animation-fill-mode: both;
          animation-delay: 1s;
          will-change: transform, opacity;
          transform: translateZ(0);
        }
      `}</style>
    </section>
  );
};