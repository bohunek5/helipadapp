import type { Metadata } from "next";
import { Inter, Outfit, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Helipad Mazury | Lądowisko dla śmigłowców",
  description: "Helipad Mazury - profesjonalne lądowisko dla śmigłowców na Mazurach. Współrzędne 54°02'05\"N 21°47'59\"E. Obsługa lotów, paliwo, hangarowanie.",
  keywords: ["helipad", "mazury", "lądowisko", "śmigłowiec", "lotnictwo", "aviation", "EPGH", "Giżycko", "paliwo lotnicze", "hangar"],
  authors: [{ name: "Karol Bohdanowicz" }],
  openGraph: {
    title: "Helipad Mazury",
    description: "Profesjonalne lądowisko na Mazurach. Procedury VFR, obsługa naziemna.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${inter.variable} ${outfit.variable} ${spaceGrotesk.variable} scroll-smooth dark`}>
      <body className="antialiased selection:bg-sky-500 selection:text-white bg-white dark:bg-[#020617] text-slate-900 dark:text-white transition-colors duration-300">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
