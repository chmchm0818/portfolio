import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useState } from "react";
import { animateTitle, animateUI } from "../ts/animation";
import ScrollIndicator from "../components/Animated";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [showUI, setShowUI] = useState(false);

  useEffect(() => {
    animateTitle().then(() => {
      setShowUI(true);

      setTimeout(() => {
        animateUI();
      }, 600);
    });
  }, []);

  return (
    <>
      <header className="header fixed top-10 right-10 opacity-0 transition-opacity duration-1000">
        <ul className="flex flex-col items-end gap-3">
          <li>
            <a href="#" className="text-lg font-medium">
              HOME
            </a>
          </li>
          <li>
            <a href="#" className="text-lg font-medium">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#" className="text-lg font-medium">
              WORKS
            </a>
          </li>
        </ul>
      </header>

      <main>
        <section className="relative">
          <div className="w-full h-screen flex flex-col justify-center">
            <h1 className="title-1 animated-text text-[170px] font-black leading-[1.2] opacity-0">
              MOE's
            </h1>
            <h1 className="title-2 animated-text text-[170px] font-black leading-[1.2] opacity-0">
              PORTFOLIO
            </h1>
          </div>
          {showUI && (
            <div className="opacity-0 scroll-indicator">
              <ScrollIndicator />
            </div>
          )}
        </section>
        <section>
          <h2>ABOUT</h2>
        </section>
      </main>
    </>
  );
}
