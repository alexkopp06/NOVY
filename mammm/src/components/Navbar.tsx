"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // =====================================================================
  // NASTAVENÍ SCROLLOVÁNÍ
  // =====================================================================
  useEffect(() => {
    const handleScroll = () => {
      // Když uživatel odscroluje o více než 20px, nastavíme state na true
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Přidáme listener při načtení komponenty
    window.addEventListener("scroll", handleScroll);

    // Odebereme listener při odmontování komponenty
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // =====================================================================
  // NASTAVENÍ BAREV
  // =====================================================================
  
  // Stránky s TMAVÝM pozadím (bílý text nahoře)
  const darkPages = ["/", ];
  const isDarkTheme = darkPages.includes(pathname);

  // BARVA POZADÍ PŘI SCROLLOVÁNÍ (Sjednocená pro všechny stránky)
  const scrollBgColor = "bg-white/90";

  // BARVY PRO TEXTY A IKONY
  // Když JSME nahoře a JE to dark page, text je bílý. 
  // Jinak (jsme nahoře na světlé page, NEBO jsme odscrollovali kamkoliv) je text tmavý.
  const textColor = (!isScrolled && isDarkTheme) ? "text-white" : "text-slate-900"; 
  const hoverColor = (!isScrolled && isDarkTheme) ? "hover:text-white/70" : "hover:text-blue-600";
  const hamburgerColor = (!isScrolled && isDarkTheme) ? "text-white" : "text-slate-900";

  // BARVA PRO AKTIVNÍ ODKAZ
  const activeColor = (!isScrolled && isDarkTheme) ? "text-blue-400" : "text-blue-600";
  
  // =====================================================================

  const navLinks = [
    { title: "Domů", href: "/" },
    { title: "AI školení", href: "/skoleni" },
    { title: "Automatizace", href: "/automatizace" },
    { title: "Vývoj aplikací", href: "/vyvojaplikaci" },
    { title: "Marketing", href: "/marketing" },
    { title: "O mně", href: "/reference" },
    { title: "Kontakt", href: "/kontakt", isCta: true },
  ];

  return (
    <>
      {/* 1. Desktop Menu */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 hidden md:flex items-center justify-end gap-4 transition-all duration-300 ${
          isScrolled ? `${scrollBgColor} backdrop-blur-md shadow-sm` : "bg-transparent"
        }`}
      >
        {navLinks.map((link, i) => {
          // Zjistíme, jestli je tento odkaz ten aktuální
          const isActive = pathname === link.href;

          return (
            <a
              key={i}
              href={link.href}
              className={`
                text-sm font-bold tracking-wider uppercase transition-all duration-300
                ${link.isCta 
                  ? "bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 rounded-full shadow-lg hover:shadow-blue-500/20" 
                  : `
                      decoration-2 underline-offset-8 decoration-blue-500
                      ${isActive 
                        ? `${activeColor} underline` // STYL PRO AKTIVNÍ STRÁNKU
                        : `${textColor} ${hoverColor} hover:underline` // STYL PRO OSTATNÍ
                       }
                    `
                }
              `}
            >
              {link.title}
            </a>
          );
        })}
      </nav>

      {/* 2. Mobile Menu Button */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 md:hidden flex justify-end transition-all duration-300 ${
          isScrolled ? `${scrollBgColor} backdrop-blur-md shadow-sm` : "bg-transparent"
        }`}
      >
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className={`${hamburgerColor} p-2 focus:outline-none bg-transparent transition-colors`}
        >
          <Menu className="w-8 h-8" />
        </button>
      </div>

      {/* 3. Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-slate-950/95 backdrop-blur-xl flex flex-col justify-center items-center"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-10 h-10" />
            </button>

            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                
                return (
                  <motion.a
                    key={i}
                    href={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`
                      text-3xl font-black tracking-tighter uppercase transition-colors
                      ${link.isCta 
                        ? "text-blue-500" 
                        : isActive ? "text-blue-500" : "text-white" // I v mobilu bude aktivní modrý
                      }
                    `}
                  >
                    {link.title}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}