import { Inter, Outfit, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
// ...
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
        <Footer />
      </body>
    </html>
  );
}
