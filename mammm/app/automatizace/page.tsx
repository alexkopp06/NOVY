"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  MessageSquare, 
  Database,
  BarChart4,
  Mail,
  FileText,
  Workflow,
  Users,
  Send
} from "lucide-react";

const TOOLS = [
  "n8n", "ChatGPT", "OpenAI", "Gemini", "ElevenLabs",
  "Pipedrive", "HubSpot", "Google Sheets", "Notion", "Slack",
  "Gmail", "Shoptet", "Fakturoid", "Pohoda", "WooCommerce", "Shopify",
];

const TOOLS_2X = [...TOOLS, ...TOOLS];

const MARQUEE_WORDS_2X = [
  "AUTOMATIZACE", "·", "AI WORKFLOWS", "·", "SYSTÉMY", "·",
  "CHATGPT", "·", "PIPEDRIVE", "·", "PROCESY", "·",
  "N8N", "·", "HUBSPOT", "·", "INTEGRACE", "·",
  "AUTOMATIZACE", "·", "AI WORKFLOWS", "·", "SYSTÉMY", "·",
  "CHATGPT", "·", "PIPEDRIVE", "·", "PROCESY", "·",
  "N8N", "·", "HUBSPOT", "·", "INTEGRACE", "·",
];

export default function AiAutomatizacePage() {
  return (
    <main className="bg-white text-black min-h-screen font-sans overflow-x-hidden">
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
              AI
              <br />
              Automatizace
              <br />
              <span className="text-blue-600 italic">
                na míru.
              </span>
            </h1>

            <p className="text-xl text-slate-500 font-medium max-w-lg leading-relaxed mb-4">
              Pokud se u vás nějaká činnost opakuje více než dvakrát týdně, s vysokou pravděpodobností ji dokážu zautomatizovat.
            </p>
            <p className="text-xl text-slate-700 font-semibold max-w-lg leading-relaxed mb-10">
              Propojím systémy tak, aby vše běželo automaticky na pozadí.
            </p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold text-base md:text-lg inline-flex items-center gap-3 hover:bg-yellow-500 hover:text-slate-900 transition-all duration-300 shadow-lg"
            >
              Chci audit procesů
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          <motion.div
            className="lg:w-1/2 relative w-full aspect-square md:aspect-video lg:aspect-square max-h-[600px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-yellow-100 to-slate-50 rounded-[3rem] overflow-hidden border-2 border-slate-900 shadow-[-16px_16px_0px_0px_rgba(15,23,42,1)] group">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                alt="AI Automatizace"
              />
              <div className="absolute bottom-8 right-8 bg-slate-900/90 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 shadow-lg text-white text-right">
                <p className="text-2xl font-black tracking-tighter">340%</p>
                <p className="text-xs text-slate-400 uppercase tracking-widest">ROI za 6 měsíců</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* PROBLEM STATEMENT */}
      <section className="px-6 py-24 bg-slate-950 text-white rounded-t-[3rem]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400 mb-4">REALITA VĚTŠINY FIREM</p>
              <div className="w-12 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full" />
            </motion.div>

            <motion.div
              className="lg:col-span-9"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug text-white mb-8">
                V mnoha firmách dnes běží desítky nástrojů, tabulek a systémů, mezi kterými se informace{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                  stále ručně přepisují.
                </span>
              </p>
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mb-6">
                Poptávky chodí do e-mailu, data se kopírují do tabulek, reporty se skládají ručně a spousta práce vzniká jen proto, že spolu aplikace nekomunikují.
              </p>
              <p className="text-lg md:text-xl text-slate-300 font-semibold leading-relaxed max-w-3xl">
                Právě tam vzniká největší prostor pro automatizaci.
              </p>
            </motion.div>

          </div>

          <motion.div
            className="mt-20 pt-12 border-t border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <p className="text-slate-400 text-lg leading-relaxed">
                Díky moderním nástrojům vám dokážu ušetřit{" "}
                <strong className="text-white">desítky hodin měsíčně</strong> a výrazně zjednodušit fungování celé firmy. A to je jen zlomek možností.
              </p>
              <div className="flex flex-wrap gap-3 md:justify-end">
                {["Poptávky & nabídky","Lead generation","E-mailové sekvence","Fakturace","Interní reporty","Onboarding klientů","CRM synchronizace","Publikování obsahu"].map((tag, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 font-medium hover:bg-yellow-500/10 hover:border-yellow-500/30 hover:text-yellow-300 transition-all duration-200 cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-white overflow-hidden">
        <div className="py-12 border-y border-slate-100 bg-slate-50/50 overflow-hidden">
          <motion.div
            className="flex gap-20 whitespace-nowrap"
            animate={{ x: [0, "-50%"] }}
            transition={{ duration: 32, ease: "linear", repeat: Infinity }}
          >
            {MARQUEE_WORDS_2X.map((word, i) => (
              <span
                key={i}
                className={`shrink-0 select-none tracking-tighter ${
                  word === "·"
                    ? "text-yellow-400 text-4xl font-black"
                    : "text-4xl md:text-5xl font-black text-slate-200"
                }`}
              >
                {word}
              </span>
            ))}
          </motion.div>
        </div>
        <div className="py-12 border-b border-slate-100 overflow-hidden">
          <motion.div
            className="flex gap-20 whitespace-nowrap"
            animate={{ x: ["-50%", 0] }}
            transition={{ duration: 38, ease: "linear", repeat: Infinity }}
          >
            {TOOLS_2X.map((tool, i) => (
              <span
                key={i}
                className="shrink-0 text-4xl md:text-5xl font-black tracking-tighter select-none text-slate-900 opacity-[0.07] hover:opacity-100 transition-opacity duration-300 cursor-default"
              >
                {tool}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* BAREVNÉ BLOKY SLUŽEB */}
      <section className="px-6 pb-20 pt-16 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16">
            <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-gray-500">CO AUTOMATIZUJEME</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
              <div className="relative h-full min-h-[460px] p-12 md:p-14 bg-blue-600 text-white rounded-3xl overflow-hidden group cursor-default border-[3px] border-transparent hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] transition-all duration-75 flex flex-col">
                <div className="absolute top-8 right-8 text-[220px] font-black opacity-[0.07] leading-none select-none">01</div>
                <div className="relative z-10 flex flex-col flex-1">
                  <Mail className="w-10 h-10 mb-6 opacity-80" />
                  <p className="text-xs uppercase tracking-[0.4em] opacity-80 mb-6">01</p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">Zpracování poptávek a zakázek</h2>
                  <div className="text-base md:text-lg opacity-90 leading-relaxed space-y-4 flex-1">
                    <p>Ztrácíte čas přepisováním dat? Poptávky z webu už <strong>nikdy nezapadnou v e-mailu</strong>.</p>
                    <p>Díky AI je <strong>automaticky roztřídíme podle priorit</strong>, založíme záznam přímo v CRM nebo sdíleném dokumentu a okamžitě <strong>upozorníme obchodní oddělení</strong>.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}>
              <div className="relative h-full min-h-[460px] p-12 md:p-14 bg-black text-white rounded-3xl overflow-hidden group cursor-default border-[3px] border-transparent hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] transition-all duration-75 flex flex-col">
                <div className="absolute top-8 right-8 text-[220px] font-black opacity-[0.07] leading-none select-none">02</div>
                <div className="relative z-10 flex flex-col flex-1">
                  <MessageSquare className="w-10 h-10 mb-6 opacity-80" />
                  <p className="text-xs uppercase tracking-[0.4em] opacity-70 mb-6">02</p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">Komunikace se zákazníky</h2>
                  <div className="text-base md:text-lg opacity-80 leading-relaxed space-y-4 flex-1">
                    <p>Zákazníci očekávají odpověď okamžitě, ale váš tým nemůže být online 24 hodin denně.</p>
                    <p>Nasazujeme automatické odpovědi a <strong>chytré AI asistenty</strong>, kteří <strong>spolehlivě odbaví rutinní dotazy</strong> a ty složitější plynule nasměrují na správného člověka.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}>
              <div className="relative h-full min-h-[460px] p-12 md:p-14 bg-white border-[3px] border-gray-200 text-black rounded-3xl overflow-hidden group cursor-default hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] transition-all duration-75 flex flex-col">
                <div className="absolute top-6 right-6 text-[160px] font-black opacity-[0.03] leading-none select-none">03</div>
                <div className="relative z-10 flex flex-col flex-1">
                  <Database className="w-8 h-8 mb-4 text-gray-700" />
                  <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-6">03</p>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">Přenos dat mezi systémy</h3>
                  <div className="text-base md:text-lg text-gray-600 leading-relaxed space-y-4 flex-1">
                    <p>Konec ručního kopírování do tabulek. E-shop, účetnictví, sklad i CRM konečně <strong>mluví stejnou řečí</strong>.</p>
                    <p>Data se mezi vašimi aplikacemi <strong>synchronizují zcela automaticky</strong>, v reálném čase a hlavně bez chyb.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}>
              <div className="relative h-full min-h-[460px] p-12 md:p-14 bg-yellow-400 text-black rounded-3xl overflow-hidden group cursor-default border-[3px] border-transparent hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] transition-all duration-75 flex flex-col">
                <div className="absolute top-6 right-6 text-[160px] font-black opacity-[0.05] leading-none select-none">04</div>
                <div className="relative z-10 flex flex-col flex-1">
                  <BarChart4 className="w-8 h-8 mb-4 opacity-80" />
                  <p className="text-xs uppercase tracking-[0.4em] opacity-60 mb-6">04</p>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">Tvorba přehledů a reportů</h3>
                  <div className="text-base md:text-lg opacity-80 leading-relaxed space-y-4 flex-1">
                    <p>Skládáte klíčová data ručně? Ušetřete si práci. Vaše data se <strong>sbírají a analyzují sama</strong>.</p>
                    <p>Získáte interaktivní, <strong>vždy aktuální manažerské dashboardy</strong>, takže se rozhodujete na základě tvrdých dat, nikoliv dojmů.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}>
              <div className="relative h-full min-h-[460px] p-12 md:p-14 bg-blue-50 border-[3px] border-blue-100 text-black rounded-3xl overflow-hidden group cursor-default hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] transition-all duration-75 flex flex-col">
                <div className="absolute top-6 right-6 text-[160px] font-black opacity-[0.03] leading-none select-none">05</div>
                <div className="relative z-10 flex flex-col flex-1">
                  <FileText className="w-8 h-8 mb-4 text-blue-800" />
                  <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-6">05</p>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">Práce s dokumenty</h3>
                  <div className="text-base md:text-lg text-gray-600 leading-relaxed space-y-4 flex-1">
                    <p>Stohy faktur, e-mailů a smluv už nemusíte složitě pročítat a přepisovat.</p>
                    <p>Nasazená AI <strong>sama vytěží klíčová data z PDF</strong>, roztřídí je, zajistí automatickou archivaci a uloží je <strong>přesně do systémů, kam patří</strong>.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}>
              <div className="relative h-full min-h-[460px] p-12 md:p-14 bg-black text-white rounded-3xl overflow-hidden group cursor-default border-[3px] border-transparent hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] transition-all duration-75 flex flex-col">
                <div className="absolute top-6 right-6 text-[160px] font-black opacity-[0.05] leading-none select-none">06</div>
                <div className="relative z-10 flex flex-col flex-1">
                  <Workflow className="w-8 h-8 mb-4 opacity-80" />
                  <p className="text-xs uppercase tracking-[0.4em] opacity-70 mb-6">06</p>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">Interní workflow a marketing</h3>
                  <div className="text-base md:text-lg opacity-80 leading-relaxed space-y-4 flex-1">
                    <p>Od automatického onboardingu nových zaměstnanců po spouštění složitých prodejních kampaní.</p>
                    <p>Vaše interní i obchodní <strong>procesy běží na autopilota</strong>, což přináší vašim lidem <strong>výraznou úsporu času a jistotu</strong>, že se na nic nezapomene.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}>
              <div className="relative h-full min-h-[460px] p-12 md:p-14 bg-orange-500 text-white rounded-3xl overflow-hidden group cursor-default border-[3px] border-transparent hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] transition-all duration-75 flex flex-col">
                <div className="absolute top-6 right-6 text-[160px] font-black opacity-[0.05] leading-none select-none">07</div>
                <div className="relative z-10 flex flex-col flex-1">
                  <Users className="w-8 h-8 mb-4 opacity-80" />
                  <p className="text-xs uppercase tracking-[0.4em] opacity-70 mb-6">07</p>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">Lead generation a obohacování kontaktů</h3>
                  <div className="text-base md:text-lg opacity-90 leading-relaxed space-y-4 flex-1">
                    <p>Ruční hledání kontaktů a doplňování dat do CRM je minulost.</p>
                    <p>AI za vás <strong>automaticky vyhledává potenciální zákazníky</strong>, obohacuje jejich profily a připravuje je <strong>k oslovení přesně ve správný moment</strong>.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}>
              <div className="relative h-full min-h-[460px] p-12 md:p-14 bg-white border-[3px] border-gray-200 text-black rounded-3xl overflow-hidden group cursor-default hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] transition-all duration-75 flex flex-col">
                <div className="absolute top-6 right-6 text-[160px] font-black opacity-[0.03] leading-none select-none">08</div>
                <div className="relative z-10 flex flex-col flex-1">
                  <Send className="w-8 h-8 mb-4 text-gray-700" />
                  <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-6">08</p>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">E-mailové sekvence a notifikace</h3>
                  <div className="text-base md:text-lg text-gray-600 leading-relaxed space-y-4 flex-1">
                    <p>Každý zákazník dostane správnou zprávu ve správný čas — bez jediného kliknutí z vaší strany.</p>
                    <p>Nastavíme <strong>chytré e-mailové sekvence a automatické notifikace</strong>, které reagují na chování zákazníků a <strong>vedou je přirozeně k nákupu</strong>.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* JAK TO FUNGUJE */}
      <section className="px-6 py-32 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-20">
            <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-gray-500 mb-8">METODIKA</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 max-w-3xl">Jak automatizace probíhá</h2>
          </div>
          <div className="space-y-12 md:space-y-16">
            {[
              { num: "01", title: "Audit procesů", desc: "Nejprve projdeme jednotlivé procesy a podíváme se, kde se ztrácí nejvíc času nebo kde vznikají zbytečné chyby. Pochopení vaší firmy je základ." },
              { num: "02", title: "Návrh propojení", desc: "Na základě auditu navrhnu konkrétní propojení nástrojů a nasazení AI řešení, která vaši práci a flow výrazně zjednoduší a zrychlí." },
              { num: "03", title: "Implementace", desc: "Stavím automatizace přesně podle toho, jak firma skutečně funguje. Nastavíme systémy, integrujeme AI a vše otestujeme v reálném provozu." },
              { num: "04", title: "Nasazení a podpora", desc: "Firmám to přináší okamžité úspory nákladů. Po spuštění zaškolím váš tým a zůstávám k dispozici, aby se lidé mohli soustředit na důležitější práci." }
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }} className="flex flex-col md:flex-row gap-8 md:gap-12 items-start border-b border-gray-200 pb-12 md:pb-16">
                <div className="text-7xl md:text-8xl font-black text-gray-200 shrink-0">{step.num}</div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VÝSLEDKY */}
      <section className="px-6 py-32 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-gray-500 mb-8">DOPAD</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Výsledky, které mluví</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {[
              { value: "15h",  label: "ušetřeno týdně",  desc: "Průměrná úspora času na rutinní a ruční práci zaměstnanců" },
              { value: "95%",  label: "snížení chyb",    desc: "Díky automatickým kontrolám a přesné integraci systémů" },
              { value: "340%", label: "ROI za 6 měsíců", desc: "Blesková návratnost investice do inteligentní automatizace" }
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }} className="text-center">
                <div className="text-6xl md:text-7xl font-black mb-4 text-black">{stat.value}</div>
                <div className="text-lg md:text-xl font-bold mb-2 uppercase tracking-wider">{stat.label}</div>
                <p className="text-gray-600">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-32 bg-black text-white">
        <div className="container mx-auto max-w-7xl text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-10 leading-tight max-w-4xl mx-auto">
              Zjistěte, kde vám automatizace ušetří čas
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Rád se podívám na vaše procesy a navrhnu konkrétní řešení. Lidé se pak mohou soustředit na důležitější práci a firma funguje efektivněji.
            </p>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-12 py-5 bg-white text-black rounded-full font-bold text-lg inline-flex items-center gap-3 hover:bg-gray-100 transition-colors">
              DOMLUVIT KONZULTACI
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

    </main>
  );
}