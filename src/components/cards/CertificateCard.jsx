// src/components/cards/CertificateCard.jsx
import { useApp } from '../../context/AppContext';

export default function CertificateCard({ cert }) {
  const { lang, t, theme } = useApp();
  const isLight = theme === 'light';

  return (
    <a
      href={cert.url}
      target="_blank"
      rel="noreferrer"
      className={`group relative flex flex-col rounded-2xl border overflow-hidden card-hover transition-all ${isLight
        ? 'bg-white border-[#3d1308]/15 hover:border-[#3d1308]/40'
        : 'bg-[#13122a]/60 border-[#3d1308]/20 hover:border-[#3d1308]/50'
        }`}
    >
      {/* Gradient header */}
      <div className={`w-100 h-auto bg-gradient-to-br ${cert.gradient} flex items-center justify-center relative overflow-hidden`}>
        {/* <span className="text-5xl z-10">{cert.icon}</span> */}
          {/* // داخل مكون الكارد الخاص بك  */}
        <div className="relative w-full h-48 overflow-hidden rounded-t-xl bg-gray-100">
          {cert.image.endsWith('.pdf') ? (
            /* عرض الـ PDF كمصغر - نستخدم pointer-events-none لمنع التفاعل داخله */
            <iframe
              src={`${cert.image}#toolbar=0&navpanes=0&scrollbar=0`}
              className="w-full h-full border-none pointer-events-none scale-110"
              title="thumbnail"
            />
          ) : (
            /* إذا كانت صورة عادية */
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-full object-cover"
            />
          )}

          {/* طبقة شفافة فوق الـ iframe عشان تضمن إن الضغطة تمسك في الكارد مش في ملف الـ PDF */}
          <div className="absolute inset-0 z-10 bg-transparent"></div>
        </div>
        <div className="p-5"></div>
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 70% 30%, rgba(255,77,26,0.4), transparent 60%)`,
          }}
        />
        {/* Link indicator */}
        <span className="absolute top-3 end-3 text-white/60 group-hover:text-white transition-colors text-lg">↗</span>
      </div>

      {/* Body */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className={`font-display font-bold text-base leading-snug mb-2 group-hover:text-[#ff4d1a] transition-colors ${isLight ? 'text-[#1a0d0a]' : 'text-[#e2e0ff]'
          }`}>
          {cert.title[lang]}
        </h3>

        <p className={`text-sm font-medium mb-1 ${isLight ? 'text-[#3d1308]' : 'text-[#ff4d1a]/80'}`}>
          {cert.issuer}
        </p>

        <p className={`text-xs font-mono mb-4 ${isLight ? 'text-[#1a0d0a]/50' : 'text-[#e2e0ff]/40'}`}>
          {cert.period[lang]}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {cert.skills.map((skill) => (
            <span
              key={skill}
              className={`px-2 py-0.5 rounded-md text-xs font-mono border ${isLight
                ? 'bg-[#3d1308]/8 border-[#3d1308]/15 text-[#3d1308]/80'
                : 'bg-[#3d1308]/15 border-[#3d1308]/25 text-[#ff4d1a]/70'
                }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className={`px-5 py-3 border-t text-xs font-mono flex items-center gap-1.5 ${isLight ? 'border-[#3d1308]/10 text-[#3d1308]/50' : 'border-[#3d1308]/15 text-[#e2e0ff]/35'
        } group-hover:text-[#ff4d1a] transition-colors`}>
        <span>🔗</span>
        <span>{t.certificates.viewCert}</span>
      </div>
    </a>
  );
}
