interface ThemeToggleProps {
  theme: 'light' | 'dark'
  onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark'

  return (
    <button
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="flex items-center gap-2 text-neutral-400 hover:text-neutral-900 dark:hover:text-[#eeeeec] transition-colors cursor-pointer bg-transparent border-none p-0"
    >
      <div className="relative w-7 h-4 border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800">
        <div
          className={`absolute top-0.5 w-2.5 h-2.5 bg-neutral-400 dark:bg-[#eeeeec] transition-transform duration-200 ${isDark ? 'translate-x-[14px]' : 'translate-x-0.5'
            }`}
        />
      </div>
      <span className="font-mono text-[0.6875rem] tracking-wider">
        {theme}
      </span>
    </button>
  )
}
