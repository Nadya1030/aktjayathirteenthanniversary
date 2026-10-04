'use client';

import Button from './Button';
import Reveal from './Reveal';

export default function Opening({ onOpen }: { onOpen: () => void }) {
  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 relative overflow-hidden"
      style={{

        backgroundImage: "url('/images/gallery/foto12.JPG')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* OVERLAY GELAP DENGAN SENTUHAN GRADIENT */}
      <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/40 via-black/50 to-black/40" />

      {/* KONTEN UTAMA - TANPA GLASS CARD */}
      <div className="relative z-10 text-white max-w-2xl mx-auto space-y-6 flex flex-col items-center">
        
        {/* SUBTITLE ATAS */}
        <Reveal>
          <p className="font-body tracking-[0.35em] text-xs sm:text-sm uppercase text-sand/90 font-medium">
            You're Cordially Invited To
          </p>
        </Reveal>

        {/* NAMA ACARA (BESAR & EMBOSSED SHADOW) */}
        <Reveal delay={100}>
          <h1 className="font-script text-7xl sm:text-8xl md:text-9xl text-amber-100 drop-shadow-lg leading-none py-2">
            Aktjaya
          </h1>
        </Reveal>

        {/* SUBTITLE TEMA & ULANG TAHUN */}
        <Reveal delay={150}>
          <div className="space-y-2">
            <p className="font-serif text-xl sm:text-2xl md:text-3xl text-white font-semibold tracking-wide">
              13th Anniversary Celebration
            </p>
            <p className="font-script text-2xl sm:text-3xl text-sand/80 italic">
              — A Journey of Memories & Togetherness —
            </p>
          </div>
        </Reveal>

        {/* GARIS DEKORATIF TIPIS */}
        <Reveal delay={220}>
          <div className="w-16 h-[1px] bg-amber-100/40 my-2" />
        </Reveal>

        {/* TOMBOL BUKA UNDANGAN */}
        <Reveal delay={250}>
          <div className="pt-2">
            <Button
              onClick={onOpen}
              className="border-2 border-white/80 bg-white/10 backdrop-blur-xs text-white hover:bg-white hover:text-brown px-9 py-3.5 text-sm sm:text-base font-semibold tracking-widest uppercase shadow-xl transition-all duration-300 hover:scale-105"
            >
              Open Invitation
            </Button>
          </div>
        </Reveal>

      </div>
    </div>
  );
}
