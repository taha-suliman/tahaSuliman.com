// src/components/sections/Projects.jsx
import { useApp } from '../../context/AppContext';
import { useIntersection } from '../../hooks/useIntersection';
import ProjectCard from '../cards/ProjectCard';
import projects from '../../data/projects';

export default function Projects() {
  const { t, theme } = useApp();
  const [ref, visible] = useIntersection();
  const isLight = theme === 'light';

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-24 relative ${isLight ? 'bg-[#f5f0eb]' : 'bg-[#080717]'}`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3d1308]/15 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* <p className={`font-mono text-xs tracking-widest mb-2 ${isLight ? 'text-[#3d1308]/60' : 'text-[#ff4d1a]/60'}`}>
            02.
          </p> */}
          <h2 className="font-display font-black text-4xl md:text-5xl text-gradient mb-2">
            {t.projects.title}
          </h2>
          <p className={`font-body text-base mt-3 ${isLight ? 'text-[#1a0d0a]/60' : 'text-[#e2e0ff]/50'}`}>
            {t.projects.subtitle}
          </p>
          <hr className="section-divider w-24 mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
