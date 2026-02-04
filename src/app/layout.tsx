import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Helipad Giżycko 2026 | EPGH Aviation Port",
  description: "Breathtaking views, premium safety, and futuristic aviation services in the heart of Mazury.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="antialiased selection:bg-sky-100 selection:text-sky-900">
        <nav className="fixed top-0 w-full z-50 px-6 py-5 flex justify-between items-center frost-glass">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] shadow-lg shadow-sky-200 flex items-center justify-center font-black text-white text-lg ring-4 ring-white">H</div>
            <div className="flex flex-col">
              <span className="font-outfit font-black text-2xl tracking-tighter leading-none gradient-text-azure">HELIPAD</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase leading-none mt-1">GIŻYCKO • EPGH</span>
            </div>
          </div>

          <div className="hidden lg:flex gap-10 text-xs font-black tracking-widest text-[#334155]">
            <a href="/" className="hover:text-sky-600 transition-all border-b-2 border-transparent hover:border-sky-500 pb-1">HOME</a>
            <a href="#about" className="hover:text-sky-600 transition-all border-b-2 border-transparent hover:border-sky-500 pb-1">ABOUT</a>
            <a href="#services" className="hover:text-sky-600 transition-all border-b-2 border-transparent hover:border-sky-500 pb-1">PRICING</a>
            <a href="#gallery" className="hover:text-sky-600 transition-all border-b-2 border-transparent hover:border-sky-500 pb-1">GALLERY</a>
            <a href="#contact" className="hover:text-sky-600 transition-all border-b-2 border-transparent hover:border-sky-500 pb-1">CONTACT</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-[11px] font-black tracking-widest text-slate-500 hover:text-sky-600 transition-colors">
              PL / EN
            </button>
            <button className="px-6 py-3 rounded-full bg-slate-900 text-white font-black text-[11px] tracking-widest hover:bg-sky-600 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-slate-200">
              BOOK NOW
            </button>
          </div>
        </nav>

        {children}

        <footer className="py-20 bg-slate-50 border-t border-slate-100 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-xs">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 rounded bg-sky-600 flex items-center justify-center text-[10px] text-white">H</div>
                <span className="font-outfit font-black text-xl gradient-text-azure">HELIPAD</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                The most advanced helicopter landing infrastructure in northern Poland. Setting the standard for 2026.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
              <div>
                <h5 className="font-black text-xs tracking-widest mb-6">SERVICES</h5>
                <ul className="text-sm text-slate-500 space-y-3 font-medium">
                  <li><a href="#" className="hover:text-sky-600 transition-colors">Day Landing</a></li>
                  <li><a href="#" className="hover:text-sky-600 transition-colors">Night Landing</a></li>
                  <li><a href="#" className="hover:text-sky-600 transition-colors">Hangarage</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-black text-xs tracking-widest mb-6">LEGAL</h5>
                <ul className="text-sm text-slate-500 space-y-3 font-medium">
                  <li><a href="#" className="hover:text-sky-600 transition-colors">Safety Rules</a></li>
                  <li><a href="#" className="hover:text-sky-600 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-sky-600 transition-colors">Terms of Use</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto border-t border-slate-200 mt-20 pt-10 text-center">
            <p className="text-[10px] font-black tracking-[0.3em] text-slate-300 uppercase">
              © 2026 HELIPAD GIŻYCKO • FUTURE READY
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
