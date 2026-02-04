"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Radio,
  Layers, Menu, X, Sun, Moon, Target, Wind,
  Activity, ShieldCheck
} from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

// --- HELPERS ---
const getImagePath = (path: string) => `/helipadapp${path}`;

// --- TRANSLATIONS ---
const translations = {
  pl: {
    nav: ["START", "O NAS", "CENNIK", "GALERIA", "KONTAKT"],
    status: "STATUS: AKTYWNY",
    coords_label: "WSPÓŁRZĘDNE",
    radio_label: "RADIO",
    elev_label: "ELEWACJA",
    hero_title: "HELIPAD MAZURY",
    hero_subtitle: "ZAAWANSOWANA INFRASTRUKTURA LOTNICZA",
    hero_btn: "ROZPOCZNIJ PROCEDURĘ",
    hero_specs: "DANE TECHNICZNE",
    pricing_title: "MODUŁY OPERACYJNE",
    contact_title: "KANAŁ KOMUNIKACJI",
    footer_desc: "24/7 GOTOWOŚĆ OPERACYJNA"
  },
  en: {
    nav: ["HOME", "ABOUT", "PRICING", "GALLERY", "CONTACT"],
    status: "STATUS: ACTIVE",
    coords_label: "COORDINATES",
    radio_label: "RADIO FREQ",
    elev_label: "ELEVATION",
    hero_title: "HELIPAD MAZURY",
    hero_subtitle: "ADVANCED AVIATION INFRASTRUCTURE",
    hero_btn: "INITIATE PROCEDURE",
    hero_specs: "TECHNICAL DATA",
    pricing_title: "OPERATIONAL MODULES",
    contact_title: "COMM LINK",
    footer_desc: "24/7 OPERATIONAL READINESS"
  },
  de: {
    nav: ["START", "ÜBER UNS", "PREISE", "GALERIE", "KONTAKT"],
    status: "STATUS: AKTIV",
    coords_label: "KOORDINATEN",
    radio_label: "FUNKFREQUENZ",
    elev_label: "HÖHE",
    hero_title: "HELIPAD MASUREN",
    hero_subtitle: "FORTSCHRITTLICHE LUFTFAHRTINFRASTRUKTUR",
    hero_btn: "VERFAHREN STARTEN",
    hero_specs: "TECHNISCHE DATEN",
    pricing_title: "BETRIEBSMODULE",
    contact_title: "KOMMUNIKATIONSKANAL",
    footer_desc: "24/7 EINSATZBEREITSCHAFT"
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
      // eslint-disable-next-line react-hooks/set-state-in-effect
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
            <a key={i} href={`#${["home", "about", "services", "gallery", "contact"][i]}`}
              className="px-5 py-2 text-[10px] font-space font-bold tracking-widest text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-white/10 rounded transition-all">
              {item}
            </a>
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
          <a href="#contact" className="hidden md:flex items-center gap-2 px-6 py-2 bg-slate-900 dark:bg-white text-white dark:text-black font-space font-bold text-xs tracking-widest uppercase hover:bg-sky-600 dark:hover:bg-sky-400 transition-colors">
            <span>{lang === 'pl' ? 'REZERWUJ' : 'BOOK'}</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </a>
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
                <a key={i} href={`#${["home", "about", "services", "gallery", "contact"][i]}`} onClick={() => setMobileMenu(false)} className="text-4xl font-space font-bold text-slate-900 dark:text-white/80 hover:text-sky-500 uppercase tracking-tight">
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO (HUD COCKPIT) --- */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
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
            <a href="#contact" className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-black font-space font-bold tracking-widest hover:bg-sky-600 dark:hover:bg-sky-400 transition-all clip-path-polygon">
              {t.hero_btn}
            </a>
            <a href="#about" className="px-8 py-4 border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white font-space font-bold tracking-widest hover:bg-white/10 backdrop-blur-sm transition-all">
              {t.hero_specs}
            </a>
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

      {/* --- BENTO GRID: SPECS --- */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16 border-b border-slate-200 dark:border-white/10 pb-6">
            <h2 className="text-4xl md:text-6xl font-space font-bold text-slate-900 dark:text-white tracking-tighter">DATA <span className="text-sky-500">LOGS</span></h2>
            <span className="font-mono text-slate-400 text-xs hidden sm:block">SYS.VER.2.0.26</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 h-auto md:h-[600px]">
            {/* Main Map Card */}
            <div className="md:col-span-2 md:row-span-2 relative group rounded-3xl overflow-hidden bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-white/10 shadow-xl">
              <Image src={getImagePath("/images/real_heli_landing.jpg")} alt="Map" fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="text-sky-500 animate-spin-slow" />
                  <span className="font-mono text-xs text-sky-400">{t.coords_label}</span>
                </div>
                <p className="font-space text-3xl text-white font-bold">54°02&apos;05&quot;N <br /> 21°47&apos;59&quot;E</p>
              </div>
            </div>

            {/* Radio Frequency */}
            <div className="bg-sky-600 dark:bg-sky-900 rounded-3xl p-8 flex flex-col justify-between text-white relative overflow-hidden group">
              <Radio size={40} className="opacity-50" />
              <div className="absolute -right-10 -top-10 w-40 h-40 border-[20px] border-white/10 rounded-full" />
              <div>
                <span className="font-mono text-xs opacity-70 tracking-widest">{t.radio_label}</span>
                <p className="font-space text-4xl font-bold mt-2">118.775</p>
                <span className="font-mono text-sm opacity-60">MHz</span>
              </div>
            </div>

            {/* Elevation */}
            <div className="bg-slate-100 dark:bg-[#111624] border border-slate-200 dark:border-white/5 rounded-3xl p-8 flex flex-col justify-between">
              <Layers size={40} className="text-slate-400" />
              <div>
                <span className="font-mono text-xs text-slate-500 tracking-widest">{t.elev_label}</span>
                <p className="font-space text-4xl font-bold text-slate-900 dark:text-white mt-1">406 <span className="text-lg text-slate-400">FT</span></p>
              </div>
            </div>

            {/* Status / Weather */}
            <div className="bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-white/10 rounded-3xl p-8 md:col-span-2 flex items-center justify-between">
              <div className="flex gap-6 items-center">
                <div className="p-4 bg-sky-500/10 rounded-2xl text-sky-600">
                  <Wind size={32} />
                </div>
                <div>
                  <p className="font-mono text-xs text-slate-400 mb-1">METAR (SIM)</p>
                  <p className="font-space text-2xl font-bold text-slate-900 dark:text-white">WIND 270 / 12KT</p>
                </div>
              </div>
              <div className="h-full w-[1px] bg-slate-100 dark:bg-white/5 mx-6 hidden sm:block" />
              <div className="hidden sm:block">
                <p className="font-mono text-xs text-slate-400 mb-1">VISIBILITY</p>
                <p className="font-space text-2xl font-bold text-slate-900 dark:text-white">CAVOK</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES (HOLOGRAPHIC CARDS) --- */}
      <section id="services" className="py-32 bg-slate-100 dark:bg-[#050912] border-y border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <span className="font-mono text-sky-600 dark:text-sky-500 text-xs tracking-[0.5em]">{t.pricing_title}</span>
            <h2 className="text-5xl md:text-7xl font-space font-black text-slate-900 dark:text-white mt-4 tracking-tighter uppercase">OPERATIONS</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: lang === 'pl' ? "LĄDOWANIE DZIEŃ" : "DAY LANDING", price: "100", icon: <Sun /> },
              { title: lang === 'pl' ? "LĄDOWANIE NOC" : "NIGHT LANDING", price: "200", icon: <Moon />, highlight: true },
              { title: lang === 'pl' ? "HANGAROWANIE" : "HANGARAGE", price: "200", icon: <ShieldCheck /> }
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className={`relative p-10 rounded-[40px] border backdrop-blur-sm transition-all overflow-hidden group ${item.highlight ? 'bg-sky-600 dark:bg-sky-900 border-sky-500 text-white shadow-2xl shadow-sky-500/20' : 'bg-white/80 dark:bg-white/5 border-slate-200 dark:border-white/10 hover:border-sky-500/50'}`}>
                {item.highlight && <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />}
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-10 ${item.highlight ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white'}`}>
                    {item.icon}
                  </div>
                  <h3 className={`font-mono text-sm tracking-widest mb-4 opacity-70 ${item.highlight ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`}>{item.title}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-6xl font-space font-bold tracking-tighter ${item.highlight ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{item.price}</span>
                    <span className="font-mono text-sm opacity-60">PLN</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FLEET/HANGAR (VISUAL DB) --- */}
      <section id="gallery" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <span className="font-mono text-xs text-sky-500 tracking-widest mb-4 block">DATABASE // ASSETS</span>
              <h2 className="text-5xl font-space font-black text-slate-900 dark:text-white mb-8 tracking-tighter">INFRASTRUKTURA<br />PRZYSZŁOŚCI</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-mono text-sm md:text-base">
                Dostęp do hangarów ogrzewanych, monitoringu 24/7 i pełnego wsparcia technicznego. Twój statek powietrzny w najbezpieczniejszym miejscu na Mazurach.
              </p>
              <div className="mt-12 grid grid-cols-2 gap-4">
                <div className="p-6 border border-slate-200 dark:border-white/10 rounded-2xl">
                  <h4 className="text-2xl font-space font-bold text-slate-900 dark:text-white">25m</h4>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Wymiary FATO</span>
                </div>
                <div className="p-6 border border-slate-200 dark:border-white/10 rounded-2xl">
                  <h4 className="text-2xl font-space font-bold text-slate-900 dark:text-white">HDD</h4>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Nawierzchnia</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-3xl overflow-hidden group">
                <Image src={getImagePath("/images/real_fleet.jpg")} fill alt="Fleet" className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0" />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="font-mono text-[10px] text-white tracking-widest">FIG.01 // FLEET</p>
                </div>
              </div>
              <div className="relative h-64 rounded-3xl overflow-hidden group mt-12">
                <Image src={getImagePath("/images/real_hangar.jpg")} fill alt="Hangar" className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0" />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="font-mono text-[10px] text-white tracking-widest">FIG.02 // HANGAR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT (COMM LINK) --- */}
      <section id="contact" className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-50" />
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-[120px] md:text-[200px] font-space font-black text-white/5 leading-none tracking-tighter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">EPGH</h2>

          <h3 className="text-3xl font-space font-bold mb-16 uppercase tracking-widest">{t.contact_title}</h3>

          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-20">
            <a href="tel:+48607241090" className="group">
              <span className="font-mono text-xs text-slate-500 mb-2 block tracking-widest">VOICE LINK</span>
              <span className="text-3xl md:text-5xl font-space font-bold hover:text-sky-400 transition-colors">+48 607 241 090</span>
            </a>
            <a href="mailto:biuro@helipadmazury.pl" className="group">
              <span className="font-mono text-xs text-slate-500 mb-2 block tracking-widest">DATA LINK</span>
              <span className="text-2xl md:text-5xl font-space font-bold hover:text-sky-400 transition-colors">biuro@helipadmazury.pl</span>
            </a>
          </div>

          <div className="mt-20 p-1 border border-white/10 rounded-[40px] bg-white/5 backdrop-blur-xl inline-block">
            <div className="px-10 py-4 rounded-[36px] bg-slate-950 border border-white/5">
              <span className="font-mono text-xs text-slate-400 uppercase tracking-[0.2em]">{t.footer_desc}</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
