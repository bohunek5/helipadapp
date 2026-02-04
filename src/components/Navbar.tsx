"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
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
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [mobileMenu_open, setMobileMenu_open] = useState(false);
    const pathname = usePathname();

    // Initialize state from local storage
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedLang = localStorage.getItem('lang') as "pl" | "en" | "de";
            const savedTheme = localStorage.getItem('theme') as "light" | "dark";
            if (savedLang) setLang((prev) => savedLang !== prev ? savedLang : prev);
            if (savedTheme) setTheme((prev) => savedTheme !== prev ? savedTheme : prev);
        }
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        localStorage.setItem('lang', lang);
    }, [lang]);

    const t = translations[lang];

    return (
        <>
            <nav className="fixed top-0 w-full z-[100] px-6 py-4 flex justify-between items-center backdrop-blur-md bg-white/90 dark:bg-[#030712]/90 border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
                <div className="flex items-center gap-4">
                    <Link href="/" className="relative w-10 h-10 bg-sky-600 rounded flex items-center justify-center shadow-[0_0_15px_rgba(14,165,233,0.5)] hover:bg-sky-500 transition-colors">
                        <span className="font-space font-bold text-white tracking-tighter">HM</span>
                    </Link>
                    <div className="hidden md:flex flex-col">
                        <span className="font-space font-bold text-sm tracking-[0.2em] text-slate-900 dark:text-white leading-none">HELIPAD</span>
                        <span className="font-mono text-[10px] text-sky-600 dark:text-sky-400 tracking-widest">EPGH SYSTEM</span>
                    </div>
                </div>

                <div className="hidden lg:flex items-center gap-1 bg-slate-100 dark:bg-white/5 p-1 rounded-lg border border-slate-200 dark:border-white/10">
                    {t.nav.map((item, i) => (
                        <Link key={i} href={item.href}
                            className={`px-5 py-2 text-[10px] font-space font-bold tracking-widest rounded transition-all ${pathname === item.href ? 'bg-white dark:bg-white/10 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5'}`}>
                            {item.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'} className="p-2 text-slate-500 dark:text-slate-400 hover:text-sky-600 transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-white/5">
                        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                    </button>
                    <div className="h-6 w-[1px] bg-slate-300 dark:bg-white/20" />
                    <button onClick={() => setLang(lang === 'pl' ? 'en' : 'de')} className="font-mono text-xs font-bold text-slate-900 dark:text-white uppercase hover:text-sky-500 transition-colors w-6">
                        {lang}
                    </button>
                    <button onClick={() => setMobileMenu_open(true)} title="Open Menu" className="lg:hidden p-2 text-slate-900 dark:text-white">
                        <Menu size={24} />
                    </button>
                    <Link href="/contact" className="hidden md:flex items-center gap-2 px-6 py-2 bg-slate-900 dark:bg-white text-white dark:text-black font-space font-bold text-xs tracking-widest uppercase hover:bg-sky-600 dark:hover:bg-sky-400 transition-colors rounded">
                        <span>{t.book}</span>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    </Link>
                </div>
            </nav>

            {/* --- MOBILE MENU --- */}
            <AnimatePresence>
                {mobileMenu_open && (
                    <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed inset-0 z-[200] bg-white dark:bg-[#0b0f19] flex flex-col p-8">
                        <div className="flex justify-between items-center mb-12 border-b border-slate-100 dark:border-white/10 pb-6">
                            <span className="font-space font-bold text-2xl text-slate-900 dark:text-white">MENU</span>
                            <button onClick={() => setMobileMenu_open(false)} title="Close Menu" className="p-2 bg-slate-100 dark:bg-white/10 rounded-full text-slate-900 dark:text-white hover:bg-red-500 hover:text-white transition-colors"><X size={24} /></button>
                        </div>
                        <div className="flex flex-col gap-6">
                            {t.nav.map((item, i) => (
                                <Link key={i} href={item.href} onClick={() => setMobileMenu_open(false)} className="text-4xl font-space font-bold text-slate-900 dark:text-white/80 hover:text-sky-500 uppercase tracking-tight transition-colors">
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                        <div className="mt-auto pt-12 border-t border-slate-100 dark:border-white/10 flex justify-between items-center">
                            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="flex items-center gap-3 font-space font-bold text-slate-900 dark:text-white uppercase text-sm">
                                {theme === 'light' ? <><Moon size={20} /> Dark Mode</> : <><Sun size={20} /> Light Mode</>}
                            </button>
                            <div className="flex gap-4 font-mono font-bold text-slate-900 dark:text-white">
                                <button onClick={() => setLang('pl')} className={lang === 'pl' ? 'text-sky-500' : 'opacity-50'}>PL</button>
                                <button onClick={() => setLang('en')} className={lang === 'en' ? 'text-sky-500' : 'opacity-50'}>EN</button>
                                <button onClick={() => setLang('de')} className={lang === 'de' ? 'text-sky-500' : 'opacity-50'}>DE</button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
