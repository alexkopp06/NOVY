"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  TrendingUp, 
  Users, 
  Zap,
  Calendar,
  Award,
  Target,
  BarChart3,
  Sparkles
} from "lucide-react";

export default function ReferencePage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  const projects = [
    {
      id: 1,
      category: "fighting",
      title: "AMAP Fighting",
      subtitle: "Galavečery bojových sportů",
      description: "Od prvního nápadu přes produkci akcí, marketing až po budování značky. Každá akce naučila pracovat s lidmi, tlakem na výsledek a silným příběhem.",
      metrics: [
        { label: "Návštěvníků", value: "2000+", icon: <Users className="w-4 h-4" /> },
        { label: "Akcí", value: "15+", icon: <Calendar className="w-4 h-4" /> },
        { label: "Zápasníků", value: "200+", icon: <Award className="w-4 h-4" /> }
      ],
      color: "from-red-600 to-orange-600",
      image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2070&auto=format&fit=crop",
      size: "large"
    },
    {
      id: 2,
      category: "development",
      title: "Fight Match",
      subtitle: "Platforma pro bojové sporty",
      description: "Vlastní aplikace propojující svět bojových sportů. Řeší reálný problém s hledáním soupeřů a zápasů. Od nápadu po funkční platformu.",
      metrics: [
        { label: "Aktivních uživatelů", value: "500+", icon: <Users className="w-4 h-4" /> },
        { label: "Matchů", value: "150+", icon: <Target className="w-4 h-4" /> },
        { label: "Zemí", value: "12", icon: <TrendingUp className="w-4 h-4" /> }
      ],
      color: "from-blue-600 to-purple-600",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop",
      size: "large"
    },
    {
      id: 3,
      category: "marketing",
      title: "Hotel Marketing",
      subtitle: "15% → 95% obsazenost",
      description: "Z málo známého místa se stal hotel s pravidelnými poptávkami a stabilní obsazeností. Dlouhodobý systematický marketing.",
      metrics: [
        { label: "Obsazenost", value: "95%", icon: <TrendingUp className="w-4 h-4" /> },
        { label: "ROI", value: "340%", icon: <BarChart3 className="w-4 h-4" /> },
        { label: "Měsíců", value: "12", icon: <Calendar className="w-4 h-4" /> }
      ],
      color: "from-emerald-600 to-teal-600",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      size: "medium"
    },
    {
      id: 4,
      category: "ai",
      title: "AI Automatizace",
      subtitle: "Firemní procesy",
      description: "Úspora 20h týdně díky chytrému zpracování dokumentů, e-mailů a automatizaci reportingu.",
      metrics: [
        { label: "Ušetřeno", value: "20h/týden", icon: <Zap className="w-4 h-4" /> },
        { label: "Procesů", value: "12", icon: <Target className="w-4 h-4" /> },
        { label: "Chybovost", value: "-95%", icon: <TrendingUp className="w-4 h-4" /> }
      ],
      color: "from-purple-600 to-pink-600",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      size: "medium"
    },
    {
      id: 5,
      category: "development",
      title: "CRM na míru",
      subtitle: "Interní systém",
      description: "Custom CRM řešení přesně podle firemních procesů. Žádné kompromisy hotových řešení.",
      metrics: [
        { label: "Uživatelů", value: "50+", icon: <Users className="w-4 h-4" /> },
        { label: "Modulů", value: "8", icon: <Target className="w-4 h-4" /> },
        { label: "Rychlejší", value: "3x", icon: <Zap className="w-4 h-4" /> }
      ],
      color: "from-indigo-600 to-blue-600",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop",
      size: "small"
    },
    {
      id: 6,
      category: "marketing",
      title: "E-commerce Growth",
      subtitle: "Digital marketing",
      description: "Kompletní marketingová strategie pro růst online obchodu. Od contentu po PPC kampaně.",
      metrics: [
        { label: "Růst", value: "+180%", icon: <TrendingUp className="w-4 h-4" /> },
        { label: "ROAS", value: "5.2x", icon: <BarChart3 className="w-4 h-4" /> },
        { label: "Měsíců", value: "8", icon: <Calendar className="w-4 h-4" /> }
      ],
      color: "from-orange-600 to-red-600",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
      size: "small"
    }
  ];

  const filters = [
    { id: "all", label: "Vše", count: projects.length },
    { id: "fighting", label: "Fighting Sports", count: projects.filter(p => p.category === "fighting").length },
    { id: "development", label: "Vývoj", count: projects.filter(p => p.category === "development").length },
    { id: "ai", label: "AI & Automatizace", count: projects.filter(p => p.category === "ai").length },
    { id: "marketing", label: "Marketing", count: projects.filter(p => p.category === "marketing").length }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const testimonials = [
    { 
      id: 1, 
      text: "Michal nám ušetřil 20h týdně díky AI automatizaci", 
      author: "Jan Novák",
      role: "CEO, Tech Startup",
      metric: "20h/týden",
      x: 8,
      y: 12
    },
    { 
      id: 2, 
      text: "Nejlepší investice do marketingu, jakou jsme udělali", 
      author: "Eva Svobodová",
      role: "Majitelka hotelu",
      metric: "340% ROI",
      x: 72,
      y: 8
    },
    { 
      id: 3, 
      text: "Aplikace je přesně to, co jsme potřebovali. Žádné kompromisy.", 
      author: "Martin Dvořák",
      role: "Product Owner",
      metric: "500+ users",
      x: 12,
      y: 58
    },
    { 
      id: 4, 
      text: "340% ROI za půl roku. Čísla mluví jasně.", 
      author: "Petra Horáková",
      role: "E-commerce Manager",
      metric: "+180%",
      x: 75,
      y: 63
    },
    { 
      id: 5, 
      text: "Konečně CRM, který dává smysl našemu týmu", 
      author: "David Kučera",
      role: "Sales Director",
      metric: "50+ users",
      x: 42,
      y: 32
    },
    { 
      id: 6, 
      text: "Organizace galavečerů na absolutní špičce", 
      author: "Tomáš Kovář",
      role: "Partner AMAP Fighting",
      metric: "2000+ návštěvníků",
      x: 82,
      y: 38
    },
    { 
      id: 7, 
      text: "Fight Match změnil způsob, jak hledám sparingy", 
      author: "Jakub Král",
      role: "MMA Fighter",
      metric: "150+ matchů",
      x: 18,
      y: 82
    },
    { 
      id: 8, 
      text: "Marketing konečně přináší stabilní výsledky", 
      author: "Lenka Malá",
      role: "CMO",
      metric: "95% obsazenost",
      x: 58,
      y: 78
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-black">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&display=swap');
        p, a, button, li, label, small, input, textarea,
        .geist { font-family: 'Geist', sans-serif !important; }
      `}</style>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-32 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-5xl mx-auto mb-20"
          >
            <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-gray-500 mb-8">
              Reference & Portfolio
            </p>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.1]">
              Projekty s <span className="italic font-black text-blue-600">reálnými výsledky</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Ukázky práce napříč AI, vývojem aplikací, marketingem a organizací akcí. 
              <br />Vše podložené čísly a zpětnou vazbou od klientů.
            </p>
          </motion.div>

          {/* Modern Carousel Testimonials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative h-[520px] w-full rounded-3xl bg-gray-50/50 border border-gray-200 overflow-hidden flex items-center shadow-inner"
          >
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-40 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-40 pointer-events-none" />

            <motion.div
              animate={{ 
                x: selectedTestimonial !== null ? undefined : ["-50%", "0%"] 
              }}
              transition={{ 
                duration: 40, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="flex gap-6 px-6 w-max items-center relative z-30"
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => {
                const uniqueKey = `${testimonial.id}-${index}`;
                const isSelected = selectedTestimonial === testimonial.id;
                const isNotSelected = selectedTestimonial !== null && !isSelected;
                
                const colors = [
                  'from-blue-500 to-cyan-500', 'from-purple-500 to-pink-500',
                  'from-emerald-500 to-teal-500', 'from-orange-500 to-red-500',
                  'from-violet-500 to-fuchsia-500', 'from-rose-500 to-pink-500',
                  'from-indigo-500 to-blue-500', 'from-teal-500 to-emerald-500'
                ];
                const cardColor = colors[testimonial.id % colors.length];

                return (
                  <motion.div
                    key={uniqueKey}
                    layout
                    onClick={() => setSelectedTestimonial(isSelected ? null : testimonial.id)}
                    animate={{ x: isNotSelected ? "-50vw" : 0 }}
                    transition={{ duration: isNotSelected ? 150 : 0.5, ease: "linear" }}
                    className={`
                      relative cursor-pointer shrink-0 transition-all duration-500 flex flex-col
                      ${isSelected ? 'w-[420px] scale-105 z-50' : 'w-[320px] z-10'}
                      ${selectedTestimonial === null ? 'hover:scale-105' : ''}
                    `}
                  >
                    <div className={`
                      relative rounded-2xl border transition-all duration-500 overflow-hidden flex flex-col h-full
                      ${isSelected 
                        ? 'bg-white shadow-2xl border-transparent' 
                        : 'bg-white/90 border-gray-200 shadow-sm'
                      }
                    `}>
                      {isSelected && (
                        <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${cardColor}`} />
                      )}
                      
                      <div className="p-8 flex flex-col h-full">
                        <div className="text-4xl font-serif text-gray-300 leading-none mb-4">"</div>
                        <p className={`text-gray-700 font-medium transition-all duration-500 ${
                          isSelected ? 'text-base mb-6' : 'text-sm mb-4 line-clamp-3'
                        }`}>
                          {testimonial.text}
                        </p>
                        
                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 w-fit transition-all duration-500 ${
                          isSelected ? `bg-gradient-to-r ${cardColor} text-white shadow-md` : 'bg-gray-100 text-gray-700'
                        }`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : 'bg-current opacity-50'}`} />
                          <span className="text-xs font-bold">{testimonial.metric}</span>
                        </div>

                        <div className="border-t border-gray-100 pt-5 mt-auto">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${cardColor} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                              {testimonial.author.split(' ').map((n: string) => n[0]).join('')}
                            </div>
                            <div>
                              <p className="font-bold text-gray-900 text-sm">{testimonial.author}</p>
                              <p className="text-xs text-gray-500">{testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Stats below testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
          >
            {[
              { value: "2000+", label: "Návštěvníků akcí" },
              { value: "340%", label: "ROI v marketingu" },
              { value: "20h", label: "Ušetřeno týdně" },
              { value: "500+", label: "Aktivních uživatelů" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-black transition-colors">
                <div className="text-4xl font-black mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Filter Pills */}
      <section className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-black/5 px-6 py-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold text-sm whitespace-nowrap transition-all ${
                  activeFilter === filter.id
                    ? "bg-black text-white shadow-lg"
                    : "bg-black/5 text-black/60 hover:bg-black/10"
                }`}
              >
                {filter.label}
                <span className="ml-2 opacity-60">({filter.count})</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects - Bento Grid */}
      <section className="px-6 py-20">
        <div className="container mx-auto max-w-7xl">
          
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[400px]"
          >
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className={`
                  group relative overflow-hidden rounded-3xl
                  ${project.size === "large" ? "md:col-span-8 md:row-span-2" : ""}
                  ${project.size === "medium" ? "md:col-span-6 md:row-span-1" : ""}
                  ${project.size === "small" ? "md:col-span-6 md:row-span-1" : ""}
                `}
              >
                <div className="absolute inset-0">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-multiply opacity-80 group-hover:opacity-70 transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                <div className="relative h-full p-8 flex flex-col justify-between text-white">
                  
                  <div className="flex items-start justify-between">
                    <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider">
                      {project.subtitle}
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 45 }}
                      className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer"
                    >
                      <ArrowUpRight className="w-6 h-6" />
                    </motion.div>
                  </div>

                  <div>
                    <h2 className="text-4xl md:text-5xl font-black mb-3 tracking-tight">
                      {project.title}
                    </h2>
                    <p className="text-white/80 text-lg mb-6 leading-relaxed max-w-lg">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-3 gap-4">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="space-y-1">
                          <div className="flex items-center gap-2 text-white/60">
                            {metric.icon}
                            <span className="text-xs">{metric.label}</span>
                          </div>
                          <div className="text-2xl font-bold">{metric.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"
                />
              </motion.article>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
        <div className="container mx-auto max-w-7xl px-6">
          
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">Čísla z praxe</h2>
            <p className="text-white/60 text-xl">Měřitelné výsledky napříč projekty</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "2000+", label: "Návštěvníků na akcích", icon: <Users className="w-8 h-8" /> },
              { value: "15+", label: "Galavečerů AMAP Fighting", icon: <Award className="w-8 h-8" /> },
              { value: "500+", label: "Uživatelů Fight Match", icon: <Target className="w-8 h-8" /> },
              { value: "340%", label: "ROI v marketingu", icon: <TrendingUp className="w-8 h-8" /> }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center p-8 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mb-4 inline-block text-blue-400 group-hover:text-blue-300 transition-colors"
                >
                  {stat.icon}
                </motion.div>
                <div className="text-5xl md:text-6xl font-black mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop"
                  alt="Michal Kraus"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                      MK
                    </div>
                    <div>
                      <div className="font-bold text-lg">Michal Kraus</div>
                      <div className="text-sm text-gray-600">AI & Development Specialist</div>
                    </div>
                  </div>
                  <div className="flex gap-3 text-sm text-gray-600">
                    <span>🥋 AMAP Fighting</span>
                    <span>📱 Fight Match</span>
                    <span>🇫🇮 Finsko</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-8">
                O mně
              </p>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Podnikání, technologie a projekty
              </h2>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Nejvýraznější kapitolou je pro mě organizace <strong className="text-black">galavečerů bojových sportů</strong> v rámci 
                  AMAP Fighting. Od prvních nápadů přes produkci akcí, marketing až po budování značky kolem celého projektu.
                </p>
                
                <p>
                  Vedle toho jsem se pustil do vývoje vlastní aplikace <strong className="text-black">Fight Match</strong>, 
                  která propojuje svět bojových sportů a řeší reálný problém s hledáním soupeřů a zápasů.
                </p>

                <p>
                  Rád cestuji, poznávám nové kultury a způsoby fungování firem v různých zemích. 
                  Moje životní lásky jsou <strong className="text-black">indické jídlo, cestování a můj kocour Jackie Cham</strong>. 
                  Dlouhodobě mě přitahuje Finsko, kde bych se jednou rád usadil.
                </p>

                <p>
                  Všechny tyto zkušenosti se promítají do toho, jak dnes pracuji s firmami. 
                  Spojuji <strong className="text-black">byznysové myšlení, technologie, marketing a systémový přístup</strong> tak, 
                  aby projekty dávaly smysl dlouhodobě.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-10">
                <div className="p-6 bg-blue-50 rounded-2xl border-2 border-blue-100">
                  <div className="text-3xl font-black text-blue-600 mb-2">2000+</div>
                  <div className="text-sm text-gray-600">Návštěvníků akcí</div>
                </div>
                <div className="p-6 bg-purple-50 rounded-2xl border-2 border-purple-100">
                  <div className="text-3xl font-black text-purple-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Fight Match users</div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Sparkles className="w-16 h-16 mx-auto mb-8 text-blue-400" />
            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Máte projekt?<br />Pojďme o něm mluvit.
            </h2>
            <p className="text-white/60 text-xl mb-12">
              Rád s vámi proberu možnosti a navrhnu konkrétní řešení pro váš byznys.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-white text-black rounded-full font-bold text-lg inline-flex items-center gap-3 hover:bg-gray-100 transition-colors"
            >
              Konzultace zdarma
              <ArrowUpRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}