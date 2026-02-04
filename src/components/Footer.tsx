"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-slate-50 dark:bg-[#0b0f19] border-t border-slate-200 dark:border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                {/* Branding */}
                <div className="space-y-6">
                    <Link href="/" className="block relative w-32 h-10">
                        <Image
                            src="/helipadapp/images/logo_official.png"
                            alt="Helipad Mazury Logo"
                            width={128}
                            height={40}
                            className="h-full w-auto object-contain dark:invert-0 transition-all duration-300"
                        />
                    </Link>
                    <p className="font-mono text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        Zaawansowane lądowisko dla śmigłowców w sercu Mazur.
                        Bezpieczeństwo, profesjonalizm i strategiczna lokalizacja.
                    </p>
                </div>

                {/* Contact */}
                <div className="space-y-6">
                    <h3 className="font-space font-bold text-lg text-slate-900 dark:text-white">KONTAKT</h3>
                    <div className="space-y-4 font-mono text-sm text-slate-600 dark:text-slate-300">
                        <div className="flex items-start gap-4">
                            <MapPin className="w-5 h-5 text-sky-500 shrink-0" />
                            <div>
                                <p>ul. Sybiraków 28</p>
                                <p>11-500 Giżycko, Polska</p>
                            </div>
                        </div>
                        <a href="tel:+48607241090" className="flex items-center gap-4 hover:text-sky-500 transition-colors">
                            <Phone className="w-5 h-5 text-sky-500 shrink-0" />
                            <span>+48 607 241 090</span>
                        </a>
                        <a href="mailto:biuro@helipadmazury.pl" className="flex items-center gap-4 hover:text-sky-500 transition-colors">
                            <Mail className="w-5 h-5 text-sky-500 shrink-0" />
                            <span>biuro@helipadmazury.pl</span>
                        </a>
                    </div>
                </div>

                {/* Technical Data */}
                <div className="space-y-6">
                    <h3 className="font-space font-bold text-lg text-slate-900 dark:text-white">DANE EPGH</h3>
                    <div className="grid grid-cols-2 gap-4 font-mono text-xs text-slate-500 dark:text-slate-400">
                        <div className="p-3 bg-white dark:bg-white/5 rounded border border-slate-200 dark:border-white/10">
                            <span className="block text-sky-500 font-bold mb-1">LAT</span>
                            54°02&apos;05&quot;N
                        </div>
                        <div className="p-3 bg-white dark:bg-white/5 rounded border border-slate-200 dark:border-white/10">
                            <span className="block text-sky-500 font-bold mb-1">LON</span>
                            21°47&apos;59&quot;E
                        </div>
                        <div className="p-3 bg-white dark:bg-white/5 rounded border border-slate-200 dark:border-white/10">
                            <span className="block text-sky-500 font-bold mb-1">RADIO</span>
                            118.775 MHz
                        </div>
                        <div className="p-3 bg-white dark:bg-white/5 rounded border border-slate-200 dark:border-white/10">
                            <span className="block text-sky-500 font-bold mb-1">ELEV</span>
                            406 FT
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="max-w-7xl mx-auto px-6 border-t border-slate-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs text-slate-400 dark:text-slate-600">
                <p>&copy; {year} Helipad Mazury. Wszelkie prawa zastrzeżone.</p>
                <div className="flex gap-6">
                    <Link href="/privacy" className="hover:text-slate-900 dark:hover:text-white transition-colors">Prywatność</Link>
                    <Link href="/terms" className="hover:text-slate-900 dark:hover:text-white transition-colors">Regulamin</Link>
                </div>
            </div>
        </footer>
    );
}
