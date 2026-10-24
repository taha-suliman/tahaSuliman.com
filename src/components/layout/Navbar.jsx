// src/components/layout/Navbar.jsx
import { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Link } from 'react-router-dom';

const LANGUAGES = [
  { code: 'ar', label: 'العربية', flag: '🇸🇩' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  // { code: 'ha', label: 'Hausa', flag: '🌍' },
];

export default function Navbar() {
  const { t, lang, theme, toggleTheme, changeLanguage } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/projects', label: t.nav.projects },
    { href: '/volunteering', label: t.nav.volunteering },
    { href: '/certificates', label: t.nav.certificates },
    { href: '/skills', label: t.nav.skills },
    { href: '/contact', label: t.nav.contact },
  ];

  const isLight = theme === 'light';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? isLight
            ? 'bg-[#f5f0eb]/90 shadow-md backdrop-blur-md'
            : 'bg-[#0d0c1d]/90 shadow-md backdrop-blur-md border-b border-[#3d1308]/30'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-display font-black text-xl md:text-2xl text-gradient">
              TS
            </span>
            <span
              className={`hidden sm:block text-sm font-mono transition-colors ${isLight ? 'text-[#3d1308]' : 'text-[#e2e0ff]/70'
                }`}
            >
              {`<Developer />`}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                to={link.href}
                key={link.href}
                className={`text-sm font-body font-medium transition-colors hover:text-[#ff4d1a] ${isLight ? 'text-[#1a0d0a]' : 'text-[#e2e0ff]/80'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full border transition-all ${isLight
                  ? 'border-[#3d1308]/30 bg-white/50 text-[#3d1308] hover:bg-[#3d1308]/10'
                  : 'border-[#3d1308]/40 bg-[#3d1308]/10 text-[#ff4d1a] hover:bg-[#3d1308]/20'
                }`}
              title={isLight ? t.theme.dark : t.theme.light}
            >
              {isLight ? '🌙' : '☀️'}
            </button>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center gap-1 px-3 py-2 rounded-full border text-sm font-medium transition-all ${isLight
                    ? 'border-[#3d1308]/30 bg-white/50 text-[#3d1308] hover:bg-[#3d1308]/10'
                    : 'border-[#3d1308]/40 bg-[#3d1308]/10 text-[#e2e0ff] hover:bg-[#3d1308]/20'
                  }`}
              >
                {LANGUAGES.find((l) => l.code === lang)?.flag}
                <span>{LANGUAGES.find((l) => l.code === lang)?.label}</span>
                <span className="text-xs opacity-60">▾</span>
              </button>

              {langOpen && (
                <div
                  className={`absolute top-full mt-2 rounded-xl shadow-xl border overflow-hidden min-w-[130px] z-50 ${t.dir === 'rtl' ? 'left-0' : 'right-0'
                    } ${isLight
                      ? 'bg-white border-[#3d1308]/20'
                      : 'bg-[#13122a] border-[#3d1308]/30'
                    }`}
                >
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        changeLanguage(l.code);
                        setLangOpen(false);
                      }}
                      className={`w-full text-start px-4 py-3 text-sm flex items-center gap-2 transition-colors ${lang === l.code
                          ? 'bg-[#3d1308]/20 text-[#ff4d1a]'
                          : isLight
                            ? 'text-[#1a0d0a] hover:bg-[#3d1308]/10'
                            : 'text-[#e2e0ff] hover:bg-[#3d1308]/20'
                        }`}
                    >
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${isLight ? 'text-[#1a0d0a]' : 'text-[#e2e0ff]'
                }`}
            >
              <div className="w-5 flex flex-col gap-1">
                <span
                  className={`block h-0.5 transition-all duration-300 ${isLight ? 'bg-[#1a0d0a]' : 'bg-[#e2e0ff]'
                    } ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
                />
                <span
                  className={`block h-0.5 transition-all duration-300 ${isLight ? 'bg-[#1a0d0a]' : 'bg-[#e2e0ff]'
                    } ${menuOpen ? 'opacity-0' : ''}`}
                />
                <span
                  className={`block h-0.5 transition-all duration-300 ${isLight ? 'bg-[#1a0d0a]' : 'bg-[#e2e0ff]'
                    } ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`lg:hidden border-t transition-all animate-slide-down ${isLight
              ? 'bg-[#f5f0eb]/95 border-[#3d1308]/20'
              : 'bg-[#0d0c1d]/95 border-[#3d1308]/30'
            }`}
        >
          <div className="px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                to={link.href}
                key={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors hover:text-[#ff4d1a] hover:bg-[#3d1308]/10 ${isLight ? 'text-[#1a0d0a]' : 'text-[#e2e0ff]/80'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
