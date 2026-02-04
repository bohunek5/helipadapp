"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

// --- TRANSLATIONS ---
const translations = {
    pl: {
        nav: [
            { label: "START", href: "/" },
            { label: "O NAS", href: "/about" },
            { label: "CENNIK", href: "/pricing" },
            { label: "GALERIA", href: "/gallery" },
            { label: "KONTAKT", href: "/contact" }
        ],
        book: "REZERWUJ"
    },
    en: {
        nav: [
            { label: "HOME", href: "/" },
            { label: "ABOUT", href: "/about" },
            { label: "PRICING", href: "/pricing" },
            { label: "GALLERY", href: "/gallery" },
            { label: "CONTACT", href: "/contact" }
        ],
        book: "BOOK"
    },
    de: {
        nav: [
            { label: "START", href: "/" },
            { label: "ÜBER UNS", href: "/about" },
            { label: "PREISE", href: "/pricing" },
            { label: "GALERIE", href: "/gallery" },
            { label: "KONTAKT", href: "/contact" }
        ],
        book: "BUCHEN"
    }
};

export default function Navbar() {
    const [lang, setLang] = useState<"pl" | "en" | "de">("pl");
    const [mobileMenu_open, setMobileMenu_open] = useState(false);
    const pathname = usePathname();

    // Initialize state from local storage
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedLang = localStorage.getItem('lang') as "pl" | "en" | "de";
            if (savedLang) setLang((prev) => savedLang !== prev ? savedLang : prev);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('lang', lang);
    }, [lang]);

    const t = translations[lang];

    return (
        <>
            <nav className="fixed top-0 w-full z-[100] px-6 py-4 flex justify-between items-center backdrop-blur-md bg-white/90 border-b border-slate-200 transition-colors duration-300">
                <div className="flex items-center gap-4">
                    {/* LOGO: Black in Day */}
                    <Link href="/" className="relative w-32 h-10 flex items-center justify-center">
                        <Image
                            src="/helipadapp/images/logo_official.png"
                            alt="Helipad Mazury Logo"
                            width={128}
                            height={40}
                            className="h-full w-auto object-contain transition-all duration-300"
                        />
                    </Link>
                    <div className="hidden md:flex flex-col border-l border-slate-300 pl-4">
                        <span className="font-space font-bold text-sm tracking-[0.2em] text-slate-900 leading-none">HELIPAD</span>
                        <span className="font-mono text-[10px] text-sky-600 tracking-widest">EPGH SYSTEM</span>
                    </div>
                </div>

                <div className="hidden lg:flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
                    {t.nav.map((item, i) => (
                        <Link key={i} href={item.href}
                            className={`px-5 py-2 text-[10px] font-space font-bold tracking-widest rounded transition-all ${pathname === item.href ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'}`}>
                            {item.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <div className="h-6 w-[1px] bg-slate-300" />
                    <div className="flex gap-3">
                        <button onClick={() => setLang('pl')} className={`text-xl transition-transform hover:scale-110 ${lang === 'pl' ? 'opacity-100 scale-110' : 'opacity-40 grayscale hover:grayscale-0'}`} title="Polski">🇵🇱</button>
                        <button onClick={() => setLang('en')} className={`text-xl transition-transform hover:scale-110 ${lang === 'en' ? 'opacity-100 scale-110' : 'opacity-40 grayscale hover:grayscale-0'}`} title="English">🇬🇧</button>
                        <button onClick={() => setLang('de')} className={`text-xl transition-transform hover:scale-110 ${lang === 'de' ? 'opacity-100 scale-110' : 'opacity-40 grayscale hover:grayscale-0'}`} title="Deutsch">🇩🇪</button>
                    </div>
                    <button onClick={() => setMobileMenu_open(true)} title="Open Menu" className="lg:hidden p-2 text-slate-900">
                        <Menu size={24} />
                    </button>
                    <Link href="/contact" className="hidden md:flex items-center gap-2 px-6 py-2 bg-slate-900 text-white font-space font-bold text-xs tracking-widest uppercase hover:bg-sky-600 transition-colors rounded">
                        <span>{t.book}</span>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    </Link>
                </div>
            </nav>

            {/* --- MOBILE MENU --- */}
            <AnimatePresence>
                {mobileMenu_open && (
                    <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed inset-0 z-[200] bg-white flex flex-col p-8">
                        <div className="flex justify-between items-center mb-12 border-b border-slate-100 pb-6">
                            <span className="font-space font-bold text-2xl text-slate-900">MENU</span>
                            <button onClick={() => setMobileMenu_open(false)} title="Close Menu" className="p-2 bg-slate-100 rounded-full text-slate-900 hover:bg-red-500 hover:text-white transition-colors"><X size={24} /></button>
                        </div>
                        <div className="flex flex-col gap-6">
                            {t.nav.map((item, i) => (
                                <Link key={i} href={item.href} onClick={() => setMobileMenu_open(false)} className="text-4xl font-space font-bold text-slate-900 hover:text-sky-500 uppercase tracking-tight transition-colors">
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                        <div className="mt-auto pt-12 border-t border-slate-100 flex justify-between items-center">
                            <div className="flex gap-6 text-2xl">
                                <button onClick={() => setLang('pl')} className={lang === 'pl' ? 'opacity-100 scale-110' : 'opacity-40'}>🇵🇱</button>
                                <button onClick={() => setLang('en')} className={lang === 'en' ? 'opacity-100 scale-110' : 'opacity-40'}>🇬🇧</button>
                                <button onClick={() => setLang('de')} className={lang === 'de' ? 'opacity-100 scale-110' : 'opacity-40'}>🇩🇪</button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
