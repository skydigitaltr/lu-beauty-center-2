import { ArrowUpRight, Check } from 'lucide-react';
import { badgeIcon, heroStats, trustItems } from './site-data';
import { LuxuryHeroSculpt } from './LuxuryHeroSculpt';
import { PrimaryButton, SecondaryButton } from './ui';

const Badge = badgeIcon;

export function HeroSection() {
  return (
    <section className="section-shell relative overflow-hidden py-14 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-[-8rem] -z-10 h-[34rem] bg-[radial-gradient(circle_at_20%_16%,rgba(238,205,198,0.28),transparent_28%),radial-gradient(circle_at_76%_10%,rgba(217,193,163,0.22),transparent_24%),radial-gradient(circle_at_52%_40%,rgba(255,255,255,0.75),transparent_26%)] blur-3xl" />

      <div className="grid items-center gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:gap-14 xl:gap-20">
        <div className="relative z-10 max-w-2xl space-y-8 lg:space-y-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-taupe shadow-soft backdrop-blur sm:text-xs">
            <Badge size={15} className="text-rose" />
            Luxury skincare clinic experience
          </div>

          <div className="space-y-5">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-rose/90">
              İstanbul’da rafine güzellik deneyimi
            </p>
            <h1 className="max-w-3xl font-display text-5xl leading-[0.92] tracking-[-0.03em] text-ink md:text-7xl xl:text-[5.35rem]">
              Işıltınızı ortaya çıkaran premium bakım deneyimi
            </h1>
            <p className="max-w-xl text-base leading-8 text-taupe md:text-lg xl:text-[1.15rem]">
              Cilt bakımı, lazer epilasyon ve profesyonel güzellik uygulamalarında modern, güvenilir ve konforlu hizmet sunuyoruz.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <PrimaryButton href="#iletisim" className="min-w-[168px]">
              Randevu Al
            </PrimaryButton>
            <SecondaryButton href="#hizmetler" className="min-w-[168px] border-white/70 bg-white/70 backdrop-blur">
              Hizmetleri İncele
            </SecondaryButton>
          </div>

          <div className="grid gap-4 pt-2 sm:grid-cols-3">
            {heroStats.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.75rem] border border-white/80 bg-white/68 p-5 shadow-[0_20px_60px_rgba(116,89,81,0.08)] backdrop-blur"
              >
                <p className="font-display text-4xl leading-none text-ink">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-taupe">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -left-5 top-8 hidden h-32 w-32 rounded-full border border-white/50 bg-white/20 blur-2xl lg:block" />
          <div className="pointer-events-none absolute -right-6 bottom-10 hidden h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.55),rgba(255,255,255,0))] blur-2xl lg:block" />

          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-0 hidden -translate-x-10 rounded-full border border-white/60 bg-white/60 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-taupe shadow-soft backdrop-blur xl:block">
              Editorial treatment
            </div>

            <LuxuryHeroSculpt />

            <div className="absolute inset-x-3 bottom-3 md:inset-x-5 md:bottom-5">
              <div className="glass-panel rounded-[1.75rem] border border-white/75 px-4 py-4 shadow-[0_20px_50px_rgba(107,82,74,0.12)] md:px-5">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-taupe">Premium care promise</p>
                    <p className="mt-2 max-w-md text-sm leading-6 text-ink/85 md:text-[15px]">
                      Modern klinik yaklaşımı, doğal sonuç odaklı uygulamalar ve sakin bir bakım deneyimi.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {trustItems.slice(0, 2).map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/55 px-3 py-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sand text-ink">
                          <Check size={15} />
                        </span>
                        <span className="text-sm text-ink">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3 pl-1 text-sm text-taupe">
            <span className="h-px w-10 bg-champagne/70" />
            <span className="uppercase tracking-[0.22em]">Luxury beauty campaign mood</span>
            <ArrowUpRight size={15} className="text-rose" />
          </div>
        </div>
      </div>
    </section>
  );
}
