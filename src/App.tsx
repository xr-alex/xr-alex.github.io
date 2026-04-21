import { useState, useEffect } from 'react'
import { useTheme } from './hooks/useTheme'
import { Sidebar } from './components/Sidebar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

const sections = ['about', 'projects', 'contact']

export default function App() {
  const { theme, toggle } = useTheme()
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handler = () => {
      const sidebar = document.querySelector('aside')
      const isMobile = window.innerWidth < 640
      const offset = isMobile && sidebar ? sidebar.offsetHeight + 8 : 8

      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8

      if (atBottom) {
        setActiveSection(sections[sections.length - 1])
        return
      }

      const scrollY = window.scrollY + offset

      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(id)
          return
        }
      }
    }

    window.addEventListener('scroll', handler, { passive: true })
    window.addEventListener('resize', handler, { passive: true })
    handler()
    return () => {
      window.removeEventListener('scroll', handler)
      window.removeEventListener('resize', handler)
    }
  }, [])

  useEffect(() => {
    const updateScrollMargins = () => {
      const sidebar = document.querySelector('aside')
      const isMobile = window.innerWidth < 640
      const offset = isMobile && sidebar ? sidebar.offsetHeight : 0

      sections.forEach((id) => {
        const el = document.getElementById(id)
        if (el) el.style.scrollMarginTop = `${offset}px`
      })
    }

    updateScrollMargins()
    window.addEventListener('resize', updateScrollMargins)
    return () => window.removeEventListener('resize', updateScrollMargins)
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[13.75rem_1fr] min-h-screen">
      <Sidebar
        activeSection={activeSection}
        theme={theme}
        onThemeToggle={toggle}
      />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
