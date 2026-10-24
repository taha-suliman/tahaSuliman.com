// src/components/sections/Volunteering.jsx
import { useApp } from '../../context/AppContext';
import { useIntersection } from '../../hooks/useIntersection';
import VolunteeringCard from '../cards/VolunteeringCard';
import volunteering from '../../data/volunteering';

export default function Volunteering() {
  const { t, theme } = useApp();
  const [ref, visible] = useIntersection();
  const isLight = theme === 'light';

  return (
    <section
      id="volunteering"
      ref={ref}
      className={`py-24 relative ${isLight ? 'bg-[#f0ebe5]' : 'bg-[#0d0c1d]'}`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#3d1308]/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* <p className={`font-mono text-xs tracking-widest mb-2 ${isLight ? 'text-[#3d1308]/60' : 'text-[#ff4d1a]/60'}`}>
            03.
          </p> */}
          <h2 className="font-display font-black text-4xl md:text-5xl text-gradient mb-2">
            {t.volunteering.title}
          </h2>
          <p className={`font-body text-base mt-3 ${isLight ? 'text-[#1a0d0a]/60' : 'text-[#e2e0ff]/50'}`}>
            {t.volunteering.subtitle}
          </p>
          <hr className="section-divider w-24 mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {volunteering.map((item, i) => (
            <div
              key={item.id}
              className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <VolunteeringCard item={item} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
