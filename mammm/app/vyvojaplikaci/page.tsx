"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageSquare,
  Layers,
  Zap,
  Code,
  Sparkles,
  Users,
  CheckCircle2,
} from "lucide-react";

export default function VyvojAplikaciPage() {
  const [activeApp, setActiveApp] = useState(0);

  return (
    <main className="bg-white text-slate-900 min-h-screen selection:bg-blue-600 selection:text-white font-sans overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&display=swap');
        p, a, button, li, label, small, input, textarea,
        .geist { font-family: 'Geist', sans-serif !important; }
      `}</style>

      {/* HERO */}
      <section className="relative pt-20 pb-12 md:pt-24 md:pb-16 px-6 container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          <motion.div
            className="lg:w-1/2 z-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
              Vývoj aplikací{" "}
              <span className="text-blue-600 italic font-black">
                na míru.
              </span>
            </h1>

            <p className="text-xl text-slate-500 font-medium max-w-lg leading-relaxed mb-4">
              Některé nápady potřebují víc než jen automatizaci. Někdy dává největší smysl
              vytvořit vlastní aplikaci, která přesně odpovídá tomu, jak firma funguje.
            </p>

            <p className="text-xl text-slate-700 font-semibold max-w-lg leading-relaxed mb-10">
              Právě tady propojuji byznysové myšlení s vývojem.
            </p>
          </motion.div>

          <motion.div
            className="lg:w-1/2 relative w-full aspect-square md:aspect-video lg:aspect-square max-h-[600px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-slate-50 rounded-[3rem] overflow-hidden border-2 border-slate-900 shadow-[16px_16px_0px_0px_rgba(15,23,42,1)] group">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                alt="Vývoj aplikací - development workspace"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="py-12 border-y border-slate-100 bg-slate-50/50 overflow-hidden">
        <motion.div
          className="flex gap-20 whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {[
            "REACT","NEXT.JS","NODE.JS","TYPESCRIPT","TAILWIND","FIGMA","OPENAI","SUPABASE",
            "REACT","NEXT.JS","NODE.JS","TYPESCRIPT","TAILWIND","FIGMA","OPENAI","SUPABASE",
            "REACT","NEXT.JS","NODE.JS",
          ].map((tech, i) => (
            <span key={i} className="text-4xl font-black text-slate-200 select-none tracking-tighter">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* INTERACTIVE APP SHOWCASE */}
      <section className="px-6 py-32 bg-white relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] -z-10" />
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-slate-50 mb-8 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">CO VYVÍJÍME</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
              Webové aplikace, mobilní aplikace{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                i chytré chatboty
              </span>
            </h2>
          </div>

          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            {[
              { label: "Mobilní aplikace", emoji: "📱" },
              { label: "Webové aplikace", emoji: "💻" },
              { label: "Chatboty", emoji: "💬" },
            ].map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveApp(idx)}
                className={`px-8 py-4 rounded-full font-bold text-base transition-all flex items-center gap-3 min-w-[220px] justify-center border-2 ${
                  activeApp === idx
                    ? "bg-slate-900 text-white border-slate-900 shadow-lg scale-105"
                    : "bg-white border-slate-200 text-slate-700 hover:border-slate-400 hover:bg-slate-50"
                }`}
              >
                <span className="text-xl">{tab.emoji}</span>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div animate={{ opacity: activeApp === 0 ? 1 : 0.3, y: activeApp === 0 ? 0 : 20, scale: activeApp === 0 ? 1 : 0.95 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col">
              <div className="cursor-pointer mb-6" onClick={() => setActiveApp(0)}>
                <div className="bg-white rounded-[2rem] shadow-[0px_20px_40px_-10px_rgba(0,0,0,0.10)] border-2 border-slate-100 p-6 hover:border-slate-900 transition-all duration-300 h-[460px] flex items-center justify-center">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl w-[200px] h-[400px] p-4 flex flex-col">
                    <div className="w-12 h-1 bg-white/30 rounded-full mx-auto mb-4" />
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="h-10 bg-white/20 rounded-lg" />
                      <div className="grid grid-cols-2 gap-2"><div className="h-20 bg-white/20 rounded-lg" /><div className="h-20 bg-white/20 rounded-lg" /></div>
                      <div className="h-14 bg-white/20 rounded-lg" />
                      <div className="h-16 bg-white/30 rounded-lg" />
                      <div className="flex-1" />
                    </div>
                    <div className="h-10 bg-white/40 rounded-full" />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="font-black text-lg tracking-tight mb-2">iOS & Android</p>
                <p className="text-sm text-slate-500 font-medium mb-6">Native performance, offline-first</p>
                <button className="w-full px-6 py-3 bg-slate-900 text-white rounded-full font-bold text-sm hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 shadow-lg">Chci mobilní aplikaci<ArrowRight className="w-4 h-4" /></button>
              </div>
            </motion.div>

            <motion.div animate={{ opacity: activeApp === 1 ? 1 : 0.3, y: activeApp === 1 ? 0 : 20, scale: activeApp === 1 ? 1 : 0.95 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col">
              <div className="cursor-pointer mb-6" onClick={() => setActiveApp(1)}>
                <div className="bg-white rounded-[2rem] shadow-[0px_20px_40px_-10px_rgba(0,0,0,0.10)] border-2 border-slate-100 p-3 hover:border-slate-900 transition-all duration-300 h-[460px] flex flex-col justify-center">
                  <div className="bg-gradient-to-br from-slate-900 to-slate-700 rounded-2xl aspect-[16/10] p-4 flex flex-col">
                    <div className="flex gap-1.5 mb-4"><div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-yellow-400" /><div className="w-3 h-3 rounded-full bg-green-400" /></div>
                    <div className="flex gap-3 mb-3"><div className="w-1/4 bg-white/10 rounded-lg" /><div className="flex-1 space-y-2"><div className="h-8 bg-white/20 rounded" /><div className="grid grid-cols-2 gap-2"><div className="h-16 bg-white/15 rounded" /><div className="h-16 bg-white/15 rounded" /></div></div></div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="font-black text-lg tracking-tight mb-2">Webové aplikace</p>
                <p className="text-sm text-slate-500 font-medium mb-6">React, Next.js, progressive web apps</p>
                <button className="w-full px-6 py-3 bg-slate-900 text-white rounded-full font-bold text-sm hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 shadow-lg">Chci webovou aplikaci<ArrowRight className="w-4 h-4" /></button>
              </div>
            </motion.div>

            <motion.div animate={{ opacity: activeApp === 2 ? 1 : 0.3, y: activeApp === 2 ? 0 : 20, scale: activeApp === 2 ? 1 : 0.95 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col">
              <div className="cursor-pointer mb-6" onClick={() => setActiveApp(2)}>
                <div className="bg-white rounded-[2rem] shadow-[0px_20px_40px_-10px_rgba(0,0,0,0.10)] border-2 border-slate-100 p-6 hover:border-slate-900 transition-all duration-300 h-[460px] flex flex-col justify-center">
                  <div className="space-y-4">
                    <div className="flex gap-3 items-end"><div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shrink-0 flex items-center justify-center text-white font-bold text-sm">AI</div><div className="bg-slate-100 rounded-2xl rounded-bl-none px-4 py-3 text-sm max-w-[70%]">Ahoj! Jak ti mohu pomoci? 👋</div></div>
                    <div className="flex gap-3 items-end justify-end"><div className="bg-blue-600 text-white rounded-2xl rounded-br-none px-4 py-3 text-sm max-w-[70%]">Potřebuji informace o produktu</div></div>
                    <div className="flex gap-3 items-end"><div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shrink-0 flex items-center justify-center text-white font-bold text-sm">AI</div><div className="bg-slate-100 rounded-2xl rounded-bl-none px-4 py-3 text-sm max-w-[70%]">Samozřejmě! Jaký konkrétní produkt vás zajímá?</div></div>
                    <div className="flex gap-2 mt-8"><div className="flex-1 h-10 bg-slate-100 rounded-full flex items-center px-4 text-xs text-slate-400">Napište zprávu...</div><div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shrink-0"><ArrowRight className="w-5 h-5 text-white" /></div></div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="font-black text-lg tracking-tight mb-2">AI Chatboty</p>
                <p className="text-sm text-slate-500 font-medium mb-6">24/7 podpora, GPT-4, vlastní training</p>
                <button className="w-full px-6 py-3 bg-slate-900 text-white rounded-full font-bold text-sm hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 shadow-lg">Chci chatbota<ArrowRight className="w-4 h-4" /></button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* V PRAXI */}
      <section className="px-6 py-20 bg-slate-50/50">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white mb-8 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">V PRAXI VZNIKAJÍ NAPŘÍKLAD</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
              <div className="relative h-full p-12 md:p-16 bg-blue-600 text-white rounded-[2rem] overflow-hidden group cursor-default border-[3px] border-transparent hover:-translate-y-2 hover:border-indigo-400 hover:shadow-[0_0_30px_rgba(99,102,241,0.7)] transition-all duration-75">
                <div className="absolute top-8 right-8 text-[200px] md:text-[300px] font-black opacity-[0.07] leading-none select-none">01</div>
                <div className="relative z-10">
                  <Layers className="w-10 h-10 mb-6 opacity-80" />
                  <p className="text-xs uppercase tracking-[0.4em] opacity-80 mb-8">01</p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-6 leading-tight">Interní firemní systémy a nástroje</h2>
                  <div className="text-base md:text-lg opacity-90 leading-relaxed space-y-4">
                    <p>Krabicová řešení vás často nutí ohýbat zaběhnuté procesy. Vyvíjím systémy, které se naopak <strong>přesně přizpůsobí vašemu workflow</strong> – ať už jde o <strong>CRM na míru</strong>, projektové řízení nebo skladovou evidenci.</p>
                    <p>Získáte centrální místo pro všechna firemní data, <strong>eliminujete manuální chyby a ušetříte stovky hodin</strong> na administrativě.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}>
              <div className="relative h-full p-12 md:p-16 bg-slate-900 text-white rounded-[2rem] overflow-hidden group cursor-default border-[3px] border-transparent hover:-translate-y-2 hover:border-indigo-400 hover:shadow-[0_0_30px_rgba(99,102,241,0.7)] transition-all duration-75">
                <div className="absolute top-8 right-8 text-[200px] md:text-[300px] font-black opacity-[0.07] leading-none select-none">02</div>
                <div className="relative z-10">
                  <Users className="w-10 h-10 mb-6 opacity-80" />
                  <p className="text-xs uppercase tracking-[0.4em] opacity-70 mb-8">02</p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-6 leading-tight">Webové a mobilní aplikace pro zákazníky</h2>
                  <div className="text-base md:text-lg opacity-80 leading-relaxed space-y-4">
                    <p><strong>Zákaznická zkušenost dnes rozhoduje.</strong> Pomalá nebo nepřehledná aplikace znamená ztraceného klienta.</p>
                    <p>Tvořím <strong>bleskově rychlé webové aplikace (PWA)</strong> i <strong>nativní mobilní řešení</strong>, které otevírají nový prodejní kanál.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}>
              <div className="relative h-full p-10 md:p-12 bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-[2rem] overflow-hidden group cursor-default border-[3px] border-transparent hover:-translate-y-2 hover:border-indigo-400 hover:shadow-[0_0_30px_rgba(99,102,241,0.7)] transition-all duration-75">
                <div className="absolute top-6 right-6 text-[150px] md:text-[200px] font-black opacity-[0.07] leading-none select-none">03</div>
                <div className="relative z-10">
                  <Sparkles className="w-8 h-8 mb-6" />
                  <p className="text-xs uppercase tracking-[0.4em] opacity-80 mb-6">03</p>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter mb-4 leading-tight">AI nástroje a asistenti</h3>
                  <div className="text-base md:text-lg opacity-90 leading-relaxed space-y-4">
                    <p><strong>Umělá inteligence</strong> už není jen pojem, je to nástroj pro <strong>udržení náskoku</strong>.</p>
                    <p>Získáte možnost <strong>automatické analýzy velkých dat</strong> a <strong>chytrá doporučení</strong> s maximálním ohledem na <strong>bezpečí vašeho know-how</strong>.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}>
              <div className="relative h-full p-10 md:p-12 bg-emerald-500 text-white rounded-[2rem] overflow-hidden group cursor-default border-[3px] border-transparent hover:-translate-y-2 hover:border-indigo-400 hover:shadow-[0_0_30px_rgba(99,102,241,0.7)] transition-all duration-75">
                <div className="absolute top-6 right-6 text-[150px] md:text-[200px] font-black opacity-[0.07] leading-none select-none">04</div>
                <div className="relative z-10">
                  <MessageSquare className="w-8 h-8 mb-6" />
                  <p className="text-xs uppercase tracking-[0.4em] opacity-80 mb-6">04</p>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter mb-4 leading-tight">Chatboty pro podporu i obchod</h3>
                  <div className="text-base md:text-lg opacity-90 leading-relaxed space-y-4">
                    <p>Zákazníci očekávají odpověď hned. <strong>Inteligentní chatbot</strong> poskytuje podporu <strong>24/7 a učí se z každého dotazu</strong>.</p>
                    <p>Odbaví rutinní otázky <strong>bez nutnosti lidského zásahu</strong> a složitější případy <strong>plynule předá živému operátorovi</strong>.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }} className="md:col-span-2">
              <div className="relative h-full p-10 md:p-12 bg-orange-500 text-white rounded-[2rem] overflow-hidden group cursor-default border-[3px] border-transparent hover:-translate-y-2 hover:border-indigo-400 hover:shadow-[0_0_30px_rgba(99,102,241,0.7)] transition-all duration-75">
                <div className="absolute top-6 right-6 text-[150px] md:text-[200px] font-black opacity-[0.07] leading-none select-none">05</div>
                <div className="relative z-10 max-w-4xl">
                  <Code className="w-8 h-8 mb-6" />
                  <p className="text-xs uppercase tracking-[0.4em] opacity-80 mb-6">05</p>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-4 leading-tight">Platformy pro správu procesů a dat</h3>
                  <div className="text-lg md:text-xl opacity-90 leading-relaxed space-y-4">
                    <p>Stavím <strong>komplexní ekosystémy</strong>, které bezpečně <strong>spojují lidi, data a procesy</strong> do jednoho zdroje pravdy.</p>
                    <p>Ať už potřebujete <strong>sjednotit reporting</strong> nebo interaktivní <strong>BI dashboardy</strong>, navrhnu řešení pro <strong>okamžitý přehled</strong>.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCES */}
      <section className="px-6 py-32 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-slate-50 mb-8 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">JAK TO PROBÍHÁ</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 max-w-3xl leading-[0.95]">
              Od prvního nápadu po{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">funkční produkt</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500" />
            <div className="space-y-10">
              {[
                { phase: "Discovery", title: "První nápad a analýza", desc: "Společně probereme váš nápad, identifikujeme potřeby uživatelů a definujeme klíčové funkce. Vytvoříme product roadmap.", icon: "💡", dotColor: "bg-blue-500", badgeColor: "bg-blue-100 text-blue-700" },
                { phase: "Design", title: "UX/UI a prototyp", desc: "Navrhnu uživatelské rozhraní s důrazem na jednoduchost a přehlednost. Vytvoříme interaktivní prototyp k otestování.", icon: "🎨", dotColor: "bg-purple-500", badgeColor: "bg-purple-100 text-purple-700" },
                { phase: "Development", title: "Vývoj aplikace", desc: "Spolupracuji se zkušeným developerským týmem. Stavíme v moderních technologiích s důrazem na kvalitu kódu.", icon: "⚡", dotColor: "bg-orange-500", badgeColor: "bg-orange-100 text-orange-700" },
                { phase: "Launch", title: "Testování a spuštění", desc: "Důkladné testování, opravy bugů a nasazení do produkce. Zaškolím tým a připravím dokumentaci.", icon: "🚀", dotColor: "bg-emerald-500", badgeColor: "bg-emerald-100 text-emerald-700" },
              ].map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }} className="relative pl-24 md:pl-32 group">
                  <motion.div whileHover={{ scale: 1.5 }} className={`absolute left-6 md:left-9 top-8 w-6 h-6 rounded-full ${step.dotColor} border-4 border-white shadow-lg cursor-pointer z-10 flex items-center justify-center`}><span className="text-[8px]">{step.icon}</span></motion.div>
                  <motion.div whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }} className="p-8 bg-white rounded-[2rem] border-2 border-slate-100 hover:border-slate-900 transition-all duration-300 cursor-pointer shadow-[0px_4px_20px_-4px_rgba(0,0,0,0.06)]">
                    <div className="flex items-center gap-3 mb-3"><span className={`px-3 py-1 ${step.badgeColor} text-xs font-bold rounded-full uppercase tracking-wider`}>{step.phase}</span></div>
                    <h3 className="text-2xl md:text-3xl font-black tracking-tighter mb-3">{step.title}</h3>
                    <p className="text-slate-500 text-lg leading-relaxed font-medium">{step.desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROČ VLASTNÍ APLIKACE */}
      <section className="px-6 py-32 bg-slate-50/50">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white mb-8 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">PROČ VLASTNÍ APLIKACE</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 max-w-4xl mx-auto leading-[0.95]">
              Každý projekt cílí na jednoduchost a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">dlouhodobou použitelnost</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Zap className="w-8 h-8" />, title: "Přesně podle vašich potřeb", desc: "Žádné kompromisy. Aplikace je navržená přesně pro vaše procesy a požadavky.", gradient: "from-blue-500 to-blue-600" },
              { icon: <CheckCircle2 className="w-8 h-8" />, title: "Vlastníte technologii", desc: "Nejste závislí na externích službách. Máte plnou kontrolu nad daty a funkcemi.", gradient: "from-purple-500 to-purple-600" },
              { icon: <Sparkles className="w-8 h-8" />, title: "Škáluje s vámi", desc: "Aplikace roste s vaší firmou. Přidáváme funkce podle toho, jak se mění potřeby.", gradient: "from-emerald-500 to-emerald-600" },
            ].map((benefit, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }} whileHover={{ y: -8 }} className="p-8 bg-white rounded-[2rem] border-2 border-slate-100 hover:border-slate-900 transition-all duration-300 cursor-pointer group shadow-[0px_4px_20px_-4px_rgba(0,0,0,0.06)]">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${benefit.gradient} text-white mb-6 group-hover:scale-110 transition-transform`}>{benefit.icon}</div>
                <h3 className="text-xl md:text-2xl font-black tracking-tight mb-3">{benefit.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-black tracking-tighter">Inside the Studio</h2>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-bold underline decoration-2 underline-offset-4 hover:text-blue-600 transition-colors">Follow on Instagram</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[500px]">
          <div className="col-span-2 row-span-2 rounded-[2rem] overflow-hidden relative group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Work" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"><p className="text-white font-bold text-xl">Strategie & Focus</p></div>
          </div>
          <div className="rounded-[2rem] overflow-hidden group relative"><img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Design" /></div>
          <div className="bg-slate-900 rounded-[2rem] flex flex-col items-center justify-center text-white p-6 text-center group cursor-pointer relative overflow-hidden">
            <div className="relative z-10"><p className="text-4xl font-black mb-2">50+</p><p className="text-sm text-slate-400 uppercase tracking-widest">Projects Shipped</p></div>
            <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
          </div>
          <div className="col-span-2 rounded-[2rem] overflow-hidden relative group"><img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Team" /></div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-32 bg-slate-950 text-white">
        <div className="container mx-auto max-w-7xl text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-10 leading-[0.9] max-w-4xl mx-auto">
              Máte nápad na aplikaci?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Pojďme ho proměnit v realitu.</span>
            </h2>
            <p className="text-xl text-slate-400 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">Pokud máte nápad na aplikaci nebo víte, že by vám vlastní digitální řešení ulehčilo práci, rád s vámi proberu možnosti a navrhnu konkrétní směr.</p>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-12 py-5 bg-white text-slate-900 rounded-full font-black tracking-tight text-lg inline-flex items-center gap-3 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-[0px_0px_40px_rgba(255,255,255,0.1)] hover:shadow-[0px_0px_40px_rgba(99,102,241,0.4)]">
              PROMLUVIT O PROJEKTU<ArrowRight className="w-5 h-5" />
            </motion.button>
            <p className="text-slate-600 text-sm uppercase tracking-widest mt-16 mb-4">Preferujete email?</p>
            <a href="mailto:michal@kraus.ai" className="text-3xl md:text-5xl font-black tracking-tighter hover:text-blue-400 transition-colors">michal@kraus.ai</a>
          </motion.div>
        </div>
      </section>

    </main>
  );
}