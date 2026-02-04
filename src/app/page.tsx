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
    { icon: <Navigation size={20} />, label: "CALLSIGN", value: "EPGH" },
    { icon: <Radio size={20} />, label: "FREQUENCY", value: "118.775 MHz" },
    { icon: <MapPin size={20} />, label: "COORDS", value: "54°02'05\"N 21°47'59\"E" },
    { icon: <Maximize size={20} />, label: "FATO", value: "25 x 25 m" },
    { icon: <Ruler size={20} />, label: "ELEVATION", value: "406 FT" },
    { icon: <Compass size={20} />, label: "RWY HEAD", value: "270° / 090°" },
  ];

  const pricing = [
    { title: "DAY LANDING", price: "100", unit: "PLN", desc: "Standard daylight approach with full ground support." },
    { title: "NIGHT LANDING", price: "200", unit: "PLN", desc: "Precision lighting and advanced monitoring for nightOps.", highlight: true },
    { title: "HANGARAGE", price: "200", unit: "PLN/DAY", desc: "Premium heated and monitored shelter for your aircraft." }
  ];

  const gallery = [
    { src: "/images/real_aerial.jpg", title: "Aerial EPGH", desc: "View of the landing spot from north" },
    { src: "/images/real_heli_landing.jpg", title: "Touchdown", desc: "Executive helicopter landing" },
    { src: "/images/real_hangar.jpg", title: "Secure Hangar", desc: "Heated storage facilities" },
    { src: "/images/real_fleet.jpg", title: "Our Fleet", desc: "Ready for mission anytime" },
    { src: "/images/real_night.jpg", title: "Night Operations", desc: "Fully high-lume illumination" },
    { src: "/images/real_fleet.jpg", title: "Logistics Hub", desc: "Near Route 63 connection" },
  ];

  return (
    <main ref={containerRef} className="flex flex-col bg-white">
      {/* Hero Masterpiece Section */}
      <section className="relative h-screen w-full flex items-center justify-center p-6 overflow-hidden">
        <motion.div
          style={{ scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/mazury_aerial.png"
            alt="Mazury Aerial 2026 Masterpiece"
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
            <span className="text-[11px] font-black tracking-[0.4em] text-sky-900 uppercase">MAZURY AEROTERMINAL 2026</span>
          </div>
          <h1 className="text-7xl md:text-[140px] font-outfit font-black tracking-tighter leading-[0.8] mb-10 text-slate-950 drop-shadow-xl">
            LEGENDARY<br />
            <span className="gradient-text-azure">LAKESIDE OPS</span>
          </h1>
          <p className="text-slate-700 text-xl md:text-2xl max-w-4xl mx-auto mb-16 font-semibold leading-relaxed drop-shadow-sm px-4">
            The most advanced private landing infrastructure in Giżycko.
            Direct connectivity, 24/7 technical support, and premium safety since the beginning.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#booking" className="group px-12 py-6 bg-slate-950 text-white font-black rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-sky-600 hover:scale-110 active:scale-95 transition-all flex items-center gap-3 text-sm tracking-widest">
              BOOK YOUR SLOT <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
            <a href="#about" className="px-12 py-6 bg-white/80 backdrop-blur-md text-slate-950 border border-slate-200 font-black rounded-3xl shadow-xl hover:shadow-2xl transition-all text-sm tracking-widest">
              EPGH SPECS
            </a>
          </div>
        </motion.div>
      </section>

      {/* Technical Specs Banner */}
      <section className="py-20 bg-slate-50 border-y border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {specs.map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-6 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-2 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-500 mb-4 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-colors shadow-inner">
                  {spec.icon}
                </div>
                <p className="text-[10px] font-black tracking-widest text-slate-400 mb-1">{spec.label}</p>
                <p className="text-sm font-black text-slate-900">{spec.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Real Context */}
      <section id="about" className="py-48 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[700px] rounded-[60px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] ring-1 ring-slate-100"
          >
            <Image
              src="/images/real_heli_landing.jpg"
              alt="Real Helipad Giżycko Operation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-12 left-12 frost-glass p-8 rounded-[40px] mr-12">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
                <span className="font-black text-xs tracking-widest uppercase">LIVE INFRASTRUCTURE</span>
              </div>
              <h3 className="text-2xl font-outfit font-black mb-3">5 Minutes to downtown.</h3>
              <p className="text-slate-600 text-sm font-semibold max-w-xs uppercase leading-loose tracking-wider">Located at Route 63 bypass. Fast-access to the heart of the sailing capital of Poland.</p>
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-sky-100 rounded-full blur-[100px] -z-10 opacity-60"></div>
            <span className="text-sky-600 font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block ml-1">ABOUT THE PORT</span>
            <h2 className="text-6xl md:text-8xl font-outfit font-black tracking-tighter mb-10 leading-[0.9]">
              MAZURY<br />PIONEERS.
            </h2>
            <p className="text-slate-600 text-xl font-medium leading-relaxed mb-12">
              Mazury Helipad w Giżycku to profesjonalny port lotniczy EPGH, całkowicie oświetlony i monitorowany.
              Położenie przy głównej trasie tranzytowej Mazur gwarantuje bezproblemowy logistyczny transfer dla pasażerów i załóg.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-slate-950 text-white flex shrink-0 items-center justify-center shadow-2xl">
                  <Waves size={24} />
                </div>
                <div>
                  <h4 className="font-black text-xs tracking-widest uppercase mb-2">SAILING CAPITAL PORT</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Giżycko sits between Kisajno and Niegocin lakes, placing our heliport at the strategic center of the Great Masurian Lakes trail.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-sky-500 text-white flex shrink-0 items-center justify-center shadow-2xl shadow-sky-200">
                  <Thermometer size={24} />
                </div>
                <div>
                  <h4 className="font-black text-xs tracking-widest uppercase mb-2">CLIMATE CONTROLLED STORAGE</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Ogrzewany i monitorowany hangar dla Twojej maszyny. Każdy postój powyżej 24h obejmuje pełne wsparcie naziemne.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Services Section */}
      <section id="services" className="py-48 bg-slate-50 border-y border-slate-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-24">
            <span className="text-sky-600 font-black tracking-[0.5em] uppercase text-[10px] mb-6">TRANSPARENCY</span>
            <h2 className="text-6xl md:text-8xl font-outfit font-black tracking-tighter mb-8 text-slate-950">LANDING OPS.</h2>
            <div className="w-24 h-2 bg-sky-500 rounded-full mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {pricing.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -25, scale: 1.02 }}
                className={`relative p-16 rounded-[50px] shadow-2xl transition-all duration-700 flex flex-col items-center text-center overflow-hidden ${item.highlight ? 'bg-white ring-1 ring-slate-200' : 'bg-white opacity-80'}`}
              >
                {item.highlight && (
                  <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-r from-sky-400 to-sky-600"></div>
                )}
                <div className="w-16 h-16 rounded-3xl bg-slate-50 flex items-center justify-center mb-10 text-sky-600 shadow-inner">
                  {idx === 0 ? <CloudSun size={32} /> : idx === 1 ? <Clock size={32} /> : <Layers size={32} />}
                </div>
                <h4 className="text-xs font-black tracking-[0.4em] text-slate-400 mb-4 uppercase">{item.title}</h4>
                <div className="flex items-baseline gap-2 mb-10">
                  <span className="text-7xl font-outfit font-black text-slate-950">{item.price}</span>
                  <span className="text-lg font-black text-slate-400">{item.unit}</span>
                </div>
                <p className="text-slate-500 font-bold text-sm leading-relaxed mb-12 h-12 uppercase tracking-wide">{item.desc}</p>

                <div className="w-full space-y-6 mb-16 pt-10 border-t border-slate-100 flex flex-col items-center">
                  <div className="flex items-center gap-4 text-xs font-black text-slate-500 tracking-wider uppercase"><CheckCircle2 size={18} className="text-sky-500" /> Ground Handling</div>
                  <div className="flex items-center gap-4 text-xs font-black text-slate-500 tracking-wider uppercase"><CheckCircle2 size={18} className="text-sky-500" /> Weather Intelligence</div>
                  <div className="flex items-center gap-4 text-xs font-black text-slate-500 tracking-wider uppercase"><CheckCircle2 size={18} className="text-sky-500" /> Direct Crew Support</div>
                </div>

                <a href="#booking" className={`w-full py-6 rounded-3xl font-black text-[11px] tracking-[0.2em] transition-all shadow-xl ${item.highlight ? 'bg-sky-600 text-white hover:bg-slate-950 shadow-sky-100' : 'bg-slate-950 text-white hover:bg-sky-600 shadow-slate-200'}`}>
                  SELECT SLOT
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Showcase - Real Images */}
      <section id="gallery" className="py-48 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div>
              <span className="text-sky-600 font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block">GALLERY</span>
              <h2 className="text-6xl md:text-8xl font-outfit font-black tracking-tighter text-slate-950 leading-none">REALITY VIEW.</h2>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-sm font-black text-slate-900 leading-none mb-1">LIVE CAM</p>
                <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">COMING SOON Q3 2026</p>
              </div>
              <button className="p-6 bg-slate-50 rounded-full hover:bg-sky-100 transition-colors border border-slate-100">
                <Maximize size={24} className="text-slate-900" />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {gallery.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 0.98 }}
                className="group relative h-[450px] rounded-[40px] overflow-hidden cursor-pointer shadow-xl bg-slate-100"
              >
                <Image
                  src={img.src}
                  fill
                  alt={img.title}
                  className="object-cover group-hover:scale-110 transition-transform duration-1000 origin-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-10">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="font-outfit font-black text-2xl text-white mb-2">{img.title}</h4>
                    <p className="text-xs font-bold text-sky-300 tracking-widest uppercase">{img.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Interactivity: Booking System */}
      <section id="booking" className="py-32 px-6 bg-white relative">
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-50 rounded-[60px] p-12 md:p-24 border border-slate-200 shadow-inner relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-sky-200/30 rounded-full blur-3xl -z-10"></div>

            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-outfit font-black tracking-tighter mb-4 text-slate-950">RESERVE SLOT.</h2>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-12">FULLY SECURE ENCRYPTED TERMINAL</p>

              <div className="flex justify-center gap-4 mb-16">
                {[0, 1, 2].map(step => (
                  <div key={step} className={`w-16 h-1 rounded-full ${formStep >= step ? 'bg-sky-500' : 'bg-slate-200'} transition-all duration-500`}></div>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              {formStep === 0 && (
                <motion.div
                  key="step0"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="grid md:grid-cols-2 gap-8"
                >
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">PILOT IN COMMAND</label>
                    <div className="relative group">
                      <Users className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-sky-500 transition-colors" size={20} />
                      <input type="text" placeholder="Full Name" className="w-full pl-16 pr-8 py-6 bg-white border border-slate-100 rounded-3xl outline-none focus:ring-4 focus:ring-sky-100 transition-all font-black text-xs" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">CONTACT FREQUENCY</label>
                    <div className="relative group">
                      <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-sky-500 transition-colors" size={20} />
                      <input type="tel" placeholder="Phone Number" className="w-full pl-16 pr-8 py-6 bg-white border border-slate-100 rounded-3xl outline-none focus:ring-4 focus:ring-sky-100 transition-all font-black text-xs" />
                    </div>
                  </div>
                  <div className="md:col-span-2 mt-8">
                    <button onClick={() => setFormStep(1)} className="w-full py-8 bg-slate-950 text-white rounded-3xl font-black text-xs tracking-widest shadow-2xl hover:bg-sky-600 transition-all active:scale-95">
                      CONTINUE TO FLIGHT DETAILS
                    </button>
                  </div>
                </motion.div>
              )}
              {formStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="grid md:grid-cols-2 gap-8"
                >
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">LANDING DATE</label>
                    <div className="relative group">
                      <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-sky-500 transition-colors" size={20} />
                      <input type="date" className="w-full pl-16 pr-8 py-6 bg-white border border-slate-100 rounded-3xl outline-none focus:ring-4 focus:ring-sky-100 transition-all font-black text-xs" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">ESTIMATED TIME (ETA)</label>
                    <div className="relative group">
                      <Clock className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-sky-500 transition-colors" size={20} />
                      <input type="time" className="w-full pl-16 pr-8 py-6 bg-white border border-slate-100 rounded-3xl outline-none focus:ring-4 focus:ring-sky-100 transition-all font-black text-xs" />
                    </div>
                  </div>
                  <div className="flex gap-4 mt-8">
                    <button onClick={() => setFormStep(0)} className="px-10 py-8 bg-white border border-slate-200 rounded-3xl font-black text-xs text-slate-400 hover:text-slate-900 transition-all">BACK</button>
                    <button onClick={() => setFormStep(2)} className="flex-1 py-8 bg-slate-950 text-white rounded-3xl font-black text-xs tracking-widest shadow-2xl hover:bg-sky-600 transition-all">FINAL REVIEW</button>
                  </div>
                </motion.div>
              )}
              {formStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className="w-24 h-24 bg-sky-100 text-sky-500 rounded-full flex items-center justify-center mx-auto mb-10 shadow-inner">
                    <Send size={40} className="animate-float" />
                  </div>
                  <h3 className="text-3xl font-outfit font-black mb-4">READY TO DISPATCH?</h3>
                  <p className="text-slate-500 font-bold mb-12">Your landing request will be sent directly to EPGH Tower.</p>
                  <div className="flex gap-4">
                    <button onClick={() => setFormStep(1)} className="px-10 py-8 bg-white border border-slate-200 rounded-3xl font-black text-xs text-slate-400 hover:text-slate-900 transition-all">EDIT</button>
                    <button onClick={() => { alert("Slot reserved! Tower will contact you shortly."); setFormStep(0); }} className="flex-1 py-8 bg-sky-600 text-white rounded-3xl font-black text-xs tracking-widest shadow-2xl shadow-sky-100 hover:bg-slate-950 transition-all">TRANSMIT REQUEST</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Modern Contact Section */}
      <section id="contact" className="py-40 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div className="flex flex-col justify-center">
            <span className="text-sky-600 font-black tracking-[0.5em] uppercase text-[10px] mb-8 block">DIRECT COMMS</span>
            <h2 className="text-6xl font-outfit font-black text-slate-950 mb-12 tracking-tighter">COULDN'T FIND<br />WHAT YOU NEED?</h2>

            <div className="space-y-12">
              <div className="flex gap-10 items-center group cursor-pointer">
                <div className="w-20 h-20 rounded-[35px] bg-slate-950 text-white flex shrink-0 items-center justify-center shadow-2xl group-hover:bg-sky-600 transition-colors"><Phone size={32} /></div>
                <div>
                  <p className="text-[11px] text-slate-400 font-black uppercase tracking-[0.3em] mb-2">HOTLINE 24/7</p>
                  <p className="text-3xl font-black text-slate-900">+48 607 241 090</p>
                </div>
              </div>
              <div className="flex gap-10 items-center group cursor-pointer">
                <div className="w-20 h-20 rounded-[35px] bg-sky-500 text-white flex shrink-0 items-center justify-center shadow-2xl shadow-sky-200 group-hover:bg-slate-950 transition-colors"><Mail size={32} /></div>
                <div>
                  <p className="text-[11px] text-slate-400 font-black uppercase tracking-[0.3em] mb-2">E-MAIL OPS</p>
                  <p className="text-3xl font-black text-slate-900 underline decoration-sky-300 underline-offset-[12px]">biuro@helipadmazury.pl</p>
                </div>
              </div>
              <div className="flex gap-10 items-center group cursor-pointer">
                <div className="w-20 h-20 rounded-[35px] bg-sky-100 text-sky-600 flex shrink-0 items-center justify-center shadow-xl group-hover:bg-sky-200 transition-colors"><MapPin size={32} /></div>
                <div>
                  <p className="text-[11px] text-slate-400 font-black uppercase tracking-[0.3em] mb-2">HQ ADDRESS</p>
                  <p className="text-3xl font-black text-slate-900">ul. Sybiraków 28, Giżycko</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[800px] rounded-[60px] overflow-hidden shadow-2xl ring-1 ring-slate-100">
            <Image src="/images/real_night.jpg" fill alt="Giżycko Night Helipad" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-20">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500 mb-6 font-black text-[9px] text-white tracking-widest uppercase">AIRPORT STATUS: OPEN</div>
                <h4 className="text-4xl font-outfit font-black text-white mb-4">Precision is not an option.<br />It is our standard.</h4>
                <p className="text-sky-300 font-bold tracking-widest text-[10px] uppercase">MAZURY AEROTERMINAL SYSTEM • 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
