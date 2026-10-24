// src/components/sections/Contact.jsx
import { useApp } from '../../context/AppContext';
import { useIntersection } from '../../hooks/useIntersection';

const contactLinks = [
  {
    icon: '',
    labelKey: 'email',
    value: 'dev.tahasuliman@gmail.com',
    href: 'mailto:dev.tahasuliman@gmail.com',
    display: 'dev.tahasuliman@gmail.com',
  },
  {
    icon: '',
    labelKey: 'linkedin',
    value: 'linkedin.com/in/taha-suliman',
    href: 'https://linkedin.com/in/taha-suliman',
    display: 'linkedin.com/in/taha-suliman',
  },
  {
    icon: '',
    labelKey: 'github',
    value: 'github.com/taha-suliman',
    href: 'https://github.com/taha-suliman',
    display: 'github.com/taha-suliman',
  },
  {
    icon: '',
    labelKey: 'facebook',
    value: 'facebook.com/tahaSulimanMusa',
    href: 'https://facebook.com/tahaSulimanMusa',
    display: 'facebook.com/tahaSulimanMusa',
  },
  {
    icon: '',
    labelKey: 'phone',
    value: '+20 114 331 5966',
    href: 'tel:+201143315966',
    display: '+20 114 331 5966',
  },
  {
    icon: '',
    labelKey: 'whats',
    value: '+249960142542',
    href: 'https://wa.me/+201143315966',
    display: '+249 960 142 542',
  },
];

export default function Contact() {
  const { t, theme } = useApp();
  const [ref, visible] = useIntersection();
  const isLight = theme === 'light';

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-24 relative ${isLight ? 'bg-[#f5f0eb]' : 'bg-[#080717]'}`}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#3d1308]/40 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#3d1308]/8 blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* <p className={`font-mono text-xs tracking-widest mb-2 ${isLight ? 'text-[#3d1308]/60' : 'text-[#ff4d1a]/60'}`}>
            06.
          </p> */}
          <h2 className="font-display font-black text-4xl md:text-5xl text-gradient mb-2">
            {t.contact.title}
          </h2>
          <p className={`font-body text-lg mt-4 ${isLight ? 'text-[#1a0d0a]/60' : 'text-[#e2e0ff]/50'}`}>
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {contactLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className={`group flex items-center gap-4 p-5 rounded-2xl border card-hover text-start transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${
                isLight
                  ? 'bg-white border-[#3d1308]/15 hover:border-[#3d1308]/40'
                  : 'bg-[#13122a]/60 border-[#3d1308]/20 hover:border-[#3d1308]/50'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="text-3xl group-hover:scale-110 transition-transform">{link.icon}</span>
              <div className="min-w-0 flex-1">
                <p className={`text-xs font-mono mb-0.5 ${isLight ? 'text-[#3d1308]/55' : 'text-[#ff4d1a]/55'}`}>
                  {t.contact[link.labelKey]}
                </p>
                <p dir='ltr' className={`text-sm font-medium truncate group-hover:text-[#ff4d1a] transition-colors ${
                  isLight ? 'text-[#1a0d0a]' : 'text-[#e2e0ff]'
                }`}>
                  {link.display}
                </p>
              </div>
              <span className={`text-lg opacity-0 group-hover:opacity-100 transition-opacity ${isLight ? 'text-[#3d1308]' : 'text-[#ff4d1a]'}`}>
                ↗
              </span>
            </a>
          ))}
        </div>

        {/* Big CTA email */}
        <div className={`mt-12 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="mailto:dev.tahasuliman@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#3d1308] to-[#6b2010] text-white font-semibold text-base hover:shadow-2xl hover:shadow-[#3d1308]/40 transition-all hover:-translate-y-1 animate-glow-pulse"
          >
            <span></span>
            <span>dev.tahasuliman@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}
