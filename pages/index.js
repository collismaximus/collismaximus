import Head from 'next/head';
import { FaDownload, FaEnvelope, FaHandsHelping, FaCoffee, FaInstagram, FaTiktok, FaPlay, FaMusic } from 'react-icons/fa';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const videos = [
  { title: 'MCDRIVE', href: 'https://youtu.be/jgLJw6InQBE' },
  { title: 'bomarzo', href: 'https://youtu.be/3Yf5VjcBeqc' },
  { title: 'prova a prendermi', href: 'https://youtu.be/WyLhZgbiMnI' },
];
const row = 'flex items-center justify-between gap-3 px-3 py-3 rounded-md hover:bg-zinc-700 transition';

export default function Home() {
  const [showMessage, setShowMessage] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen w-full bg-[#2D2D2D] text-white font-sans flex flex-col items-center p-4 relative">
      <Head>
        <title>Collis Maximus · Roma Ovest</title>
        <meta name="description" content="Dal quartiere, cose da vedere, ascoltare e portarsi dietro. Musica, videoclip e IN TERRA PAX, dal 29 novembre 2026." />
      </Head>
      <div className="w-full max-w-sm text-left mb-5 flex items-start gap-3">
        <Image src="/logo-cm.png" alt="Profilo Collis Maximus" width={36} height={36} className="rounded-full border border-white/20" />
        <div>
          <p className="text-xs text-gray-400 mb-1">Collis Maximus</p>
          <div className="px-4 py-2 rounded-2xl bg-zinc-800/70 border border-zinc-600 shadow-md" aria-live="polite">
            {showMessage ? <span className="text-base font-semibold">Dal quartiere, cose da vedere, ascoltare e portarsi dietro.</span> : <span className="text-gray-400 italic animate-pulse">sta scrivendo...</span>}
          </div>
        </div>
      </div>

      <div className="w-full max-w-sm space-y-4 rounded-lg p-4 border border-zinc-600 bg-zinc-800/60 backdrop-blur-md">
        <section aria-labelledby="pax-title" className="rounded-md border border-white/30 bg-zinc-900/50 p-4">
          <div className="flex justify-between gap-2 text-xs text-gray-400"><span>IN ARRIVO</span><time dateTime="2026-11-29">29 novembre 2026</time></div>
          <h1 id="pax-title" className="text-2xl font-semibold tracking-widest mt-3">IN TERRA PAX</h1>
          <p className="text-sm text-gray-300 mt-2">Una storia di posti, ricordi e cose da portarsi dietro. Da Roma Ovest.</p>
          <a href="https://instagram.com/collismaximus/" className="inline-flex items-center gap-2 text-sm mt-4 underline underline-offset-4 hover:text-blue-400">Segui la storia su Instagram <span aria-hidden="true">↗</span></a>
        </section>

        <section aria-labelledby="video-title">
          <div className="flex items-center gap-3 px-3"><FaPlay className="text-blue-400 w-5 h-5" aria-hidden="true" /><div><h2 id="video-title" className="font-medium">Videoclip</h2><p className="text-xs text-gray-400">LUCARAP / ALERAP · Guarda i video</p></div></div>
          <div className="mt-2">{videos.map(video => <a key={video.href} href={video.href} className={row}><span className="text-sm">{video.title}</span><span className="text-xs text-gray-400">Guarda ↗</span></a>)}</div>
        </section>

        <section aria-labelledby="records-title" className="border-t border-zinc-600 pt-4">
          <div className="flex items-center gap-3 px-3"><FaMusic className="text-blue-400 w-5 h-5" aria-hidden="true" /><h2 id="records-title" className="font-medium">Collis Maximus Records</h2></div>
          <a href="https://music.amazon.co.uk/albums/B0H3CPBTY2" className={`${row} mt-2`}><div><p className="font-medium text-sm">MATTONE dopo MATTONE</p><p className="text-xs text-gray-400 mt-1">LUCARAP &amp; ALERAP · L’album</p></div><span className="text-xs text-gray-300 shrink-0">Ascolta ↗</span></a>
        </section>

        <div className="border-t border-zinc-600 pt-2">
          <a href="https://aspiring-somersault-b55.notion.site/Guide-per-Costruire-1e6e0da02f828090a936cce5b4ffe542" className={row}><span className="flex items-center gap-3"><FaDownload className="text-blue-400 w-5 h-5" aria-hidden="true" />Guide</span><span className="text-xs text-gray-400">Scarica e costruisci</span></a>
          <a href="https://app.youform.com/forms/yohpfbvh" className={row}><span className="flex items-center gap-3"><FaHandsHelping className="text-blue-400 w-5 h-5" aria-hidden="true" />Collabora</span><span className="text-xs text-gray-400">Parliamone</span></a>
        </div>
        <div className="border-t border-zinc-600 pt-2 text-sm">
          <a href="https://mailchi.mp/982778115d00/notizie-dal-colle-collis-maximus" className={row}><span className="flex items-center gap-3"><FaEnvelope className="text-gray-400" aria-hidden="true" />Notizie dal Colle</span><span className="text-xs text-gray-400">Metti la mail</span></a>
          <a href="https://buymeacoffee.com/collismaximus" className={row}><span className="flex items-center gap-3"><FaCoffee className="text-gray-400" aria-hidden="true" />Caffè?</span><span className="text-xs text-gray-400">Supporta</span></a>
          <div className="flex gap-4 px-3 pt-3 pb-1">
            <a href="https://instagram.com/collismaximus/" className="flex items-center gap-1 text-xs hover:text-blue-400"><FaInstagram aria-hidden="true" />Instagram</a>
            <a href="https://www.tiktok.com/@collismaximus00163" className="flex items-center gap-1 text-xs hover:text-blue-400"><FaTiktok aria-hidden="true" />TikTok</a>
          </div>
        </div>
      </div>
      <div className="w-full max-w-sm mt-6"><img src="/quartiere.png" alt="Quartiere 3D" width="1024" height="1024" className="object-contain w-full h-auto" /></div>
      <footer className="text-center text-sm mt-6 leading-tight">Collis Maximus<br />Roma · 00163</footer>
    </main>
  );
}
