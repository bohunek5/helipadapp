"use client";

import PageTransition from "@/components/PageTransition";

export default function SpecsPage() {
    return (
        <PageTransition>
            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-space font-black text-slate-900 dark:text-white mb-12 tracking-tighter">
                    DANE TECH <span className="text-sky-500">{"//"}</span> SPECS
                </h1>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="p-8 bg-slate-900 text-white rounded-3xl">
                            <h3 className="font-mono text-xs opacity-50 tracking-widest mb-4">WSPÓŁRZĘDNE / COORDINATES</h3>
                            <p className="text-4xl font-space font-bold text-sky-500">54°02&apos;05&quot;N</p>
                            <p className="text-4xl font-space font-bold text-sky-500">21°47&apos;59&quot;E</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-white/10">
                                <span className="block font-mono text-xs text-slate-500 mb-2">ELEVATION</span>
                                <span className="text-3xl font-space font-bold text-slate-900 dark:text-white">406 FT</span>
                            </div>
                            <div className="p-6 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-white/10">
                                <span className="block font-mono text-xs text-slate-500 mb-2">RADIO</span>
                                <span className="text-3xl font-space font-bold text-slate-900 dark:text-white">118.775</span>
                            </div>
                        </div>
                    </div>

                    <div className="font-mono text-slate-600 dark:text-slate-400 space-y-6">
                        <h3 className="font-space font-bold text-2xl text-slate-900 dark:text-white">DODATKOWE INFORMACJE</h3>
                        <ul className="space-y-4 list-disc pl-4">
                            <li>Nawierzchnia: Trawa wzmocniona siatką (HDD)</li>
                            <li>Wymiary pola wzlotów: 25m x 25m</li>
                            <li>Oświetlenie: Krawędziowe, białe (sterowane radiowo)</li>
                            <li>Paliwo: JET A-1 dostępne na zamówienie</li>
                            <li>Hangar: Dostępny (ogrzewany, monitorowany)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}
