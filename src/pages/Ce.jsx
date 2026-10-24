// src/pages/CertificateDetailPage.jsx
// Usage: <CertificateDetailPage cert={cert} onBack={() => {}} />

import { useState } from 'react';
import { useApp } from '../context/AppContext';

/* ── helper ── */
function getDriveEmbedUrl(url) {
  if (!url) return null;
  if (url.includes('/preview')) return url;
  const m = url.match(/\/file\/d\/([^/?#]+)/);
  if (m) return `https://drive.google.com/file/d/${m[1]}/preview`;
  const q = url.match(/[?&]id=([^&]+)/);
  if (q) return `https://drive.google.com/file/d/${q[1]}/preview`;
  return url;
}

/* ── Meta row ── */
function MetaRow({ icon, label, value, accent }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-base opacity-50 shrink-0">{icon}</span>
      <span className="font-mono text-[10px] uppercase tracking-widest text-[#e2e0ff]/40 w-16 shrink-0">
        {label}
      </span>
      <span className={`text-sm font-semibold ${accent ? 'text-[#ff4d1a]/80' : 'text-[#e2e0ff]'}`}>
        {value}
      </span>
    </div>
  );
}

/* ── Main ── */
export default function CertificateDetailPage({ cert, onBack }) {
  const { lang, theme } = useApp();
  const isLight = theme === 'light';
  const [tab, setTab] = useState('image'); // 'image' | 'preview'
  const embedUrl = getDriveEmbedUrl(cert?.url);
  const isRtl = lang === 'ar';

  const labels = {
    ar: {
      back: 'العودة للشهادات',
      issuer: 'الجهة',
      period: 'الفترة',
      type: 'النوع',
      skills: 'المهارات المكتسبة',
      openDrive: 'فتح في Drive',
      imageTab: 'الصورة',
      previewTab: 'المعاينة',
      skillsStat: 'مهارة',
      monthsStat: 'أشهر',
      specialty: 'التخصص',
    },
    en: {
      back: 'Back to certificates',
      issuer: 'Issuer',
      period: 'Period',
      type: 'Type',
      skills: 'Skills covered',
      openDrive: 'Open in Drive',
      imageTab: 'Image',
      previewTab: 'Preview',
      skillsStat: 'Skills',
      monthsStat: 'Months',
      specialty: 'Specialty',
    },
    ha: {
      back: 'Koma shaidu',
      issuer: 'Mawaɗa',
      period: 'Lokaci',
      type: 'Nau\'i',
      skills: 'Ƙwarewar da aka samu',
      openDrive: 'Buɗe a Drive',
      imageTab: 'Hoto',
      previewTab: 'Duba',
      skillsStat: 'Ƙwarewa',
      monthsStat: 'Watanni',
      specialty: 'Ƙwarewa',
    },
  };
  const l = labels[lang] || labels.en;

  // rough month count from period string
  const monthCount = cert?.period?.[lang]
    ?.replace(/[^\d–-]/g, '')
    ?.split(/[–-]/)
    ?.filter(Boolean)?.length === 2 ? 5 : '–';

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`min-h-screen ${isLight ? 'bg-[#faf8f5]' : 'bg-[#0d0c1d]'}`}
    >
      {/* subtle radial glow top */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(255,77,26,0.08), transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 py-10 pb-20">

        {/* Back button */}
        {onBack && (
          <button
            onClick={-1}
            className={`flex items-center gap-2 mb-10 font-mono text-xs uppercase tracking-widest transition-colors
              ${isLight ? 'text-[#1a0d0a]/40 hover:text-[#ff4d1a]' : 'text-[#e2e0ff]/35 hover:text-[#ff4d1a]'}`}
          >
            <span>{isRtl ? '→' : '←'}</span>
            <span>{l.back}</span>
          </button>
        )}

        {/* Hero grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-14">

          {/* ── Left: details ── */}
          <div className="flex flex-col">

            {/* Type badge */}
            <div className={`self-start flex items-center gap-2 px-3 py-1 rounded-full border font-mono text-[10px] uppercase tracking-widest mb-5
              ${isLight
                ? 'bg-[#ff4d1a]/8 border-[#ff4d1a]/20 text-[#ff4d1a]'
                : 'bg-[#ff4d1a]/10 border-[#ff4d1a]/20 text-[#ff4d1a]'}`}>
              <span>{cert?.icon}</span>
              <span>{cert?.type}</span>
            </div>

            {/* Title */}
            <h1 className={`font-display font-extrabold text-2xl sm:text-3xl leading-snug mb-6
              ${isLight ? 'text-[#1a0d0a]' : 'text-[#e2e0ff]'}`}>
              {cert?.title?.[lang]}
            </h1>

            {/* Meta */}
            <div className="flex flex-col gap-3 mb-6">
              <MetaRow icon="🏛️" label={l.issuer} value={cert?.issuer} accent />
              <MetaRow icon="📅" label={l.period} value={cert?.period?.[lang]} />
              <MetaRow icon="🏷️" label={l.type} value={cert?.type} />
            </div>

            {/* Divider */}
            <div className={`h-px mb-6 ${isLight ? 'bg-[#3d1308]/10' : 'bg-[#ff4d1a]/10'}`} />

            {/* Skills */}
            <p className={`font-mono text-[10px] uppercase tracking-widest mb-3
              ${isLight ? 'text-[#1a0d0a]/40' : 'text-[#e2e0ff]/35'}`}>
              {l.skills}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {cert?.skills?.map((s) => (
                <span
                  key={s}
                  className={`px-3 py-1 rounded-lg border font-mono text-xs transition-colors
                    ${isLight
                      ? 'bg-[#ff4d1a]/6 border-[#ff4d1a]/15 text-[#3d1308]/80 hover:bg-[#ff4d1a]/12'
                      : 'bg-[#ff4d1a]/8 border-[#ff4d1a]/20 text-[#ff4d1a]/80 hover:bg-[#ff4d1a]/15'}`}
                >
                  {s}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href={cert?.url}
              target="_blank"
              rel="noreferrer"
              className="self-start flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-[#ff4d1a] hover:bg-[#e03d0e] transition-colors"
            >
              <span>↗</span>
              <span>{l.openDrive}</span>
            </a>
          </div>

          {/* ── Right: viewer card ── */}
          <div className={`rounded-2xl overflow-hidden border
            ${isLight ? 'border-[#3d1308]/12 bg-white' : 'border-[#ff4d1a]/12 bg-[#13122a]'}`}>

            {/* Tabs */}
            <div className={`flex border-b ${isLight ? 'border-[#3d1308]/10' : 'border-[#ff4d1a]/10'}`}>
              {['image', 'preview'].map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`flex-1 py-3 font-mono text-[10px] uppercase tracking-widest transition-colors relative
                    ${tab === t
                      ? 'text-[#ff4d1a]'
                      : isLight ? 'text-[#1a0d0a]/35 hover:text-[#1a0d0a]/60' : 'text-[#e2e0ff]/30 hover:text-[#e2e0ff]/60'}`}
                >
                  {t === 'image' ? l.imageTab : l.previewTab}
                  {tab === t && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff4d1a] rounded-t" />
                  )}
                </button>
              ))}
            </div>

            {/* Pane */}
            {tab === 'image' ? (
              <img
                src={cert?.image}
                alt={cert?.title?.[lang]}
                className="w-full h-auto block"
              />
            ) : (
              <div className="h-[420px] bg-[#0d0c1d]">
                <iframe
                  src={embedUrl}
                  title={cert?.title?.[lang]}
                  className="w-full h-full border-none"
                  allow="autoplay"
                />
              </div>
            )}
          </div>
        </div>

        {/* Stats strip */}
        <div className={`grid grid-cols-3 divide-x rounded-2xl overflow-hidden border
          ${isLight
            ? 'border-[#3d1308]/10 divide-[#3d1308]/10 bg-white'
            : 'border-[#ff4d1a]/10 divide-[#ff4d1a]/10 bg-[#13122a]'}`}>
          {[
            { value: cert?.skills?.length, label: l.skillsStat },
            { value: monthCount, label: l.monthsStat },
            { value: cert?.icon, label: l.specialty },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center py-5 gap-1">
              <span className="text-2xl font-extrabold text-[#ff4d1a]">{value}</span>
              <span className={`font-mono text-[10px] uppercase tracking-widest
                ${isLight ? 'text-[#1a0d0a]/35' : 'text-[#e2e0ff]/30'}`}>
                {label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}