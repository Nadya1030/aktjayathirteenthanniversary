import Reveal from './Reveal';

type Contact = { name: string; role: string; email: string; whatsapp: string; photo: string };

const contacts: Contact[] = [
  { name: 'Dini Nur Latifah', role: 'Delegates Service', email: 'dininurltifah20@gmail.com', whatsapp: '6281511655320', photo: '/images/Dini.jpeg' },
  { name: 'Suhaila Azza Kurzah', role: 'Delegates Service', email: 'suhailaazza@gmail.com', whatsapp: '6282157298386', photo: '/images/Ayla.jpeg' },
];

const partners = [
  '/images/partners/JoeandJoy.jpeg',
  '/images/partners/Somethinc.PNG',
];

export default function ContactUs() {
  return (
    <section id="kontak" className="py-24 px-6 md:px-12 bg-white text-center">
      {/* JUDUL UTAMA */}
      <Reveal>
        <p className="font-script text-6xl md:text-7xl text-blue mb-12">Reach Us out!📞</p>
      </Reveal>

      {/* DUA KONTAK SEBELAHAN */}
      <Reveal delay={100}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {contacts.map((c) => (
            <div
              key={c.whatsapp}
              className="flex flex-col items-center bg-gradient-to-br from-/15 via-green/10 to-blue/15 backdrop-blur-md border border-[#7A8061]/20 rounded-3xl p-6 md:p-8 transition-all hover:-translate-y-1 hover:border-[#7A8061]/40"
            >
              <img
                src={c.photo}
                alt={c.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-white shadow-md"
              />
              <p className="font-serif text-lg md:text-xl text-brown font-semibold text-center">{c.name}</p>
              <p className="font-body text-xs md:text-sm text-[#7A8061] font-medium tracking-wide uppercase text-center mt-0.5">{c.role}</p>
              <p className="font-body text-xs md:text-sm text-brown/70 text-center mt-1 mb-5 break-all">{c.email}</p>
              
              {/* TOMBOL WHATSAPP */}
              <a
                href={`https://wa.me/${c.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-[#7A8061] text-[#7A8061] font-body text-xs md:text-sm font-semibold hover:bg-[#7A8061] hover:text-white transition-all shadow-xs"
                aria-label={`WhatsApp ${c.name}`}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
                  <path d="M17.6 6.32A8.86 8.86 0 0 0 12.05 4a8.94 8.94 0 0 0-7.85 13.34L3 21l3.79-1.13A8.9 8.9 0 0 0 12.05 21h.01a8.94 8.94 0 0 0 5.54-15.68ZM12.06 19.4a7.38 7.38 0 0 1-3.77-1.03l-.27-.16-2.8.83.83-2.73-.18-.28a7.42 7.42 0 1 1 13.79-3.9 7.4 7.4 0 0 1-7.6 7.27Zm4.06-5.56c-.22-.11-1.3-.64-1.5-.72-.2-.07-.35-.11-.5.11-.15.22-.57.72-.7.87-.13.15-.26.16-.48.05a6.1 6.1 0 0 1-1.79-1.1 6.7 6.7 0 0 1-1.24-1.54c-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.5-1.2-.68-1.65-.18-.43-.36-.37-.5-.38h-.43a.83.83 0 0 0-.6.28 2.53 2.53 0 0 0-.79 1.88c0 1.1.8 2.17.91 2.32.11.15 1.57 2.4 3.81 3.36.53.23.95.37 1.27.47.53.17 1.02.15 1.4.09.43-.06 1.3-.53 1.48-1.04.18-.51.18-.95.13-1.04-.05-.09-.2-.15-.42-.26Z" />
                </svg>
                <span>Chat via WhatsApp</span>
              </a>
            </div>
          ))}
        </div>
      </Reveal>

      {/* GARIS PENJEMBATAN */}
      <Reveal delay={200}>
        <div className="flex flex-col items-center my-14">
          <div className="w-[1px] h-20 bg-[#7A8061]/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#7A8061] mt-1" />
        </div>
      </Reveal>

      {/* SUPPORTED BY / PARTNERS */}
      {partners.length > 0 && (
        <Reveal delay={300}>
          <p className="font-body text-xs md:text-sm uppercase tracking-[0.2em] text-[#5B7B88] mb-6 font-semibold">
            Supported By
          </p>
          <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
            {partners.map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt={`Partner ${i + 1}`}
                className="h-12 md:h-26 object-contain opacity-100 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </Reveal>
      )}
    </section>
  );
}