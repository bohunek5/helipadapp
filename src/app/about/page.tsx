"use client";

import PageTransition from "@/components/PageTransition";
import Image from "next/image";
import { ShieldCheck, Target } from "lucide-react";

export default function AboutPage() {
    return (
        <PageTransition>
            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-space font-black text-slate-900 dark:text-white mb-12 tracking-tighter">
                    O NAS <span className="text-sky-500">{"//"}</span> MISSION
                </h1>

                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-6 font-mono leading-relaxed bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm">
                        <p className="text-slate-700 dark:text-slate-300">
                            Helipad Mazury to nie tylko lądowisko, to zaawansowane centrum operacyjne stworzone z pasji do lotnictwa. Naszą misją jest zapewnienie najwyższych standardów bezpieczeństwa i komfortu dla pilotów śmigłowcowych.
                        </p>
                        <p className="text-slate-700 dark:text-slate-300">
                            Zlokalizowani w sercu Mazur, oferujemy strategiczny punkt dostępu do regionu, wyposażony w nowoczesną infrastrukturę, systemy nawigacyjne i zaplecze techniczne.
                        </p>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="p-4 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-white/10">
                                <ShieldCheck className="text-sky-500 mb-2" size={24} />
                                <h3 className="font-space font-bold text-slate-900 dark:text-white text-sm">BEZPIECZEŃSTWO</h3>
                                <p className="text-[10px] mt-1 opacity-70">Certyfikowane procedury.</p>
                            </div>
                            <div className="p-4 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-white/10">
                                <Target className="text-amber-500 mb-2" size={24} />
                                <h3 className="font-space font-bold text-slate-900 dark:text-white text-sm">LOKALIZACJA</h3>
                                <p className="text-[10px] mt-1 opacity-70">Serce Mazur.</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[500px] w-full rounded-3xl overflow-hidden bg-slate-900">
                        <Image
                            src="/helipadapp/images/real_aerial.jpg"
                            alt="Aerial View"
                            fill
                            className="object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                        <div className="absolute bottom-8 left-8">
                            <span className="font-mono text-xs text-sky-500 tracking-widest">EST. 2024</span>
                            <h3 className="text-3xl font-space font-bold text-white">CENTRUM OPERACYJNE</h3>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}
