import { GradientBackground, Navbar } from '@/components'

export function AppLayout({ activeSectionId, children, homeHref, navItems }) {
  return (
    <GradientBackground>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar activeSectionId={activeSectionId} homeHref={homeHref} items={navItems} />
      <main className="min-h-dvh" id="main-content" tabIndex={-1}>
        {children}
      </main>
    </GradientBackground>
  )
}
