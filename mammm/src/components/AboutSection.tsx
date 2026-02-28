"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const AboutSection = () => {
  // Prémiová easing křivka pro texty vpravo
  const customEasing = [0.22, 1, 0.36, 1];

  return (
    <section className="relative w-full bg-white text-slate-900 overflow-hidden font-sans">
      {/* Static Background Text (PŮVODNÍ) */}
      <div className="absolute left-0 top-0 bottom-0 w-full pointer-events-none select-none overflow-hidden opacity-[0.02]">
        <div
          className="text-[20rem] lg:text-[30rem] font-black text-black whitespace-nowrap absolute top-1/2 -translate-y-1/2 left-0"
          style={{ writingMode: "vertical-lr" }}
        >
          MICHAL KRAUS
        </div>
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* ============================================ */}
        {/* LEFT SIDE - Image (VRÁCENO DO PŮVODNÍHO STAVU) */}
        {/* ============================================ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          // Tady je ta původní třída, která zajistí správnou výšku:
          className="relative h-[500px] lg:h-auto min-h-[600px]"
        >
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
              alt="Michal Kraus"
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
              // Původní styly obrázku
              className="w-full h-full object-cover grayscale contrast-125"
            />
            {/* Původní gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-white" />
          </div>

          {/* Původní karta se jménem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute bottom-8 left-8 right-8 lg:bottom-auto lg:top-12 lg:right-12 lg:left-auto lg:max-w-xs p-6 bg-white/90 backdrop-blur-md border border-neutral-200 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              <div className="font-black text-xl text-black">Michal Kraus</div>
              <div className="text-sm text-neutral-600 font-medium tracking-wide">
                Business & Technology Partner
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ============================================ */}
        {/* RIGHT SIDE - Scrolling Editorial Content (NOVÝ STYL) */}
        {/* ============================================ */}
        <div className="relative flex items-center px-8 md:px-16 lg:px-24 py-20 lg:py-32">
          <div className="max-w-2xl w-full">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: customEasing }}
            >
              <div className="text-xs uppercase tracking-[0.3em] mb-6 text-blue-600 font-bold">
                Jak vám pomohu
              </div>

              {/* H2 */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-[0.95] mb-12">
                Přináším řád do <br />
                chaosu a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">výsledky</span><br />
                místo dojmů.
              </h2>
            </motion.div>

            <div className="space-y-16">
              
              {/* Perex */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: customEasing }}
                className="text-xl md:text-2xl leading-relaxed text-slate-700 font-light"
              >
                <p>
                  Každá firma funguje jinak. Přestože většina využívá podobné nástroje a systémy, procesy má každý nastavené po svém. <strong className="font-bold text-slate-900">Proto stavím automatizace na míru, nikoliv krabicové šablony.</strong>
                </p>
                <p className="mt-6 text-lg text-slate-500">
                  Vždy se nejdříve potkáme, pobavíme se o tom, co vás trápí nejvíc, a pak teprve začínáme tvořit řešení na míru. Někdy začíná spolupráce školením, jindy konzultací nad konkrétními procesy a u některých firem rovnou automatizací, která přinese rychlé výsledky. Vždy ale podle toho, co dává největší smysl právě vám.
                </p>
              </motion.div>

              {/* Automatizace na míru - SEZNAM SE ŠIPKAMI */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: customEasing }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight">Automatizace na míru</h3>
                <p className="text-lg text-slate-500 font-light leading-relaxed mb-8">
                  Pokud děláte určitou činnost, která se opakuje, více než dvakrát týdně, dokážu ji zautomatizovat:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 mb-8">
                  {[
                    "Zpracování poptávek a nabídek",
                    "Lead generation a obohacování",
                    "E-mailové sekvence a třídění",
                    "Fakturace a interní reporty",
                    "Onboarding klientů",
                    "Synchronizace dat a CRM"
                  ].map((item, i) => (
                    <div 
                      key={i} 
                      className="group flex items-start gap-4 cursor-default py-2"
                    >
                      <span className="text-blue-600 font-light text-xl mt-[-2px] transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:text-slate-900">
                        →
                      </span>
                      <span className="text-lg text-slate-600 font-medium transition-colors duration-300 group-hover:text-slate-900">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                
                <p className="text-lg text-slate-500 font-light leading-relaxed">
                  A to je jen zlomek toho, co lze vyřešit. Pracuji s těmi nejmodernějšími nástroji, díky kterým vám ušetřím klidně desítky hodin měsíčně.
                </p>
              </motion.div>

              {/* AI Školení na míru */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: customEasing }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight">AI školení na míru</h3>
                <p className="text-lg text-slate-500 font-light leading-relaxed">
                  Nejdřív se podívám na to, jak váš tým skutečně pracuje. Analyzuji vaše procesy, používané nástroje i typické denní úkoly. Zjistím, kde se zbytečně ztrácí čas, kde se opakují rutinní činnosti a kde by šla práce zjednodušit. Dostanu konkrétní scénáře z vaší firmy a připravím školení, které může zahrnovat návod, jak si zjednodušit obchodní i marketingové činnosti, administrativní úkony nebo reportování aniž by člověk strávil hodiny nad daty. 

                </p>
              </motion.div>

            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: customEasing }}
              className="mt-16"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-slate-900 text-white rounded-full font-bold text-lg inline-flex items-center gap-3 hover:bg-blue-600 transition-colors duration-300 shadow-lg"
              >
                PROZKOUMAT SLUŽBY
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};