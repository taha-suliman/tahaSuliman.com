// src/components/sections/About.jsx
import { useApp } from '../../context/AppContext';
import { useIntersection } from '../../hooks/useIntersection';

const education = [
  {
    degree: {
      ar: 'كلية الحاسبات ومعلومات - جامعة عين شمس',
      en: 'Faculty of Computer and Information Sciences - Ain Shams University',
      ha: 'Kwalejin Kimiyyar Kwamfuta - Jami\'ar Ain Shams',
    },
    year: { ar: 'أكتوبر 2022 – تم تعليق الدراسة', en: 'October 2022 – Studies Suspended', ha: 'Oktoba 2023 – Yanzu' },
    icon: '',
  },
  {
    degree: {
      ar: 'مراكز 6 أكتوبر للتنمية البشرية',
      en: '6 October for Human Developmen',
      ha: 'Kwalejin Kimiyyar Kwamfuta - Jami\'ar Ain Shams',
    },
    year: { ar: 'نوفمبر 2025 – ديسمبر 2026', en: 'November 2025 – December 2026', ha: 'Oktoba 2023 – Yanzu' },
    icon: '',
  },
  {
    degree: {
      ar: 'CLS Learning Solutions',
      en: 'CLS Learning Solutions',
      ha: 'Kwalejin Kimiyyar Kwamfuta - Jami\'ar Ain Shams',
    },
    year: { ar: 'أغسطس 2023 – نوفمبر 2023', en: 'August 2023 – November 2023', ha: 'Oktoba 2023 – Yanzu' },
    icon: '',
  },
  {
    degree: {
      ar: 'الثانوية العامة - مدرسة القويز الثانوية',
      en: 'High School - Al-Quwaiz Secondary School',
      ha: 'Makarantar Sakandare - Al-Quwaiz',
    },
    year: { ar: '2021', en: '2021', ha: '2021' },
    icon: '',
  },
];

const personalInfo = [
  { icon: '', key: { ar: 'الموقع', en: 'Location', ha: 'Wuri' }, value: { ar: 'القاهرة، عين شمس، مصر', en: 'Cairo, Ain Shams, Egypt', ha: 'Alkahira, Ain Shams, Masar' } },
  { icon: '', key: { ar: 'البريد', en: 'Email', ha: 'Imel' }, value: 'dev.tahasuliman@gmail.com', link: 'mailto:dev.tahasuliman@gmail.com' },
  { icon: '', key: { ar: 'الهاتف', en: 'Phone', ha: 'Waya' }, value: '+20 114 331 5966', link: 'tel:+201143315966' },
  { icon: '', key: { ar: 'لغات التواصل', en: 'Spoken Languages', ha: 'Harsunan magana' }, value: { ar: 'العربية • الإنجليزية ', en: 'Arabic • English ', ha: 'Larabci • Turanci • Hausa' } },
];

export default function About() {
  const { t, lang, theme } = useApp();
  const [ref, visible] = useIntersection();
  const isLight = theme === 'light';

  return (
    <section
      id="about"
      ref={ref}
      className={`py-24 relative ${isLight ? 'bg-[#f0ebe5]' : 'bg-[#0d0c1d]'}`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#3d1308]/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* <p className={`font-mono text-xs tracking-widest mb-2 ${isLight ? 'text-[#3d1308]/60' : 'text-[#ff4d1a]/60'}`}>
            01.
          </p> */}
          <h2 className="font-display font-black text-4xl md:text-5xl text-gradient mb-4">
            {t.about.title}
          </h2>
          <hr className="section-divider w-24" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Description & Info */}
          <div className={`transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className={`font-body text-lg leading-relaxed mb-10 ${isLight ? 'text-[#1a0d0a]/80' : 'text-[#e2e0ff]/70'} whitespace-pre-line`}>
              {t.about.description}
            </p>

            {/* Personal Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalInfo.map((item, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-xl border transition-all ${
                    isLight
                      ? 'bg-white/60 border-[#3d1308]/15 hover:border-[#3d1308]/30'
                      : 'bg-[#13122a]/50 border-[#3d1308]/20 hover:border-[#3d1308]/40'
                  }`}
                >
                  <p className={`text-xs font-mono mb-1 ${isLight ? 'text-[#3d1308]/60' : 'text-[#ff4d1a]/60'}`}>
                    {item.icon} {typeof item.key === 'object' ? item.key[lang] : item.key}
                  </p>
                  {item.link ? (
                    <a
                      href={item.link}
                      className={`text-sm font-medium hover:text-[#ff4d1a] transition-colors break-all ${
                        isLight ? 'text-[#1a0d0a]' : 'text-[#e2e0ff]'
                      }`}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className={`text-sm font-medium ${isLight ? 'text-[#1a0d0a]' : 'text-[#e2e0ff]'}`}>
                      {typeof item.value === 'object' ? item.value[lang] : item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className={`font-display font-bold text-2xl mb-6 ${isLight ? 'text-[#1a0d0a]' : 'text-[#e2e0ff]'}`}>
              {t.about.education}
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className={`absolute top-0 bottom-0 w-px ${lang === 'ar' ? 'right-5' : 'left-5'} ${isLight ? 'bg-[#3d1308]/20' : 'bg-[#3d1308]/30'}`} />

              <div className="flex flex-col gap-6">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className={`flex gap-6 items-start ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}
                  >
                    <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0 border ${
                      isLight ? 'bg-white border-[#3d1308]/20' : 'bg-[#13122a] border-[#3d1308]/40'
                    }`}>
                      {edu.icon}
                    </div>
                    <div className={`flex-1 p-5 rounded-xl border ${
                      isLight ? 'bg-white/60 border-[#3d1308]/15' : 'bg-[#13122a]/50 border-[#3d1308]/20'
                    }`}>
                      <p className={`font-semibold text-sm leading-snug mb-2 ${isLight ? 'text-[#1a0d0a]' : 'text-[#e2e0ff]'}`}>
                        {edu.degree[lang]}
                      </p>
                      <p className={`text-xs font-mono ${isLight ? 'text-[#3d1308]/60' : 'text-[#ff4d1a]/60'}`}>
                        {edu.year[lang]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
