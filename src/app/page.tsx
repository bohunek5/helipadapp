"use client";

import { motion } from "framer-motion";
import { Shield, Thermometer, MapPin, Clock, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const services = [
    { title: "Lądowanie w Dzień", price: "100 PLN", desc: "Zawsze gotowi na Twój przylot." },
    { title: "Lądowanie w Nocy", price: "200 PLN", desc: "Oświetlone i bezpieczne lądowisko." },
    { title: "Hangar", price: "200 PLN / doba", desc: "Ogrzewany, monitorowany, bezpieczny." }
  ];

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Helipad Giżycko Hero"
            fill
            className="object-cover opacity-60 scale-105 animate-pulse-slow"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]" />
        </div>

        <motion.div
          className="relative z-10 text-center px-4"
          {...fadeIn}
        >
          <span className="text-[#25c0f4] text-sm font-bold tracking-[0.3em] uppercase mb-4 block glow-text">
            Standard 2026 — Lądowisko EPGH
          </span>
          <h1 className="text-5xl md:text-8xl font-outfit font-black tracking-tighter mb-6 gradient-text">
            MAZURY HELIPAD<br />GIŻYCKO
          </h1>
          <p className="text-titanium text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Twój port lotniczy w samym sercu Krainy Wielkich Jezior.
            Nowoczesna flota, ogrzewany hangar i 24-godzinny monitoring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#25c0f4] text-black font-black rounded-lg glow-border hover:brightness-110 transition-all">
              ZAREZERWUJ LĄDOWANIE
            </button>
            <button className="px-8 py-4 glass border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-all">
              ZOBACZ CENNIK
            </button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mb-6 text-[#25c0f4] glow-border">
              <Shield size={32} />
            </div>
            <h3 className="font-outfit font-bold text-xl mb-3">Monitoring 24/7</h3>
            <p className="text-secondary text-sm font-light">Twoja maszyna jest pod stałą opieką najnowocześniejszych systemów.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mb-6 text-[#25c0f4] glow-border">
              <Thermometer size={32} />
            </div>
            <h3 className="font-outfit font-bold text-xl mb-3">Ciepły Hangar</h3>
            <p className="text-secondary text-sm font-light">Ogrzewana hala serwisowa zapewniająca idealne warunki dla śmigłowca.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mb-6 text-[#25c0f4] glow-border">
              <MapPin size={32} />
            </div>
            <h3 className="font-outfit font-bold text-xl mb-3">Szybki Dojazd</h3>
            <p className="text-secondary text-sm font-light">Zaledwie 5 minut od absolutnego centrum Giżycka (obwodnica trasa 63).</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#050505] relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-outfit font-black mb-4">NASZ CENNIK</h2>
            <div className="w-20 h-1 bg-[#25c0f4] mx-auto glow-border"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="glass p-10 rounded-3xl border-white/5 group hover:border-[#25c0f4]/30 transition-all duration-500"
              >
                <h4 className="text-secondary text-xs font-bold uppercase tracking-widest mb-2">{service.title}</h4>
                <div className="text-4xl font-outfit font-black text-white mb-6 group-hover:text-[#25c0f4] transition-colors">{service.price}</div>
                <p className="text-titanium text-sm leading-relaxed mb-8">{service.desc}</p>
                <div className="h-px w-full bg-white/5 mb-8"></div>
                <ul className="text-xs text-secondary space-y-4">
                  <li className="flex items-center gap-2">✓ Bezpieczne podejście</li>
                  <li className="flex items-center gap-2">✓ Profesjonalna obsługa</li>
                  <li className="flex items-center gap-2">✓ Gwarancja rezerwacji</li>
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Highlight */}
      <section id="gallery" className="relative h-[600px] w-full mt-24">
        <Image
          src="/images/hangar.png"
          alt="Hangar Helipad"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/40 backdrop-blur-sm flex items-center justify-center">
          <div className="text-center px-4">
            <h2 className="text-4xl md:text-6xl font-outfit font-black mb-8">ELEGANCJA I TECHNOLOGIA</h2>
            <button className="px-10 py-5 glass border-white/10 hover:border-[#25c0f4] transition-all rounded-full font-bold">
              ZOBACZ PEŁNĄ GALERIĘ
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-4xl font-outfit font-black mb-8">KONTAKT</h2>
          <p className="text-titanium mb-12 font-light">
            Masz pytania dotyczące lądowania lub dostępności hangaru? Nasz zespół jest dostępny 24/7 dla pilotów i operatorów.
          </p>
          <div className="space-y-8">
            <div className="flex gap-6 items-center">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#25c0f4]"><Phone size={24} /></div>
              <div>
                <p className="text-[10px] text-secondary font-bold uppercase">Zadzwoń do nas</p>
                <p className="text-xl font-bold">607 241 090</p>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#25c0f4]"><Mail size={24} /></div>
              <div>
                <p className="text-[10px] text-secondary font-bold uppercase">Napisz e-mail</p>
                <p className="text-xl font-bold">biuro@helipadmazury.pl</p>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#25c0f4]"><MapPin size={24} /></div>
              <div>
                <p className="text-[10px] text-secondary font-bold uppercase">Lokalizacja EPGH</p>
                <p className="text-xl font-bold italic">ul. Sybiraków 28, Giżycko</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass p-10 rounded-3xl border-white/5">
          <form className="space-y-6">
            <div>
              <label className="text-xs font-bold text-secondary uppercase mb-2 block">Imię i Nazwisko</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:border-[#25c0f4] transition-all outline-none" placeholder="Jan Kowalski" />
            </div>
            <div>
              <label className="text-xs font-bold text-secondary uppercase mb-2 block">Twój E-mail</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:border-[#25c0f4] transition-all outline-none" placeholder="pilot@example.com" />
            </div>
            <div>
              <label className="text-xs font-bold text-secondary uppercase mb-2 block">Wiadomość</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:border-[#25c0f4] transition-all outline-none" placeholder="Zapytanie o miejsce w hangarze..."></textarea>
            </div>
            <button className="w-full py-5 bg-[#25c0f4] text-black font-black rounded-lg glow-border hover:brightness-110 transition-all">
              WYŚLIJ ZAPYTANIE
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
