import { SectionLabel } from './About'

const contactItems = [
  {
    label: 'email',
    value: (
      <span>
        cgalex.usa
        <wbr />
        @gmail.com
      </span>
    ),
    href: 'mailto:cgalex.usa@gmail.com',
  },
  {
    label: 'linkedin',
    value: 'linkedin.com/in/alex-guerreiro',
    href: 'https://linkedin.com/in/alex-guerreiro',
  },
  {
    label: 'github',
    value: 'github.com/xr-alex',
    href: 'https://github.com/xr-alex',
  },
  { label: 'location', value: 'New York', href: undefined },
]

export function Contact() {
  return (
    <section id="contact" className="px-14 py-16">
      <SectionLabel>Contact</SectionLabel>
      <p className="mb-8 max-w-md text-[0.8125rem] leading-relaxed text-neutral-500 dark:text-neutral-400">
        I'm currently open to new opportunities // full-time roles, interesting
        contracts, or just a good conversation about hard problems.
      </p>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {contactItems.map(({ label, value, href }) => (
          <div key={label} className="flex flex-col gap-1.5">
            <span className="font-mono text-[0.6875rem] tracking-wider text-neutral-400 dark:text-neutral-500">
              {label}
            </span>
            {href ? (
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="text-sm text-neutral-900 no-underline hover:underline dark:text-[#eeeeec]"
              >
                {value}
              </a>
            ) : (
              <span className="text-sm text-neutral-900 dark:text-[#eeeeec]">
                {value}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
