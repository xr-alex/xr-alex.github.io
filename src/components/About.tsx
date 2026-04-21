import { stack } from '../data/projects'

export function About() {
  return (
    <section id="about" className="px-14 py-16 border-b border-neutral-100 dark:border-neutral-800">
      <SectionLabel>About</SectionLabel>
      <p className="text-[0.9375rem] leading-[1.75] text-neutral-500 dark:text-neutral-400 max-w-xl">
        I'm a{' '}
        <strong className="text-neutral-900 dark:text-[#eeeeec] font-medium">
          full-stack engineer
        </strong>{' '}
        with extensive experience tackling complex technical challenges in dynamic environments. I've spent the last four years at a biotech startup building everything from{' '}
        <strong className="text-neutral-900 dark:text-[#eeeeec] font-medium">
          React frontends</strong>{' '}and{' '}<strong className="text-neutral-900 dark:text-[#eeeeec] font-medium">.NET APIs
        </strong>{' '}
        to{' '}
        <strong className="text-neutral-900 dark:text-[#eeeeec] font-medium">
          AI-integrated workflows
        </strong>{' '}
        and{' '}<strong className="text-neutral-900 dark:text-[#eeeeec] font-medium">cloud infrastructure</strong>.{' '}// usually all at once
        <br />
        <br />
        Before that, I played a key role in a major energy infrastructure modernization project for a significant Netherlands energy operator. It involved migrating legacy Flash software to <strong className="text-neutral-900 dark:text-[#eeeeec] font-medium">Angular</strong> and <strong className="text-neutral-900 dark:text-[#eeeeec] font-medium">Java Spring</strong>, navigating a poorly documented codebase that required extensive system auditing and architectural redesign.
        <br />
        <br />
        I care deeply about the product side of engineering. Good software is fast, maintainable, and built around the people
        using it.
      </p>
      <div className="flex flex-wrap gap-1.5 mt-7 max-w-xl">
        {stack.map((item) => (
          <span
            key={item}
            className="font-mono text-[0.6875rem] px-2.5 py-1 border border-neutral-200 dark:border-neutral-700 text-neutral-400 dark:text-neutral-500"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 mb-8">
      <span className="font-mono text-[0.6875rem] tracking-widest uppercase text-neutral-400 dark:text-neutral-500 whitespace-nowrap">
        {children}
      </span>
      <div className="flex-1 h-px bg-neutral-100 dark:bg-neutral-800" />
    </div>
  )
}
