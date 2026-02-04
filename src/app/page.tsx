"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  MapPin, Compass,
  ArrowRight, Phone, Mail,
  Radio, Navigation, Maximize, Ruler, CloudSun,
  Layers, Clock, Menu, X, Sun, Moon
} from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

// Helper for GitHub Pages
const getImagePath = (path: string) => `/helipadapp${path}`;

// --- TRANSLATIONS (i18n) ---
const translations = {
  pl: {
    nav: ["START", "O NAS", "CENNIK", "GALERIA", "KONTAKT"],
    cta: "REZERWUJ",
    hero_badge: "MAZURSKI AEROTERMINAL 2026",
    hero_title: "HELIPAD MAZURY",
    hero_title_accent: "LĄDOWISKO DLA ŚMIGŁOWCÓW",
    hero_desc: "Najbardziej zaawansowana infrastruktura lotnicza w Giżycku. Bezpośrednie połączenie i standard bezpieczeństwa jutra.",
    hero_btn: "ZAREZERWUJ SLOT",
    hero_specs: "SPECYFIKACJA EPGH",
    specs: ["ZNAK WYWOŁAWCZY", "CZĘSTOTLIWOŚĆ", "WSPÓŁRZĘDNE", "FATO", "ELEWACJA", "KIERUNKI"],
    about_title: "PIONIERZY MAZUR.",
    about_desc: "Mazury Helipad w Giżycku to profesjonalnie przygotowane lądowisko EPGH. Gwarantujemy szybki transfer i najwyższą jakość obsługi.",
    pricing_title: "NASZA OFERTA.",
    pricing_btn: "WYBIERZ TERMIN",
    booking_title: "REZERWUJ.",
    contact_title: "KONTAKT.",
    contact_address: "ul. Sybiraków 28, Giżycko",
    footer_desc: "Najbardziej zaawansowana infrastruktura dla śmigłowców w północnej Polsce. Standard roku 2026."
  },
  en: {
    nav: ["HOME", "ABOUT", "PRICE", "GALLERY", "CONTACT"],
    cta: "BOOK NOW",
    hero_badge: "MAZURY AEROTERMINAL 2026",
    hero_title: "HELIPAD MAZURY",
    hero_title_accent: "HELICOPTER LANDING",
    hero_desc: "The most advanced aviation infrastructure in Giżycko. Direct connectivity and the safety standards of tomorrow.",
    hero_btn: "RESERVE SLOT",
    hero_specs: "EPGH SPECS",
    specs: ["CALLSIGN", "FREQUENCY", "COORDINATES", "FATO", "ELEVATION", "RUNWAYS"],
    about_title: "MAZURY PIONEERS.",
    about_desc: "Mazury Helipad in Giżycko is a professionally prepared EPGH landing spot. We guarantee fast transfer and highest service quality.",
    pricing_title: "OUR OFFER.",
    pricing_btn: "SELECT SLOT",
    booking_title: "RESERVE.",
    contact_title: "CONTACT.",
    contact_address: "28 Sybiraków St, Giżycko",
    footer_desc: "The most advanced helicopter infrastructure in Northern Poland. 2026 Standard."
  },
  de: {
    nav: ["START", "ÜBER UNS", "PREISE", "GALERIE", "KONTAKT"],
    cta: "RESERVIEREN",
    hero_badge: "MASUREN AEROTERMINAL 2026",
    hero_title: "HELIPAD MASUREN",
    hero_title_accent: "HUBSCHRAUBERLANDEPLATZ",
    hero_desc: "Die fortschrittlichste Luftfahrtinfrastruktur in Lötzen. Direkte Anbindung und Sicherheitsstandards von morgen.",
    hero_btn: "SLOT BUCHEN",
    hero_specs: "EPGH SPECS",
    specs: ["RUFZEICHEN", "FREQUENZ", "KOORDINATEN", "FATO", "HÖHE", "RICHTUNG"],
    about_title: "MASUREN PIONIERE.",
    about_desc: "Mazury Helipad in Giżycko ist ein professionell vorbereiteter EPGH-Landeplatz. Wir garantieren schnellen Transfer und höchste Servicequalität.",
    pricing_title: "UNSER ANGEBOT.",
    pricing_btn: "TERMIN WÄHLEN",
    booking_title: "BUCHEN.",
    contact_title: "KONTAKT.",
    contact_address: "Sybiraków Str. 28, Lötzen",
    footer_desc: "Die fortschrittlichste Hubschrauber-Infrastruktur in Nordpolen. Standard 2026."
  }
};

export default function Home() {
  const containerRef = useRef(null);
  const [lang, setLang] = useState<"pl" | "en" | "de">(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('lang') as "pl" | "en" | "de") || "pl";
    }
    return "pl";
  });
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as "light" | "dark") || "light";
    }
    return "light";
  });
  const [mobileMenu, setMobileMenu] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const specsData = [
    { icon: <Navigation size={20} />, value: "EPGH" },
    { icon: <Radio size={20} />, value: "118.775 MHz" },
    { icon: <MapPin size={20} />, value: "54°02'05\"N 21°47'59\"E" },
    { icon: <Maximize size={20} />, value: "25 x 25 m" },
    { icon: <Ruler size={20} />, value: "406 FT" },
    { icon: <Compass size={20} />, value: "270° / 090°" },
  ];

  const pricingData = [
    { title: lang === 'pl' ? "LĄDOWANIE DZIEŃ" : lang === 'en' ? "DAY LANDING" : "TAGLANDUNG", price: "100", unit: "PLN" },
    { title: lang === 'pl' ? "LĄDOWANIE NOC" : lang === 'en' ? "NIGHT LANDING" : "NACHTLANDUNG", price: "200", unit: "PLN", highlight: true },
    { title: lang === 'pl' ? "HANGAROWANIE" : lang === 'en' ? "HANGARAGE" : "HANGARIERUNG", price: "200", unit: "PLN/D" }
  ];

  return (
    <main ref={containerRef} className="flex flex-col bg-white dark:bg-slate-950 transition-colors duration-500 overflow-x-hidden min-h-screen">

      {/* --- PREMIUM NAVBAR --- */}
      <nav className="fixed top-0 w-full z-[100] px-4 md:px-12 py-4 flex justify-between items-center frost-glass shadow-2xl border-b border-slate-200/50 dark:border-slate-800/50">
        <a href="/helipadapp/" aria-label="Helipad Mazury Home" className="flex items-center gap-4">
          <div className="relative h-12 w-32 md:w-48 transition-all hover:scale-110 active:scale-95 duration-300">
            <Image
              src={getImagePath("/images/logo_official.png")}
              alt="Helipad Mazury Logo"
              fill
              className={`object-contain transition-all duration-500 ${theme === 'light' ? 'brightness-0' : 'brightness-0 invert'}`}
            />
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-4 text-[11px] font-black tracking-widest">
          {t.nav.map((item, i) => (
            <a key={i} href={`#${["home", "about", "services", "gallery", "contact"][i]}`}
              className="px-6 py-2.5 rounded-full bg-slate-100/80 dark:bg-slate-900/80 text-sky-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-sky-600 hover:text-white hover:border-sky-600 dark:hover:bg-sky-600 dark:hover:text-white transition-all shadow-sm">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 shadow-inner">
            <button onClick={() => setLang("pl")} className={`w-8 h-8 rounded-full text-[10px] font-black transition-all ${lang === 'pl' ? 'bg-white dark:bg-slate-800 shadow-md text-sky-600' : 'text-slate-400 dark:text-slate-500 hover:text-sky-600'}`}>PL</button>
            <button onClick={() => setLang("en")} className={`w-8 h-8 rounded-full text-[10px] font-black transition-all ${lang === 'en' ? 'bg-white dark:bg-slate-800 shadow-md text-sky-600' : 'text-slate-400 dark:text-slate-500 hover:text-sky-600'}`}>EN</button>
            <button onClick={() => setLang("de")} className={`w-8 h-8 rounded-full text-[10px] font-black transition-all ${lang === 'de' ? 'bg-white dark:bg-slate-800 shadow-md text-sky-600' : 'text-slate-400 dark:text-slate-500 hover:text-sky-600'}`}>DE</button>
            <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-700 mx-1"></div>
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              aria-label="Toggle Theme"
              title="Toggle Theme"
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-slate-800 transition-all text-slate-900 dark:text-amber-400"
            >
              {theme === 'light' ? <Moon size={18} fill="currentColor" /> : <Sun size={18} fill="currentColor" />}
            </button>
          </div>

          <a href="#contact" className="hidden md:flex px-8 py-3.5 rounded-full bg-sky-600 text-white font-black text-[11px] tracking-widest hover:scale-105 hover:bg-slate-950 dark:hover:bg-white dark:hover:text-slate-950 active:scale-95 transition-all shadow-xl">
            {t.cta}
          </a>

          <button
            onClick={() => setMobileMenu(true)}
            aria-label="Open Menu"
            title="Open Menu"
            className="lg:hidden p-3 bg-sky-600 rounded-xl text-white shadow-xl hover:scale-105 active:scale-95 transition-all"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* --- MOBILE OVERLAY MENU --- */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[200] bg-white dark:bg-slate-950 flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="relative h-10 w-24">
                <Image
                  src={getImagePath("/images/logo_official.png")}
                  alt="Logo"
                  fill
                  className={`object-contain ${theme === 'light' ? 'brightness-0' : 'brightness-0 invert'}`}
                />
              </div>
              <button onClick={() => setMobileMenu(false)} className="p-3 bg-slate-100 dark:bg-slate-900 rounded-xl text-slate-950 dark:text-white border border-slate-200 dark:border-slate-800">
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-4 mb-auto">
              {t.nav.map((item, i) => (
                <a
                  key={i}
                  href={`#${["home", "about", "services", "gallery", "contact"][i]}`}
                  onClick={() => setMobileMenu(false)}
                  className="flex items-center justify-between p-6 rounded-[30px] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 group"
                >
                  <span className="text-xl font-black tracking-widest text-slate-900 dark:text-white uppercase">{item}</span>
                  <div className="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-all">
                    <ArrowRight size={20} />
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 space-y-6">
              <a
                href="#contact"
                onClick={() => setMobileMenu(false)}
                className="w-full flex items-center justify-between p-8 rounded-[40px] bg-sky-600 text-white font-black tracking-widest uppercase shadow-2xl"
              >
                {t.cta} <ArrowRight size={24} />
              </a>

              <div className="flex justify-between items-center p-6 rounded-[30px] bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="flex gap-2">
                  <button onClick={() => setLang("pl")} className={`w-10 h-10 rounded-xl font-black text-xs ${lang === 'pl' ? 'bg-sky-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-400'}`}>PL</button>
                  <button onClick={() => setLang("en")} className={`w-10 h-10 rounded-xl font-black text-xs ${lang === 'en' ? 'bg-sky-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-400'}`}>EN</button>
                  <button onClick={() => setLang("de")} className={`w-10 h-10 rounded-xl font-black text-xs ${lang === 'de' ? 'bg-sky-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-400'}`}>DE</button>
                </div>
                <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-amber-400 border border-slate-200 dark:border-slate-700">
                  {theme === 'light' ? <Moon size={20} fill="currentColor" /> : <Sun size={20} fill="currentColor" />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative h-screen w-full flex items-center justify-center pt-24 px-6 overflow-hidden">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0 z-0">
          <Image
            src={getImagePath("/images/real_aerial.jpg")}
            alt="Real Mazury Aerial"
            fill
            className="object-cover hero-mask"
            priority
          />
          <div className={`absolute inset-0 bg-gradient-to-b ${theme === 'light' ? 'from-white/60 via-transparent to-white/90' : 'from-slate-950/60 via-transparent to-slate-950'} opacity-100 transition-colors duration-700`} />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center max-w-6xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-950/60 backdrop-blur-3xl border border-white/20 mb-10 shadow-2xl animate-float">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse ring-4 ring-sky-500/30"></span>
            <span className="text-[10px] font-black tracking-[0.5em] text-white uppercase drop-shadow-md">{t.hero_badge}</span>
          </div>
          <h1 className="text-6xl md:text-[120px] font-outfit font-black tracking-tighter leading-[0.85] mb-10 text-slate-900 dark:text-white drop-shadow-2xl uppercase transition-colors duration-500">
            {t.hero_title}<br />
            <span className="gradient-text-azure">{t.hero_title_accent}</span>
          </h1>
          <p className="text-slate-800 dark:text-white text-xl md:text-3xl max-w-3xl mx-auto mb-16 font-extrabold leading-relaxed drop-shadow-2xl opacity-100 px-4 transition-colors duration-500">
            {t.hero_desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center px-4">
            <a href="#contact" className="group w-full sm:w-auto px-14 py-6 bg-sky-600 text-white font-black rounded-full shadow-2xl hover:bg-white hover:text-slate-950 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4 text-sm tracking-widest whitespace-nowrap">
              {t.hero_btn} <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </a>
            <a href="#about" className="w-full sm:w-auto px-14 py-6 bg-white/10 backdrop-blur-xl text-white border-4 border-white/40 font-black rounded-full hover:bg-white hover:text-slate-950 hover:scale-105 active:scale-95 transition-all text-sm tracking-widest uppercase">
              {t.hero_specs}
            </a>
          </div>
        </motion.div>
      </section>

      {/* --- SPECS BANNER --- */}
      <section className="py-24 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 text-center">
            {specsData.map((spec, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-3xl bg-slate-50 dark:bg-slate-800 text-sky-600 mb-6 flex items-center justify-center shadow-lg border border-slate-100 dark:border-slate-700 transition-all hover:bg-sky-600 hover:text-white hover:scale-110">
                  {spec.icon}
                </div>
                <p className="text-[11px] font-black tracking-widest text-slate-500 dark:text-slate-400 mb-2 uppercase leading-none">{t.specs[i]}</p>
                <p className="text-sm font-black text-slate-950 dark:text-white leading-tight">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-48 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="relative h-[600px] md:h-[800px] rounded-[70px] overflow-hidden shadow-2xl border-8 border-slate-50 dark:border-slate-900 bg-slate-100 dark:bg-slate-900"
          >
            <Image src={getImagePath("/images/real_heli_landing.jpg")} alt="Ops" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
            <div className="absolute bottom-12 left-12 frost-glass p-10 rounded-[40px] max-w-sm border-2 border-white/30 shadow-2xl">
              <div className="flex items-center gap-3 mb-4 text-sky-600 dark:text-sky-400 font-black text-sm uppercase tracking-[0.3em]">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_20px_rgba(34,197,94,0.8)]"></div> STATUS: OPERACYJNY
              </div>
              <p className="text-3xl font-outfit font-black text-slate-950 dark:text-white leading-tight">Serce Mazur z dostępem 24/7.</p>
            </div>
          </motion.div>

          <div>
            <span className="text-sky-600 dark:text-sky-400 font-black tracking-[0.6em] uppercase text-xs mb-10 block">O NAS</span>
            <h2 className="text-6xl md:text-9xl font-outfit font-black tracking-tighter mb-12 leading-[0.85] text-slate-950 dark:text-white uppercase">
              {t.about_title}
            </h2>
            <p className="text-slate-800 dark:text-slate-400 text-xl md:text-2xl font-extrabold leading-relaxed mb-16">
              {t.about_desc}
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
              <div className="p-10 bg-white dark:bg-slate-900 rounded-[50px] border-2 border-slate-100 dark:border-slate-800 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-2 group overflow-hidden relative">
                <Image src={getImagePath("/images/real_fleet.jpg")} alt="Fleet" fill className="object-cover opacity-0 dark:opacity-20 transition-opacity" />
                <div className="relative z-10">
                  <h4 className="font-black text-sm text-slate-950 dark:text-white uppercase mb-4 tracking-widest">{lang === 'pl' ? 'Stolica Żeglarstwa' : 'Sailing Capital'}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-bold">Bezpośrednie połączenie z największymi marinami na Mazurach.</p>
                </div>
              </div>
              <div className="p-10 bg-white dark:bg-slate-900 rounded-[50px] border-2 border-slate-100 dark:border-slate-800 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-2 group overflow-hidden relative">
                <Image src={getImagePath("/images/real_hangar.jpg")} alt="Hangar" fill className="object-cover opacity-0 dark:opacity-20 transition-opacity" />
                <div className="relative z-10">
                  <h4 className="font-black text-sm text-slate-950 dark:text-white uppercase mb-4 tracking-widest">{lang === 'pl' ? 'Ogrzewany Hangar' : 'Heated Hangar'}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-bold">Najbezpieczniejsza przystań dla Twojego helikoptera w regionie.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING --- */}
      <section id="services" className="py-48 bg-white dark:bg-slate-900/40 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32">
            <span className="text-sky-600 font-black tracking-[0.5em] uppercase text-xs mb-10 block">{t.pricing_title}</span>
            <h2 className="text-7xl md:text-[140px] font-outfit font-black tracking-tighter text-slate-950 dark:text-white leading-none uppercase">CENY <span className="gradient-text-azure">OPS.</span></h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-12">
            {pricingData.map((item, idx) => (
              <motion.div key={idx} whileHover={{ y: -30 }}
                className={`p-16 rounded-[70px] bg-white dark:bg-slate-900 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-2xl transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden ${item.highlight ? 'ring-8 ring-sky-500/10 z-10 border border-sky-100 dark:border-sky-600/50' : 'border border-slate-100 dark:border-slate-800'}`}
              >
                <div className="w-20 h-20 rounded-[35px] bg-slate-50 dark:bg-slate-800 text-sky-600 mb-12 flex items-center justify-center shadow-sm">
                  {idx === 0 ? <CloudSun size={40} /> : idx === 1 ? <Clock size={40} /> : <Layers size={40} />}
                </div>
                <h4 className="text-xs font-black tracking-[0.5em] text-slate-500 mb-6 uppercase">{item.title}</h4>
                <div className="flex items-baseline gap-2 mb-14">
                  <span className="text-8xl md:text-9xl font-outfit font-black text-slate-950 dark:text-white tracking-tighter">{item.price}</span>
                  <span className="text-2xl font-black text-slate-400 uppercase">{item.unit}</span>
                </div>
                <button className={`w-full py-8 rounded-[35px] font-black text-[13px] tracking-[0.4em] transition-all shadow-2xl uppercase ${item.highlight ? 'bg-sky-600 text-white hover:bg-slate-950' : 'bg-slate-950 dark:bg-slate-800 text-white hover:bg-sky-600'}`}>
                  {t.pricing_btn}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GOOGLE MAP --- */}
      <section className="py-24 px-6 bg-white dark:bg-slate-950 transition-colors duration-500">
        <div className="max-w-7xl mx-auto rounded-[80px] overflow-hidden shadow-2xl border-8 border-slate-50 dark:border-slate-900 relative h-[700px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14695.275988581699!2d21.7915!3d54.0322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e1008734e5672b%3A0xe6734e5672b4e5b!2sHelipad%20Mazury!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl"
            title="Helipad Mazury Location Map"
            className="absolute inset-0 w-full h-full grayscale-[0.2] contrast-[1.1]"
            style={{ border: 0 }} loading="lazy"></iframe>
          <div className="absolute top-12 left-12 frost-glass p-12 rounded-[50px] shadow-2xl border-2 border-white/50 max-w-sm pointer-events-none">
            <div className="w-16 h-16 rounded-3xl bg-sky-600 text-white flex items-center justify-center mb-8 shadow-xl"><Navigation size={32} /></div>
            <h4 className="text-3xl font-outfit font-black mb-4 text-slate-950 dark:text-white uppercase tracking-tight">Port Lotniczy</h4>
            <p className="text-slate-600 dark:text-slate-400 font-bold uppercase tracking-widest text-xs">Sybiraków 28, Giżycko</p>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 px-6 bg-white dark:bg-slate-950 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-sky-600 font-black tracking-[0.8em] uppercase text-xs mb-12 block">KONTAKT</span>
            <h2 className="text-7xl md:text-[120px] font-outfit font-black text-slate-950 dark:text-white mb-10 tracking-tighter leading-none uppercase">GIŻYCKO <span className="gradient-text-azure">EPGH.</span></h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-24">

            <a href="tel:+48607241090" className="flex flex-col items-center justify-center p-16 rounded-[60px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xl hover:scale-[1.02] transition-all group">
              <div className="w-20 h-20 rounded-3xl bg-sky-600 text-white flex items-center justify-center mb-8 shadow-lg group-hover:rotate-12 transition-transform"><Phone size={32} /></div>
              <p className="text-xs font-black tracking-[0.4em] text-slate-400 mb-4 uppercase">NUMER TELEFONU</p>
              <p className="text-4xl md:text-6xl font-black text-slate-950 dark:text-white group-hover:text-sky-600 transition-colors">+48 607 241 090</p>
            </a>
            <a href="mailto:biuro@helipadmazury.pl" className="flex flex-col items-center justify-center p-16 rounded-[60px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xl hover:scale-[1.02] transition-all group">
              <div className="w-20 h-20 rounded-3xl bg-slate-950 dark:bg-white text-white dark:text-slate-950 flex items-center justify-center mb-8 shadow-lg group-hover:-rotate-12 transition-transform"><Mail size={32} /></div>
              <p className="text-xs font-black tracking-[0.4em] text-slate-400 mb-4 uppercase">MAIL</p>
              <p className="text-3xl md:text-5xl font-black text-slate-950 dark:text-white group-hover:text-sky-600 transition-colors break-all">biuro@helipadmazury.pl</p>
            </a>
          </div>

          <div className="relative h-[600px] rounded-[80px] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-900 group">
            <Image src={getImagePath("/images/real_night.jpg")} fill alt="Giżycko Night Helipad Aerial View" className="object-cover group-hover:scale-110 transition-transform duration-[4s]" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent p-20 flex flex-col justify-end">
              <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-[1.5s]">
                <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-sky-600 text-white font-black text-[12px] tracking-widest uppercase mb-12 shadow-2xl ring-4 ring-sky-500/30">OPEN 24/7</div>
                <h4 className="text-6xl font-outfit font-black text-white leading-[0.9] tracking-tight mb-8">Gotowość to nasza<br /><span className="gradient-text-azure">Wartość Nadrzędna.</span></h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-32 bg-slate-50 dark:bg-slate-950 px-6 border-t-8 border-slate-200 dark:border-slate-950 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.5)] transition-colors duration-500">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-4 mb-16">
            <div className="relative h-10 w-24">
              <Image
                src={getImagePath("/images/logo_official.png")}
                fill
                alt="Logo Footer"
                className={`object-contain transition-all duration-500 ${theme === 'light' ? 'brightness-0' : 'brightness-0 invert'}`}
              />
            </div>
          </div>

          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-bold mb-16 max-w-lg mx-auto uppercase tracking-widest leading-relaxed">
            {t.footer_desc}
          </p>

          <div className="w-full max-w-sm h-1 bg-slate-200 dark:bg-slate-900 mb-16 rounded-full"></div>

          <p className="text-[12px] font-black tracking-[0.8em] text-slate-400 dark:text-slate-700 uppercase mb-4">© 2026 HELIPAD GIŻYCKO • FUTURE READY MASTERPIECE</p>
        </div>
      </footer>
    </main>
  );
}
