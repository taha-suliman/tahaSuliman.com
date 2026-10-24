// src/components/sections/Hero.jsx
import { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';

export default function Hero() {
  const { t, lang, theme } = useApp();
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = t.hero.slides;
  const isLight = theme === 'light';

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center overflow-hidden ${
        isLight ? 'bg-[#f5f0eb]' : 'bg-[#0d0c1d]'
      }`}
    >
      {/* Background decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#3d1308]/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#0d0c1d]/40 blur-[100px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(61,19,8,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(61,19,8,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className={`order-2 lg:order-1 ${lang === 'ar' ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="animate-fade-in">
              <p
                className={`font-mono text-sm mb-3 tracking-widest ${
                  isLight ? 'text-[#3d1308]/70' : 'text-[#ff4d1a]/70'
                }`}
              >
                {t.hero.greeting}
              </p>
              <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl xl:text-7xl mb-4 leading-tight">
                <span className="text-gradient">{t.hero.name}</span>
              </h1>
              <h2
                className={`font-body font-semibold text-xl md:text-2xl mb-6 ${
                  isLight ? 'text-[#3d1308]' : 'text-[#e2e0ff]/90'
                }`}
              >
                {t.hero.title}
              </h2>
              <p
                className={`font-body text-base md:text-lg mb-10 leading-relaxed max-w-lg ${
                  isLight ? 'text-[#1a0d0a]/70' : 'text-[#e2e0ff]/60'
                }`}
              >
                {t.hero.subtitle}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-full font-semibold text-sm bg-gradient-to-r from-[#3d1308] to-[#6b2010] text-white hover:shadow-lg hover:shadow-[#3d1308]/40 transition-all hover:-translate-y-0.5 animate-glow-pulse"
                >
                  {t.hero.cta}
                </a>
                <a
                  href="#contact"
                  className={`px-6 py-3 rounded-full font-semibold text-sm border-2 transition-all hover:-translate-y-0.5 ${
                    isLight
                      ? 'border-[#3d1308] text-[#3d1308] hover:bg-[#3d1308]/10'
                      : 'border-[#3d1308]/60 text-[#e2e0ff] hover:border-[#ff4d1a]/60 hover:text-[#ff4d1a]'
                  }`}
                >
                  {t.hero.contact}
                </a>
              </div>

              {/* Social quick links */}
              <div className="flex items-center gap-5 mt-8">
                <a
                  href="https://linkedin.com/in/taha-suliman"
                  target="_blank"
                  rel="noreferrer"
                  className={`text-sm font-mono hover:text-[#ff4d1a] transition-colors ${
                    isLight ? 'text-[#1a0d0a]/60' : 'text-[#e2e0ff]/40'
                  }`}
                >
                  LinkedIn ↗
                </a>
                <a
                  href="https://facebook.com/tahaSulimanMusa"
                  target="_blank"
                  rel="noreferrer"
                  className={`text-sm font-mono hover:text-[#ff4d1a] transition-colors ${
                    isLight ? 'text-[#1a0d0a]/60' : 'text-[#e2e0ff]/40'
                  }`}
                >
                  Facebook ↗
                </a>
                <a
                  href="https://github.com/taha-suliman"
                  target="_blank"
                  rel="noreferrer"
                  className={`text-sm font-mono hover:text-[#ff4d1a] transition-colors ${
                    isLight ? 'text-[#1a0d0a]/60' : 'text-[#e2e0ff]/40'
                  }`}
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>

          {/* Slideshow */}
          <div className={`order-1 lg:order-2 ${lang === 'ar' ? 'lg:order-1' : 'lg:order-2'} flex justify-center animate-float`}>
            <div className="relative w-full max-w-sm">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3d1308] to-[#ff4d1a]/30 blur-2xl opacity-40 animate-glow-pulse" />

              {/* Slide container */}
              <div
                className={`relative rounded-2xl border overflow-hidden ${
                  isLight
                    ? 'border-[#3d1308]/20 bg-white/60'
                    : 'border-[#3d1308]/30 bg-[#13122a]/80'
                }`}
              >
                {slides.map((slide, i) => (
                  <div
                    key={i}
                    className={`transition-all duration-1000 ${
                      i === activeSlide ? 'opacity-100' : 'opacity-0 absolute inset-0'
                    }`}
                  >
                    <div className="h-auto overflow-hidden">
                      <img
                        src={slide.image}
                        alt={`Taha Suliman - slide ${i + 1}`}
                        className="w-full h-full h-auto"
                        // loading={i === 0 ? 'eager' : 'lazy'}
                      />
                    </div>
                    <div className="p-5">
                      <p
                        className={`text-sm leading-relaxed font-body ${
                          isLight ? 'text-[#1a0d0a]/80' : 'text-[#e2e0ff]/70'
                        }`}
                      >
                        {slide.description}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Slide indicators */}
                <div className="flex justify-center gap-2 pb-4">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSlide(i)}
                      className={`rounded-full transition-all duration-300 ${
                        i === activeSlide
                          ? 'w-6 h-2 bg-[#ff4d1a]'
                          : 'w-2 h-2 bg-[#3d1308]/40 hover:bg-[#3d1308]/70'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
          <div className={`w-px h-8 ${isLight ? 'bg-[#3d1308]/30' : 'bg-[#e2e0ff]/20'}`} />
          <span className={`text-xs font-mono ${isLight ? 'text-[#3d1308]/40' : 'text-[#e2e0ff]/30'}`}>scroll</span>
        </div> */}
      </div>
    </section>
  );
}
