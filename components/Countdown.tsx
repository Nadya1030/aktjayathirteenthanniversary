'use client';

import { useEffect, useState } from 'react';
import Reveal from './Reveal';

const EVENT_DATE = new Date('2026-10-25T13:30:00+07:00');

function getTimeLeft() {
  const diff = EVENT_DATE.getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Closing() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: 'Hari', value: time.days },
    { label: 'Jam', value: time.hours },
    { label: 'Menit', value: time.minutes },
    { label: 'Detik', value: time.seconds },
  ];

  return (
    <section id="countdown" className="py-24 px-8 text-center relative overflow-hidden min-h-[400px] flex items-center justify-center">
      
      {/* ELEMEN VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/download.mp4" type="video/mp4" />
        Browser Anda tidak mendukung tag video.
      </video>

      {/* OVERLAY GELAP AGAR TEKS TETAP JELAS DIBACA */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* KONTEN UTAMA */}
      <div className="relative z-20">
        <Reveal>
          <div className="flex gap-3 sm:gap-4 justify-center mb-10">
            {units.map((u) => (
              <div key={u.label} className="bg-white/90 backdrop-blur-xs rounded-xl px-4 py-3 min-w-[70px] shadow-lg">
                <p className="font-serif text-2xl sm:text-3xl font-bold text-blue">{u.value}</p>
                <p className="font-body text-[10px] sm:text-xs uppercase tracking-wider text-brown font-semibold">{u.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="font-script text-5xl md:text-6xl text-white drop-shadow-md">
            See You Soon, Aktjaya!
          </p>
        </Reveal>
        <Reveal delay={300}>
          <p className="font-body text-2xl sm:text-3xl text-sand/80 italic">
              — #TakKoenjoengBinasa —
          </p>
        </Reveal>
      </div>
    </section>
  );
}