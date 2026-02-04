"use client";

import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const images = [
        "/helipadapp/images/real_heli_landing.jpg",
        "/helipadapp/images/real_aerial.jpg",
        "/helipadapp/images/real_fleet.jpg",
        "/helipadapp/images/real_hangar.jpg",
        "/helipadapp/images/real_night.jpg"
    ];

    return (
        <PageTransition>
            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-space font-black text-slate-900 dark:text-white mb-12 tracking-tighter">
                    GALERIA <span className="text-sky-500">{"//"}</span> ASSETS
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((src, i) => (
                        <div
                            key={i}
                            onClick={() => setSelectedImage(src)}
                            className="relative aspect-video rounded-3xl overflow-hidden group border border-slate-200 dark:border-white/10 shadow-lg hover:shadow-sky-500/20 transition-all cursor-pointer"
                        >
                            <Image
                                src={src}
                                alt={`Gallery Image ${i}`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-4 left-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <span className="font-mono text-xs text-sky-500 tracking-widest">VIEW FULLSCREEN</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* LIGHTBOX MODAL */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 p-2 bg-white/10 rounded-full text-white hover:bg-red-500 transition-colors z-50"
                        >
                            <X size={24} />
                        </button>
                        <motion.div
                            layoutId={selectedImage}
                            className="relative w-full h-full max-w-7xl max-h-[90vh] rounded-xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Fullscreen View"
                                fill
                                className="object-contain"
                                quality={100}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </PageTransition>
    );
}
