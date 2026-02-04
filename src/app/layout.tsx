import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Helipad Giżycko 2026 | EPGH Aviation Port",
  description: "Ekskluzywne lądowisko dla śmigłowców w sercu Mazur. Nowoczesność, bezpieczeństwo i pasja.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased">
        <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center glass backdrop-blur-md">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#25c0f4] glow-border flex items-center justify-center font-bold text-black text-xs">H</div>
            <span className="font-outfit font-bold text-xl tracking-tighter gradient-text">HELIPAD GIŻYCKO</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-titanium">
            <a href="/" className="hover:text-white transition-colors">START</a>
            <a href="#services" className="hover:text-white transition-colors">CENNIK</a>
            <a href="#gallery" className="hover:text-white transition-colors">GALERIA</a>
            <a href="#contact" className="hover:text-white transition-colors">KONTAKT</a>
          </div>
          <button className="px-5 py-2 rounded-full bg-[#25c0f4] text-black font-bold text-xs glow-border hover:scale-105 transition-transform">
            REZERWACJA
          </button>
        </nav>
        {children}
        <footer className="py-10 bg-[#050505] border-t border-white/5 text-center text-secondary text-xs">
          <p>© 2026 HELIPAD GIŻYCKO (EPGH). PROJEKT PRZYSZŁOŚCI.</p>
        </footer>
      </body>
    </html>
  );
}
