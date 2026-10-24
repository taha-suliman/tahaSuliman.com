// src/components/cards/VolunteeringCard.jsx
import { useApp } from '../../context/AppContext';

export default function VolunteeringCard({ item, index }) {
  const { lang, theme } = useApp();
  const isLight = theme === 'light';

  return (
    <div
      className={`relative rounded-2xl border overflow-hidden card-hover p-6 ${
        isLight
          ? 'bg-white border-[#3d1308]/15 hover:border-[#3d1308]/40'
          : 'bg-[#13122a]/60 border-[#3d1308]/20 hover:border-[#3d1308]/50'
      }`}
    >
      {/* Top accent line */}
      <div className={`absolute top-0 start-0 end-0 h-1 bg-gradient-to-r ${item.gradient}`} />

      {/* Icon + Role */}
      <div className="flex items-start gap-4 mb-4">
        <span className="text-4xl">{item.icon}</span>
        <div className="flex-1 min-w-0">
          <h3 className={`font-display font-bold text-lg leading-tight ${isLight ? 'text-[#1a0d0a]' : 'text-[#e2e0ff]'}`}>
            {item.org[lang]}
          </h3>
          <p className="text-[#ff4d1a] text-sm font-medium mt-0.5">{item.role[lang]}</p>
          <p className={`text-xs font-mono mt-1 ${isLight ? 'text-[#3d1308]/55' : 'text-[#e2e0ff]/40'}`}>
            {item.period[lang]}
          </p>
        </div>
      </div>

      <p className={`text-sm leading-relaxed mb-5 ${isLight ? 'text-[#1a0d0a]/70' : 'text-[#e2e0ff]/60'}`}>
        {item.description[lang]}
      </p>

      {/* Activities */}
      <ul className="flex flex-col gap-2">
        {item.activities.map((activity, i) => (
          <li
            key={i}
            className={`flex items-center gap-2 text-sm ${isLight ? 'text-[#1a0d0a]/70' : 'text-[#e2e0ff]/60'}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d1a] flex-shrink-0" />
            {typeof activity === 'object' ? activity[lang] : activity}
          </li>
        ))}
      </ul>
    </div>
  );
}
