"use client";

import PageTransition from "@/components/PageTransition";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <PageTransition>
            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-space font-black text-slate-900 dark:text-white mb-12 tracking-tighter">
                    KONTAKT <span className="text-sky-500">{"//"}</span> COMM LINK
                </h1>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <a href="tel:+48607241090" className="flex items-center gap-6 p-8 bg-slate-100 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-white/10 hover:border-sky-500 transition-all group">
                            <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                                <Phone size={32} />
                            </div>
                            <div>
                                <span className="block font-mono text-xs text-slate-500 mb-1 tracking-widest">VOICE</span>
                                <span className="text-2xl md:text-3xl font-space font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">+48 607 241 090</span>
                            </div>
                        </a>

                        <a href="mailto:biuro@helipadmazury.pl" className="flex items-center gap-6 p-8 bg-slate-100 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-white/10 hover:border-sky-500 transition-all group">
                            <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                                <Mail size={32} />
                            </div>
                            <div>
                                <span className="block font-mono text-xs text-slate-500 mb-1 tracking-widest">DATA</span>
                                <span className="text-xl md:text-3xl font-space font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors break-all">biuro@helipadmazury.pl</span>
                            </div>
                        </a>

                        <div className="p-8 bg-slate-900 text-white rounded-3xl mt-8">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-sky-500 mt-1" />
                                <div>
                                    <h3 className="font-space font-bold text-xl mb-2">LOKALIZACJA</h3>
                                    <p className="font-mono text-sm opacity-70 leading-relaxed">
                                        Helipad Mazury EPGH<br />
                                        Mazury, Polska<br />
                                        54°02&apos;05&quot;N 21°47&apos;59&quot;E
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-[400px] md:h-auto bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden relative border border-slate-200 dark:border-white/10">
                        {/* Placeholder for interactive map */}
                        <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-mono text-sm">
                            [MAP MODULE LOADING...]
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2348.873295834927!2d21.79972221609144!3d54.03472228012866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDAyJzA1LjAiTiAyMcKwNDcnNTkuMCJF!5e0!3m2!1spl!2spl!4v1635763875845!5m2!1spl!2spl"
                            width="100%"
                            height="100%"
                            title="Mapa lokalizacji Helipad Mazury"
                            className="dark:invert-[0.9] dark:hue-rotate-180 grayscale hover:grayscale-0 transition-all duration-500 border-0"
                            allowFullScreen={true}
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}
