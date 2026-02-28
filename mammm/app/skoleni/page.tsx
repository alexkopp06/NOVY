"use client";

import React, { useRef } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  BarChart3,
  Fingerprint,
  Plus,
} from "lucide-react";

export default function AiSkoleniPage() {
  const containerRef = useRef(null);

  return (
    <main
      ref={containerRef}
      className="bg-white text-slate-900 min-h-screen selection:bg-emerald-500 selection:text-white font-sans overflow-x-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&display=swap');
        p, a, button, li, label, small, input, textarea,
        .geist { font-family: 'Geist', sans-serif !important; }
      `}</style>

      {/* HERO */}
      <section className="relative pt-20 pb-12 md:pt-24 md:pb-16 px-6 container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          <motion.div
            className="lg:w-1/2 relative w-full aspect-square md:aspect-video lg:aspect-square max-h-[600px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-emerald-100 to-slate-50 rounded-[3rem] overflow-hidden border-2 border-slate-900 shadow-[-16px_16px_0px_0px_rgba(15,23,42,1)] group">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                alt="AI Workshop Session"
              />
              <div className="absolute bottom-8 right-8 bg-slate-900/90 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 shadow-lg text-white text-right">
                <p className="text-2xl font-black tracking-tighter">+30%</p>
                <p className="text-xs text-slate-400 uppercase tracking-widest">Produktivita týmu</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 z-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
              AI TRAINING{" "}
              <br />
              <span className="text-blue-600 italic font-black">
                for Leaders.
              </span>
            </h1>

            <p className="text-xl text-slate-500 font-medium max-w-lg leading-relaxed mb-4">
              Přestaňte o AI jen číst. Naučíme váš tým používat nástroje, které
              reálně šetří hodiny práce týdně.
            </p>
            <p className="text-xl text-slate-700 font-semibold max-w-lg leading-relaxed mb-10">
              Žádná teorie — 100% praxe.
            </p>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-4" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* MARQUEE */}
      <div className="py-12 border-y border-slate-100 bg-slate-50/50 overflow-hidden">
        <motion.div
          className="flex gap-20 whitespace-nowrap"
          animate={{ x: [0, -1200] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        >
          {[
            "AUTOMATIZACE","EFFICIENCY","CHATGPT & CLAUDE","STRATEGY","PROMPT ENGINEERING","AI WORKFLOWS","DEEP LEARNING",
            "AUTOMATIZACE","EFFICIENCY","CHATGPT & CLAUDE","STRATEGY","PROMPT ENGINEERING","AI WORKFLOWS","DEEP LEARNING",
          ].map((word, i) => (
            <span key={i} className="text-4xl font-black text-slate-200 select-none tracking-tighter">{word}</span>
          ))}
        </motion.div>
      </div>

      {/* BENEFITS */}
      <section className="py-32 container mx-auto px-6 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-emerald-50/60 rounded-full blur-[140px] -z-10" />
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-slate-50 mb-8 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">CO ZÍSKÁTE</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter max-w-2xl leading-[0.95]">
              Investice do{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600 italic">inteligence</span>{" "}
              vašeho týmu
            </h2>
          </div>
          <div className="shrink-0 text-right bg-white rounded-[2rem] border-2 border-slate-100 shadow-[0px_8px_30px_-8px_rgba(0,0,0,0.08)] px-8 py-6">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">ROI ESTIMATION</p>
            <p className="text-3xl font-black tracking-tighter text-slate-900">+30% Productivity</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Okamžitá Efektivita", desc: "Eliminujeme rutinní úkoly. To, co trvalo hodiny, bude hotové za minuty.", icon: <Zap className="w-6 h-6" />, gradient: "from-emerald-500 to-emerald-600" },
            { title: "Konkurenční Náskok", desc: "Zatímco konkurence o AI mluví, vy ji budete mít integrovanou v DNA firmy.", icon: <BarChart3 className="w-6 h-6" />, gradient: "from-blue-500 to-indigo-600" },
            { title: "Future-Proof Tým", desc: "Zaměstnanci se nebudou bát o práci. Budou ji dělat lépe a rychleji.", icon: <Fingerprint className="w-6 h-6" />, gradient: "from-purple-500 to-purple-600" },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true }} whileHover={{ y: -8 }} className="group relative p-10 bg-white rounded-[2rem] border-2 border-slate-100 hover:border-slate-900 transition-all duration-300 cursor-default flex flex-col justify-between min-h-[340px] shadow-[0px_4px_20px_-4px_rgba(0,0,0,0.06)]">
              <div>
                <div className={`inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} text-white items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>{item.icon}</div>
                <h3 className="text-2xl font-black tracking-tight mb-4">{item.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity mt-8"><Plus className="w-5 h-5 text-slate-400" /></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCES */}
      <section className="bg-slate-950 text-white py-32 rounded-t-[3rem] relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-24 pb-8 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8 shadow-sm">
                <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" /></span>
                <span className="text-xs font-bold uppercase tracking-widest text-white/50">JAK TO PROBÍHÁ</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95]">
                Od auditu po{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 italic font-black">mastery.</span>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="relative">
              <div className="absolute left-8 md:left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-blue-500 to-purple-500" />
              <div className="space-y-10">
                {[
                  { step: "01", phase: "Discovery", title: "Procesní Audit", text: "Nejdřív pochopíme, jak pracujete. Najdeme úzká hrdla a místa, kde AI přinese největší ROI okamžitě.", dotColor: "bg-emerald-500", badgeColor: "bg-emerald-500/20 text-emerald-400", icon: "💡" },
                  { step: "02", phase: "Design", title: "Custom Syllabus", text: "Žádné krabicové řešení. Sestavím program přesně pro vaše nástroje (Slack, Notion, CRM) a vaše lidi.", dotColor: "bg-blue-500", badgeColor: "bg-blue-500/20 text-blue-400", icon: "🎨" },
                  { step: "03", phase: "Workshop", title: "Deep Dive Workshop", text: "Intenzivní trénink. Žádná teorie, jen hands-on práce s prompty, automatizací a generováním obsahu.", dotColor: "bg-orange-500", badgeColor: "bg-orange-500/20 text-orange-400", icon: "⚡" },
                  { step: "04", phase: "Launch", title: "Implementation", text: "Nenechám vás v tom. Pomůžu nastavit API klíče, integrace a dohlédnu na adopci celým týmem.", dotColor: "bg-purple-500", badgeColor: "bg-purple-500/20 text-purple-400", icon: "🚀" },
                ].map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }} className="relative pl-24 md:pl-28 group">
                    <motion.div whileHover={{ scale: 1.5 }} className={`absolute left-6 md:left-8 top-7 w-6 h-6 rounded-full ${item.dotColor} border-4 border-slate-950 shadow-lg z-10 flex items-center justify-center cursor-pointer`}><span className="text-[7px]">{item.icon}</span></motion.div>
                    <motion.div whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }} className="p-8 bg-slate-900 rounded-[2rem] border-2 border-white/5 hover:border-white/20 transition-all duration-300 cursor-pointer">
                      <div className="flex items-center gap-3 mb-3"><span className={`px-3 py-1 ${item.badgeColor} text-xs font-bold rounded-full uppercase tracking-wider`}>{item.phase}</span></div>
                      <h3 className="text-2xl md:text-3xl font-black tracking-tighter mb-3 text-white">{item.title}</h3>
                      <p className="text-slate-400 text-lg leading-relaxed font-medium">{item.text}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block relative h-full">
              <div className="sticky top-32 h-[600px] w-full bg-slate-900 rounded-[2rem] overflow-hidden border-2 border-white/5 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-blue-900/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 border border-white/5 rounded-full animate-[spin_12s_linear_infinite]" />
                  <div className="w-44 h-44 border border-white/10 rounded-full absolute animate-[spin_18s_linear_infinite_reverse]" />
                  <div className="w-24 h-24 border border-emerald-500/30 rounded-full absolute animate-pulse" />
                  <div className="w-4 h-4 bg-emerald-500 rounded-full absolute animate-pulse" />
                </div>
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0"><CheckCircle2 size={20} /></div>
                    <div><p className="text-sm font-bold text-white">Status: Active</p><p className="text-xs text-slate-400">System optimization in progress...</p></div>
                  </div>
                </div>
                <div className="absolute top-8 left-8"><p className="text-xs font-bold uppercase tracking-widest text-slate-500 font-mono">AI Core v2.4</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 container mx-auto px-6 bg-white">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-black tracking-tighter">Inside the Workshop</h2>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-bold underline decoration-2 underline-offset-4 hover:text-emerald-600 transition-colors">Follow on Instagram</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[500px]">
          <div className="col-span-2 row-span-2 rounded-[2rem] overflow-hidden relative group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Workshop" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"><p className="text-white font-bold text-xl">Hands-on Training</p></div>
          </div>
          <div className="rounded-[2rem] overflow-hidden group relative"><img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Team session" /></div>
          <div className="bg-slate-900 rounded-[2rem] flex flex-col items-center justify-center text-white p-6 text-center group cursor-pointer relative overflow-hidden">
            <div className="relative z-10"><p className="text-4xl font-black mb-2">50+</p><p className="text-sm text-slate-400 uppercase tracking-widest">Firem proškoleno</p></div>
            <div className="absolute inset-0 bg-emerald-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
          </div>
          <div className="col-span-2 rounded-[2rem] overflow-hidden relative group"><img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Team" /></div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-32 bg-slate-950 text-white">
        <div className="container mx-auto max-w-7xl text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-10 leading-[0.9] max-w-4xl mx-auto">
              READY TO{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">UPGRADE?</span>
            </h2>
            <p className="text-xl text-slate-400 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">Jeden workshop dokáže změnit způsob, jakým váš tým pracuje. Domluvme si nezávaznou konzultaci a zjistěme, co je pro vás to pravé.</p>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="group relative px-12 py-5 bg-white text-slate-900 rounded-full font-black tracking-tight text-lg inline-flex items-center gap-3 hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-[0px_0px_40px_rgba(255,255,255,0.08)] hover:shadow-[0px_0px_40px_rgba(52,211,153,0.4)] overflow-hidden">
              DOMLUVIT KONZULTACI<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <p className="text-slate-600 text-sm uppercase tracking-widest mt-16 mb-4">Preferujete email?</p>
            <a href="mailto:michal@kraus.ai" className="text-3xl md:text-5xl font-black tracking-tighter hover:text-emerald-400 transition-colors">michal@kraus.ai</a>
          </motion.div>
        </div>
      </section>

    </main>
  );
}