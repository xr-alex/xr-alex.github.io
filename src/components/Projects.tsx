import { useState } from 'react'
import { projects, Project } from '../data/projects'
import { SectionLabel } from './About'
import { Modal } from './Modal'

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects" className="px-14 py-16 border-b border-neutral-100 dark:border-neutral-800">
      <SectionLabel>Projects</SectionLabel>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-neutral-100 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-800">
        {projects.map((project) => (
          <button
            key={project.num}
            onClick={() => setSelected(project)}
            className="
              group bg-white dark:bg-[#111110]
              p-6 flex flex-col gap-2.5 text-left
              hover:bg-neutral-50 dark:hover:bg-neutral-900/80
              transition-colors border-none cursor-pointer w-full
            "
          >
            <span className="font-mono text-[0.6875rem] text-neutral-400 dark:text-neutral-500">
              {project.num}
            </span>
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-[14px] font-medium tracking-tight text-neutral-900 dark:text-[#eeeeec]">
                {project.name}
              </h3>
              <span className="text-neutral-300 dark:text-neutral-600 group-hover:text-neutral-500 dark:group-hover:text-neutral-400 transition-colors text-base shrink-0">
                ↗
              </span>
            </div>
            <p className="text-[0.8125rem] text-neutral-500 dark:text-neutral-400 leading-relaxed flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1 mt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[0.625rem] px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <Modal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}