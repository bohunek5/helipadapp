"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Activity
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import PageTransition from "@/components/PageTransition";

// --- HELPERS ---
const getImagePath = (path: string) => `/helipadapp${path}`;

// --- TRANSLATIONS (Only for Hero content) ---
const translations = {
  pl: {
    status: "STATUS: AKTYWNY",
    hero_title: "HELIPAD MAZURY",
    hero_subtitle: "ZAAWANSOWANA INFRASTRUKTURA LOTNICZA",
    hero_btn: "ROZPOCZNIJ PROCEDURĘ",
    hero_specs: "DANE TECHNICZNE"
  },
  en: {
    status: "STATUS: ACTIVE",
    hero_title: "HELIPAD MAZURY",
    hero_subtitle: "ADVANCED AVIATION INFRASTRUCTURE",
    hero_btn: "INITIATE PROCEDURE",
    hero_specs: "TECHNICAL DATA"
  },
  de: {
    status: "STATUS: AKTIV",
    hero_title: "HELIPAD MASUREN",
    hero_subtitle: "FORTSCHRITTLICHE LUFTFAHRTINFRASTRUKTUR",
    hero_btn: "VERFAHREN STARTEN",
    hero_specs: "TECHNISCHE DATEN"
  }
};

export default function Home() {
  const containerRef = useRef(null);
  // Default to PL for Hero content as translation state is now in Navbar (could utilize context later for global lang sync)
  const lang = "pl";
  const t = translations[lang];

  const { scrollYProgress } = useScroll({ target: containerRef });
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <PageTransition>
      <main ref={containerRef} className="min-h-screen font-inter transition-colors duration-500 overflow-x-hidden selection:bg-sky-500 selection:text-white">

        {/* --- HUD OVERLAY (Fixed) --- */}
        <div className="fixed inset-0 pointer-events-none z-50 mix-blend-overlay opacity-30 dark:opacity-20 hidden lg:block">
          <div className="absolute top-10 left-10 w-8 h-8 border-t-2 border-l-2" />
          <div className="absolute top-10 right-10 w-8 h-8 border-t-2 border-r-2" />
          <div className="absolute bottom-10 left-10 w-8 h-8 border-b-2 border-l-2" />
          <div className="absolute bottom-10 right-10 w-8 h-8 border-b-2 border-r-2" />
          <div className="absolute top-1/2 left-6 -translate-y-1/2 flex flex-col gap-2">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className={`h-[2px] bg-slate-900 dark:bg-white/40 ${i % 5 === 0 ? 'w-6' : 'w-3'}`} />
            ))}
          </div>
        </div>

        {/* --- HERO (HUD COCKPIT) --- */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Parallax Background */}
          {/* Parallax Background */}
          <motion.div style={{ y: yParallax }} className="absolute inset-0 z-0">
            <Image src={getImagePath("/images/real_heli_landing.jpg")} alt="Aerial View" fill className="object-cover opacity-90 dark:opacity-60 transition-all duration-700" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-[#030712] to-transparent" />
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

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="font-mono text-slate-600 dark:text-slate-400 text-sm md:text-xl tracking-[0.2em] mb-12 uppercase font-bold">
              LĄDOWISKO DLA ŚMIGŁOWCÓW
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

          {/* Bottom Data Ticker Removed - Moved to Footer */}
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
    </PageTransition >
  );
}
