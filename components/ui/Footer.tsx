"use client";

import { Instagram, Facebook, Youtube } from "lucide-react";

const navLinks = [
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#neden-biz", label: "Neden Biz" },
  { href: "#oncesi-sonrasi", label: "Sonuçlar" },
  { href: "#yorumlar", label: "Yorumlar" },
  { href: "#iletisim", label: "İletişim" },
];

const services = [
  "Cilt Bakımı",
  "Lazer Epilasyon",
  "Hydrafacial",
  "Bölgesel İncelme",
  "Kalıcı Makyaj",
  "Medikal Bakım",
];

export default function Footer() {
  return (
    <footer
      style={{ background: "#1e1813" }}
      className="text-nude-300"
    >
      <div className="container-max px-6 md:px-12 lg:px-20 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <span
                className="font-accent text-3xl text-nude-200 tracking-widest"
                style={{ fontFamily: "'Italiana', serif" }}
              >
                LU
              </span>
              <div className="text-[9px] tracking-[0.35em] uppercase text-nude-500 mt-0.5 font-body">
                beauty clinic
              </div>
            </div>
            <p className="text-sm text-nude-500/80 leading-relaxed font-body font-light mb-6 max-w-[220px]">
              İstanbul Kadıköy&apos;de premium güzellik ve bakım deneyimi. Işıltınızı ortaya çıkarıyoruz.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Facebook, href: "#", label: "Facebook" },
                { Icon: Youtube, href: "#", label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-nude-700/50 flex items-center justify-center text-nude-500 hover:text-nude-300 hover:border-nude-500 transition-all duration-300"
                >
                  <Icon size={15} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-nude-500 font-body mb-5">
              Hızlı Erişim
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-nude-500/80 hover:text-nude-300 transition-colors duration-300 font-body font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-nude-500 font-body mb-5">
              Hizmetler
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-sm text-nude-500/80 font-body font-light">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-nude-500 font-body mb-5">
              İletişim
            </h4>
            <div className="flex flex-col gap-3 text-sm text-nude-500/80 font-body font-light">
              <p>Moda Caddesi No:42<br />Kadıköy, İstanbul</p>
              <a href="tel:+905551234567" className="hover:text-nude-300 transition-colors">
                +90 555 123 45 67
              </a>
              <a href="mailto:info@lubeautyclinic.com" className="hover:text-nude-300 transition-colors">
                info@lubeautyclinic.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-nude-800/60 pt-7 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-nude-700 font-body">
            © {new Date().getFullYear()} LU Beauty Clinic. Tüm hakları saklıdır.
          </p>
          <p className="text-[11px] text-nude-800 font-body">
            Gizlilik Politikası · KVKK
          </p>
        </div>
      </div>
    </footer>
  );
}
