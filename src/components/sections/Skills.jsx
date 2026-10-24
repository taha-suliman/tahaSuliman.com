// src/components/sections/Skills.jsx
import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { useIntersection } from '../../hooks/useIntersection';
import skills from '../../data/skills';

function SkillBar({ skill, visible, delay, isLight }) {
  return (
    <div className="group" style={{ transitionDelay: `${delay}ms` }}>
      <div className="flex justify-between items-center mb-1.5">
        <span className={`text-sm font-medium flex items-center gap-2 ${isLight ? 'text-[#1a0d0a]' : 'text-[#e2e0ff]'}`}>
          <span>{skill.icon}</span>
          {skill.name}
        </span>
        <span className={`text-xs font-mono ${isLight ? 'text-[#3d1308]/60' : 'text-[#ff4d1a]/60'}`}>
          {skill.level}%
        </span>
      </div>
      <div className={`h-2 rounded-full overflow-hidden ${isLight ? 'bg-[#3d1308]/10' : 'bg-[#3d1308]/20'}`}>
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#3d1308] to-[#ff4d1a] transition-all duration-1000 ease-out"
          style={{ width: visible ? `${skill.level}%` : '0%', transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  );
}

const TABS = ['frontend', 'backend', 'languages', 'ccna', 'cctv', 'mcsa', 'tools'];

export default function Skills() {
  const { t, theme } = useApp();
  const [ref, visible] = useIntersection();
  const [activeTab, setActiveTab] = useState('frontend');
  const isLight = theme === 'light';

  const tabLabels = {
    frontend: t.skills.frontend,
    backend: t.skills.backend,
    languages: t.skills.languages,
    tools: t.skills.tools,
    ccna: t.skills.ccna,
    cctv: t.skills.cctv,
    mcsa: t.skills.mcsa,
  };

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-24 relative ${isLight ? 'bg-[#f0ebe5]' : 'bg-[#0d0c1d]'}`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#3d1308]/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* <p className={`font-mono text-xs tracking-widest mb-2 ${isLight ? 'text-[#3d1308]/60' : 'text-[#ff4d1a]/60'}`}>
            05.
          </p> */}
          <h2 className="font-display font-black text-4xl md:text-5xl text-gradient mb-2">
            {t.skills.title}
          </h2>
          <p className={`font-body text-base mt-3 ${isLight ? 'text-[#1a0d0a]/60' : 'text-[#e2e0ff]/50'}`}>
            {t.skills.subtitle}
          </p>
          <hr className="section-divider w-24 mt-4" />
        </div>

        {/* Tabs */}
        <div className={`flex flex-wrap gap-2 mb-10 transition-all duration-700 delay-100 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-[#3d1308] to-[#6b2010] text-white shadow-lg shadow-[#3d1308]/30'
                  : isLight
                  ? 'bg-white border border-[#3d1308]/20 text-[#1a0d0a] hover:border-[#3d1308]/40'
                  : 'bg-[#13122a]/50 border border-[#3d1308]/20 text-[#e2e0ff]/70 hover:border-[#3d1308]/40'
              }`}
            >
              {tabLabels[tab]}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 p-8 rounded-2xl border transition-all duration-700 delay-200 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        } ${
          isLight ? 'bg-white border-[#3d1308]/15' : 'bg-[#13122a]/50 border-[#3d1308]/20'
        }`}>
          {skills[activeTab].map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} visible={visible} delay={i * 80} isLight={isLight} />
          ))}
        </div>
      </div>
    </section>
  );
}
