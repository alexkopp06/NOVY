"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { SplineScene } from "./ui/spline-scene";
import { Spotlight } from "./ui/spotlight";
import { Cpu, Code2, TrendingUp, GraduationCap } from "lucide-react";

/**
 * ServicesSection - H2 SEKÁNÍ FIX
 * 
 * Key optimizations:
 * - H2 uses CSS animation instead of motion wrapper
 * - Optimized gradient text
 * - Intersection Observer for Spline
 * - Simplified animations
 */

const ServicesSection = () => {
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false);
  const splineContainerRef = useRef<HTMLDivElement>(null);

  const services = useMemo(
    () => [
      {
        icon: <Cpu className="w-6 h-6 text-blue-600" />,
        title: "Automatizace & AI",
        desc: " Nahradím rutinní činnosti chytrým propojením. Ušetřím vám i vašim zaměstnancům to nejvzácnější, co máme… čas."
      },
      {
        icon: <Code2 className="w-6 h-6 text-blue-600" />,
        title: "Vývoj aplikací",
        desc: "Weby a appky na míru. Od nápadu po škálovatelný produkt."
      },
      {
        icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
        title: "Marketing & Produkce",
        desc: "Díky dlouholetým zkušenostem s online i offline marketingem dám vašemu marketingu jasný směr a funkční strategii."
      },
      {
        icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
        title: "Školení týmů",
        desc: "Naučíme vaše lidi používat AI nástroje v každodenní praxi."
      }
    ],
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldLoadSpline) {
            setShouldLoadSpline(true);
          }
        });
      },
      {
        rootMargin: "200px",
        threshold: 0.1,
      }
    );

    if (splineContainerRef.current) {
      observer.observe(splineContainerRef.current);
    }

    return () => {
      if (splineContainerRef.current) {
        observer.unobserve(splineContainerRef.current);
      }
    };
  }, [shouldLoadSpline]);

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex items-center transform-gpu will-change-transform">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 opacity-20"
        fill="#3b82f6"
      />

      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* TEXT SECTION - NO MOTION WRAPPER */}
          <div className="flex-1 relative z-10 flex flex-col justify-center">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 w-fit mb-8 animate-fadeIn">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"/>
              <span className="text-xs font-bold tracking-widest uppercase text-blue-700">
                Inovace
              </span>
            </div>
            
            {/* H2 - CSS ONLY, NO MOTION */}
            <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 tracking-tight leading-[1.1] mb-6 animate-fadeInUp">
              Tvořím digitální <br />
              <span className="gradient-text">budoucnost firem.</span>
            </h2>

            <p className="text-lg text-neutral-500 max-w-lg mb-12 leading-relaxed font-light animate-fadeInDelay">
              Spojuji technologickou preciznost s byznysovým myšlením. 
              Pomohu vám růst rychleji díky nástrojům nové generace.
            </p>

            {/* Services grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {services.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="group"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <div className="mb-3 p-3 rounded-xl bg-neutral-50 w-fit group-hover:bg-blue-50 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

          {/* 3D ROBOT - Lazy Loading */}
          <div 
            ref={splineContainerRef}
            className="flex-1 relative w-full h-[500px] md:h-[700px] transform-gpu"
          >
            {shouldLoadSpline ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full"
              >
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </motion.div>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-neutral-50 rounded-2xl">
                <div className="text-neutral-400 text-sm animate-pulse">
                  Načítám 3D model...
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* CSS ANIMATIONS */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px) translateZ(0);
          }
          to {
            opacity: 1;
            transform: translateY(0) translateZ(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
          animation-fill-mode: both;
          animation-delay: 0.1s;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s cubic-bezier(0.25, 1, 0.5, 1);
          animation-fill-mode: both;
          animation-delay: 0.2s;
          will-change: transform, opacity;
          transform: translateZ(0);
        }

        .animate-fadeInDelay {
          animation: fadeIn 0.6s ease-out;
          animation-fill-mode: both;
          animation-delay: 0.4s;
        }

        /* OPTIMIZED GRADIENT */
        .gradient-text {
          display: inline-block;
          background: linear-gradient(to right, #2563eb, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transform: translateZ(0);
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;