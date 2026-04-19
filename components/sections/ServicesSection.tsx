"use client";

import { useEffect, useRef } from "react";
import { Sparkles, Zap, Droplets, Target, Eye, Activity, Palette } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Cilt Bakımı",
    description:
      "Cildinizin ihtiyaçlarına özel hazırlanan profesyonel cilt bakım protokolleri ile parlaklık ve sağlık.",
    color: "from-nude-100 to-nude-50",
    accent: "#c8825b",
  },
  {
    icon: Zap,
    title: "Lazer Epilasyon",
    description:
      "En son teknoloji lazer cihazlarıyla kalıcı tüy azaltma. Tüm cilt ve tüy tiplerine uygun.",
    color: "from-blush-100 to-blush-50",
    accent: "#d95858",
  },
  {
    icon: Sparkles,
    title: "Hydrafacial",
    description:
      "Derin temizlik, nemlendirme ve soyma işlemlerini tek seansta birleştiren premium yüz bakımı.",
    color: "from-champagne-100 to-champagne-50",
    accent: "#cc9a28",
  },
  {
    icon: Target,
    title: "Bölgesel İncelme",
    description:
      "Kişiye özel bölgesel incelme protokolleri ile istenilen bölgede görünür sonuçlar.",
    color: "from-nude-100 to-silk",
    accent: "#925238",
  },
  {
    icon: Eye,
    title: "Kaş & Kirpik Uygulamaları",
    description:
      "Yüz hatlarınıza uygun tasarlanan kaş şekillendirme ve kirpik uygulamaları.",
    color: "from-blush-50 to-nude-50",
    accent: "#a42f2f",
  },
  {
    icon: Activity,
    title: "Medikal Bakım",
    description:
      "Dermatoloji destekli medikal cilt bakımı protokolleriyle görünür ve kalıcı sonuçlar.",
    color: "from-silk to-pearl",
    accent: "#784330",
  },
  {
    icon: Palette,
    title: "Kalıcı Makyaj (PMU)",
    description:
      "Lips, Brows & Eyeliner — Her sabah mükemmel görünmek için kalıcı makyaj uygulamaları.",
    color: "from-champagne-50 to-nude-50",
    accent: "#b06845",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".service-card");
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = "1";
                (card as HTMLElement).style.transform = "translateY(0)";
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hizmetler" className="section-padding bg-white">
      <div className="container-max" ref={sectionRef}>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="ornament-divider mb-6 max-w-xs mx-auto">
            <span className="text-[10px] tracking-[0.35em] uppercase text-nude-400 font-body px-4">
              Hizmetlerimiz
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl xl:text-6xl text-[#2d2520] mb-4">
            Güzelliğiniz için
            <br />
            <em className="not-italic text-nude-500">her şey burada</em>
          </h2>
          <p className="text-nude-600/80 max-w-lg mx-auto leading-relaxed font-body font-light">
            Uzman ekibimiz ve modern teknolojilerimizle size en iyi sonuçları sunmak için buradayız.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`service-card card-hover group relative overflow-hidden rounded-2xl p-7 bg-gradient-to-br ${service.color} border border-white cursor-default`}
                style={{
                  opacity: 0,
                  transform: "translateY(24px)",
                  transition: "opacity 0.6s ease, transform 0.6s ease, box-shadow 0.4s ease",
                  // Special: 7th card spans 2 on large screens
                  ...(i === 6 && services.length === 7
                    ? { gridColumn: "span 1" }
                    : {}),
                }}
              >
                {/* Background glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at 30% 20%, ${service.accent}15 0%, transparent 60%)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${service.accent}18` }}
                >
                  <Icon size={20} style={{ color: service.accent }} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl text-[#2d2520] mb-2 leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-nude-600/80 leading-relaxed font-body font-light">
                  {service.description}
                </p>

                {/* Hover arrow */}
                <div className="flex items-center gap-2 mt-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                  <span className="text-[10px] tracking-[0.2em] uppercase font-body" style={{ color: service.accent }}>
                    Detaylar
                  </span>
                  <div className="w-6 h-px" style={{ background: service.accent }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a href="#randevu" className="btn-primary inline-block">
            Randevu Al
          </a>
        </div>
      </div>
    </section>
  );
}
