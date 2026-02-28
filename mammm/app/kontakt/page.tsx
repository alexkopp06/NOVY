"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Check, 
  Sparkles, 
  Zap, 
  LayoutTemplate, 
  MessageSquare, 
  ArrowUpRight,
  MoveRight,
  Loader2
} from "lucide-react";

const services = [
  { id: "automation", title: "AI Automatizace", desc: "Autonomní systémy a boti.", icon: <Zap className="w-6 h-6 text-yellow-500" /> },
  { id: "web", title: "Web & Design", desc: "Design, který prodává.", icon: <LayoutTemplate className="w-6 h-6 text-purple-500" /> },
  { id: "audit", title: "Audit Procesů", desc: "Hledání úspor a efektivity.", icon: <Sparkles className="w-6 h-6 text-blue-500" /> },
  { id: "consulting", title: "Konzultace", desc: "Strategické poradenství.", icon: <MessageSquare className="w-6 h-6 text-pink-500" /> },
];

const clients = ["STRIPE", "REVOLUT", "NOTION", "OPENAI", "LINEAR", "SHOPIFY", "FIGMA"];

export default function KontaktPageUltimate() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({ projectType: "", name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNextStep = (dataToUpdate) => {
    setFormData({ ...formData, ...dataToUpdate });
    setCurrentStep(currentStep + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    setCurrentStep(4);
  };

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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-slate-50 mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Available for new projects</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
              LET'S BUILD <br />
              <span className="text-blue-600">
                THE IMPOSSIBLE.
              </span>
            </h1>
            
            <p className="text-xl text-slate-500 font-medium max-w-lg leading-relaxed mb-10">
              Máte vizi? Já mám technologii. Spojme to dohromady a vytvořme něco, co změní pravidla hry ve vašem oboru.
            </p>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i+10}`} alt="Client" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-yellow-400 text-sm">★★★★★</div>
                <p className="text-sm font-bold text-slate-700">Trusted by 50+ founders</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 relative w-full aspect-square md:aspect-video lg:aspect-square max-h-[600px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-slate-50 rounded-[3rem] overflow-hidden border-2 border-slate-900 shadow-[16px_16px_0px_0px_rgba(15,23,42,1)] group">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                alt="Michal Kraus Office"
              />
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/50 shadow-lg">
                <p className="font-bold text-slate-900">Michal Kraus</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest">AI & Process Architect</p>
              </div>
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
          {[...clients, ...clients, ...clients].map((client, i) => (
            <span key={i} className="text-4xl font-black text-slate-200 select-none tracking-tighter">{client}</span>
          ))}
        </motion.div>
      </div>

      {/* FORM */}
      <section className="py-32 container mx-auto px-6 relative" id="formular">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] -z-10" />
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Start your project</h2>
              <p className="text-slate-500 text-lg">Krok {currentStep < 4 ? currentStep : 3} z 3</p>
            </div>
            <div className="w-full md:w-1/3 h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
              <motion.div className="h-full bg-slate-900" initial={{ width: "33%" }} animate={{ width: currentStep === 4 ? "100%" : `${(currentStep / 3) * 100}%` }} transition={{ duration: 0.5, ease: "circOut" }} />
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-[0px_20px_40px_-10px_rgba(0,0,0,0.08)] p-8 md:p-16 relative overflow-hidden">
            <AnimatePresence mode="wait">
              
              {currentStep === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }}>
                  <h3 className="text-2xl font-bold mb-8">O jaký typ spolupráce jde?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((s) => (
                      <button key={s.id} onClick={() => handleNextStep({ projectType: s.id })} className="group text-left p-6 rounded-full border-2 border-slate-100 hover:border-slate-900 hover:bg-slate-50 transition-all duration-300 flex items-start gap-4 active:scale-[0.98]">
                        <div className="p-3 bg-white rounded-full shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">{s.icon}</div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <h4 className="font-bold text-lg">{s.title}</h4>
                            <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-slate-900 transition-colors" />
                          </div>
                          <p className="text-sm text-slate-500 font-medium">{s.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }}>
                  <h3 className="text-2xl font-bold mb-8">Řekněte mi o tom víc.</h3>
                  <div className="relative">
                    <textarea autoFocus rows={6} placeholder="Co vás trápí? Jaký je cíl? Kdy chcete začít?" className="w-full p-6 bg-slate-50 border-2 border-slate-100 rounded-2xl text-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all resize-none placeholder:text-slate-400" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
                    <div className="absolute bottom-4 right-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Private & Secure</div>
                  </div>
                  <div className="flex justify-between items-center mt-8">
                    <button onClick={() => setCurrentStep(1)} className="font-bold text-slate-400 hover:text-slate-900 transition-colors">Zpět</button>
                    <NextButton onClick={() => handleNextStep({})} disabled={!formData.message} />
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }}>
                  <h3 className="text-2xl font-bold mb-8">Kam mám poslat návrh řešení?</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-2">Jméno</label>
                        <input type="text" placeholder="Jan Novák" required className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-full font-medium focus:outline-none focus:border-blue-500 focus:bg-white transition-all" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-2">Email</label>
                        <input type="email" placeholder="jan@firma.cz" required className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-full font-medium focus:outline-none focus:border-blue-500 focus:bg-white transition-all" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-8 border-t border-slate-100">
                      <button type="button" onClick={() => setCurrentStep(2)} className="font-bold text-slate-400 hover:text-slate-900 transition-colors">Zpět</button>
                      <button type="submit" disabled={isSubmitting || !formData.email || !formData.name} className="group relative px-8 py-4 bg-slate-900 text-white font-bold text-lg rounded-full overflow-hidden transition-all hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 active:scale-[0.98] flex items-center gap-3">
                        {isSubmitting ? (<>Odesílám <Loader2 className="animate-spin w-5 h-5" /></>) : (<>Odeslat Poptávku <ArrowRight className="group-hover:translate-x-1 transition-transform" /></>)}
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {currentStep === 4 && isSuccess && (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce"><Check className="w-10 h-10" /></div>
                  <h3 className="text-4xl font-black tracking-tight mb-4">Máme to!</h3>
                  <p className="text-xl text-slate-600 font-medium mb-8 max-w-md mx-auto leading-relaxed">Díky za důvěru. Podívám se na to a ozvu se vám co nejdříve (obvykle do 24 hodin).</p>
                  <button onClick={() => {setCurrentStep(1); setFormData({ projectType: "", name: "", email: "", message: "" }); setIsSuccess(false)}} className="px-6 py-3 rounded-full border-2 border-slate-200 font-bold hover:border-slate-900 hover:bg-slate-50 transition-all">Mám další projekt</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-black tracking-tighter">Inside the Studio</h2>
          <a href="https://instagram.com" target="_blank" className="font-bold underline decoration-2 underline-offset-4 hover:text-blue-600 transition-colors">Follow on Instagram</a>
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

      {/* FOOTER CTA */}
      <section className="py-20 bg-slate-950 text-white text-center">
        <p className="text-slate-500 text-sm uppercase tracking-widest mb-6">Preferujete email?</p>
        <a href="mailto:michal@kraus.ai" className="text-3xl md:text-5xl font-black hover:text-blue-500 transition-colors">michal@kraus.ai</a>
      </section>

    </main>
  );
}

const NextButton = ({ onClick, disabled }) => (
  <button onClick={onClick} disabled={disabled} className="group px-8 py-4 bg-slate-900 text-white font-bold text-lg rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] flex items-center gap-3 hover:bg-blue-600 shadow-lg hover:shadow-blue-500/20">
    Pokračovat <MoveRight className="group-hover:translate-x-1 transition-transform" />
  </button>
)