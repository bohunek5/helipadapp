"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Thermometer, MapPin, Compass, Waves, Wind, ArrowRight, CheckCircle2, Phone, Mail } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const pricing = [
    { title: "DAY LANDING", price: "100", unit: "PLN", desc: "Standard daylight approach with full ground support." },
    { title: "NIGHT LANDING", price: "200", unit: "PLN", desc: "Precision lighting and advanced monitoring for nightOps.", highlight: true },
    { title: "HANGARAGE", price: "200", unit: "PLN/DAY", desc: "Premium heated and monitored shelter for your aircraft." }
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
            alt="Mazury Aerial 2026"
            fill
            className="object-cover hero-mask"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center max-w-5xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/30 backdrop-blur-md border border-white/50 mb-8 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
            <span className="text-[10px] font-black tracking-[0.3em] text-sky-900 uppercase">MAZURY FROM ABOVE 2026</span>
          </div>
          <h1 className="text-6xl md:text-[120px] font-outfit font-black tracking-tighter leading-[0.85] mb-8 text-slate-900 drop-shadow-sm">
            ELEVATED<br />
            <span className="gradient-text-azure">EXPERIENCE</span>
          </h1>
          <p className="text-slate-600 text-lg md:text-2xl max-w-3xl mx-auto mb-12 font-medium leading-relaxed drop-shadow-sm">
            Experience the breathtaking beauty of Mazury from a different perspective.
            Giżycko's most advanced helicopter port — EPGH.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group px-10 py-5 bg-slate-900 text-white font-black rounded-2xl shadow-2xl shadow-slate-300 hover:bg-sky-600 hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
              RESERVE YOUR SLOT <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 bg-white text-slate-900 border border-slate-200 font-bold rounded-2xl shadow-lg hover:shadow-2xl transition-all">
              EXPLORE FACILITIES
            </button>
          </div>
        </motion.div>
      </section>

      {/* About / Location Section */}
      <section id="about" className="py-40 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-[40px] overflow-hidden shadow-2xl animate-float"
          >
            <Image
              src="/images/helipad_day.png"
              alt="Modern Helipad Giżycko"
              fill
              className="object-cover"
            />
            <div className="absolute top-8 left-8 frost-glass p-6 rounded-3xl">
              <div className="flex items-center gap-3 mb-2">
                <Compass className="text-sky-600" />
                <span className="font-black text-xs tracking-widest uppercase">LOCATION PRECISION</span>
              </div>
              <p className="text-lg font-outfit font-black">54.0305° N, 21.7645° E</p>
            </div>
          </motion.div>

          <div>
            <span className="text-sky-600 font-black tracking-[0.4em] uppercase text-xs mb-6 block">PREMIUM HUB</span>
            <h2 className="text-5xl md:text-7xl font-outfit font-black tracking-tighter mb-8 leading-none">
              GIŻYCKO'S<br />NEW STANDARD.
            </h2>
            <p className="text-slate-500 text-xl font-medium leading-relaxed mb-12">
              Situated right next to the city bypass (Route 63), our helipad offers instant access to the heart of Giżycko in just 5 minutes.
              Whether it's leisure or business, we ensure you land in style and security.
            </p>

            <div className="grid sm:grid-cols-2 gap-10">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-600">
                  <Shield size={24} />
                </div>
                <h4 className="font-black text-sm tracking-widest uppercase">24/7 MONITORING</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Continuous surveillance with advanced AI-integrated thermal systems.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-600">
                  <Thermometer size={24} />
                </div>
                <h4 className="font-black text-sm tracking-widest uppercase">CLIMATE CONTROL</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Heated hangar space providing perfect conditions all year round.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section (Interative Cards) */}
      <section id="services" className="py-40 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-outfit font-black tracking-tighter mb-4 text-slate-900 text-center">TRANSPARENT PRICING.</h2>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">NO HIDDEN COSTS • PRE-BOOKING AVAILABLE</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {pricing.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -20 }}
                className={`relative p-12 rounded-[40px] shadow-xl transition-all duration-500 flex flex-col items-center text-center ${item.highlight ? 'bg-white premium-shadow ring-4 ring-sky-100' : 'bg-transparent border border-slate-200'}`}
              >
                {item.highlight && (
                  <div className="absolute -top-5 px-6 py-2 bg-sky-600 text-white font-black text-[10px] tracking-widest rounded-full uppercase">
                    MOST POPULAR
                  </div>
                )}
                <h4 className="text-xs font-black tracking-[0.3em] text-slate-400 border-b border-slate-200 pb-4 mb-8 w-full uppercase">{item.title}</h4>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-6xl font-outfit font-black text-slate-900">{item.price}</span>
                  <span className="text-lg font-black text-slate-400">{item.unit}</span>
                </div>
                <p className="text-slate-500 font-medium text-sm leading-relaxed mb-10 h-12">{item.desc}</p>

                <div className="w-full space-y-4 mb-12">
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-400"><CheckCircle2 size={16} className="text-sky-500" /> Ground Handling</div>
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-400"><CheckCircle2 size={16} className="text-sky-500" /> Weather Briefing</div>
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-400"><CheckCircle2 size={16} className="text-sky-500" /> Instant Access</div>
                </div>

                <button className={`w-full py-5 rounded-2xl font-black text-xs tracking-widest transition-all ${item.highlight ? 'bg-sky-600 text-white hover:bg-sky-700' : 'bg-slate-900 text-white hover:bg-sky-600'}`}>
                  BOOK THIS SLOT
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section id="gallery" className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-5xl md:text-7xl font-outfit font-black tracking-tighter text-slate-900">VISUAL HORIZON.</h2>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mt-2">OUR FLEET AND FACILITIES THROUGH THE LENS</p>
            </div>
            <button className="px-8 py-4 bg-white border border-slate-200 font-black text-xs tracking-widest rounded-full hover:bg-sky-50 transition-all">
              VIEW FULL GALLERY
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[600px] rounded-[30px] overflow-hidden group cursor-pointer shadow-2xl">
              <Image src="/images/mazury_aerial.png" fill alt="Mazury" className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-12">
                <div className="text-white">
                  <h4 className="font-outfit font-black text-3xl">Lakescape</h4>
                  <p className="text-sm font-medium text-white/70">Giżycko area aerial view</p>
                </div>
              </div>
            </div>
            <div className="grid gap-8">
              <div className="relative h-[284px] rounded-[30px] overflow-hidden group cursor-pointer shadow-xl">
                <Image src="/images/helipad_day.png" fill alt="Hangar" className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <span className="text-white font-bold tracking-widest text-xs uppercase underline underline-offset-8 decoration-sky-400">DETAIL VIEW</span>
                </div>
              </div>
              <div className="relative h-[284px] rounded-[30px] overflow-hidden group cursor-pointer shadow-xl bg-slate-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full border-2 border-sky-500 border-t-transparent animate-spin mx-auto mb-4"></div>
                  <p className="text-white/50 text-xs font-bold uppercase tracking-[0.2em]">Loading Live Feed...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Contact Section */}
      <section id="contact" className="pb-40 px-6">
        <div className="max-w-5xl mx-auto rounded-[50px] bg-slate-900 p-12 md:p-24 overflow-hidden relative shadow-2xl">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-sky-600 rounded-full blur-[120px] opacity-20"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-slate-100 rounded-full blur-[100px] opacity-10"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl font-outfit font-black text-white mb-8">GET IN TOUCH.</h2>
              <div className="space-y-12">
                <div className="flex gap-6 items-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 shadow-xl"><Phone size={28} /></div>
                  <div>
                    <p className="text-[10px] text-white/40 font-black uppercase tracking-[0.2em] mb-1">Direct Terminal</p>
                    <p className="text-2xl font-black text-white">+48 607 241 090</p>
                  </div>
                </div>
                <div className="flex gap-6 items-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 shadow-xl"><Mail size={28} /></div>
                  <div>
                    <p className="text-[10px] text-white/40 font-black uppercase tracking-[0.2em] mb-1">E-mail Ops</p>
                    <p className="text-2xl font-black text-white px-2">biuro@helipadmazury.pl</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[40px] shadow-2xl">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block ml-2">WHO IS CONTACTING US?</label>
                  <input type="text" className="w-full bg-slate-50 border-none rounded-2xl p-5 text-sm font-bold focus:ring-2 focus:ring-sky-500 transition-all outline-none" placeholder="Pilot Name / Company" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block ml-2">AIRCRAFT CALLSIGN (OPTIONAL)</label>
                  <input type="text" className="w-full bg-slate-50 border-none rounded-2xl p-5 text-sm font-bold focus:ring-2 focus:ring-sky-500 transition-all outline-none" placeholder="SP-FLY" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block ml-2">MESSAGE</label>
                  <textarea rows={3} className="w-full bg-slate-50 border-none rounded-2xl p-5 text-sm font-bold focus:ring-2 focus:ring-sky-500 transition-all outline-none resize-none" placeholder="Describe your request..."></textarea>
                </div>
                <button className="w-full py-6 bg-sky-600 text-white font-black text-xs tracking-widest rounded-2xl shadow-xl shadow-sky-100 hover:bg-slate-900 transition-all active:scale-95">
                  SEND REQUEST
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
