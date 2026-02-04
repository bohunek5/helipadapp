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
    document.documentElement.setAttribute('data-theme', theme);
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

  return (
    <main ref={containerRef} className="flex flex-col bg-white dark:bg-slate-950 transition-colors duration-500">

      {/* --- PREMUM NAVBAR --- */}
      <nav className="fixed top-0 w-full z-[100] px-6 py-5 flex justify-between items-center frost-glass">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sky-600 shadow-xl flex items-center justify-center font-black text-white text-lg">H</div>
          <div className="flex flex-col">
            <span className="font-outfit font-black text-2xl leading-none gradient-text-azure">HELIPAD</span>
            <span className="text-[10px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase leading-none mt-1">EPGH • 2026</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-10 text-[11px] font-black tracking-widest text-slate-600 dark:text-slate-300">
          {t.nav.map((item, i) => (
            <a key={i} href={`#${["home", "about", "services", "gallery", "contact"][i]}`} className="hover:text-sky-500 transition-colors">{item}</a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Controls */}
          <div className="flex items-center gap-2 p-1 bg-slate-100 dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800">
            <button onClick={() => setLang("pl")} className={`w-8 h-8 rounded-full text-[10px] font-bold transition-all ${lang === 'pl' ? 'bg-white dark:bg-slate-800 shadow-sm text-sky-500' : 'text-slate-400'}`}>PL</button>
            <button onClick={() => setLang("en")} className={`w-8 h-8 rounded-full text-[10px] font-bold transition-all ${lang === 'en' ? 'bg-white dark:bg-slate-800 shadow-sm text-sky-500' : 'text-slate-400'}`}>EN</button>
            <button onClick={() => setLang("de")} className={`w-8 h-8 rounded-full text-[10px] font-bold transition-all ${lang === 'de' ? 'bg-white dark:bg-slate-800 shadow-sm text-sky-500' : 'text-slate-400'}`}>DE</button>
            <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-700 mx-1"></div>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-slate-800 transition-all">
              {theme === 'light' ? <Moon size={14} className="text-slate-500" /> : <Sun size={14} className="text-amber-400" />}
            </button>
          </div>

          <a href="#booking" className="hidden sm:block px-6 py-3 rounded-full bg-slate-900 dark:bg-sky-600 text-white font-black text-[11px] tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl">
            {t.cta}
          </a>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileMenu(true)} className="lg:hidden p-3 bg-slate-50 dark:bg-slate-900 rounded-xl text-slate-900 dark:text-white">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-[200] bg-white dark:bg-slate-950 p-12 flex flex-col"
          >
            <div className="flex justify-between items-center mb-20">
              <span className="font-outfit font-black text-2xl gradient-text-azure">HELIPAD</span>
              <button onClick={() => setMobileMenu(false)} className="p-4 bg-slate-100 dark:bg-slate-900 rounded-full"><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-10">
              {t.nav.map((item, i) => (
                <a key={i} href={`#${["home", "about", "services", "gallery", "contact"][i]}`} onClick={() => setMobileMenu(false)} className="text-5xl font-outfit font-black tracking-tighter text-slate-950 dark:text-white hover:text-sky-500 transition-colors">{item}</a>
              ))}
            </div>
            <div className="mt-auto pt-16 border-t border-slate-100 dark:border-slate-800">
              <p className="text-slate-400 font-bold mb-4 uppercase tracking-widest text-xs">Direct Support</p>
              <p className="text-2xl font-black text-slate-900 dark:text-white">+48 607 241 090</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- (FIXED PRO IMAGE) */}
      <section id="home" className="relative h-screen w-full flex items-center justify-center p-6 overflow-hidden">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0 z-0">
          <Image
            src={getImagePath("/images/gizycko_hero_pro.png")}
            alt="Gizycko Pro Aerial"
            fill
            className="object-cover hero-mask scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-slate-950 opacity-100" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center max-w-6xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/20 dark:bg-slate-900/40 backdrop-blur-xl border border-white/30 mb-8 animate-float">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse"></span>
            <span className="text-[10px] font-black tracking-[0.4em] text-white uppercase">{t.hero_badge}</span>
          </div>
          <h1 className="text-7xl md:text-[140px] font-outfit font-black tracking-tighter leading-[0.85] mb-8 text-white drop-shadow-2xl uppercase">
            {t.hero_title}<br />
            <span className="gradient-text-azure">{t.hero_title_accent}</span>
          </h1>
          <p className="text-white text-xl md:text-2xl max-w-3xl mx-auto mb-12 font-medium leading-relaxed drop-shadow-lg opacity-90 px-4">
            {t.hero_desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#booking" className="group px-12 py-6 bg-sky-600 text-white font-black rounded-[30px] shadow-2xl hover:bg-slate-900 transition-all flex items-center gap-3 text-sm tracking-widest">
              {t.hero_btn} <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
            <a href="#about" className="px-12 py-6 bg-white/20 backdrop-blur-md text-white border border-white/40 font-black rounded-[30px] hover:bg-white/30 transition-all text-sm tracking-widest uppercase">
              {t.hero_specs}
            </a>
          </div>
        </motion.div>
      </section>

      {/* --- SPECS BANNER --- */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {specsData.map((spec, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 text-sky-500 mb-4 flex items-center justify-center shadow-sm border border-slate-100 dark:border-slate-700 transition-all group-hover:-translate-y-1">
                  {spec.icon}
                </div>
                <p className="text-[9px] font-black tracking-widest text-slate-400 mb-1">{t.specs[i]}</p>
                <p className="text-sm font-black text-slate-900 dark:text-white">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-48 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[700px] rounded-[60px] overflow-hidden shadow-2xl ring-1 ring-slate-200 dark:ring-slate-800"
          >
            <Image src={getImagePath("/images/real_heli_landing.jpg")} alt="Ops" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
            <div className="absolute bottom-10 left-10 frost-glass p-8 rounded-[40px] max-w-sm">
              <div className="flex items-center gap-2 mb-2 text-sky-600 dark:text-sky-400 font-black text-[10px] uppercase tracking-widest">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> LIVE INFRA
              </div>
              <p className="text-xl font-outfit font-black text-slate-900 dark:text-white leading-tight">5 Min to Centro.</p>
            </div>
          </motion.div>

          <div className="relative">
            <span className="text-sky-600 font-bold tracking-[0.4em] uppercase text-[10px] mb-8 block">{lang === 'pl' ? 'O NAS' : 'ABOUT'}</span>
            <h2 className="text-6xl md:text-8xl font-outfit font-black tracking-tighter mb-10 leading-[0.9] text-slate-950 dark:text-white">
              {t.about_title}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-xl font-medium leading-relaxed mb-12">
              {t.about_desc}
            </p>
            <div className="grid sm:grid-cols-2 gap-10">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-950 dark:bg-sky-600 text-white flex items-center justify-center"><Waves size={24} /></div>
                <h4 className="font-black text-xs text-slate-950 dark:text-white uppercase">{lang === 'pl' ? 'Stolica Żeglarstwa' : 'Sailing Capital'}</h4>
                <p className="text-slate-500 text-sm">Strategic location between main lakes.</p>
              </div>
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-sky-500 text-white flex items-center justify-center"><Thermometer size={24} /></div>
                <h4 className="font-black text-xs text-slate-950 dark:text-white uppercase">{lang === 'pl' ? 'Ogrzewany Hangar' : 'Heated Hangar'}</h4>
                <p className="text-slate-500 text-sm">Safe and warm storage for your machine.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="services" className="py-48 bg-slate-50 dark:bg-slate-900/30 px-6 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-28">
            <span className="text-sky-600 font-black tracking-[0.5em] uppercase text-[10px] mb-8 block">{t.pricing_title}</span>
            <h2 className="text-6xl md:text-8xl font-outfit font-black tracking-tighter text-slate-950 dark:text-white">OPS PRICING.</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-12">
            {pricingData.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -20 }}
                className={`p-16 rounded-[60px] bg-white dark:bg-slate-900 shadow-2xl transition-all duration-500 flex flex-col items-center text-center ${item.highlight ? 'ring-2 ring-sky-500 scale-105 z-10' : 'opacity-90'}`}
              >
                <div className="w-16 h-16 rounded-3xl bg-slate-50 dark:bg-slate-800 text-sky-600 mb-10 flex items-center justify-center">
                  {idx === 0 ? <CloudSun size={32} /> : idx === 1 ? <Clock size={32} /> : <Layers size={32} />}
                </div>
                <h4 className="text-[10px] font-black tracking-widest text-slate-400 mb-4 uppercase">{item.title}</h4>
                <div className="flex items-baseline gap-2 mb-10">
                  <span className="text-7xl font-outfit font-black text-slate-950 dark:text-white">{item.price}</span>
                  <span className="text-lg font-black text-slate-400">{item.unit}</span>
                </div>
                <button className={`w-full py-6 rounded-3xl font-black text-[11px] tracking-widest transition-all ${item.highlight ? 'bg-sky-600 text-white' : 'bg-slate-950 dark:bg-slate-800 text-white'}`}>
                  {t.pricing_btn}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- REALITY VIEW --- */}
      <section id="gallery" className="py-48 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-outfit font-black tracking-tighter text-slate-950 dark:text-white mb-24">GALLERY.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {galleryItems.map((img, i) => (
              <motion.div key={i} whileHover={{ scale: 0.98 }} className="group relative h-[450px] rounded-[50px] overflow-hidden cursor-pointer shadow-xl bg-slate-100 dark:bg-slate-900">
                <Image src={getImagePath(img.src)} fill alt={img.label} className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-12 flex items-end">
                  <p className="text-sky-400 font-black tracking-widest uppercase text-xs">Reality View • {img.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT & FOOTER --- */}
      <section id="contact" className="py-48 px-6 bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32">
          <div>
            <h2 className="text-6xl md:text-8xl font-outfit font-black text-slate-950 dark:text-white mb-16 tracking-tighter uppercase">{t.contact_title}</h2>
            <div className="space-y-12">
              <div className="flex gap-8 items-center group cursor-pointer">
                <div className="w-16 h-16 rounded-[25px] bg-slate-900 dark:bg-sky-600 text-white flex shrink-0 items-center justify-center transition-colors shadow-xl"><Phone size={28} /></div>
                <p className="text-3xl font-black text-slate-900 dark:text-white">+48 607 241 090</p>
              </div>
              <div className="flex gap-8 items-center group cursor-pointer">
                <div className="w-16 h-16 rounded-[25px] bg-sky-500 text-white flex shrink-0 items-center justify-center transition-colors shadow-xl"><Mail size={28} /></div>
                <p className="text-2xl font-black text-slate-900 dark:text-white break-all">biuro@helipadmazury.pl</p>
              </div>
              <div className="flex gap-8 items-center group cursor-pointer">
                <div className="w-16 h-16 rounded-[25px] bg-sky-100 dark:bg-slate-800 text-sky-600 flex shrink-0 items-center justify-center transition-colors shadow-sm"><MapPin size={28} /></div>
                <p className="text-2xl font-black text-slate-900 dark:text-white">{t.contact_address}</p>
              </div>
            </div>
          </div>
          <div className="relative h-[600px] rounded-[70px] overflow-hidden shadow-2xl">
            <Image src={getImagePath("/images/real_night.jpg")} fill alt="Night View" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 p-16 flex items-end">
              <p className="text-3xl font-outfit font-black text-white leading-tight">Precyzja to nasz standard.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 bg-white dark:bg-slate-900 px-6 border-t border-slate-100 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400 text-sm font-medium mb-10 max-w-sm mx-auto">{t.footer_desc}</p>
          <div className="w-20 h-[2px] bg-sky-500 mx-auto mb-10"></div>
          <p className="text-[10px] font-black tracking-[0.4em] text-slate-300 dark:text-slate-700 uppercase">© 2026 HELIPAD GIŻYCKO • FUTURE READY</p>
        </div>
      </footer>
    </main>
  );
}
