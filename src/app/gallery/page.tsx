"use client";

import PageTransition from "@/components/PageTransition";
import Image from "next/image";

export default function GalleryPage() {
    const images = [
        "/helipadapp/images/real_aerial.jpg",
        "/helipadapp/images/real_heli_landing.jpg",
        "/helipadapp/images/real_fleet.jpg",
        "/helipadapp/images/real_hangar.jpg",
        // Reuse existing images for grid filler if needed, or placeholders if strictly necessary but we have these 4.
    ];

    return (
        <PageTransition>
            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-space font-black text-slate-900 dark:text-white mb-12 tracking-tighter">
                    GALERIA <span className="text-sky-500">{"//"}</span> ASSETS
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((src, i) => (
                        <div key={i} className="relative aspect-video rounded-3xl overflow-hidden group border border-slate-200 dark:border-white/10">
                            <Image
                                src={src}
                                alt={`Gallery Image ${i}`}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-4 left-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <span className="font-mono text-xs text-sky-500 tracking-widest">IMG_00{i + 1}.RAW</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PageTransition>
    );
}
