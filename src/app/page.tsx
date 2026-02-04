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
    { src: "/images/mazury_aerial.png", label: "Region" },
  ];

  return (
    <main ref={containerRef} className="flex flex-col bg-white dark:bg-slate-950 transition-colors duration-500 overflow-x-hidden">

      {/* --- PREMUM NAVBAR (HARDFIX: BLUE CONTRAST IN LIGHT MODE) --- */}
      <nav className="fixed top-0 w-full z-[100] px-4 md:px-12 py-4 flex justify-between items-center frost-glass shadow-2xl border-b border-slate-200/80 dark:border-slate-800/50">
        <a href="/helipadapp/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sky-600 shadow-xl flex items-center justify-center font-black text-white text-lg ring-2 ring-sky-400">H</div>
          <div className="flex flex-col">
            {/* Logo Text - Forced Blue in light mode for max contrast */}
            <span className="font-outfit font-black text-xl leading-none tracking-tight text-sky-600 dark:text-white">HELIPAD</span>
            <span className="text-[9px] font-black tracking-[0.2em] text-slate-800 dark:text-slate-500 uppercase leading-none mt-1">GIŻYCKO • EPGH</span>
          </div>
        </a>

        {/* Desktop Links - Forced Sky-600 for Light Mode */}
        <div className="hidden lg:flex gap-10 text-[11px] font-black tracking-widest">
          {t.nav.map((item, i) => (
            <a key={i} href={`#${["home", "about", "services", "gallery", "contact"][i]}`}
              className="text-sky-600 dark:text-slate-200 hover:text-slate-950 dark:hover:text-sky-400 transition-all relative group py-2">
              {item}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-900 dark:bg-sky-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-1 p-1 bg-slate-300 dark:bg-slate-900 rounded-full border border-slate-400 dark:border-slate-800">
            <button onClick={() => setLang("pl")} className={`w-8 h-8 rounded-full text-[10px] font-black transition-all ${lang === 'pl' ? 'bg-white dark:bg-slate-800 shadow-lg text-sky-600' : 'text-slate-800 dark:text-slate-400'}`}>PL</button>
            <button onClick={() => setLang("en")} className={`w-8 h-8 rounded-full text-[10px] font-black transition-all ${lang === 'en' ? 'bg-white dark:bg-slate-800 shadow-lg text-sky-600' : 'text-slate-800 dark:text-slate-400'}`}>EN</button>
            <button onClick={() => setLang("de")} className={`w-8 h-8 rounded-full text-[10px] font-black transition-all ${lang === 'de' ? 'bg-white dark:bg-slate-800 shadow-lg text-sky-600' : 'text-slate-800 dark:text-slate-400'}`}>DE</button>
            <div className="w-[1px] h-4 bg-slate-500 dark:bg-slate-700 mx-1"></div>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-slate-800 transition-all text-slate-950 dark:text-amber-400">
              {theme === 'light' ? <Moon size={18} fill="black" /> : <Sun size={18} fill="currentColor" />}
            </button>
          </div>

          <a href="#booking" className="hidden md:flex px-8 py-3.5 rounded-full bg-sky-600 text-white font-black text-[11px] tracking-widest hover:scale-105 hover:bg-slate-950 transition-all shadow-2xl">
            {t.cta}
          </a>

          <button onClick={() => setMobileMenu(true)} className="lg:hidden p-3 bg-sky-600 rounded-xl text-white shadow-xl">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-[200] bg-white dark:bg-slate-950 p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center font-black text-white">H</div>
                <span className="font-outfit font-black text-2xl text-sky-600 dark:text-white">HELIPAD</span>
              </div>
              <button onClick={() => setMobileMenu(false)} className="p-4 bg-slate-100 dark:bg-slate-900 text-sky-600 dark:text-white rounded-2xl"><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-8">
              {t.nav.map((item, i) => (
                <a key={i} href={`#${["home", "about", "services", "gallery", "contact"][i]}`}
                  onClick={() => setMobileMenu(false)}
                  className="text-5xl font-outfit font-black tracking-tighter text-sky-600 dark:text-white border-b-4 border-slate-50 dark:border-slate-900 pb-6 flex justify-between items-center group">
                  {item} <ArrowRight className="text-slate-950 group-hover:translate-x-4 transition-transform" />
                </a>
              ))}
            </div>
            <div className="mt-auto">
              <a href="#booking" onClick={() => setMobileMenu(false)} className="block w-full py-8 bg-sky-600 text-white rounded-[40px] font-black text-center text-xl shadow-2xl mb-8 uppercase tracking-widest">{t.cta}</a>
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
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-white dark:to-slate-950 opacity-100" />
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
          <h1 className="text-6xl md:text-[140px] font-outfit font-black tracking-tighter leading-[0.85] mb-10 text-white drop-shadow-2xl uppercase">
            {t.hero_title}<br />
            <span className="gradient-text-azure">{t.hero_title_accent}</span>
          </h1>
          <p className="text-white text-xl md:text-3xl max-w-3xl mx-auto mb-16 font-bold leading-relaxed drop-shadow-2xl opacity-100 px-4">
            {t.hero_desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center px-4">
            <a href="#booking" className="group w-full sm:w-auto px-14 py-6 bg-sky-600 text-white font-black rounded-full shadow-2xl hover:bg-white hover:text-slate-950 hover:scale-105 transition-all flex items-center justify-center gap-4 text-sm tracking-widest">
              {t.hero_btn} <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </a>
            <a href="#about" className="w-full sm:w-auto px-14 py-6 bg-white/10 backdrop-blur-xl text-white border-4 border-white/40 font-black rounded-full hover:bg-white/100 hover:text-slate-950 transition-all text-sm tracking-widest uppercase">
              {t.hero_specs}
            </a>
          </div>
        </motion.div>
      </section>

      {/* --- SPECS BANNER --- */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 text-center">
            {specsData.map((spec, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-3xl bg-white dark:bg-slate-800 text-sky-500 mb-6 flex items-center justify-center shadow-xl border border-slate-100 dark:border-slate-700 transition-all group-hover:bg-sky-600 group-hover:text-white">
                  {spec.icon}
                </div>
                <p className="text-[11px] font-black tracking-widest text-slate-500 dark:text-slate-500 mb-2 uppercase leading-none">{t.specs[i]}</p>
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
            className="relative h-[600px] md:h-[800px] rounded-[70px] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-900 ring-1 ring-slate-200 dark:ring-slate-800"
          >
            <Image src={getImagePath("/images/real_heli_landing.jpg")} alt="Ops" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
            <div className="absolute bottom-12 left-12 frost-glass p-10 rounded-[40px] max-w-sm border-4 border-sky-600/20 shadow-2xl">
              <div className="flex items-center gap-3 mb-4 text-sky-600 dark:text-sky-400 font-black text-sm uppercase tracking-[0.3em]">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_20px_rgba(34,197,94,0.8)]"></div> STATUS: OPERACYJNY
              </div>
              <p className="text-3xl font-outfit font-black text-sky-600 dark:text-white leading-tight underline decoration-sky-600 decoration-2">Serce Mazur z dostępem 24/7.</p>
            </div>
          </motion.div>

          <div>
            <span className="text-sky-600 dark:text-sky-400 font-black tracking-[0.6em] uppercase text-xs mb-10 block font-bold">{lang === 'pl' ? 'O NAS' : 'ABOUT'}</span>
            <h2 className="text-6xl md:text-9xl font-outfit font-black tracking-tighter mb-12 leading-[0.85] text-sky-600 dark:text-white uppercase">
              {t.about_title}
            </h2>
            <p className="text-slate-950 dark:text-slate-400 text-xl md:text-2xl font-black leading-relaxed mb-16">
              {t.about_desc}
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
              <div className="p-10 bg-slate-50 dark:bg-slate-900 rounded-[50px] border-4 border-sky-600 transition-all hover:shadow-2xl group">
                <div className="w-16 h-16 rounded-3xl bg-sky-600 text-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-xl"><Waves size={32} /></div>
                <h4 className="font-black text-sm text-sky-600 dark:text-white uppercase mb-4 tracking-widest">{lang === 'pl' ? 'Stolica Żeglarstwa' : 'Sailing Capital'}</h4>
                <p className="text-slate-950 dark:text-slate-400 text-sm font-black transition-colors">Bezpośrednie połączenie z największymi marinami na Mazurach.</p>
              </div>
              <div className="p-10 bg-slate-50 dark:bg-slate-900 rounded-[50px] border-4 border-sky-400 transition-all hover:shadow-2xl group">
                <div className="w-16 h-16 rounded-3xl bg-sky-400 text-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-xl"><Thermometer size={32} /></div>
                <h4 className="font-black text-sm text-sky-400 dark:text-white uppercase mb-4 tracking-widest">{lang === 'pl' ? 'Ogrzewany Hangar' : 'Heated Hangar'}</h4>
                <p className="text-slate-950 dark:text-slate-400 text-sm font-black transition-colors">Najbezpieczniejsza przystań dla Twojego helikoptera w regionie.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING --- */}
      <section id="services" className="py-48 bg-slate-100/50 dark:bg-slate-900/40 transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32">
            <span className="text-sky-600 font-black tracking-[0.5em] uppercase text-xs mb-10 block font-bold">{t.pricing_title}</span>
            <h2 className="text-7xl md:text-[140px] font-outfit font-black tracking-tighter text-sky-600 dark:text-white leading-none uppercase tracking-tighter">CENY <span className="text-slate-950 dark:text-sky-400">OPS.</span></h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-12">
            {pricingData.map((item, idx) => (
              <motion.div key={idx} whileHover={{ y: -30 }}
                className={`p-16 rounded-[70px] bg-white dark:bg-slate-900 shadow-2xl transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden border-4 ${item.highlight ? 'border-sky-600 scale-105 z-10' : 'border-slate-100 dark:border-slate-800 animate-pulse'}`}
              >
                <div className="w-20 h-20 rounded-[35px] bg-sky-600 text-white mb-12 flex items-center justify-center shadow-xl">
                  {idx === 0 ? <CloudSun size={40} /> : idx === 1 ? <Clock size={40} /> : <Layers size={40} />}
                </div>
                <h4 className="text-xs font-black tracking-[0.5em] text-slate-500 mb-6 uppercase">{item.title}</h4>
                <div className="flex items-baseline gap-2 mb-14">
                  <span className="text-8xl md:text-9xl font-outfit font-black text-sky-600 dark:text-white tracking-tighter">{item.price}</span>
                  <span className="text-2xl font-black text-slate-400 uppercase">{item.unit}</span>
                </div>
                <button onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full py-8 rounded-[35px] font-black text-[13px] tracking-[0.4em] transition-all shadow-2xl uppercase ${item.highlight ? 'bg-sky-600 text-white hover:bg-slate-950' : 'bg-slate-950 dark:bg-slate-800 text-white hover:bg-sky-600'}`}>
                  {t.pricing_btn}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GOOGLE MAP --- */}
      <section className="py-24 px-6 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto rounded-[80px] overflow-hidden shadow-2xl border-8 border-sky-600 relative h-[700px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14695.275988581699!2d21.7915!3d54.0322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e1008734e5672b%3A0xe6734e5672b4e5b!2sHelipad%20Mazury!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl"
            className="absolute inset-0 w-full h-full contrast-[1.2] transition-all"
            style={{ border: 0 }} loading="lazy"></iframe>
          <div className="absolute top-12 left-12 bg-white dark:bg-slate-950 p-12 rounded-[50px] shadow-2xl border-4 border-sky-600 max-w-sm pointer-events-none">
            <div className="w-16 h-16 rounded-3xl bg-sky-600 text-white flex items-center justify-center mb-8 shadow-xl"><Navigation size={32} /></div>
            <h4 className="text-3xl font-outfit font-black mb-4 text-sky-600 uppercase tracking-tight">Port Lotniczy</h4>
            <p className="text-slate-950 dark:text-slate-400 font-black uppercase tracking-widest text-xs mb-8">Sybiraków 28, Giżycko</p>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-48 px-6 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32 items-center text-center lg:text-left">
          <div>
            <span className="text-sky-600 font-black tracking-[0.8em] uppercase text-xs mb-12 block font-bold">CONTACT CENTER</span>
            <h2 className="text-7xl md:text-[120px] font-outfit font-black text-sky-600 dark:text-white mb-20 tracking-tighter leading-none uppercase transition-colors">GIŻYCKO <span className="text-slate-950 dark:text-sky-400">EPGH.</span></h2>

            <div className="space-y-16">
              <div className="flex flex-col md:flex-row gap-12 items-center p-12 rounded-[50px] border-4 border-sky-600 shadow-2xl bg-slate-50 dark:bg-slate-900 group">
                <div className="w-32 h-32 rounded-[40px] bg-sky-600 text-white transition-all group-hover:bg-slate-950 flex shrink-0 items-center justify-center shadow-2xl"><Phone size={48} /></div>
                <div>
                  <p className="text-[14px] text-sky-600 font-black uppercase tracking-[0.5em] mb-4">INFOLINIA LOTNICZA</p>
                  <p className="text-4xl md:text-6xl font-black text-slate-950 dark:text-white">+48 607 241 090</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-12 items-center p-12 rounded-[50px] border-4 border-sky-400 shadow-2xl bg-slate-50 dark:bg-slate-900 group">
                <div className="w-32 h-32 rounded-[40px] bg-sky-400 text-white transition-all group-hover:bg-slate-950 flex shrink-0 items-center justify-center shadow-2xl"><Mail size={48} /></div>
                <div>
                  <p className="text-[14px] text-sky-400 font-black uppercase tracking-[0.5em] mb-4">OPERACJE EPGH</p>
                  <p className="text-3xl md:text-4xl font-black text-slate-950 dark:text-white break-all underline decoration-sky-400 decoration-8 underline-offset-[20px]">biuro@helipadmazury.pl</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[850px] rounded-[80px] overflow-hidden shadow-2xl border-8 border-sky-600 group">
            <Image src={getImagePath("/images/real_night.jpg")} fill alt="Giżycko Night Helipad" className="object-cover group-hover:scale-110 transition-transform duration-[4s]" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent p-20 flex flex-col justify-end text-left">
              <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-[1.5s]">
                <div className="inline-flex items-center gap-6 px-8 py-4 rounded-full bg-sky-600 text-white font-black text-[14px] tracking-widest uppercase mb-12 shadow-2xl ring-8 ring-sky-500/30">OPEN FOR OPS • 24/7</div>
                <h4 className="text-6xl font-outfit font-black text-white leading-[0.9] tracking-tight mb-8">Gotowość to nasza<br /><span className="text-sky-400 underline decoration-sky-400 decoration-8">Wartość Nadrzędna.</span></h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-48 bg-slate-950 px-6 border-t-8 border-sky-600 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex items-center gap-6 mb-20 scale-150">
            <div className="w-16 h-16 rounded-2xl bg-sky-600 flex items-center justify-center font-black text-white text-3xl shadow-xl">H</div>
            <span className="font-outfit font-black text-5xl text-white tracking-tighter">HELIPAD</span>
          </div>

          <p className="text-sky-600 text-2xl md:text-3xl font-black mb-24 max-w-2xl mx-auto uppercase tracking-widest leading-relaxed text-center opacity-100 transition-colors">
            {t.footer_desc}
          </p>

          <div className="flex flex-wrap justify-center gap-12 md:gap-24 mb-24 text-[16px] font-black tracking-[0.5em] text-white">
            <a href="#" className="hover:text-sky-600 transition-all border-b-4 border-transparent hover:border-sky-600 pb-2">Operations</a>
            <a href="#" className="hover:text-sky-600 transition-all border-b-4 border-transparent hover:border-sky-600 pb-2">Safety</a>
          </div>

          <div className="w-full max-w-xl h-2 bg-sky-600/20 mb-20 rounded-full"></div>

          <p className="text-[14px] font-black tracking-[1em] text-slate-500 uppercase mb-8 text-center italic">© 2026 HELIPAD GIŻYCKO • FUTURE READY MASTERPIECE</p>
        </div>
      </footer>
    </main>
  );
}
