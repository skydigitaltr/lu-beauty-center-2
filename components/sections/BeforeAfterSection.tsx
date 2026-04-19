"use client";

const beforeAfterItems = [
  { label: "Cilt Bakımı", category: "Parlak & Nemli" },
  { label: "Lazer Epilasyon", category: "Kalıcı Sonuç" },
  { label: "Hydrafacial", category: "Derin Temizlik" },
  { label: "Bölgesel İncelme", category: "Görünür Fark" },
  { label: "Kaş Şekillendirme", category: "Doğal Yoğunluk" },
  { label: "Kalıcı Makyaj", category: "PMU — Lips" },
];

export default function BeforeAfterSection() {
  return (
    <section id="oncesi-sonrasi" className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="ornament-divider mb-6 max-w-xs mx-auto">
            <span className="text-[10px] tracking-[0.35em] uppercase text-nude-400 font-body px-4">
              Sonuçlarımız
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl xl:text-6xl text-[#2d2520] mb-4">
            Daha canlı ve
            <br />
            <em className="not-italic text-nude-500">dengeli bir görünüm</em>
          </h2>
          <p className="text-nude-600/80 max-w-sm mx-auto leading-relaxed font-body font-light">
            Gerçek müşterilerimizin deneyimlediği görünür dönüşümler.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {beforeAfterItems.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-default"
              style={{
                background: `linear-gradient(${135 + i * 15}deg, #f9ede4 0%, #faedc6 40%, #f8d4d4 100%)`,
              }}
            >
              {/* Before/After split visual */}
              <div className="absolute inset-0">
                {/* Left side — "before" tone */}
                <div
                  className="absolute left-0 top-0 w-1/2 h-full transition-all duration-500 group-hover:w-[45%]"
                  style={{
                    background: `linear-gradient(135deg, #e8c4a8 0%, #d4a882 100%)`,
                    opacity: 0.7,
                  }}
                />
                {/* Right side — "after" glow */}
                <div
                  className="absolute right-0 top-0 w-1/2 h-full transition-all duration-500 group-hover:w-[55%]"
                  style={{
                    background: `linear-gradient(135deg, #fdf8f5 0%, #f9ede4 100%)`,
                    opacity: 0.9,
                  }}
                />

                {/* Divider line */}
                <div className="absolute left-1/2 top-0 w-px h-full bg-white/60 z-10 group-hover:left-[45%] transition-all duration-500" />
              </div>

              {/* Before / After labels */}
              <div className="absolute top-4 left-4 right-4 flex justify-between z-20">
                <span className="text-[9px] tracking-[0.2em] uppercase bg-white/60 text-nude-600 px-2 py-1 rounded font-body">
                  Önce
                </span>
                <span className="text-[9px] tracking-[0.2em] uppercase bg-nude-500/90 text-white px-2 py-1 rounded font-body">
                  Sonra
                </span>
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20 bg-gradient-to-t from-white/80 to-transparent">
                <p className="font-display text-lg text-[#2d2520] leading-tight">
                  {item.label}
                </p>
                <p className="text-[10px] tracking-[0.18em] uppercase text-nude-500 mt-0.5 font-body">
                  {item.category}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-30 flex items-center justify-center"
                style={{ background: "rgba(200,130,91,0.08)" }}
              >
                <div className="glass rounded-xl px-4 py-3">
                  <p className="text-xs text-nude-700 font-body tracking-wide">
                    Bilgi Al →
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
