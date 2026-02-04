"use client";

import PageTransition from "@/components/PageTransition";
import { ArrowRight } from "lucide-react";

export default function ProcedurePage() {
    const steps = [
        { title: "KONTAKT RADIOWY", desc: "Nawiąż łączność na częstotliwości 118.775 MHz 10 minut przed dolotem." },
        { title: "POTWIERDZENIE", desc: "Uzyskaj potwierdzenie warunków i zgody na lądowanie od operatora." },
        { title: "PODEJŚCIE", desc: "Wykonaj podejście zgodnie z procedurą VFR dla lądowiska EPGH." },
        { title: "LĄDOWANIE", desc: "Lądowanie w wyznaczonym kwadracie 25x25m. Oczekiwanie na Follow Me." }
    ];

    return (
        <PageTransition>
            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-space font-black text-slate-900 dark:text-white mb-12 tracking-tighter">
                    PROCEDURA <span className="text-sky-500">{"//"}</span> PROTOCOL
                </h1>

                <div className="space-y-8 max-w-3xl">
                    {steps.map((step, i) => (
                        <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 hover:border-sky-500 transition-colors group">
                            <span className="text-4xl font-space font-bold text-slate-300 dark:text-slate-700 group-hover:text-sky-500 transition-colors">0{i + 1}</span>
                            <div>
                                <h3 className="text-xl font-space font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                                <p className="font-mono text-sm text-slate-500 dark:text-slate-400">{step.desc}</p>
                            </div>
                            <ArrowRight className="ml-auto text-slate-300 group-hover:text-sky-500 transform group-hover:translate-x-2 transition-all self-center" />
                        </div>
                    ))}
                </div>
            </div>
        </PageTransition>
    );
}
