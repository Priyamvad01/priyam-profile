import { cn } from '@/lib'

export function GradientBackground({ children, className }) {
  return (
    <div className={cn('relative isolate min-h-dvh overflow-hidden bg-ink-950 text-mist-200', className)}>
      <div className="pointer-events-none absolute inset-0 -z-20 bg-cinematic" aria-hidden="true" />
      <div className="app-ambient-field pointer-events-none absolute inset-x-[-14%] top-[-8rem] -z-20 h-[34rem]" aria-hidden="true" />
      <div className="app-ambient-grid pointer-events-none absolute inset-0 -z-20" aria-hidden="true" />
      <div className="app-vignette pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-accent-blue/35 to-transparent"
        aria-hidden="true"
      />
      {children}
    </div>
  )
}
