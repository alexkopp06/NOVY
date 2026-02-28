"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight,
  TrendingUp,
  Users,
  Target,
  BarChart3,
  Zap,
  Heart,
  MessageCircle,
  Globe,
  Calendar,
  CheckCircle2,
  Sparkles
} from "lucide-react";

export default function MarketingPage() {
  const easing = [0.22, 1, 0.36, 1];
  const [activeMetric, setActiveMetric] = useState(0);
  const { scrollYProgress } = useScroll();
  const statsY = useTransform(scrollYProgress, [0, 1], [0, -50]);

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

          {/* LEFT — image */}
          <motion.div
            className="lg:w-1/2 relative w-full aspect-square md:aspect-video lg:aspect-square max-h-[600px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-orange-100 to-slate-50 rounded-[3rem] overflow-hidden border-2 border-slate-900 shadow-[-16px_16px_0px_0px_rgba(15,23,42,1)] group">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                alt="Marketing team collaboration"
              />
              <div className="absolute bottom-8 right-8 bg-slate-900/90 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 shadow-lg text-white text-right">
                <p className="text-2xl font-black tracking-tighter">340%</p>
                <p className="text-xs text-slate-400 uppercase tracking-widest">ROI kampaní</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — text */}
          <motion.div
            className="lg:w-1/2 z-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
              MARKETING<br />
              <span className="text-blue-600 italic font-black">
                s výsledky.
              </span>
            </h1>

            <p className="text-xl text-slate-500 font-medium max-w-lg leading-relaxed mb-4">
              K marketingu mě přivedla praxe ve firmách, kde bylo potřeba reálně přivádět zákazníky a plnit kapacity.
            </p>
            <p className="text-xl text-slate-700 font-semibold max-w-lg leading-relaxed mb-10">
              Ne teoretické modely — konkrétní výsledky.
            </p>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-4">
              </div>
            </div>

            <div className="mt-10">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold text-base md:text-lg inline-flex items-center gap-3 hover:bg-orange-500 transition-all duration-300 shadow-lg"
              >
                Promluvit o strategii
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

        </div>
      </section>


      {/* STORY */}
      <section className="py-32 bg-white">
        <div className="container mx-auto max-w-5xl px-6">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="text-center mb-20">
            <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-gray-500 mb-8">ODKUD TO ZAČALO</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Lekce z hotelového byznysu</h2>
          </motion.div>
          <div className="space-y-16">
            {[
              { phase: "Problém", title: "Skvělý produkt nikdo nezná", desc: "Silnou zkušeností pro mě bylo prostředí hotelů. Viděl jsem podniky s výbornými službami a skvělou atmosférou, které zely prázdnotou. Jejich problém nebyl v kvalitě, ale v neviditelnosti. Neuměly svůj příběh prodat online.", icon: "🏨", color: "red" },
              { phase: "Řešení", title: "Systematická oprava krok po kroku", desc: "Nehledali jsme zkratky. Postupně jsme začali pracovat s obsahem, odladili web, spustili výkonnostní reklamy a sjednotili celkovou prezentaci značky. Jednotlivé dílky skládačky do sebe začaly zapadat.", icon: "📈", color: "blue" },
              { phase: "Výsledek", title: "Z neznámého místa stabilní brand", desc: "Krok po kroku se z podniku závislého na náhodných kolemjdoucích stal hotel s pravidelnými poptávkami, silnou online stopou a hlavně stabilní obsazeností bez ohledu na sezónu.", icon: "✨", color: "emerald" }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 }} className="relative pl-12 md:pl-20 border-l-2 border-gray-200 hover:border-black transition-colors pb-8">
                <div className="absolute left-[-21px] md:left-[-29px] top-0 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-2xl shadow-sm">{item.icon}</div>
                <div className={`inline-block px-4 py-1.5 bg-${item.color}-100 text-${item.color}-700 text-xs font-bold rounded-full uppercase tracking-wider mb-4`}>{item.phase}</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{item.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="mt-20 p-10 md:p-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl border-2 border-blue-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shrink-0"><Sparkles className="w-6 h-6 text-white" /></div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Základní filozofie</h3>
                <p className="text-lg text-gray-700 leading-relaxed">Právě tam jsem si naplno uvědomil, že marketing funguje nejlépe jako <span className="font-bold text-black">dlouhodobý systém</span>, nikoliv jako jednorázová ad-hoc kampaň. Stejný přístup, kde spolu pracuje obsah, reklama a data, dnes s úspěchem aplikuji u dalších firem. Cíl je vždy stejný: <strong>zbavit firmu závislosti na náhodě</strong>.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* CO ŘEŠÍM */}
      <section className="px-6 py-32 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16">
            <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-gray-500 mb-8">V PRAXI NEJČASTĚJI ŘEŠÍM</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
              <div className="relative h-full p-12 md:p-16 bg-blue-600 text-white rounded-3xl overflow-hidden group cursor-default border-[3px] border-transparent hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] transition-all duration-75">
                <div className="absolute top-8 right-8 text-[200px] md:text-[300px] font-black opacity-[0.07] leading-none select-none">01</div>
                <div className="relative z-10">
                  <MessageCircle className="w-10 h-10 mb-6 opacity-80" />
                  <p className="text-xs uppercase tracking-[0.4em] opacity-80 mb-8">01</p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">Obsah pro weby a sociální sítě</h2>
                  <div className="text-base md:text-lg opacity-90 leading-relaxed space-y-4">
                    <p>Vytvářím <strong>obsah, který dává vaší značce tvář</strong> a osobnost. Lidé nenakupují od loga, nakupují od lidí, kterým věří.</p>
                    <p>Ať už jde o textaci webu, blogové články nebo příspěvky na sítě, dbám na <strong>autentický storytelling</strong>. Komunikujeme vaši skutečnou hodnotu jazykem, kterému zákazník rozumí.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}>
              <div className="relative h-full p-12 md:p-16 bg-black text-white rounded-3xl overflow-hidden group cursor-default border-[3px] border-transparent hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] transition-all duration-75">
                <div className="absolute top-8 right-8 text-[200px] md:text-[300px] font-black opacity-[0.07] leading-none select-none">02</div>
                <div className="relative z-10">
                  <Target className="w-10 h-10 mb-6 opacity-80" />
                  <p className="text-xs uppercase tracking-[0.4em] opacity-70 mb-8">02</p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">Výkonnostní reklamní kampaně</h2>
                  <div className="text-base md:text-lg opacity-80 leading-relaxed space-y-4">
                    <p>Krásný web je k ničemu, když na něj nikdo nechodí. Stavím kampaně zaměřené na <strong>generování reálných poptávek a prodejů</strong>.</p>
                    <p>Využívám platformy jako <strong>Google Ads, Meta či LinkedIn</strong>. Zacílím přesně na lidi, kteří už hledají vaše řešení, a měřím, zda se každá investovaná koruna vrací.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}>
              <div className="relative h-full p-10 md:p-12 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-3xl overflow-hidden group cursor-default border-[3px] border-transparent hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] transition-all duration-75">
                <div className="absolute top-6 right-6 text-[150px] md:text-[200px] font-black opacity-[0.07] leading-none select-none">03</div>
                <div className="relative z-10">
                  <Heart className="w-8 h-8 mb-6" />
                  <p className="text-xs uppercase tracking-[0.4em] opacity-80 mb-6">03</p>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">Budování důvěry a značky</h3>
                  <div className="text-base md:text-lg opacity-90 leading-relaxed space-y-4">
                    <p>Zákazníci si před nákupem často dělají průzkum. Vaše online stopa musí na první pohled <strong>vzbuzovat absolutní důvěru</strong>.</p>
                    <p>Sjednocuji vizuální a komunikační linku napříč všemi kanály. Odladěná značka znamená, že si udržíte vyšší marži a <strong>odlišíte se od levnější konkurence</strong>.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}>
              <div className="relative h-full p-10 md:p-12 bg-emerald-500 text-white rounded-3xl overflow-hidden group cursor-default border-[3px] border-transparent hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] transition-all duration-75">
                <div className="absolute top-6 right-6 text-[150px] md:text-[200px] font-black opacity-[0.07] leading-none select-none">04</div>
                <div className="relative z-10">
                  <TrendingUp className="w-8 h-8 mb-6" />
                  <p className="text-xs uppercase tracking-[0.4em] opacity-80 mb-6">04</p>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">Dlouhodobé růstové strategie</h3>
                  <div className="text-base md:text-lg opacity-90 leading-relaxed space-y-4">
                    <p>Nahodilé výstřely do prázdna nefungují. Potřebujete strategii, která ví, kde firma bude za rok.</p>
                    <p>Definujeme cílové skupiny, vybereme klíčové kanály a nastavíme <strong>systematický plán pro stabilní přísun zákazníků</strong>. Měsíc po měsíci rozšiřujeme váš dosah trhu.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }} className="md:col-span-2">
              <div className="relative h-full p-10 md:p-12 bg-orange-500 text-white rounded-3xl overflow-hidden group cursor-default border-[3px] border-transparent hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] transition-all duration-75">
                <div className="absolute top-6 right-6 text-[150px] md:text-[200px] font-black opacity-[0.07] leading-none select-none">05</div>
                <div className="relative z-10 max-w-4xl">
                  <Zap className="w-8 h-8 mb-6" />
                  <p className="text-xs uppercase tracking-[0.4em] opacity-80 mb-6">05</p>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">Propojení marketingu s daty a AI</h3>
                  <div className="text-lg md:text-xl opacity-90 leading-relaxed space-y-4">
                    <p>Marketing a technologie jsou dnes neoddělitelné. Sbíráte maily, ale nevyužíváte je? Máte kampaň, ale nevíte, která přinesla klienta?</p>
                    <p>Propojím vaše marketingové kanály přímo do CRM. Budete <strong>vždy přesně vědět, co funguje a kolik vás stojí akvizice klienta</strong>. Pomocí AI automatizace pak procesy zrychlíme, abyste neztráceli čas rutinou.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* METRIKY */}
      <section className="py-32 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="text-center mb-20">
            <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-gray-500 mb-8">REÁLNÉ VÝSLEDKY</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Čísla, která <span className="italic font-light text-gray-400">mluví</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="p-10 bg-red-50 border-2 border-red-200 rounded-3xl">
              <div className="flex items-center gap-3 mb-8"><div className="w-3 h-3 rounded-full bg-red-500"></div><h3 className="text-2xl font-bold text-red-900">Před</h3></div>
              <div className="space-y-6">
                <div><div className="text-5xl font-black text-red-600 mb-2">15-20%</div><p className="text-gray-700">Obsazenost hotelu</p></div>
                <div><div className="text-5xl font-black text-red-600 mb-2">0</div><p className="text-gray-700">Online viditelnost</p></div>
                <div><div className="text-5xl font-black text-red-600 mb-2">?</div><p className="text-gray-700">Žádná strategie</p></div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="p-10 bg-emerald-50 border-2 border-emerald-200 rounded-3xl">
              <div className="flex items-center gap-3 mb-8"><div className="w-3 h-3 rounded-full bg-emerald-500"></div><h3 className="text-2xl font-bold text-emerald-900">Po 12 měsících</h3></div>
              <div className="space-y-6">
                <div><div className="text-5xl font-black text-emerald-600 mb-2">85-95%</div><p className="text-gray-700">Stabilní obsazenost</p></div>
                <div><div className="text-5xl font-black text-emerald-600 mb-2">Top 3</div><p className="text-gray-700">Google pozice v regionu</p></div>
                <div><div className="text-5xl font-black text-emerald-600 mb-2">340%</div><p className="text-gray-700">ROI z marketingu</p></div>
              </div>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ value: "+420%", label: "Nárůst poptávek" },{ value: "12", label: "Měsíců do stability" },{ value: "95%", label: "Spokojenost klientů" },{ value: "24/7", label: "Online viditelnost" }].map((metric, i) => (
              <motion.div key={i} whileHover={{ y: -8, scale: 1.05 }} className="p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-black transition-all cursor-pointer text-center">
                <div className="text-4xl font-black mb-2">{metric.value}</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* PŘÍSTUP */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-6">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="mb-20">
            <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-gray-500 mb-8">MŮJ PŘÍSTUP</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 max-w-3xl">Marketing jako systém, ne náhoda</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Calendar className="w-8 h-8" />, title: "Dlouhodobý systém", desc: "Ne jednorázové kampaně, ale konzistentní práce měsíc po měsíci. Budujeme fundament, ne zázraky.", gradient: "from-blue-500 to-blue-600" },
              { icon: <BarChart3 className="w-8 h-8" />, title: "Řízený daty", desc: "Každé rozhodnutí podložené čísly. Víme, co funguje a proč. Optimalizujeme na základě výsledků.", gradient: "from-purple-500 to-purple-600" },
              { icon: <Users className="w-8 h-8" />, title: "Stabilní přísun zákazníků", desc: "Cílem není virálnost, ale prediktabilní růst. Firma musí vědět, kolik zákazníků přijde příští měsíc.", gradient: "from-emerald-500 to-emerald-600" }
            ].map((principle, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }} whileHover={{ y: -8 }} className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-all group cursor-pointer">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${principle.gradient} text-white mb-6 group-hover:scale-110 transition-transform`}>{principle.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="mt-20 max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-light text-center leading-relaxed text-gray-700">
              "Marketing vnímám jako <span className="font-bold text-black">nástroj růstu firmy</span>, ne jako samostatnou položku v rozpočtu. Když je nastavený správně, přináší výsledky <span className="font-bold text-black">dlouhodobě</span>."
            </blockquote>
          </motion.div>
        </div>
      </section>


      {/* CTA */}
      <section className="px-6 py-32 bg-black text-white">
        <div className="container mx-auto max-w-7xl text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-10 leading-tight max-w-4xl mx-auto">
              Chcete marketing jako<br />
              <span className="italic font-light text-white/60">nástroj firemního růstu?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">Marketing nevnímám jako jednorázovou položku v rozpočtu, ale jako investici s návratností. Pokud je nastavený správně, přináší výsledky dlouhodobě. Rád s vámi proberu možnosti pro váš byznys.</p>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-12 py-5 bg-white text-black rounded-full font-bold text-lg inline-flex items-center gap-3 hover:bg-gray-100 transition-colors">
              PROMLUVIT O STRATEGII<ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

    </main>
  );
}