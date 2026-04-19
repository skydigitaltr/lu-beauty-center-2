"use client";

import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Adres",
    value: "Moda Caddesi No:42, Kadıköy",
    sub: "İstanbul, Türkiye",
    href: "https://maps.google.com",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+90 555 123 45 67",
    sub: "Hafta içi 09:00 – 20:00",
    href: "tel:+905551234567",
  },
  {
    icon: Mail,
    label: "E-posta",
    value: "info@lubeautyclinic.com",
    sub: "24 saat içinde yanıt",
    href: "mailto:info@lubeautyclinic.com",
  },
  {
    icon: Clock,
    label: "Çalışma Saatleri",
    value: "Pzt–Cmt: 09:00–20:00",
    sub: "Pazar: 10:00–17:00",
    href: null,
  },
];

export default function ContactSection() {
  return (
    <section id="iletisim" className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="ornament-divider mb-6 max-w-xs mx-auto">
            <span className="text-[10px] tracking-[0.35em] uppercase text-nude-400 font-body px-4">
              İletişim
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-[#2d2520]">
            Bize ulaşın
          </h2>
          <p className="text-nude-600/80 mt-3 font-body font-light">
            Sorularınız için her zaman yanınızdayız.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-start">

          {/* Left: Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="group card-hover rounded-2xl p-6 bg-gradient-to-br from-nude-50 to-pearl border border-nude-100/60 h-full">
                  <div className="w-10 h-10 rounded-xl bg-nude-100 flex items-center justify-center mb-4 group-hover:bg-nude-200 transition-colors duration-300">
                    <Icon size={18} className="text-nude-600" strokeWidth={1.5} />
                  </div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-nude-400 font-body mb-2">
                    {item.label}
                  </p>
                  <p className="font-display text-base text-[#2d2520]">{item.value}</p>
                  <p className="text-xs text-nude-500/80 mt-1 font-body">{item.sub}</p>
                </div>
              );

              return item.href ? (
                <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}

            {/* WhatsApp */}
            <a
              href="https://wa.me/905551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:col-span-2 group card-hover rounded-2xl p-6 bg-gradient-to-r from-[#25D366]/10 to-[#128C7E]/10 border border-[#25D366]/20 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center flex-shrink-0">
                <MessageCircle size={22} className="text-white" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-display text-lg text-[#2d2520] group-hover:text-[#128C7E] transition-colors duration-300">
                  WhatsApp ile Yazın
                </p>
                <p className="text-xs text-nude-500 font-body mt-0.5">
                  Hızlı yanıt için tercih edilen iletişim yöntemi
                </p>
              </div>
              <div className="ml-auto text-nude-400 group-hover:translate-x-1 transition-transform duration-300">
                →
              </div>
            </a>
          </div>

          {/* Right: Map */}
          <div className="rounded-3xl overflow-hidden shadow-sm border border-nude-100 aspect-[4/3] lg:aspect-auto lg:h-[420px] w-full relative">
            <iframe
              title="LU Beauty Clinic Konum"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12042.645673714693!2d29.01855!3d40.98985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7a3c4d7a49d%3A0xd5c8bd95f73d45e1!2sKad%C4%B1k%C3%B6y%2C%20%C4%B0stanbul!5e0!3m2!1str!2str!4v1699000000000!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "saturate(0.6) sepia(0.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Overlay pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="glass rounded-xl px-3 py-2 shadow-md">
                <p className="text-xs text-nude-700 font-body font-medium whitespace-nowrap">
                  LU Beauty Clinic — Kadıköy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
