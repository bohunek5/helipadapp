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
                    <div className="space-y-6 text-slate-600 dark:text-slate-400 font-mono leading-relaxed">
                        <p>
                            Helipad Mazury to nie tylko lądowisko, to zaawansowane centrum operacyjne stworzone z pasji do lotnictwa. Naszą misją jest zapewnienie najwyższych standardów bezpieczeństwa i komfortu dla pilotów śmigłowcowych.
                        </p>
                        <p>
                            Zlokalizowani w sercu Mazur, oferujemy strategiczny punkt dostępu do regionu, wyposażony w nowoczesną infrastrukturę, systemy nawigacyjne i zaplecze techniczne.
                        </p>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="p-6 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-white/10">
                                <ShieldCheck className="text-sky-500 mb-4" size={32} />
                                <h3 className="font-space font-bold text-slate-900 dark:text-white text-lg">BEZPIECZEŃSTWO</h3>
                                <p className="text-xs mt-2 opacity-70">Certyfikowane procedury operacyjne.</p>
                            </div>
                            <div className="p-6 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-white/10">
                                <Target className="text-amber-500 mb-4" size={32} />
                                <h3 className="font-space font-bold text-slate-900 dark:text-white text-lg">LOKALIZACJA</h3>
                                <p className="text-xs mt-2 opacity-70">Idealny punkt startowy na Mazury.</p>
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
