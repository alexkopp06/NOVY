"use client";

import React, { useEffect, useState, useRef, useMemo } from "react";
import { motion, useInView, animate } from "framer-motion";

/**
 * StatsSection - H2 SEKÁNÍ FIX
 * 
 * Key optimizations:
 * - H2 uses CSS animation instead of motion wrapper
 * - Simplified animations
 * - Optimized counter rendering
 */

interface Stat {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

const LargeCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    const controls = animate(0, value, {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setCount(Math.floor(latest)),
    });
    
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <div ref={ref} className="tabular-nums">
      {count}{suffix}
    </div>
  );
};

export const StatsSection = () => {
  const stats: Stat[] = useMemo(
    () => [
      {
        value: 50,
        suffix: "+",
        label: "Spokojených klientů",
        sublabel: "Firmy transformované AI",
      },
      {
        value: 340,
        suffix: "%",
        label: "Zvýšení efektivity",
        sublabel: "Průměrná úspora času",
      },
      {
        value: 100,
        suffix: "+",
        label: "Úspěšných projektů",
        sublabel: "Od AI školení po aplikace",
      },
      {
        value: 95,
        suffix: "%",
        label: "Míra spokojnosti",
        sublabel: "Doporučení od klientů",
      },
    ],
    []
  );

  return (
    <section className="relative w-full bg-black text-white px-6 md:px-12 lg:px-24 py-32">
      <div className="w-full max-w-[1600px] mx-auto">
        
        {/* Header - CSS ANIMATION ONLY */}
        <div className="mb-24">
          <div className="text-sm uppercase tracking-[0.3em] mb-6 text-white/40 animate-fadeIn">
            Impact
          </div>
          
          {/* H2 - NO MOTION WRAPPER */}
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] animate-fadeInUp">
            Výsledky,<br />
            které <span className="italic">mluví</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 border-2 border-white">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative border-white border-b-2 last:border-b-0 md:odd:border-r-2 p-12 md:p-16 hover:bg-white hover:text-black transition-colors duration-300 group flex flex-col items-center justify-center text-center transform-gpu will-change-transform"
            >
              {/* Number */}
              <div className="text-7xl md:text-8xl lg:text-[9rem] font-black leading-none mb-6">
                <LargeCounter value={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold">
                  {stat.label}
                </h3>
                <p className="text-lg opacity-60 group-hover:opacity-100 transition-opacity">
                  {stat.sublabel}
                </p>
              </div>

              {/* Index Number */}
              <div className="absolute top-6 right-6 text-4xl font-black opacity-10 group-hover:opacity-20 transition-opacity">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement - CSS ANIMATION */}
        <div className="mt-24 text-center animate-fadeInDelay">
          <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed max-w-4xl mx-auto">
            Každý projekt je příležitost vytvořit něco,{" "}
            <span className="font-black">co opravdu funguje</span> a přináší měřitelnou hodnotu.
          </p>
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
            transform: translateY(30px) translateZ(0);
          }
          to {
            opacity: 1;
            transform: translateY(0) translateZ(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
          animation-fill-mode: both;
          animation-delay: 0.2s;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.7s cubic-bezier(0.25, 1, 0.5, 1);
          animation-fill-mode: both;
          animation-delay: 0.3s;
          will-change: transform, opacity;
          transform: translateZ(0);
        }

        .animate-fadeInDelay {
          animation: fadeIn 0.8s ease-out;
          animation-fill-mode: both;
          animation-delay: 0.8s;
        }
      `}</style>
    </section>
  );
};