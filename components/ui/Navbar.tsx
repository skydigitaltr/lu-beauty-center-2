"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#neden-biz", label: "Neden Biz" },
  { href: "#oncesi-sonrasi", label: "Sonuçlar" },
  { href: "#yorumlar", label: "Yorumlar" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-nude-100/60 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-max flex items-center justify-between px-6 md:px-12 lg:px-20">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none group">
          <span
            className="font-accent text-2xl text-nude-700 tracking-widest group-hover:text-nude-500 transition-colors duration-300"
            style={{ fontFamily: "'Italiana', serif" }}
          >
            LU
          </span>
          <span
            className="text-[10px] tracking-[0.3em] text-nude-400 uppercase font-body mt-0.5"
          >
            beauty clinic
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs tracking-[0.18em] uppercase text-nude-700 hover:text-nude-500 transition-colors duration-300 relative group font-body"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-nude-400 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#randevu"
          className="hidden md:block btn-primary text-xs"
        >
          Randevu Al
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-nude-700 hover:text-nude-500 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-nude-100 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-[0.18em] uppercase text-nude-700 hover:text-nude-500 transition-colors duration-300 font-body"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#randevu"
            className="btn-primary text-center text-xs mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Randevu Al
          </a>
        </div>
      </div>
    </nav>
  );
}
