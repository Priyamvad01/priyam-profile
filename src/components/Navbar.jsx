import { AnimatePresence, motion } from '@/animations/motion'
import { useEffect, useState } from 'react'

import { navMenu, transitions } from '@/animations'
import { SITE_CONFIG, SECTION_IDS } from '@/constants'
import { cn } from '@/lib'

import { ContentContainer } from './ContentContainer'

function NavItem({ activeSectionId, item, motionScope, onNavigate }) {
  const isActive = item.sectionId ? activeSectionId === item.sectionId : false
  const href = item.href ?? `#${item.sectionId}`
  const isExternal = href.startsWith('http')

  return (
    <motion.a
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'relative isolate flex min-h-10 items-center overflow-hidden rounded-soft border border-transparent px-3 py-2 text-sm font-medium text-mist-300 outline-offset-4',
        'hover:border-mist-300/10 hover:bg-mist-100/[0.055] hover:text-mist-100',
        motionScope === 'mobile' && 'min-h-11 w-full px-3.5',
        isActive &&
          'border-accent-blue/14 text-mist-100 shadow-[inset_0_1px_0_rgba(246,249,255,0.05)]',
      )}
      href={href}
      onClick={onNavigate}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      target={isExternal ? '_blank' : undefined}
      transition={transitions.hover}
      whileTap={{ y: 1 }}
    >
      {isActive ? (
        <motion.span
          className="absolute inset-0 -z-10 rounded-soft bg-accent-blue/[0.075]"
          layoutId={`nav-active-pill-${motionScope}`}
          transition={transitions.menu}
        />
      ) : null}
      <span className="relative z-10">{item.label}</span>
    </motion.a>
  )
}

function MenuButton({ isOpen, onClick }) {
  return (
    <button
      aria-controls="mobile-navigation"
      aria-expanded={isOpen}
      aria-label="Toggle navigation"
      className="flex h-11 w-11 items-center justify-center rounded-soft border border-mist-300/12 bg-ink-850/70 text-mist-100 shadow-[inset_0_1px_0_rgba(246,249,255,0.05)] hover:border-accent-blue/22 hover:bg-mist-100/[0.075] lg:hidden"
      onClick={onClick}
      type="button"
    >
      <span className="relative h-4 w-5" aria-hidden="true">
        <span
          className={cn(
            'absolute left-0 top-0 h-px w-5 bg-current transition-transform',
            'navbar-menu-line',
            isOpen && 'translate-y-[7px] rotate-45',
          )}
        />
        <span
          className={cn(
            'absolute left-0 top-[7px] h-px w-5 bg-current transition-opacity',
            'navbar-menu-line',
            isOpen && 'opacity-0',
          )}
        />
        <span
          className={cn(
            'absolute bottom-0 left-0 h-px w-5 bg-current transition-transform',
            'navbar-menu-line',
            isOpen && '-translate-y-[8px] -rotate-45',
          )}
        />
      </span>
    </button>
  )
}

export function Navbar({ activeSectionId, homeHref = `#${SECTION_IDS.hero}`, items = [] }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)')

    const handleChange = (event) => {
      if (event.matches) {
        setIsOpen(false)
      }
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  const handleNavigate = () => {
    setIsOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-3 z-50 sm:top-4">
      <ContentContainer width="wide">
        <nav
          aria-label="Primary navigation"
          className={cn(
            'navbar-shell relative flex min-h-14 w-full items-center justify-between gap-3 rounded-soft px-3 py-2 sm:gap-4 sm:px-4',
            'border border-mist-300/12 bg-ink-900/72 shadow-[0_18px_64px_rgba(0,0,0,0.26)] backdrop-blur-2xl',
          )}
        >
          <a
            className="flex min-w-0 items-center gap-3 rounded-soft px-2 py-1.5 text-mist-100 hover:bg-mist-100/[0.055]"
            href={homeHref}
            onClick={handleNavigate}
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-soft border border-accent-blue/20 bg-accent-blue/[0.11] text-sm font-semibold text-mist-100 shadow-[inset_0_1px_0_rgba(246,249,255,0.08)]">
              P
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold leading-5">{SITE_CONFIG.name}</span>
              <span className="hidden text-xs leading-4 text-mist-400 xs:block">
                {SITE_CONFIG.role}
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {items.map((item) => (
              <NavItem
                activeSectionId={activeSectionId}
                item={item}
                key={item.sectionId ?? item.href ?? item.label}
                motionScope="desktop"
                onNavigate={handleNavigate}
              />
            ))}
          </div>

          <MenuButton isOpen={isOpen} onClick={() => setIsOpen((open) => !open)} />

          <AnimatePresence>
            {isOpen ? (
              <motion.div
                animate="open"
                className="absolute left-0 right-0 top-[calc(100%+0.5rem)] lg:hidden"
                exit="exit"
                id="mobile-navigation"
                initial="closed"
                variants={navMenu}
              >
                <div className="max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-soft border border-mist-300/12 bg-ink-900/94 p-2 shadow-[0_18px_64px_rgba(0,0,0,0.32)] backdrop-blur-2xl">
                  <div className="grid gap-1">
                    {items.map((item) => (
                      <NavItem
                        activeSectionId={activeSectionId}
                        item={item}
                        key={item.sectionId ?? item.href ?? item.label}
                        motionScope="mobile"
                        onNavigate={handleNavigate}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </nav>
      </ContentContainer>
    </header>
  )
}
