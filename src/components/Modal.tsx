import { useEffect } from 'react'
import { Project } from '../data/projects'

interface ModalProps {
  project: Project
  onClose: () => void
}

export function Modal({ project, onClose }: ModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 dark:bg-black/70"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-lg flex-col overflow-y-auto border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-[#111110]"
        onClick={(e) => e.stopPropagation()}
      >
        {project.image && (
          <img
            src={project.image}
            alt={project.name}
            className="h-48 w-full border-b border-neutral-100 object-cover dark:border-neutral-800"
          />
        )}

        <div className="flex flex-col gap-5 p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="font-mono text-[0.6875rem] text-neutral-400 dark:text-neutral-500">
                {project.num}
              </span>
              <h2 className="mt-1 text-[18px] font-medium tracking-tight text-neutral-900 dark:text-[#eeeeec]">
                {project.name}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="mt-1 cursor-pointer border-none bg-transparent p-0 text-xl leading-none text-neutral-400 transition-colors hover:text-neutral-900 dark:hover:text-[#eeeeec]"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <p className="whitespace-pre-wrap text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
            {project.longDescription ?? project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-neutral-200 px-2.5 py-1 font-mono text-[0.6875rem] text-neutral-400 dark:border-neutral-700 dark:text-neutral-500"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3 pt-1">
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-neutral-900 bg-neutral-900 px-4 py-2 text-[0.8125rem] text-white no-underline transition-opacity hover:opacity-85 dark:border-[#eeeeec] dark:bg-[#eeeeec] dark:text-[#111110]"
              >
                View project ↗
              </a>
            )}
            {project.sourceHref && (
              <a
                href={project.sourceHref}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-neutral-200 px-4 py-2 text-[0.8125rem] text-neutral-900 no-underline transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:text-[#eeeeec] dark:hover:bg-neutral-800/50"
              >
                Source code ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
