"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

const BlobCanvas = dynamic(() => import("@/components/3d/BlobCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-48 h-48 rounded-full bg-gradient-to-br from-nude-100 to-blush-100 animate-pulse" />
    </div>
  ),
});

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (titleRef.current) titleRef.current.style.opacity = "1";
      if (contentRef.current) contentRef.current.style.opacity = "1";
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream">
      {/* Background gradient layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] h-[70%] rounded-full opacity-30"
          style={{
            background: "radial-gradient(ellipse at top right, #f8d4d4 0%, transparent 70%)",
          }}
        />
        <div className="absolute bottom-0 left-0 w-[50%] h-[60%] rounded-full opacity-20"
          style={{
            background: "radial-gradient(ellipse at bottom left, #faedc6 0%, transparent 70%)",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] opacity-15"
          style={{
            background: "radial-gradient(ellipse, #f9ede4 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Decorative lines */}
      <div className="absolute top-32 left-8 md:left-20 w-px h-24 bg-gradient-to-b from-transparent via-nude-300 to-transparent opacity-60" />
      <div className="absolute bottom-24 right-8 md:right-20 w-24 h-px bg-gradient-to-r from-transparent via-nude-300 to-transparent opacity-60" />

      <div className="container-max w-full px-6 md:px-12 lg:px-20 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-[80vh]">

          {/* Left — Text Content */}
          <div
            ref={contentRef}
            className="flex flex-col justify-center order-2 lg:order-1 transition-opacity duration-1000"
            style={{ opacity: 0 }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-nude-400" />
              <span className="text-[10px] tracking-[0.35em] uppercase text-nude-500 font-body">
                Premium Güzellik Merkezi
              </span>
            </div>

            {/* Main Heading */}
            <h1
              ref={titleRef}
              className="font-display text-5xl md:text-6xl xl:text-7xl leading-[1.08] text-[#2d2520] mb-6 transition-opacity duration-1000"
              style={{ opacity: 0 }}
            >
              Işıltınızı
              <br />
              <em className="font-display not-italic text-nude-500">ortaya çıkaran</em>
              <br />
              premium bakım
              <br />
              <span className="text-nude-700">deneyimi</span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-nude-700/80 leading-relaxed max-w-md mb-10 font-body font-light">
              Cilt bakımı, lazer epilasyon ve profesyonel güzellik uygulamalarında
              modern, güvenilir ve konforlu hizmet sunuyoruz.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#randevu" className="btn-primary text-center">
                Randevu Al
              </a>
              <a href="#hizmetler" className="btn-outline text-center">
                Hizmetleri İncele
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-14 pt-10 border-t border-nude-200/50">
              {[
                { number: "5000+", label: "Mutlu Müşteri" },
                { number: "8+", label: "Yıllık Deneyim" },
                { number: "15+", label: "Uzman Kadro" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-display text-3xl text-nude-600">{stat.number}</span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-nude-400 mt-1 font-body">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — 3D Blob */}
          <div className="relative flex items-center justify-center order-1 lg:order-2">
            {/* Decorative ring */}
            <div
              className="absolute w-[380px] h-[380px] md:w-[480px] md:h-[480px] rounded-full border border-nude-200/40"
              style={{
                boxShadow: "inset 0 0 60px rgba(232, 191, 165, 0.08)",
              }}
            />
            <div
              className="absolute w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full border border-nude-100/50"
            />

            {/* 3D Canvas */}
            <div className="relative w-[340px] h-[340px] md:w-[440px] md:h-[440px] lg:w-[520px] lg:h-[520px]">
              <BlobCanvas />
            </div>

            {/* Floating badge */}
            <div className="absolute top-8 right-0 md:right-4 glass rounded-2xl px-4 py-3 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] tracking-[0.15em] uppercase text-nude-600 font-body">
                  Randevu Mevcut
                </span>
              </div>
            </div>

            {/* Bottom badge */}
            <div className="absolute bottom-8 left-0 md:left-4 glass rounded-2xl px-4 py-3 shadow-sm">
              <div className="flex flex-col">
                <span className="text-[10px] tracking-[0.12em] uppercase text-nude-400 font-body">
                  En Çok Tercih Edilen
                </span>
                <span className="text-xs text-nude-700 font-display mt-0.5">
                  Hydrafacial & Lazer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-px h-10 bg-gradient-to-b from-nude-400 to-transparent animate-pulse" />
        <span className="text-[9px] tracking-[0.3em] uppercase text-nude-400 font-body">
          Keşfet
        </span>
      </div>
    </section>
  );
}
