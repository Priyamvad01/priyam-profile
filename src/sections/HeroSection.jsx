import { motion } from '@/animations/motion'

import { fadeInUp, staggerContainer } from '@/animations'
import { SectionWrapper } from '@/components'
import { SECTION_IDS, SITE_CONFIG } from '@/constants'

const focusAreas = [
  'Python',
  'Flask / FastAPI',
  'AI/ML fundamentals',
  'AWS learning',
  'DevOps practice',
]

export function HeroSection({ section }) {
  return (
    <SectionWrapper
      className="hero-atmosphere border-t-0 pb-12 pt-[calc(var(--nav-height)+2rem)] sm:pb-16 sm:pt-[calc(var(--nav-height)+3rem)] lg:pb-14 lg:pt-[calc(var(--nav-height)+3.25rem)]"
      contentClassName="relative"
      id={section.id}
      width="wide"
    >
      <motion.div
        animate="visible"
        className="mx-auto flex max-w-[58rem] flex-col items-center text-center"
        initial="hidden"
        variants={staggerContainer}
      >
        <motion.p
          className="text-sm font-medium uppercase text-accent-blue/90"
          variants={fadeInUp}
        >
          {section.eyebrow}
        </motion.p>

        <motion.h1
          className="mt-5 text-balance text-[2.35rem] font-semibold leading-[1.03] text-mist-100 xs:text-[2.75rem] sm:text-[3.65rem] lg:text-[4.45rem]"
          variants={fadeInUp}
        >
          {section.title}
        </motion.h1>

        <motion.p
          className="mt-6 max-w-[44rem] text-pretty text-base leading-7 text-mist-300 sm:text-lg sm:leading-8"
          variants={fadeInUp}
        >
          {section.description}
        </motion.p>

        <motion.div
          className="mt-7 flex flex-wrap items-center justify-center gap-2 sm:mt-8"
          variants={fadeInUp}
        >
          <a
            className="inline-flex min-h-11 items-center rounded-soft border border-accent-blue/22 bg-accent-blue/[0.095] px-4 py-2 text-sm font-medium text-mist-100 shadow-[inset_0_1px_0_rgba(246,249,255,0.055)] hover:border-accent-blue/36 hover:bg-accent-blue/[0.13]"
            href={SITE_CONFIG.links.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="inline-flex min-h-11 items-center rounded-soft border border-transparent px-4 py-2 text-sm font-medium text-mist-300 hover:border-mist-300/10 hover:bg-mist-100/[0.055] hover:text-mist-100"
            href={`#${SECTION_IDS.contact}`}
          >
            Contact
          </a>
        </motion.div>

        <motion.div
          className="mt-8 w-full max-w-[48rem] border-t border-mist-300/10 pt-5 sm:mt-10"
          variants={fadeInUp}
        >
          <p className="text-xs font-medium uppercase text-mist-400">My focus</p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {focusAreas.map((area) => (
              <li
                className="rounded-soft border border-mist-300/10 bg-ink-900/45 px-3 py-1.5 text-sm text-mist-300"
                key={area}
              >
                {area}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
