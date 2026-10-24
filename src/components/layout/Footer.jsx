// src/components/layout/Footer.jsx
import { useApp } from '../../context/AppContext';

export default function Footer() {
  const { t, theme } = useApp();
  const isLight = theme === 'light';
  const year = new Date().getFullYear();

  return (
    <footer className={`py-8 border-t ${
      isLight ? 'bg-[#f0ebe5] border-[#3d1308]/15' : 'bg-[#0d0c1d] border-[#3d1308]/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <p className={`text-sm font-mono ${isLight ? 'text-[#1a0d0a]/50' : 'text-[#e2e0ff]/35'}`}>
              {t.footer.rights} — {t.hero.name} © {year}
          </p>

        </div>
      </div>
    </footer>
  );
}
