import { motion } from '@/animations/motion'

import {
  cardHover,
  cardTap,
  fadeInUp,
  staggerContainer,
  transitions,
  viewportReveal,
} from '@/animations'
import { SectionWrapper } from '@/components'
import { contactAvailability, contactIntro, contactMethods } from '@/data'
import { cn } from '@/lib'

const toneClasses = {
  amber: {
    border: 'border-[#f8d77b]/18',
    chip: 'border-[#f8d77b]/16 bg-[#f8d77b]/8 text-[#f8d77b]',
    glow: 'shadow-[0_0_40px_rgba(248,215,123,0.08)]',
    icon: 'border-[#f8d77b]/20 bg-[#f8d77b]/9 text-[#f8d77b]',
    line: 'from-transparent via-[#f8d77b]/45 to-transparent',
    text: 'text-[#f8d77b]',
  },
  blue: {
    border: 'border-accent-blue/18',
    chip: 'border-accent-blue/16 bg-accent-blue/8 text-accent-blue',
    glow: 'shadow-glow',
    icon: 'border-accent-blue/20 bg-accent-blue/10 text-accent-blue',
    line: 'from-transparent via-accent-blue/45 to-transparent',
    text: 'text-accent-blue',
  },
  green: {
    border: 'border-[#72f3c6]/18',
    chip: 'border-[#72f3c6]/16 bg-[#72f3c6]/8 text-[#72f3c6]',
    glow: 'shadow-[0_0_40px_rgba(114,243,198,0.08)]',
    icon: 'border-[#72f3c6]/20 bg-[#72f3c6]/9 text-[#72f3c6]',
    line: 'from-transparent via-[#72f3c6]/45 to-transparent',
    text: 'text-[#72f3c6]',
  },
  violet: {
    border: 'border-accent-violet/18',
    chip: 'border-accent-violet/16 bg-accent-violet/8 text-accent-violet',
    glow: 'shadow-glow-violet',
    icon: 'border-accent-violet/20 bg-accent-violet/9 text-accent-violet',
    line: 'from-transparent via-accent-violet/45 to-transparent',
    text: 'text-accent-violet',
  },
}

function ContactCard({ method }) {
  const styles = toneClasses[method.tone]

  return (
    <motion.a
      aria-label={`${method.action}: ${method.value}`}
      className={cn(
        'contact-card group relative isolate flex h-full min-h-[12rem] min-w-0 flex-col justify-between overflow-hidden rounded-soft border bg-ink-900/55 p-5 backdrop-blur-xl sm:min-h-[13.25rem] sm:p-6',
        'hover:bg-ink-900/72 focus-visible:bg-ink-900/72',
        styles.border,
        styles.glow,
      )}
      href={method.href}
      rel={method.external ? 'noopener noreferrer' : undefined}
      target={method.external ? '_blank' : undefined}
      transition={transitions.hover}
      variants={fadeInUp}
      whileHover={cardHover}
      whileTap={cardTap}
    >
      <span
        className={cn('absolute inset-x-4 top-0 h-px bg-gradient-to-r', styles.line)}
        aria-hidden="true"
      />
      <span className="contact-card-sheen" aria-hidden="true" />
      <span className="relative z-10 flex items-start justify-between gap-4">
        <span className="min-w-0">
          <span className={cn('text-xs font-medium uppercase', styles.text)}>
            {method.label}
          </span>
          <span
            className={cn(
              'mt-3 inline-flex rounded-soft border px-2.5 py-1 text-xs font-medium',
              styles.chip,
            )}
          >
            {method.meta}
          </span>
        </span>
        <span
          className={cn(
            'flex h-10 w-10 shrink-0 items-center justify-center rounded-soft border text-sm font-semibold tracking-normal',
            styles.icon,
          )}
          aria-hidden="true"
        >
          {method.token}
        </span>
      </span>

      <span className="relative z-10 mt-6 block">
        <span className="block break-words text-base font-semibold leading-tight text-mist-100 sm:text-lg">
          {method.value}
        </span>
        <span className="mt-3 block text-sm leading-6 text-mist-300">
          {method.description}
        </span>
      </span>

      <span className="relative z-10 mt-6 flex items-center justify-between gap-3 border-t border-mist-300/10 pt-4">
        <span className="text-sm font-medium text-mist-100">{method.action}</span>
        <span
          className="contact-card-arrow text-sm font-medium text-mist-300 transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1"
          aria-hidden="true"
        >
          -&gt;
        </span>
      </span>
    </motion.a>
  )
}

function AvailabilityPanel() {
  return (
    <motion.aside
      className="contact-availability relative overflow-hidden rounded-soft border border-mist-300/10 bg-ink-900/42 p-5 sm:p-6"
      initial="hidden"
      variants={staggerContainer}
      viewport={viewportReveal}
      whileInView="visible"
    >
      <div className="case-grid-overlay" aria-hidden="true" />
      <motion.div className="relative z-10" variants={fadeInUp}>
        <p className="text-xs font-medium uppercase text-accent-blue/85">
          {contactAvailability.label}
        </p>
        <h3 className="mt-4 text-2xl font-semibold leading-tight text-mist-100">
          {contactAvailability.title}
        </h3>
        <p className="mt-4 text-sm leading-6 text-mist-300">
          {contactAvailability.description}
        </p>
      </motion.div>

      <motion.ul
        className="relative z-10 mt-6 divide-y divide-mist-300/10 border-y border-mist-300/10"
        variants={staggerContainer}
      >
        {contactAvailability.notes.map((note) => (
          <motion.li
            className="py-4 text-sm leading-6 text-mist-300"
            key={note.label}
            variants={fadeInUp}
          >
            <span className="mb-2 block text-xs font-medium uppercase text-mist-400">
              {note.label}
            </span>
            {note.text}
          </motion.li>
        ))}
      </motion.ul>
    </motion.aside>
  )
}

export function ContactSection({ section }) {
  return (
    <SectionWrapper
      className="contact-atmosphere"
      contentClassName="grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start lg:gap-14"
      id={section.id}
      width="wide"
    >
      <div className="grid gap-6">
        <motion.div
          initial="hidden"
          variants={staggerContainer}
          viewport={viewportReveal}
          whileInView="visible"
        >
          <motion.p
            className="text-sm font-medium uppercase text-accent-blue/90"
            variants={fadeInUp}
          >
            {contactIntro.eyebrow}
          </motion.p>
          <motion.h2
            className="mt-5 max-w-[42rem] text-balance text-3xl font-semibold leading-tight text-mist-100 sm:text-4xl lg:text-[2.65rem]"
            variants={fadeInUp}
          >
            {contactIntro.title}
          </motion.h2>
          <motion.p
            className="mt-6 max-w-[40rem] text-pretty text-base leading-7 text-mist-300 sm:text-lg sm:leading-8"
            variants={fadeInUp}
          >
            {contactIntro.description}
          </motion.p>
          <motion.div
            className="mt-7 inline-flex max-w-full items-start gap-3 rounded-soft border border-accent-blue/14 bg-accent-blue/7 px-4 py-3 text-sm leading-6 text-mist-300"
            variants={fadeInUp}
          >
            <span
              className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent-blue/80 shadow-[0_0_18px_rgba(147,202,255,0.32)]"
              aria-hidden="true"
            />
            <span>{contactIntro.status}</span>
          </motion.div>
        </motion.div>

        <AvailabilityPanel />
      </div>

      <motion.div
        className="grid min-w-0 gap-4 md:grid-cols-2"
        initial="hidden"
        variants={staggerContainer}
        viewport={viewportReveal}
        whileInView="visible"
      >
        {contactMethods.map((method) => (
          <ContactCard key={method.id} method={method} />
        ))}
      </motion.div>
    </SectionWrapper>
  )
}

