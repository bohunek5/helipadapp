"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Shield, Thermometer, MapPin, Compass, Waves,
  Wind, ArrowRight, CheckCircle2, Phone, Mail,
  Radio, Navigation, Maximize, Ruler, CloudSun,
  Layers, Users, Calendar, Clock, Send, Menu, X, Sun, Moon, Globe
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
    hero_title: "MAZURY Z LOTU",
    hero_title_accent: "PTAKA",
    hero_desc: "Najbardziej zaawansowana infrastruktura lotnicza w Giżycku. Bezpośrednie połączenie i standard bezpieczeństwa jutra.",
    hero_btn: "ZAREZERWUJ SLOT",
    hero_specs: "SPECYFIKACJA EPGH",
    specs: ["ZNAK WYWOŁAWCZY", "CZĘSTOTLIWOŚĆ", "WSPÓŁRZĘDNE", "FATO", "ELEWACJA", "KIERUNKI"],
    about_title: "PIONIERZY MAZUR.",
    about_desc: "Mazury Helipad w Giżycku to profesjonalnie przygotowane lądowisko EPGH. Położenie przy obwodnicy Giżycka gwarantuje szybki transfer w 5 minut.",
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
    hero_title: "MAZURY FROM",
    hero_title_accent: "ABOVE",
    hero_desc: "The most advanced aviation infrastructure in Giżycko. Direct connectivity and the safety standards of tomorrow.",
    hero_btn: "RESERVE SLOT",
    hero_specs: "EPGH SPECS",
    specs: ["CALLSIGN", "FREQUENCY", "COORDINATES", "FATO", "ELEVATION", "RUNWAYS"],
    about_title: "MAZURY PIONEERS.",
    about_desc: "Mazury Helipad in Giżycko is a professionally prepared EPGH landing spot. Location by the bypass guarantees 5-min transfer.",
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
    hero_title: "MASUREN VON",
    hero_title_accent: "OBEN",
    hero_desc: "Die fortschrittlichste Luftfahrtinfrastruktur in Lötzen. Direkte Anbindung und Sicherheitsstandards von morgen.",
    hero_btn: "SLOT BUCHEN",
    hero_specs: "EPGH SPECS",
    specs: ["RUFZEICHEN", "FREQUENZ", "KOORDINATEN", "FATO", "HÖHE", "RICHTUNG"],
    about_title: "MASUREN PIONIERE.",
    about_desc: "Mazury Helipad in Giżycko ist ein professionell vorbereiteter EPGH-Landeplatz. Die Lage garantiert 5-Min-Transfer.",
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
  const [lang, setLang] = useState<"pl" | "en" | "de">("pl");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [formStep, setFormStep] = useState(0);
  const t = translations[lang];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as "light" | "dark";
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
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

  const galleryItems = [
    { src: "/images/real_aerial.jpg", label: "Aerial" },
    { src: "/images/real_heli_landing.jpg", label: "Ops" },
    { src: "/images/real_hangar.jpg", label: "Hangar" },
    { src: "/images/real_fleet.jpg", label: "Fleet" },
    { src: "/images/real_night.jpg", label: "Night" },
    { src: "/images/gizycko_hero_pro.png", label: "City" },
  ];

  const toggleLang = (newLang: "pl" | "en" | "de") => {
    setLang(newLang);
  };

  return (
    <main ref={containerRef} className="flex flex-col bg-white dark:bg-slate-950 transition-colors duration-500 overflow-x-hidden">

      {/* --- PREMUM NAVBAR --- */}
      <nav className="fixed top-0 w-full z-[100] px-4 md:px-12 py-4 flex justify-between items-center frost-glass shadow-lg border-b border-slate-200/50 dark:border-slate-800/50">
        <a href="/helipadapp/" className="flex items-center gap-3 group transition-transform hover:scale-105 active:scale-95">
          <div className="w-10 h-10 rounded-xl bg-sky-600 shadow-xl shadow-sky-400/20 flex items-center justify-center font-black text-white text-lg ring-2 ring-white/20 dark:ring-sky-500/20">H</div>
          <div className="flex flex-col">
            <span className="font-outfit font-black text-xl leading-none tracking-tight text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">HELIPAD</span>
            <span className="text-[9px] font-black tracking-[0.2em] text-slate-400 dark:text-slate-500 uppercase leading-none mt-1">GIŻYCKO • EPGH</span>
          </div>
        </a>

        {/* Desktop Links - Highly contrastive */}
        <div className="hidden lg:flex gap-8 text-[11px] font-black tracking-widest">
          {t.nav.map((item, i) => (
            <a key={i} href={`#${["home", "about", "services", "gallery", "contact"][i]}`}
              className="text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 transition-all relative group py-2">
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          {/* Controls - Premium Look */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800">
            <button onClick={() => toggleLang("pl")} className={`w-8 h-8 rounded-full text-[10px] font-black transition-all ${lang === 'pl' ? 'bg-white dark:bg-slate-800 shadow-md text-sky-600' : 'text-slate-400 hover:text-slate-600'}`}>PL</button>
            <button onClick={() => toggleLang("en")} className={`w-8 h-8 rounded-full text-[10px] font-black transition-all ${lang === 'en' ? 'bg-white dark:bg-slate-800 shadow-md text-sky-600' : 'text-slate-400 hover:text-slate-600'}`}>EN</button>
            <button onClick={() => toggleLang("de")} className={`w-8 h-8 rounded-full text-[10px] font-black transition-all ${lang === 'de' ? 'bg-white dark:bg-slate-800 shadow-md text-sky-600' : 'text-slate-400 hover:text-slate-600'}`}>DE</button>
            <div className="w-[1px] h-4 bg-slate-300 dark:bg-slate-700 mx-1"></div>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-slate-800 transition-all text-slate-500 dark:text-amber-400">
              {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
            </button>
          </div>

          <a href="#booking" className="hidden md:flex px-6 py-3 rounded-full bg-slate-950 dark:bg-sky-600 text-white font-black text-[11px] tracking-widest hover:scale-105 hover:bg-sky-600 dark:hover:bg-slate-100 dark:hover:text-slate-900 active:scale-95 transition-all shadow-xl shadow-slate-200/50 dark:shadow-none">
            {t.cta}
          </a>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileMenu(true)} className="lg:hidden p-2.5 bg-slate-950 dark:bg-sky-600 rounded-xl text-white shadow-lg">
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-[200] bg-white dark:bg-slate-950 p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-600 shadow-xl flex items-center justify-center font-black text-white text-lg">H</div>
                <span className="font-outfit font-black text-2xl text-slate-900 dark:text-white">HELIPAD</span>
              </div>
              <button onClick={() => setMobileMenu(false)} className="p-3 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white rounded-2xl"><X size={28} /></button>
            </div>
            <div className="flex flex-col gap-6">
              {t.nav.map((item, i) => (
                <a key={i} href={`#${["home", "about", "services", "gallery", "contact"][i]}`}
                  onClick={() => setMobileMenu(false)}
                  className="text-4xl font-outfit font-black tracking-tight text-slate-900 dark:text-white hover:text-sky-500 transition-all flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                  {item} <ArrowRight className="text-sky-500" />
                </a>
              ))}
            </div>
            <div className="mt-auto grid grid-cols-2 gap-4">
              <a href="#booking" onClick={() => setMobileMenu(false)} className="col-span-2 py-6 bg-sky-600 text-white rounded-3xl font-black text-center shadow-2xl">{t.cta}</a>
              <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">HOTLINE</p>
                <p className="font-black text-slate-900 dark:text-white">+48 607...</p>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">MODE</p>
                <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="font-black text-sky-500 uppercase">{theme}</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative h-screen w-full flex items-center justify-center pt-20 px-6 overflow-hidden">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0 z-0">
          <Image
            src={getImagePath("/images/gizycko_hero_pro.png")}
            alt="Gizycko Pro Aerial"
            fill
            className="object-cover hero-mask scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-white dark:to-slate-950 opacity-100" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center max-w-5xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-950/40 backdrop-blur-xl border border-white/20 mb-10 shadow-2xl animate-float">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse ring-4 ring-sky-500/20"></span>
            <span className="text-[10px] font-black tracking-[0.4em] text-white uppercase drop-shadow-md">{t.hero_badge}</span>
          </div>
          <h1 className="text-6xl md:text-[130px] font-outfit font-black tracking-tighter leading-[0.85] mb-8 text-white drop-shadow-2xl uppercase">
            {t.hero_title}<br />
            <span className="gradient-text-azure">{t.hero_title_accent}</span>
          </h1>
          <p className="text-white text-lg md:text-2xl max-w-2xl mx-auto mb-16 font-semibold leading-relaxed drop-shadow-xl opacity-100 px-4">
            {t.hero_desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center px-4">
            <a href="#booking" className="group w-full sm:w-auto px-10 py-5 bg-sky-600 text-white font-black rounded-full shadow-[0_20px_50px_rgba(14,165,233,0.3)] hover:bg-white hover:text-slate-950 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 text-sm tracking-widest border-2 border-transparent">
              {t.hero_btn} <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
            </a>
            <a href="#about" className="w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-md text-white border-2 border-white/40 font-black rounded-full hover:bg-white/100 hover:text-slate-950 transition-all text-sm tracking-widest uppercase shadow-xl">
              {t.hero_specs}
            </a>
          </div>
        </motion.div>
      </section>

      {/* --- SPECS BANNER --- */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-12 text-center">
            {specsData.map((spec, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 text-sky-500 mb-5 flex items-center justify-center shadow-md dark:shadow-none border border-slate-100 dark:border-slate-700 transition-all group-hover:-translate-y-2 group-hover:bg-sky-500 group-hover:text-white">
                  {spec.icon}
                </div>
                <p className="text-[10px] font-black tracking-widest text-slate-400 dark:text-slate-500 mb-1 uppercase leading-none">{t.specs[i]}</p>
                <p className="text-[13px] font-black text-slate-900 dark:text-white leading-tight">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-40 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 md:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] md:h-[700px] rounded-[50px] md:rounded-[70px] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-900 ring-1 ring-slate-200 dark:ring-slate-800"
          >
            <Image src={getImagePath("/images/real_heli_landing.jpg")} alt="Ops" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
            <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 frost-glass p-6 md:p-10 rounded-[40px] max-w-sm border-2 border-white/50 dark:border-white/10 shadow-2xl">
              <div className="flex items-center gap-3 mb-3 text-sky-600 dark:text-sky-400 font-black text-xs uppercase tracking-[0.2em]">
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)]"></div> LIVE OPS
              </div>
              <p className="text-xl md:text-2xl font-outfit font-black text-slate-950 dark:text-white leading-tight">Miejskie Centrum Giżycka.</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-4 font-bold uppercase tracking-wider">Tylko 5 minut od lokalnych marin.</p>
            </div>
          </motion.div>

          <div className="relative">
            <span className="text-sky-600 dark:text-sky-400 font-black tracking-[0.5em] uppercase text-[10px] mb-8 block">{lang === 'pl' ? 'O NAS' : 'ABOUT'}</span>
            <h2 className="text-5xl md:text-8xl font-outfit font-black tracking-tighter mb-10 leading-[0.9] text-slate-950 dark:text-white">
              {t.about_title}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium leading-relaxed mb-12">
              {t.about_desc}
            </p>
            <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
              <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-[40px] border border-slate-100 dark:border-slate-800 transition-all hover:shadow-xl group">
                <div className="w-14 h-14 rounded-2xl bg-slate-950 dark:bg-sky-600 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Waves size={24} /></div>
                <h4 className="font-black text-xs text-slate-950 dark:text-white uppercase mb-4 tracking-widest">{lang === 'pl' ? 'Stolica Żeglarstwa' : 'Sailing Capital'}</h4>
                <p className="text-slate-500 dark:text-slate-500 text-sm font-semibold">Strategiczne położenie pomiędzy jeziorami Niegocin i Kisajno.</p>
              </div>
              <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-[40px] border border-slate-100 dark:border-slate-800 transition-all hover:shadow-xl group">
                <div className="w-14 h-14 rounded-2xl bg-sky-500 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Thermometer size={24} /></div>
                <h4 className="font-black text-xs text-slate-950 dark:text-white uppercase mb-4 tracking-widest">{lang === 'pl' ? 'Ogrzewany Hangar' : 'Heated Hangar'}</h4>
                <p className="text-slate-500 dark:text-slate-500 text-sm font-semibold">Monitorowane, bezpieczne i ciepłe schronienie dla Twojej maszyny.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="services" className="py-48 bg-slate-50 dark:bg-slate-900/30 px-6 transition-colors border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-28">
            <span className="text-sky-600 dark:text-sky-400 font-black tracking-[0.5em] uppercase text-[10px] mb-8 block">{t.pricing_title}</span>
            <h2 className="text-6xl md:text-9xl font-outfit font-black tracking-tighter text-slate-950 dark:text-white">CENY <span className="gradient-text-azure">EPGH.</span></h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
            {pricingData.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -20, scale: 1.02 }}
                className={`p-12 md:p-16 rounded-[60px] bg-white dark:bg-slate-900 shadow-2xl transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden ${item.highlight ? 'ring-4 ring-sky-500 z-10' : 'opacity-95'}`}
              >
                <div className="w-16 h-16 rounded-3xl bg-slate-50 dark:bg-slate-800 text-sky-600 mb-12 flex items-center justify-center shadow-inner">
                  {idx === 0 ? <CloudSun size={34} /> : idx === 1 ? <Clock size={34} /> : <Layers size={34} />}
                </div>
                <h4 className="text-[11px] font-black tracking-[0.4em] text-slate-400 dark:text-slate-500 mb-5 uppercase">{item.title}</h4>
                <div className="flex items-baseline gap-2 mb-12">
                  <span className="text-7xl md:text-8xl font-outfit font-black text-slate-950 dark:text-white">{item.price}</span>
                  <span className="text-xl font-black text-slate-400 uppercase">{item.unit}</span>
                </div>
                <button onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })} className={`w-full py-7 rounded-3xl font-black text-[12px] tracking-[0.3em] transition-all shadow-xl hover:shadow-2xl active:scale-95 ${item.highlight ? 'bg-sky-600 text-white hover:bg-slate-950 dark:hover:bg-white dark:hover:text-slate-950' : 'bg-slate-900 dark:bg-slate-800 text-white hover:bg-sky-600'}`}>
                  {t.pricing_btn}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GALLERY --- */}
      <section id="gallery" className="py-48 px-6 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div>
              <span className="text-sky-600 dark:text-sky-400 font-black tracking-[0.5em] uppercase text-[10px] mb-8 block">GALERIA</span>
              <h2 className="text-6xl md:text-9xl font-outfit font-black tracking-tighter text-slate-950 dark:text-white leading-none uppercase">WIDOK <span className="gradient-text-azure">Real.</span></h2>
            </div>
            <div className="flex items-center gap-6 p-4 bg-slate-50 dark:bg-slate-900 rounded-[35px] border border-slate-100 dark:border-slate-800">
              <div className="text-right">
                <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">LIVE CAM STATUS</p>
                <p className="text-sm font-black text-sky-500 uppercase">Q4 2026 DEPLOY</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-sky-100 dark:bg-sky-950/50 flex items-center justify-center text-sky-600"><Clock size={20} /></div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {galleryItems.map((img, i) => (
              <motion.div key={i} whileHover={{ scale: 0.97 }} className="group relative h-[450px] md:h-[550px] rounded-[60px] overflow-hidden cursor-pointer shadow-xl bg-slate-100 dark:bg-slate-900 border-4 border-transparent hover:border-sky-500 transition-all duration-500">
                <Image src={getImagePath(img.src)} fill alt={img.label} className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-12 flex items-end">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                    <p className="text-sky-400 font-black tracking-[0.5em] uppercase text-xs mb-2">EPGH ARCHIVE</p>
                    <h4 className="text-3xl font-outfit font-black text-white">{img.label}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LOCATION SECTION (MAP) --- */}
      <section id="location" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-7xl mx-auto rounded-[60px] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 relative h-[600px] mb-32">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14695.275988581699!2d21.7915!3d54.0322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e1008734e5672b%3A0xe6734e5672b4e5b!2sHelipad%20Mazury!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl"
            className="absolute inset-0 w-full h-full grayscale dark:invert-[0.9] dark:hue-rotate-180 transition-all pointer-events-auto"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
          <div className="absolute top-10 left-10 frost-glass p-8 rounded-[40px] shadow-2xl border-2 border-white/50 dark:border-white/10 max-w-sm pointer-events-none">
            <h4 className="text-2xl font-outfit font-black mb-3 dark:text-white">Lokalizacja EPGH</h4>
            <p className="text-slate-600 dark:text-slate-400 font-bold uppercase tracking-widest text-[11px] mb-6">Sybiraków 28, 11-500 Giżycko</p>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center"><Navigation size={20} /></div>
              <div>
                <p className="text-sm font-black dark:text-white">Dojazd trasa 63</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Główna obwodnica</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BOOKING FORM SYSTEM --- */}
      <section id="booking" className="py-32 px-6 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-100 dark:bg-slate-900 p-10 md:p-24 rounded-[70px] border-2 border-slate-200 dark:border-slate-800 shadow-inner relative overflow-hidden transition-colors">
            {/* Accent circles */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-sky-200/20 dark:bg-sky-500/10 rounded-full blur-3xl -z-0"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-slate-200/20 dark:bg-slate-500/5 rounded-full blur-3xl -z-0"></div>

            <div className="text-center mb-16 relative z-10">
              <h2 className="text-6xl md:text-8xl font-outfit font-black tracking-tighter mb-10 text-slate-950 dark:text-white">{t.booking_title}</h2>
              <div className="flex justify-center gap-4">
                {[0, 1, 2].map(s => (
                  <div key={s} className={`w-16 h-2 rounded-full ${formStep >= s ? 'bg-sky-600' : 'bg-slate-300 dark:bg-slate-800'} transition-all duration-500`}></div>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              {formStep === 0 && (
                <motion.div key="s0" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="grid md:grid-cols-2 gap-10 relative z-10 text-left">
                  <div className="space-y-4">
                    <label className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 ml-6 block leading-none">DANE PILOTA / FIRMA</label>
                    <input type="text" placeholder="Imię, Nazwisko / Nazwa" className="w-full px-10 py-7 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-[35px] outline-none focus:ring-4 focus:ring-sky-500/20 dark:focus:ring-sky-500/10 font-black text-slate-900 dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-600 transition-all" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 ml-6 block leading-none">TELEFON KONTAKTOWY</label>
                    <input type="tel" placeholder="+48 000 000 000" className="w-full px-10 py-7 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-[35px] outline-none focus:ring-4 focus:ring-sky-500/20 dark:focus:ring-sky-500/10 font-black text-slate-900 dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-600 transition-all" />
                  </div>
                  <button onClick={() => setFormStep(1)} className="md:col-span-2 py-8 bg-slate-950 dark:bg-sky-600 text-white rounded-[35px] font-black text-[13px] tracking-[0.4em] shadow-2xl hover:bg-sky-600 dark:hover:bg-white dark:hover:text-slate-950 active:scale-95 transition-all mt-6 uppercase">DALEJ: SZCZEGÓŁY LOTU</button>
                </motion.div>
              )}
              {formStep === 1 && (
                <motion.div key="s1" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="grid md:grid-cols-2 gap-10 relative z-10 text-left">
                  <div className="space-y-4">
                    <label className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 ml-6 block leading-none">DATA LĄDOWANIA</label>
                    <input type="date" className="w-full px-10 py-7 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-[35px] outline-none focus:ring-4 focus:ring-sky-500/20 font-black text-slate-900 dark:text-white transition-all [color-scheme:light] dark:[color-scheme:dark]" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 ml-6 block leading-none">GODZINA (ETA)</label>
                    <input type="time" className="w-full px-10 py-7 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-[35px] outline-none focus:ring-4 focus:ring-sky-500/20 font-black text-slate-900 dark:text-white transition-all [color-scheme:light] dark:[color-scheme:dark]" />
                  </div>
                  <div className="md:col-span-2 flex gap-4 mt-6">
                    <button onClick={() => setFormStep(0)} className="px-12 py-8 bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-500 font-black text-xs rounded-[35px] hover:text-slate-900 dark:hover:text-white transition-all uppercase tracking-widest">COFNIJ</button>
                    <button onClick={() => setFormStep(2)} className="flex-1 py-8 bg-slate-950 dark:bg-sky-600 text-white rounded-[35px] font-black text-[13px] tracking-[0.4em] shadow-2xl hover:bg-sky-600 dark:hover:bg-white dark:hover:text-slate-950 active:scale-95 transition-all uppercase">PODSUMOWANIE</button>
                  </div>
                </motion.div>
              )}
              {formStep === 2 && (
                <motion.div key="s2" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center relative z-10">
                  <div className="w-24 h-24 bg-sky-100 dark:bg-sky-950/50 text-sky-600 rounded-[40px] flex items-center justify-center mx-auto mb-10 shadow-inner">
                    <Send size={44} className="animate-float" />
                  </div>
                  <h3 className="text-4xl font-outfit font-black mb-6 text-slate-950 dark:text-white uppercase tracking-tight">Gotowy do wysłania?</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-bold mb-16 text-lg">Zgłoszenie rezerwacji zostanie przekazane do portu EPGH.</p>
                  <div className="flex gap-4">
                    <button onClick={() => setFormStep(1)} className="px-12 py-8 bg-white dark:bg-slate-800 text-slate-400 font-black text-xs rounded-[35px] hover:text-slate-950 dark:hover:text-white transition-colors uppercase tracking-widest">EDYTUJ</button>
                    <button onClick={() => { alert("Rezerewacja wysłana!"); setFormStep(0); }} className="flex-1 py-8 bg-sky-600 text-white rounded-[35px] font-black text-[13px] tracking-[0.4em] hover:bg-slate-950 transition-all shadow-xl shadow-sky-300/30 dark:shadow-none uppercase">WYŚLIJ ZGŁOSZENIE</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-48 px-6 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div>
              <span className="text-sky-600 dark:text-sky-400 font-black tracking-[0.6em] uppercase text-[10px] mb-12 block ml-1 font-bold">BEZPOŚREDNIE POŁĄCZENIE</span>
              <h2 className="text-7xl md:text-9xl font-outfit font-black text-slate-950 dark:text-white mb-20 tracking-tighter leading-none uppercase">KONTAKT <span className="gradient-text-azure">EPGH.</span></h2>

              <div className="space-y-16">
                <div className="flex gap-10 items-center group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900 p-6 rounded-[50px] transition-all border border-transparent hover:border-slate-100 dark:hover:border-slate-800">
                  <div className="w-24 h-24 rounded-[40px] bg-slate-950 dark:bg-sky-600 text-white flex shrink-0 items-center justify-center shadow-xl group-hover:scale-110 transition-all"><Phone size={36} /></div>
                  <div>
                    <p className="text-[12px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-[0.4em] mb-3">INFOLINIA 24/7</p>
                    <p className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">+48 607 241 090</p>
                  </div>
                </div>
                <div className="flex gap-10 items-center group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900 p-6 rounded-[50px] transition-all border border-transparent hover:border-slate-100 dark:hover:border-slate-800">
                  <div className="w-24 h-24 rounded-[40px] bg-sky-500 text-white flex shrink-0 items-center justify-center shadow-xl group-hover:scale-110 transition-all"><Mail size={36} /></div>
                  <div>
                    <p className="text-[12px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-[0.4em] mb-3">E-MAIL OPS</p>
                    <p className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white break-all underline decoration-sky-500 decoration-4 underline-offset-[16px]">biuro@helipadmazury.pl</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[800px] rounded-[70px] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-900 group">
              <Image src={getImagePath("/images/real_night.jpg")} fill alt="Giżycko Nocą Helipad" className="object-cover group-hover:scale-110 transition-transform duration-[3s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent p-16 flex flex-col justify-end">
                <div>
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-sky-600 text-white font-black text-[10px] tracking-widest uppercase mb-10 shadow-xl">EPGH OPS • OPEN 24/7</div>
                  <h4 className="text-5xl font-outfit font-black text-white leading-tight tracking-tight mb-4 group-hover:translate-x-4 transition-transform duration-700">Precyzja to nasz<br /><span className="text-sky-400">Standard Lotniczy.</span></h4>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.4em]">Masurian Aeroterminal System • 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-24 bg-white dark:bg-slate-950 px-6 border-t-4 border-slate-100 dark:border-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center font-black text-white text-lg">H</div>
            <span className="font-outfit font-black text-2xl text-slate-900 dark:text-white">HELIPAD</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-bold mb-12 max-w-sm mx-auto uppercase tracking-wider leading-relaxed text-center">{t.footer_desc}</p>

          <div className="flex gap-10 mb-16 text-[11px] font-black tracking-[0.2em] text-slate-400 hover:text-sky-500">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors uppercase">Safety</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors uppercase">Privacy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors uppercase">Terms</a>
          </div>

          <div className="w-full max-w-xs h-[1px] bg-slate-100 dark:bg-slate-800 mb-12"></div>

          <p className="text-[10px] font-black tracking-[0.5em] text-slate-300 dark:text-slate-700 uppercase">© 2026 HELIPAD GIŻYCKO • FUTURE READY MASTERPIECE</p>
        </div>
      </footer>
    </main>
  );
}
