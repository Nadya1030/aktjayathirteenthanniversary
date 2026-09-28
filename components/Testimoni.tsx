import { useRef } from 'react';
import Reveal from './Reveal';
import BohemianDivider from './BohemianDivider';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Muhammad Rafi Al-Azhim',
    role: 'Alumni',
    quote: 'Attending Aktjaya Anniversary has always been a meaningful experience for me. It’s more than just an anniversary celebration, it’s a moment to reconnect with friends, meet new people, and look back on the memories and journey we’ve shared together through Aktjaya. What makes it special is the feeling of coming back to a place where so many memories were created. I’m grateful to have been part of that journey, and I hope Aktjaya continues to grow, create meaningful connections, and bring people together for many more years to come. Happy 13th Anniversary, Aktjaya!',
    avatar: '/images/testimoni/rafi.jpeg',
  },
  {
    name: 'Safa Awaliya',
    role: 'Current Member',
    quote: 'Seru banget bisa reconnect sama alumni dan current. Always feels like coming home!! 🤩😻!',
    avatar: '/images/testimoni/safa.jpeg',
  },
  {
    name: 'Trystania Nabila',
    role: 'Probies',
    quote: 'Hii aktjayaa, with me tania from igv 26.27, my best part of AA is when we get the bounding time in bingo last year, from it we can knowing each other closer and makes new friends or relation thoroughout current member and alumni. But one thing that makes aktjaya interested for joining iss, it was my first time aiesec event, well as probies at that time im so excited for it 🤩 and in fact that was so cool and fun, worth to try.',
    avatar: '/images/testimoni/tania.JPEG',
  },
];

export default function Testimoni() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="testimoni" className="py-20 px-4 md:px-12 bg-white overflow-hidden">
      <Reveal>
        <div className="text-center mb-12">
          <p className="font-script text-6xl md:text-5xl text-terracotta">Words From Them</p>
          <BohemianDivider />
        </div>
      </Reveal>

      {/* Container Utama */}
      <div className="max-w-6xl mx-auto relative px-2 md:px-8">
        
        {/* TOMBOL PANAH KIRI */}
        <button
          onClick={() => scroll('left')}
          className="hidden md:flex absolute -left-2 lg:-left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 items-center justify-center rounded-full bg-terracotta text-white shadow-xl hover:bg-brown hover:scale-110 active:scale-95 transition-all cursor-pointer border-2 border-white"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>

        {/* TOMBOL PANAH KANAN */}
        <button
          onClick={() => scroll('right')}
          className="hidden md:flex absolute -right-2 lg:-right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 items-center justify-center rounded-full bg-terracotta text-white shadow-xl hover:bg-brown hover:scale-110 active:scale-95 transition-all cursor-pointer border-2 border-white"
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>

        {/* AREA CAROUSEL HORIZONTAL */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none py-10 px-4 touch-pan-x"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch' 
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="snap-center shrink-0 w-[88%] sm:w-[360px] md:w-[400px] relative pt-14"
            >
              {/* FOTO PROFIL LINGKARAN (Diperbesar) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
                <div className="w-28 h-28 rounded-full p-1 bg-terracotta/20 backdrop-blur-xs shadow-lg">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full object-cover rounded-full border-2 border-white shadow-md"
                  />
                </div>
              </div>

              {/* CARD TESTIMONI */}
              <div className="bg-[#FAF7F2] rounded-3xl pt-16 pb-8 px-6 border border-brown/10 text-center relative z-10 h-full flex flex-col justify-between shadow-xs">
                
                <div>
                  {/* RATING BINTANG */}
                  <div className="flex justify-center gap-1 text-terracotta mb-4">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} size={18} fill="currentColor" stroke="none" />
                    ))}
                  </div>

                  {/* TEKS QUOTE (Ukuran font diperbesar) */}
                  <p className="font-serif italic text-base md:text-lg text-brown/90 leading-relaxed px-2">
                    "{t.quote}"
                  </p>
                </div>

                <div>
                  {/* GARIS PEMISAH */}
                  <div className="w-16 h-px bg-brown/15 mx-auto my-5" />

                  {/* NAMA & ROLE (Diperbesar sedikit) */}
                  <p className="font-serif font-semibold text-xl text-brown">{t.name}</p>
                  <p className="font-body text-xs md:text-sm tracking-widest text-terracotta uppercase mt-1 font-medium">
                    {t.role}
                  </p>
                </div>

                {/* HIASAN IKON QUOTE */}
                <Quote size={28} className="absolute bottom-4 right-5 text-brown/10 -rotate-12" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}