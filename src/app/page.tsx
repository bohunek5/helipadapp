"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Menu, X, Sun, Moon,
  Activity
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import PageTransition from "@/components/PageTransition";

// --- HELPERS ---
const getImagePath = (path: string) => `/helipadapp${path}`;

// --- TRANSLATIONS ---
const translations = {
  pl: {
    nav: [
      { label: "START", href: "/" },
      { label: "O NAS", href: "/about" },
      { label: "CENNIK", href: "/pricing" },
      { label: "GALERIA", href: "/gallery" },
      { label: "KONTAKT", href: "/contact" }
    ],
    status: "STATUS: AKTYWNY",
    coords_label: "WSPÓŁRZĘDNE",
    radio_label: "RADIO",
    elev_label: "ELEWACJA",
    hero_title: "HELIPAD MAZURY",
    hero_subtitle: "ZAAWANSOWANA INFRASTRUKTURA LOTNICZA",
    hero_btn: "ROZPOCZNIJ PROCEDURĘ",
    hero_specs: "DANE TECHNICZNE"
  },
  en: {
    nav: [
      { label: "HOME", href: "/" },
      { label: "ABOUT", href: "/about" },
      { label: "PRICING", href: "/pricing" },
      { label: "GALLERY", href: "/gallery" },
      { label: "CONTACT", href: "/contact" }
    ],
    status: "STATUS: ACTIVE",
    coords_label: "COORDINATES",
    radio_label: "RADIO FREQ",
    elev_label: "ELEVATION",
    hero_title: "HELIPAD MAZURY",
    hero_subtitle: "ADVANCED AVIATION INFRASTRUCTURE",
    hero_btn: "INITIATE PROCEDURE",
    hero_specs: "TECHNICAL DATA"
  },
  de: {
    nav: [
      { label: "START", href: "/" },
      { label: "ÜBER UNS", href: "/about" },
      { label: "PREISE", href: "/pricing" },
      { label: "GALERIE", href: "/gallery" },
      { label: "KONTAKT", href: "/contact" }
    ],
    status: "STATUS: AKTIV",
    coords_label: "KOORDINATEN",
    radio_label: "FUNKFREQUENZ",
    elev_label: "HÖHE",
    hero_title: "HELIPAD MASUREN",
    hero_subtitle: "FORTSCHRITTLICHE LUFTFAHRTINFRASTRUKTUR",
    hero_btn: "VERFAHREN STARTEN",
    hero_specs: "TECHNISCHE DATEN"
  }
};

export default function Home() {
  const containerRef = useRef(null);
  const [lang, setLang] = useState<"pl" | "en" | "de">("pl");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mobileMenu, setMobileMenu] = useState(false);

  // Initialize state from local storage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('lang') as "pl" | "en" | "de";
      const savedTheme = localStorage.getItem('theme') as "light" | "dark";
      if (savedLang) setLang((prev) => savedLang !== prev ? savedLang : prev);
      if (savedTheme) setTheme((prev) => savedTheme !== prev ? savedTheme : prev);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const t = translations[lang];
  const { scrollYProgress } = useScroll({ target: containerRef });
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <PageTransition>
      <main ref={containerRef} className="bg-slate-50 dark:bg-[#030712] min-h-screen font-inter transition-colors duration-500 overflow-x-hidden selection:bg-sky-500 selection:text-white">

        {/* --- HUD OVERLAY (Fixed) --- */}
        <div className="fixed inset-0 pointer-events-none z-50 mix-blend-overlay opacity-30 dark:opacity-20 hidden lg:block">
          <div className="absolute top-10 left-10 w-8 h-8 border-t-2 border-l-2 border-slate-900 dark:border-white/50" />
          <div className="absolute top-10 right-10 w-8 h-8 border-t-2 border-r-2 border-slate-900 dark:border-white/50" />
          <div className="absolute bottom-10 left-10 w-8 h-8 border-b-2 border-l-2 border-slate-900 dark:border-white/50" />
          <div className="absolute bottom-10 right-10 w-8 h-8 border-b-2 border-r-2 border-slate-900 dark:border-white/50" />
          <div className="absolute top-1/2 left-6 -translate-y-1/2 flex flex-col gap-2">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className={`h-[2px] bg-slate-900 dark:bg-white/40 ${i % 5 === 0 ? 'w-6' : 'w-3'}`} />
            ))}
          </div>
        </div>

        {/* --- NAVIGATION (Glass Tech) --- */}
        <nav className="fixed top-0 w-full z-[100] px-6 py-4 flex justify-between items-center backdrop-blur-md bg-white/70 dark:bg-[#030712]/70 border-b border-slate-200 dark:border-white/10">
          <div className="flex items-center gap-4">
            <div className="relative w-10 h-10 bg-sky-600 rounded flex items-center justify-center shadow-[0_0_15px_rgba(14,165,233,0.5)]">
              <span className="font-space font-bold text-white tracking-tighter">HM</span>
            </div>
            <div className="hidden md:flex flex-col">
              <span className="font-space font-bold text-sm tracking-[0.2em] text-slate-900 dark:text-white leading-none">HELIPAD</span>
              <span className="font-mono text-[10px] text-sky-600 dark:text-sky-400 tracking-widest">EPGH SYSTEM</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-1 bg-slate-100 dark:bg-white/5 p-1 rounded-lg border border-slate-200 dark:border-white/10">
            {t.nav.map((item, i) => (
              <Link key={i} href={item.href}
                className="px-5 py-2 text-[10px] font-space font-bold tracking-widest text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-white/10 rounded transition-all">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="p-2 text-slate-500 dark:text-slate-400 hover:text-sky-600 transition-colors">
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <div className="h-6 w-[1px] bg-slate-300 dark:bg-white/20" />
            <button onClick={() => setLang(lang === 'pl' ? 'en' : 'pl')} className="font-mono text-xs font-bold text-slate-900 dark:text-white uppercase">
              {lang}
            </button>
            <button onClick={() => setMobileMenu(true)} className="lg:hidden p-2 text-slate-900 dark:text-white">
              <Menu size={24} />
            </button>
            <Link href="/contact" className="hidden md:flex items-center gap-2 px-6 py-2 bg-slate-900 dark:bg-white text-white dark:text-black font-space font-bold text-xs tracking-widest uppercase hover:bg-sky-600 dark:hover:bg-sky-400 transition-colors">
              <span>{lang === 'pl' ? 'REZERWUJ' : 'BOOK'}</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </Link>
          </div>
        </nav>

        {/* --- MOBILE MENU --- */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="fixed inset-0 z-[200] bg-white dark:bg-[#0b0f19] flex flex-col p-8">
              <div className="flex justify-between items-center mb-12">
                <span className="font-space font-bold text-2xl dark:text-white">MENU</span>
                <button onClick={() => setMobileMenu(false)}><X size={32} className="dark:text-white" /></button>
              </div>
              <div className="flex flex-col gap-6">
                {t.nav.map((item, i) => (
                  <Link key={i} href={item.href} onClick={() => setMobileMenu(false)} className="text-4xl font-space font-bold text-slate-900 dark:text-white/80 hover:text-sky-500 uppercase tracking-tight">
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- HERO (HUD COCKPIT) --- */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Parallax Background */}
          <motion.div style={{ y: yParallax }} className="absolute inset-0 z-0">
            <Image src={getImagePath("/images/real_aerial.jpg")} alt="Aerial View" fill className="object-cover opacity-90 dark:opacity-60 saturate-0 dark:saturate-[0.2] contrast-125 transition-all duration-700" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-[#030712] via-slate-50/50 dark:via-[#030712]/50 to-transparent" />
          </motion.div>

          {/* HUD Elements */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/20 rounded-full opacity-20 animate-[spin_60s_linear_infinite]" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-dashed border-sky-500/30 rounded-full opacity-30 animate-[spin_40s_linear_infinite_reverse]" />
          </div>

          {/* Content */}
          <div className="relative z-20 text-center max-w-5xl px-6 mt-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-sky-500/10 border border-sky-500/30 text-sky-600 dark:text-sky-400 mb-8 backdrop-blur-sm">
              <Activity size={14} className="animate-pulse" />
              <span className="font-mono text-xs font-bold tracking-widest">{t.status}</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="text-5xl md:text-9xl font-space font-black text-slate-900 dark:text-white tracking-tighter leading-[0.85] mb-8 uppercase mix-blend-hard-light dark:mix-blend-normal">
              HELIPAD <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-400">MAZURY</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="font-mono text-slate-600 dark:text-slate-400 text-sm md:text-lg tracking-[0.2em] mb-12 uppercase">
              {t.hero_subtitle} <span className="text-sky-500 mx-2">{"//"}</span> EPGH
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/procedure" className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-black font-space font-bold tracking-widest hover:bg-sky-600 dark:hover:bg-sky-400 transition-all clip-path-polygon">
                {t.hero_btn}
              </Link>
              <Link href="/specs" className="px-8 py-4 border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white font-space font-bold tracking-widest hover:bg-white/10 backdrop-blur-sm transition-all">
                {t.hero_specs}
              </Link>
            </motion.div>
          </div>

          {/* Bottom Data Ticker */}
          <div className="absolute bottom-10 left-0 w-full border-t border-slate-200 dark:border-white/10 py-4 overflow-hidden bg-white/50 dark:bg-black/50 backdrop-blur-md">
            <div className="flex justify-center gap-12 font-mono text-[10px] text-slate-500 dark:text-slate-400 tracking-widest uppercase animate-pulse-slow">
              <span>LAT: 54°02&apos;05&quot;N</span>
              <span>LON: 21°47&apos;59&quot;E</span>
              <span>ALT: 406 FT</span>
              <span>RADIO: 118.775 MHz</span>
            </div>
          </div>
        </section>

        {/* --- TEASER: BENTO GRID SPECS (Modified for Teaser) --- */}
        <section className="py-20 px-6 border-b border-slate-100 dark:border-white/5">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-space font-bold text-slate-900 dark:text-white">DANE TECHNICZNE</h2>
              <p className="font-mono text-xs text-slate-500 mt-2">PEŁNA SPECYFIKACJA LĄDOWISKA I WARUNKI OPERACYJNE</p>
            </div>
            <Link href="/specs" className="px-6 py-3 border border-slate-200 dark:border-white/10 rounded-full hover:bg-sky-500 hover:text-white transition-all text-sm font-bold font-space">
              ZOBACZ WIĘCEJ &rarr;
            </Link>
          </div>
        </section>

      </main>
    </PageTransition>
  );
}
