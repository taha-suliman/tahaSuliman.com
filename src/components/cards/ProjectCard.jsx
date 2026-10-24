// src/components/cards/ProjectCard.jsx
import { useApp } from '../../context/AppContext';

export default function ProjectCard({ project, index }) {
  const { lang, theme } = useApp();
  const isLight = theme === 'light';

  return (
    <div
      className={`group relative rounded-2xl border overflow-hidden card-hover transition-all duration-500 ${
        isLight
          ? 'bg-white border-[#3d1308]/15 hover:border-[#3d1308]/40'
          : 'bg-[#13122a]/60 border-[#3d1308]/20 hover:border-[#3d1308]/50'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image / Preview */}
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title[lang]}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c1d]/80 via-transparent to-transparent" />

        {/* Type badge */}
        <span className="absolute top-3 start-3 px-3 py-1 rounded-full text-xs font-mono bg-[#3d1308]/80 text-white backdrop-blur-sm">
          {project.type}
        </span>

        {/* Icon */}
        <span className="absolute top-3 end-3 text-2xl">{project.icon}</span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className={`font-display font-bold text-xl mb-2 group-hover:text-[#ff4d1a] transition-colors ${
          isLight ? 'text-[#1a0d0a]' : 'text-[#e2e0ff]'
        }`}>
          {project.title[lang]}
        </h3>

        <p className={`text-sm leading-relaxed mb-5 ${isLight ? 'text-[#1a0d0a]/65' : 'text-[#e2e0ff]/55'}`}>
          {project.description[lang]}
        </p>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono border ${
                isLight
                  ? 'bg-[#3d1308]/8 border-[#3d1308]/15 text-[#3d1308]'
                  : 'bg-[#3d1308]/15 border-[#3d1308]/30 text-[#ff4d1a]/80'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          {project.url !== '#' ? (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center px-4 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#3d1308] to-[#6b2010] text-white hover:shadow-lg hover:shadow-[#3d1308]/30 transition-all"
            >
              Live
            </a>
          ) : (
            <span className={`flex-1 text-center px-4 py-2.5 rounded-xl text-sm font-semibold opacity-40 cursor-default ${
              isLight ? 'bg-[#3d1308]/10 text-[#3d1308]' : 'bg-[#3d1308]/10 text-[#e2e0ff]'
            }`}>
              Private
            </span>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all ${
              isLight
                ? 'border-[#3d1308]/25 text-[#3d1308] hover:bg-[#3d1308]/10'
                : 'border-[#3d1308]/35 text-[#e2e0ff] hover:border-[#ff4d1a]/40 hover:text-[#ff4d1a]'
            }`}
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </div>
  );
}
