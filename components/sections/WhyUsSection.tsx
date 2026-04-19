"use client";

import { useEffect, useRef } from "react";
import { Award, Shield, Heart, Cpu } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Uzman Ekip",
    description:
      "Alanında yıllarca deneyim kazanmış, sertifikalı güzellik uzmanları ve medikal estetik profesyonellerinden oluşan kadromuz.",
  },
  {
    icon: Shield,
    title: "Hijyenik Ortam",
    description:
      "Steril ürünler, tek kullanımlık malzemeler ve düzenli sanitasyon protokolleriyle sağlığınıza öncelik veriyoruz.",
  },
  {
    icon: Heart,
    title: "Kişiye Özel Uygulamalar",
    description:
      "Her müşterimizin cilt tipi, ihtiyaçları ve beklentileri doğrultusunda hazırlanan birebir bakım programları.",
  },
  {
    icon: Cpu,
    title: "Modern Teknoloji",
    description:
      "Dünyada kullanılan en güncel medikal estetik cihazları ve sertifikalı ürünlerle güvenli, etkili sonuçlar.",
  },
];

export default function WhyUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".why-item");
            items.forEach((item, i) => {
              setTimeout(() => {
                (item as HTMLElement).classList.add("anim-visible");
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="neden-biz" className="section-padding" style={{ background: "var(--cream)" }}>
      <div className="container-max" ref={sectionRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Left: Visual */}
          <div className="relative order-2 lg:order-1">
            <div
              className="relative rounded-3xl overflow-hidden aspect-[4/5]"
              style={{
                background: "linear-gradient(135deg, #f9ede4 0%, #faedc6 50%, #f8d4d4 100%)",
              }}
            >
              {/* Decorative content inside */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-10">
                <div
                  className="w-28 h-28 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(200,130,91,0.15)" }}
                >
                  <span
                    className="font-accent text-5xl text-nude-600"
                    style={{ fontFamily: "'Italiana', serif" }}
                  >
                    LU
                  </span>
                </div>
                <div className="text-center">
                  <p className="font-display text-3xl text-[#2d2520] mb-2">
                    8+ Yıllık
                  </p>
                  <p className="text-nude-600 font-body font-light tracking-wide">
                    Güzellik Deneyimi
                  </p>
                </div>
                <div className="w-16 h-px bg-nude-300 mx-auto" />
                <p className="text-center text-sm text-nude-600/80 font-body font-light leading-relaxed max-w-xs">
                  Her müşterimiz bizim için özeldir. Işıltınızı ortaya çıkarmak için buradayız.
                </p>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-5 right-5 w-16 h-16 border border-nude-300/40 rounded-full" />
              <div className="absolute bottom-8 left-6 w-8 h-8 border border-champagne-400/40 rounded-full" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 glass rounded-2xl p-5 shadow-lg max-w-[190px]">
              <div className="text-3xl font-display text-nude-600 mb-1">5000+</div>
              <div className="text-[11px] tracking-[0.15em] uppercase text-nude-400 font-body">
                Memnun Müşteri
              </div>
            </div>
          </div>

          {/* Right: Reasons */}
          <div className="order-1 lg:order-2">
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-nude-400" />
                <span className="text-[10px] tracking-[0.35em] uppercase text-nude-500 font-body">
                  Neden Bizi Seçmelisiniz
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-[#2d2520] leading-snug">
                Güvenilir,
                <br />
                <em className="not-italic text-nude-500">profesyonel</em>
                <br />
                ve kişisel.
              </h2>
            </div>

            {/* Reasons list */}
            <div className="flex flex-col gap-8">
              {reasons.map((reason, i) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={reason.title}
                    className="why-item anim-hidden flex gap-5 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-nude-100 group-hover:bg-nude-200 transition-colors duration-300">
                      <Icon size={20} className="text-nude-600" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-[#2d2520] mb-1.5">
                        {reason.title}
                      </h3>
                      <p className="text-sm text-nude-600/80 leading-relaxed font-body font-light">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
