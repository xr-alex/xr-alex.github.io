export function Hero() {
  return (
    <div className="border-b border-neutral-100 px-14 pb-16 pt-20 dark:border-neutral-800">
      <p className="mb-5 font-mono text-[0.6875rem] uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
        available for work
      </p>
      <h1 className="text-5xl font-medium leading-[1.05] tracking-[-0.04em]">
        Creating impact
        <br />
        <span className="text-neutral-400 dark:text-neutral-500">
          through software
        </span>
      </h1>
      <p className="mt-5 max-w-md text-[0.9375rem] leading-relaxed text-neutral-500 dark:text-neutral-400">
        // Full-stack software engineer who builds and deploys production
        systems end-to-end
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        {/* <a
          href="/resume.pdf"
          className="
            text-[0.8125rem] px-4 py-2
            bg-neutral-900 dark:bg-[#eeeeec]
            text-white dark:text-[#111110]
            border border-neutral-900 dark:border-[#eeeeec]
            hover:opacity-85 transition-opacity no-underline
          "
        >
          View resume
        </a> */}
        <a
          href="#contact"
          className="border border-neutral-200 px-4 py-2 text-[0.8125rem] text-neutral-900 no-underline transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:text-[#eeeeec] dark:hover:bg-neutral-800/50"
        >
          Get in touch
        </a>
      </div>
    </div>
  )
}
