"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Elif K.",
    location: "Kadıköy, İstanbul",
    text: "LU Beauty Clinic'te lazer epilasyon seanslarımı tamamladım ve sonuçtan çok memnunum. Ekip son derece profesyonel, mekan tertemiz. Her randevumda kendimi çok değerli hissettim.",
    service: "Lazer Epilasyon",
    rating: 5,
    initials: "EK",
    bgColor: "from-nude-100 to-nude-50",
  },
  {
    name: "Zeynep A.",
    location: "Üsküdar, İstanbul",
    text: "Hydrafacial deneyimim muhteşemdi. Seansın ardından cildim çok daha parlak ve nemli görünüyor. Uzmanlar her adımı açıkladı, kendimi tamamen güvende hissettim.",
    service: "Hydrafacial",
    rating: 5,
    initials: "ZA",
    bgColor: "from-blush-100 to-blush-50",
  },
  {
    name: "Dilan S.",
    location: "Beşiktaş, İstanbul",
    text: "Kaş PMU uygulaması için geldim ve hayatım değişti desem abartı olmaz! Her sabah aynaya bakmak artık çok daha keyifli. Sonuç tamamen doğal ve yüz hatlarıma çok uygun.",
    service: "Kalıcı Makyaj — Kaş",
    rating: 5,
    initials: "DS",
    bgColor: "from-champagne-100 to-champagne-50",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="yorumlar"
      className="section-padding"
      style={{ background: "var(--pearl)" }}
    >
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="ornament-divider mb-6 max-w-xs mx-auto">
            <span className="text-[10px] tracking-[0.35em] uppercase text-nude-400 font-body px-4">
              Müşteri Yorumları
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl xl:text-6xl text-[#2d2520]">
            Onlar
            <em className="not-italic text-nude-500"> anlattı</em>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`card-hover relative rounded-3xl p-8 bg-gradient-to-br ${t.bgColor} border border-white`}
            >
              {/* Quote icon */}
              <Quote size={28} className="text-nude-300 mb-5" strokeWidth={1} />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={13} className="text-champagne-500 fill-champagne-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-nude-700 leading-relaxed font-body font-light mb-7 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-nude-200/50 mb-6" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-nude-300 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-body font-medium tracking-wider">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="font-display text-[#2d2520] text-base">{t.name}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[9px] tracking-[0.15em] uppercase text-nude-400 font-body">
                      {t.service}
                    </span>
                    <span className="text-nude-300">·</span>
                    <span className="text-[9px] text-nude-400 font-body">{t.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-10 text-center">
          {[
            { value: "4.9", label: "Google Rating" },
            { value: "5000+", label: "Tedavi Edilen" },
            { value: "%98", label: "Memnuniyet" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <span className="font-display text-4xl text-nude-600">{item.value}</span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-nude-400 mt-1 font-body">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
