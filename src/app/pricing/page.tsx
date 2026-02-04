"use client";

import PageTransition from "@/components/PageTransition";
import { Check, Sun, Moon, ShieldCheck } from "lucide-react";

export default function PricingPage() {
    const plans = [
        { title: "OPERACJE DZIENNE", price: "100", unit: "PLN", icon: <Sun />, features: ["Lądowanie i start", "Postój do 4h", "Obsługa naziemna", "Dostęp do WiFi"] },
        { title: "OPERACJE NOCNE", price: "200", unit: "PLN", icon: <Moon />, features: ["Oświetlenie płyty", "Lądowanie i start", "Postój nocny", "Monitoring 24/7"], highlight: true },
        { title: "HANGAROWANIE", price: "200", unit: "PLN / DOBA", icon: <ShieldCheck />, features: ["Miejsce w hangarze", "Ogrzewana hala", "Zasilanie GPU (opcja)", "Mycie (opcja)"] }
    ];

    return (
        <PageTransition>
            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-space font-black text-slate-900 dark:text-white mb-12 tracking-tighter">
                    CENNIK <span className="text-sky-500">{"//"}</span> MODULES
                </h1>

                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, i) => (
                        <div key={i} className={`relative p-8 rounded-3xl border transition-all ${plan.highlight ? 'bg-slate-900 border-sky-500 text-white shadow-2xl shadow-sky-500/20' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:border-sky-500/50'}`}>
                            <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit">
                                {plan.icon}
                            </div>
                            <h3 className="font-mono text-sm tracking-widest opacity-70 mb-2">{plan.title}</h3>
                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-5xl font-space font-bold">{plan.price}</span>
                                <span className="font-mono text-xs opacity-60">{plan.unit}</span>
                            </div>
                            <ul className="space-y-4">
                                {plan.features.map((feat, j) => (
                                    <li key={j} className="flex items-center gap-3 font-mono text-sm opacity-80">
                                        <Check size={16} className="text-sky-500" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <button className={`w-full mt-8 py-4 rounded-xl font-space font-bold tracking-widest uppercase transition-colors ${plan.highlight ? 'bg-sky-500 hover:bg-sky-400 text-white' : 'bg-slate-100 dark:bg-white/10 hover:bg-sky-500 hover:text-white text-slate-900 dark:text-white'}`}>
                                Wybierz
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </PageTransition>
    );
}
