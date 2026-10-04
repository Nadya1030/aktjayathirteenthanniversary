import { useState } from 'react';
import Button from './Button';
import Reveal from './Reveal';
import BohemianDivider from './BohemianDivider';
import { Mail, BookOpen, QrCode } from 'lucide-react';

export default function Kehadiran() {
  const [showQR, setShowQR] = useState(false);

  return (
    <section id="kehadiran" className="py-20 px-4 md:px-8 text-center bg-white relative overflow-hidden">
      
      {/* DEKORASI BACKGROUND BOTANIKAL BOHO */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-terracotta/5 rounded-full blur-3xl pointer-events-none" />

      <Reveal>
        <p className="font-script text-6xl md:text-5xl text-terracotta">
          So, are You Joining Us?
        </p>
        <BohemianDivider />
      </Reveal>

      {/* CARD ARCH BOHO */}
      <Reveal delay={150}>
        <div className="max-w-xl mx-auto bg-[#FAF7F2] rounded-t-[100px] rounded-b-3xl p-8 md:p-12 border border-terracotta/20 shadow-[0_15px_35px_-5px_rgba(74,59,50,0.12)] relative z-10 mt-6">
          
          {/* BORDER DALAM TIPE EMBOSSED / VINTAGE FRAME */}
          <div className="border border-dashed border-terracotta/30 rounded-t-[85px] rounded-b-2xl p-6 md:p-8">
            
            {/* IKON SURAT BOHO */}
            <div className="w-12 h-12 bg-sand rounded-full flex items-center justify-center mx-auto mb-6 text-terracotta border border-terracotta/20 shadow-xs">
              <Mail size={22} />
            </div>

            {/* TEKS UTAMA */}
            <p className="font-serif text-base md:text-lg text-brown leading-relaxed mb-8">
              Your presence would mean so much to us as we gather to celebrate the journey we have shared, the connections we have built, and the impact we have created together.
            </p>

            {/* GROUP TOMBOL AKSI (RSVP & BOOKLET) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              
              {/* TOMBOL RSVP UTAMA */}
              <div className="relative group w-full sm:w-auto">
                <div className="absolute -inset-1 bg-terracotta/20 rounded-full blur-sm group-hover:bg-terracotta/40 transition-all duration-300" />
                <div className="relative">
                  <Button href="https://forms.gle/QbBdQ8YvDXKrKv1k6" target="_blank">
                    Count Me In!
                  </Button>
                </div>
              </div>

              {/* TOMBOL BOOKLET */}
              <a
                href="https://bit.ly/13thAktjayaAnniversaryBooklet" // Ganti dengan link PDF / Link Canva Booklet kamu
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-terracotta/40 text-terracotta font-body text-sm font-semibold hover:bg-terracotta hover:text-white transition-all shadow-xs"
              >
                <BookOpen size={18} />
                <span>View Booklet</span>
              </a>

            </div>

            {/* TOGGLE & TAMPILAN QR CARD */}
            <div className="mt-8 pt-6 border-t border-brown/10 flex flex-col items-center">
              <button
                onClick={() => setShowQR(!showQR)}
                className="inline-flex items-center gap-2 text-xs font-body font-semibold tracking-wider uppercase text-brown/70 hover:text-terracotta transition-colors cursor-pointer"
              >
                <QrCode size={16} />
                <span>{showQR ? 'Hide QR Code' : 'Scan QR for view Our Booklet!'}</span>
              </button>

              {/* DOKUMEN QR CODE CARD (TAMPIL SAAT DITOGGLE / ATAU BISA DI-PERMANENKAN) */}
              {showQR && (
                <div className="mt-4 p-4 bg-white rounded-2xl border border-terracotta/20 shadow-md flex flex-col items-center animate-fade-in">
                  <img
                    src="/images/BookletAA13th.png" // Ganti dengan path file gambar QR kamu
                    alt="RSVP QR Code"
                    className="w-36 h-36 object-contain rounded-lg border border-brown/10 p-1"
                  />
                  <p className="font-serif text-xs text-brown/70 mt-2">Scan with your camera to open Booklet</p>
                </div>
              )}
            </div>

          </div>
        </div>
      </Reveal>
    </section>
  );
}