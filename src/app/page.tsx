"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Shield, Thermometer, MapPin, Compass, Waves,
  Wind, ArrowRight, CheckCircle2, Phone, Mail,
  Radio, Navigation, Maximize, Ruler, CloudSun,
  Layers, Users, Calendar, Clock, Send
} from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

// Helper for GitHub Pages image paths
const getImagePath = (path: string) => `/helipadapp${path}`;

export default function Home() {
  const containerRef = useRef(null);
  const [formStep, setFormStep] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const specs = [
    { icon: <Navigation size={20} />, label: "ZNAK WYWOŁAWCZY", value: "EPGH" },
    { icon: <Radio size={20} />, label: "CZĘSTOTLIWOŚĆ", value: "118.775 MHz" },
    { icon: <MapPin size={20} />, label: "WSPÓŁRZĘDNE", value: "54°02'05\"N 21°47'59\"E" },
    { icon: <Maximize size={20} />, label: "FATO", value: "25 x 25 m" },
    { icon: <Ruler size={20} />, label: "ELEWACJA", value: "406 FT" },
    { icon: <Compass size={20} />, label: "KIERUNKI", value: "270° / 090°" },
  ];

  const pricing = [
    { title: "LĄDOWANIE DZIEŃ", price: "100", unit: "PLN", desc: "Standardowe podejście w świetle dziennym z pełną obsługą naziemną." },
    { title: "LĄDOWANIE NOC", price: "200", unit: "PLN", desc: "Precyzyjne oświetlenie i zaawansowany monitoring dla operacji nocnych.", highlight: true },
    { title: "HANGAROWANIE", price: "200", unit: "PLN/DOBA", desc: "Premium ogrzewane i monitorowane miejsce dla Twojej maszyny." }
  ];

  const gallery = [
    { src: "/images/real_aerial.jpg", title: "EPGH z góry", desc: "Widok na lądowisko od strony północnej" },
    { src: "/images/real_heli_landing.jpg", title: "Przyziemienie", desc: "Śmigłowiec korporacyjny podczas lądowania" },
    { src: "/images/real_hangar.jpg", title: "Bezpieczny Hangar", desc: "Ogrzewana i monitorowana przestrzeń" },
    { src: "/images/real_fleet.jpg", title: "Nasza Flota", desc: "Gotowość do misji w każdych warunkach" },
    { src: "/images/real_night.jpg", title: "Operacje Nocne", desc: "Pełne oświetlenie nawigacyjne i lądowania" },
    { src: "/images/real_fleet.jpg", title: "Hub Logistyczny", desc: "Strategiczne połączenie z trasą 63" },
  ];

  return (
    <main ref={containerRef} className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center p-6 overflow-hidden">
        <motion.div
          style={{ scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={getImagePath("/images/mazury_aerial.png")}
            alt="Mazury z lotu ptaka 2026"
            fill
            className="object-cover hero-mask scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center max-w-6xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/40 backdrop-blur-xl border border-white/60 mb-10 shadow-2xl animate-float">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse shadow-[0_0_15px_rgba(14,165,233,0.8)]"></span>
            <span className="text-[11px] font-black tracking-[0.4em] text-sky-900 uppercase">MAZURSKI AEROTERMINAL 2026</span>
          </div>
          <h1 className="text-7xl md:text-[140px] font-outfit font-black tracking-tighter leading-[0.8] mb-10 text-slate-950 drop-shadow-xl">
            MAZURY Z LOTU<br />
            <span className="gradient-text-azure uppercase">Ptaka</span>
          </h1>
          <p className="text-slate-700 text-xl md:text-2xl max-w-4xl mx-auto mb-16 font-semibold leading-relaxed drop-shadow-sm px-4">
            Najbardziej zaawansowana infrastruktura lotnicza w Giżycku.
            Bezpośrednie połączenie, całodobowe wsparcie techniczne i standard bezpieczeństwa jutra.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#booking" className="group px-12 py-6 bg-slate-900 text-white font-black rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-sky-600 hover:scale-110 active:scale-95 transition-all flex items-center gap-3 text-sm tracking-widest">
              ZAREZERWUJ SLOT <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
            <a href="#about" className="px-12 py-6 bg-white/80 backdrop-blur-md text-slate-950 border border-slate-200 font-black rounded-3xl shadow-xl hover:shadow-2xl transition-all text-sm tracking-widest">
              SPECYFIKACJA EPGH
            </a>
          </div>
        </motion.div>
      </section>

      {/* Spec Banner */}
      <section className="py-20 bg-slate-50 border-y border-slate-200 lg:py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center items-center">
            {specs.map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center group cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl bg-white text-sky-500 mb-4 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-all shadow-sm border border-slate-100">
                  {spec.icon}
                </div>
                <p className="text-[9px] font-black tracking-widest text-slate-400 mb-1 uppercase">{spec.label}</p>
                <p className="text-sm font-black text-slate-900">{spec.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-48 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[700px] rounded-[60px] overflow-hidden shadow-2xl"
          >
            <Image
              src={getImagePath("/images/real_heli_landing.jpg")}
              alt="Operacje Helipad Giżycko"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <div className="absolute bottom-12 left-12 frost-glass p-8 rounded-[40px] mr-12 max-w-sm">
              <div className="flex items-center gap-3 mb-2 font-black text-xs text-sky-600">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> OBSŁUGA LIVE
              </div>
              <p className="text-xl font-outfit font-black text-slate-900 leading-tight">Dotrzyj do kurortów i hoteli w kilka minut.</p>
            </div>
          </motion.div>

          <div className="relative">
            <span className="text-sky-600 font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block ml-1 text-sky-500">O NAS</span>
            <h2 className="text-6xl md:text-8xl font-outfit font-black tracking-tighter mb-10 leading-[0.9]">
              PIONIERZY<br />MAZUR.
            </h2>
            <p className="text-slate-600 text-xl font-medium leading-relaxed mb-12">
              Mazury Helipad w Giżycku to profesjonalnie przygotowane lądowisko EPGH.
              Położenie przy obwodnicy Giżycka (trasa 63) gwarantuje szybki transfer do centrum miasta i okolicznych marin w zaledwie 5 minut.
            </p>

            <div className="grid sm:grid-cols-2 gap-10">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-lg"><Waves size={24} /></div>
                <h4 className="font-black text-xs tracking-widest uppercase text-slate-900">CENTRUM ŻEGLARSTWA</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Strategiczne położenie między jeziorami Kisajno i Niegocin.</p>
              </div>
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-sky-500 text-white flex items-center justify-center shadow-lg"><Thermometer size={24} /></div>
                <h4 className="font-black text-xs tracking-widest uppercase text-slate-900">OGRZEWANY HANGAR</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Bezpieczne i ciepłe schronienie dla Twojej maszyny przez cały rok.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="services" className="py-48 bg-slate-50 border-y border-slate-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-28">
            <span className="text-sky-600 font-black tracking-[0.5em] uppercase text-[10px] mb-8 block font-bold text-sky-500">CENNIK & USŁUGI</span>
            <h2 className="text-6xl md:text-8xl font-outfit font-black tracking-tighter text-slate-950">NASZA OFERTA.</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {pricing.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -20 }}
                className={`p-16 rounded-[60px] bg-white shadow-2xl transition-all duration-500 flex flex-col items-center text-center ${item.highlight ? 'ring-2 ring-sky-400 scale-105 z-10' : 'opacity-90'}`}
              >
                <div className="w-16 h-16 rounded-3xl bg-slate-50 text-sky-600 mb-10 flex items-center justify-center">
                  {idx === 0 ? <CloudSun size={32} /> : idx === 1 ? <Clock size={32} /> : <Layers size={32} />}
                </div>
                <h4 className="text-[10px] font-black tracking-[0.4em] text-slate-400 mb-4 uppercase">{item.title}</h4>
                <div className="flex items-baseline gap-2 mb-10">
                  <span className="text-7xl font-outfit font-black text-slate-950">{item.price}</span>
                  <span className="text-lg font-black text-slate-400">{item.unit}</span>
                </div>
                <p className="text-slate-500 font-bold text-sm tracking-wide lowercase mb-12 h-12 underline decoration-sky-100 underline-offset-8">{item.desc}</p>
                <button onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })} className={`w-full py-6 rounded-3xl font-black text-[11px] tracking-widest transition-all ${item.highlight ? 'bg-sky-600 text-white hover:bg-slate-950' : 'bg-slate-900 text-white hover:bg-sky-600'}`}>
                  WYBIERZ TERMIN
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-48 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div>
              <span className="text-sky-600 font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block font-bold text-sky-500">WIĘCEJ NIŻ LĄDOWISKO</span>
              <h2 className="text-6xl md:text-8xl font-outfit font-black tracking-tighter text-slate-950">GALERIA.</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {gallery.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 0.98 }}
                className="group relative h-[450px] rounded-[50px] overflow-hidden cursor-pointer shadow-xl"
              >
                <Image src={getImagePath(img.src)} fill alt={img.title} className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-12 flex items-end">
                  <div>
                    <h4 className="font-outfit font-black text-2xl text-white mb-2">{img.title}</h4>
                    <p className="text-xs font-bold text-sky-400 tracking-widest uppercase">{img.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form System */}
      <section id="booking" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-100 p-12 md:p-24 rounded-[70px] border border-slate-200 shadow-inner relative overflow-hidden">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-outfit font-black tracking-tighter mb-8 text-slate-950">REZERWUJ.</h2>
              <div className="flex justify-center gap-4">
                {[0, 1, 2].map(s => (
                  <div key={s} className={`w-12 h-1.5 rounded-full ${formStep >= s ? 'bg-sky-500' : 'bg-slate-300'} transition-all duration-500`}></div>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              {formStep === 0 && (
                <motion.div key="s0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="grid md:grid-cols-2 gap-8 text-left">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-5 block leading-none">DANE PILOTA / FIRMA</label>
                    <input type="text" placeholder="Imię, Nazwisko / Nazwa" className="w-full px-8 py-6 bg-white border border-slate-100 rounded-3xl outline-none focus:ring-4 focus:ring-sky-100 font-bold text-slate-900" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-5 block leading-none">TELEFON KONTAKTOWY</label>
                    <input type="tel" placeholder="+48 000 000 000" className="w-full px-8 py-6 bg-white border border-slate-100 rounded-3xl outline-none focus:ring-4 focus:ring-sky-100 font-bold text-slate-900" />
                  </div>
                  <button onClick={() => setFormStep(1)} className="md:col-span-2 py-8 bg-slate-900 text-white rounded-3xl font-black text-xs tracking-[0.2em] shadow-2xl hover:bg-sky-600 transition-all mt-6">DALEJ: SZCZEGÓŁY LOTU</button>
                </motion.div>
              )}
              {formStep === 1 && (
                <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="grid md:grid-cols-2 gap-8 text-left">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-5 block leading-none">DATA LĄDOWANIA</label>
                    <input type="date" className="w-full px-8 py-6 bg-white border border-slate-100 rounded-3xl outline-none focus:ring-4 focus:ring-sky-100 font-bold text-slate-900" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-5 block leading-none">GODZINA (ETA)</label>
                    <input type="time" className="w-full px-8 py-6 bg-white border border-slate-100 rounded-3xl outline-none focus:ring-4 focus:ring-sky-100 font-bold text-slate-900" />
                  </div>
                  <div className="md:col-span-2 flex gap-4 mt-6">
                    <button onClick={() => setFormStep(0)} className="px-10 py-8 bg-white text-slate-400 font-black text-xs rounded-3xl hover:text-slate-900 transition-colors">COFNIJ</button>
                    <button onClick={() => setFormStep(2)} className="flex-1 py-8 bg-slate-900 text-white rounded-3xl font-black text-xs tracking-widest shadow-2xl hover:bg-sky-600 transition-all">PODSUMOWANIE</button>
                  </div>
                </motion.div>
              )}
              {formStep === 2 && (
                <motion.div key="s2" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                  <div className="w-20 h-20 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mx-auto mb-10 shadow-inner">
                    <Send size={32} className="animate-float" />
                  </div>
                  <h3 className="text-3xl font-outfit font-black mb-4">GOTOWY DO WYŁANIA?</h3>
                  <p className="text-slate-500 font-bold mb-12">Zgłoszenie zostanie wysłane bezpośrednio do obsługi EPGH.</p>
                  <div className="flex gap-4">
                    <button onClick={() => setFormStep(1)} className="px-10 py-8 bg-white text-slate-400 font-black text-xs rounded-3xl hover:text-slate-900 transition-colors">EDYTUJ</button>
                    <button onClick={() => { alert("Zgłoszenie wysłane! Skontaktujemy się wkrótce."); setFormStep(0); }} className="flex-1 py-8 bg-sky-600 text-white rounded-3xl font-black text-xs tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-sky-100">WYŚLIJ REZERWACJĘ</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-48 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32">
          <div>
            <span className="text-sky-600 font-black tracking-[0.5em] uppercase text-[10px] mb-10 block ml-1 font-bold text-sky-500">KOMUNIKACJA</span>
            <h2 className="text-6xl md:text-8xl font-outfit font-black text-slate-950 mb-16 tracking-tighter leading-none">KONTAKT.</h2>

            <div className="space-y-16">
              <div className="flex gap-8 items-center group cursor-pointer hover:bg-slate-50 p-4 rounded-[40px] transition-all">
                <div className="w-20 h-20 rounded-[35px] bg-slate-900 text-white flex shrink-0 items-center justify-center shadow-xl group-hover:bg-sky-600 transition-colors"><Phone size={32} /></div>
                <div>
                  <p className="text-[11px] text-slate-400 font-black uppercase tracking-[0.3em] mb-2">INFOLINIA 24/7</p>
                  <p className="text-4xl font-black text-slate-900">+48 607 241 090</p>
                </div>
              </div>
              <div className="flex gap-8 items-center group cursor-pointer hover:bg-slate-50 p-4 rounded-[40px] transition-all">
                <div className="w-20 h-20 rounded-[35px] bg-sky-500 text-white flex shrink-0 items-center justify-center shadow-xl group-hover:bg-slate-950 transition-colors"><Mail size={32} /></div>
                <div>
                  <p className="text-[11px] text-slate-400 font-black uppercase tracking-[0.3em] mb-2">E-MAIL OPS</p>
                  <p className="text-3xl font-black text-slate-900 underline decoration-sky-300 underline-offset-[14px]">biuro@helipadmazury.pl</p>
                </div>
              </div>
              <div className="flex gap-8 items-center group cursor-pointer hover:bg-slate-50 p-4 rounded-[40px] transition-all">
                <div className="w-20 h-20 rounded-[35px] bg-slate-100 text-sky-600 flex shrink-0 items-center justify-center shadow-sm group-hover:bg-sky-200 transition-colors"><MapPin size={32} /></div>
                <div>
                  <p className="text-[11px] text-slate-400 font-black uppercase tracking-[0.3em] mb-2">NASZ ADRES</p>
                  <p className="text-3xl font-black text-slate-900">ul. Sybiraków 28, Giżycko</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[800px] rounded-[70px] overflow-hidden shadow-2xl">
            <Image src={getImagePath("/images/real_night.jpg")} fill alt="Giżycko Nocą Helipad" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 flex items-end p-16">
              <div className="text-white">
                <p className="text-sky-300 font-black text-[11px] tracking-[0.4em] uppercase mb-6">EPGH SYSTEM • 2026</p>
                <p className="text-4xl font-outfit font-black leading-tight tracking-tight">Precyzja nie jest opcją.<br />To nasz standard.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
