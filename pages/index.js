import Head from 'next/head';
import { FaDownload, FaEnvelope, FaHandsHelping, FaTshirt, FaCoffee, FaInstagram, FaTiktok } from 'react-icons/fa';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  const [showMessage, setShowMessage] = useState(false);
  const [showTyping, setShowTyping] = useState(true);

  useEffect(() => {
    const typingDelay = setTimeout(() => {
      setShowMessage(true);
      setShowTyping(false);

      const audio = new Audio('/notify.mp3');
      audio.play();
    }, 1500);

    return () => clearTimeout(typingDelay);
  }, []);

  return (
    <main className="min-h-screen w-screen bg-[#2D2D2D] text-white font-sans flex flex-col items-center justify-between p-4 relative overflow-hidden">
      <Head>
        <title>Collis Maximus</title>
        <meta name="description" content="Costruisci qualcosa che resta" />
      </Head>

      {/* Chat iniziale */}
      <div className="w-full max-w-sm text-left mb-4 z-10 flex items-start gap-3">
        <Image
          src="/logo-cm.png"
          alt="Profilo Collis Maximus"
          width={36}
          height={36}
          className="rounded-full border border-white/20"
        />
        <div>
          <p className="text-xs text-gray-400 mb-1">Collis Maximus</p>
          <div className="inline-block px-4 py-2 rounded-2xl bg-zinc-800/70 border border-zinc-600 backdrop-blur-md shadow-md">
            {showTyping && <span className="text-gray-400 italic animate-pulse">sta scrivendo...</span>}
            {showMessage && (
              <span className="text-white text-base font-semibold">
                👋 Ti va di costruire qualcosa che resta?
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Glassmorphism con pulsanti principali + social */}
      <div className="w-full max-w-sm space-y-2 z-10 rounded-lg p-4 border border-zinc-600 bg-zinc-800/60 backdrop-blur-md">
        <a href="#" className="flex items-center justify-between px-4 py-2 rounded-md hover:bg-zinc-700 transition">
          <div className="flex items-center gap-3">
            <FaDownload className="text-blue-400 w-5 h-5" />
            <span className="text-white font-medium">Guide</span>
          </div>
          <span className="text-sm text-gray-400">Download</span>
        </a>
        <a href="#" className="flex items-center justify-between px-4 py-2 rounded-md hover:bg-zinc-700 transition">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-blue-400 w-5 h-5" />
            <span className="text-white font-medium">Newsletter</span>
          </div>
          <span className="text-sm text-gray-400">Iscriviti</span>
        </a>
        <a href="#" className="flex items-center justify-between px-4 py-2 rounded-md hover:bg-zinc-700 transition">
          <div className="flex items-center gap-3">
            <FaHandsHelping className="text-blue-400 w-5 h-5" />
            <span className="text-white font-medium">Collabora</span>
          </div>
          <span className="text-sm text-gray-400">Scrivici</span>
        </a>
        <a href="#" className="flex items-center justify-between px-4 py-2 rounded-md hover:bg-zinc-700 transition">
          <div className="flex items-center gap-3">
            <FaTshirt className="text-blue-400 w-5 h-5" />
            <span className="text-white font-medium">Merch</span>
          </div>
          <span className="text-sm text-gray-400">Compra</span>
        </a>
        <a href="#" className="flex items-center justify-between px-4 py-2 rounded-md hover:bg-zinc-700 transition">
          <div className="flex items-center gap-3">
            <FaCoffee className="text-blue-400 w-5 h-5" />
            <span className="text-white font-medium">Supporta</span>
          </div>
          <span className="text-sm text-gray-400">Caffè?</span>
        </a>
        <div className="border-t border-zinc-600 mt-4 pt-2">
          <p className="text-gray-400 text-xs mb-2">Seguici su:</p>
          <div className="flex gap-4">
            <a href="#" className="flex items-center gap-1 text-xs text-white hover:text-blue-400">
              <FaInstagram className="w-3 h-3" /> Instagram
            </a>
            <a href="#" className="flex items-center gap-1 text-xs text-white hover:text-blue-400">
              <FaTiktok className="w-3 h-3" /> TikTok
            </a>
          </div>
        </div>
      </div>

      {/* Immagine 3D spostata in basso su mobile */}
      <div className="w-full max-w-sm mt-6 z-0">
        <img
          src="/quartiere.png"
          alt="Quartiere 3D"
          className="object-contain w-full h-auto"
        />
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-white mt-6 leading-tight z-10">
        Collis Maximus<br />Roma · 00163
      </footer>
    </main>
  );
}