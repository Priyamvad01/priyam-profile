import { motion } from '@/animations/motion'

import {
  cardHover,
  fadeInUp,
  staggerContainer,
  transitions,
  viewportReveal,
} from '@/animations'
import { SectionWrapper } from '@/components'
import { journeyIntro, journeyMilestones, journeySignals } from '@/data'
import { cn } from '@/lib'

const toneClasses = {
  amber: {
    dot: 'bg-[#f8d77b]',
    text: 'text-[#f8d77b]',
    chip: 'border-[#f8d77b]/16 bg-[#f8d77b]/8 text-[#f6e3a7]',
  },
  blue: {
    dot: 'bg-accent-blue',
    text: 'text-accent-blue',
    chip: 'border-accent-blue/16 bg-accent-blue/8 text-[#d6ebff]',
  },
  green: {
    dot: 'bg-[#72f3c6]',
    text: 'text-[#72f3c6]',
    chip: 'border-[#72f3c6]/16 bg-[#72f3c6]/8 text-[#c8f8e8]',
  },
  violet: {
    dot: 'bg-accent-violet',
    text: 'text-accent-violet',
    chip: 'border-accent-violet/16 bg-accent-violet/8 text-[#e5dcff]',
  },
}

function MilestoneCard({ milestone, index }) {
  const styles = toneClasses[milestone.tone]

  return (
    <motion.article
      className="surface group relative min-w-0 rounded-soft p-5 sm:p-6"
      transition={transitions.hover}
      variants={fadeInUp}
      whileHover={cardHover}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className={cn('text-xs font-medium uppercase', styles.text)}>
            {String(index + 1).padStart(2, '0')} / {milestone.period}
          </p>
          <h3 className="mt-4 text-xl font-semibold leading-tight text-mist-100">
            {milestone.title}
          </h3>
        </div>
        <span
          className={cn(
            'mt-1 h-2.5 w-2.5 shrink-0 rounded-full opacity-80 transition-opacity group-hover:opacity-100',
            styles.dot,
          )}
          aria-hidden="true"
        />
      </div>

      <p className="mt-4 text-sm leading-6 text-mist-300">{milestone.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {milestone.tags.map((tag) => (
          <li
            className={cn('rounded-soft border px-3 py-1.5 text-xs font-medium', styles.chip)}
            key={tag}
          >
            {tag}
          </li>
        ))}
      </ul>
    </motion.article>
  )
}

export function ExperienceLearningJourneySection({ section }) {
  return (
    <SectionWrapper
      className="journey-atmosphere"
      contentClassName="grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start lg:gap-14"
      id={section.id}
      width="wide"
    >
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
          {journeyIntro.eyebrow}
        </motion.p>
        <motion.h2
          className="mt-5 max-w-[46rem] text-balance text-3xl font-semibold leading-tight text-mist-100 sm:text-4xl lg:text-[2.65rem]"
          variants={fadeInUp}
        >
          {journeyIntro.title}
        </motion.h2>
        <motion.p
          className="mt-6 max-w-[42rem] text-pretty text-base leading-7 text-mist-300 sm:text-lg sm:leading-8"
          variants={fadeInUp}
        >
          {journeyIntro.description}
        </motion.p>

        <motion.div
          className="mt-8 rounded-soft border border-accent-blue/14 bg-accent-blue/[0.065] p-5 shadow-[inset_0_1px_0_rgba(246,249,255,0.045)] backdrop-blur-xl"
          variants={fadeInUp}
        >
          <p className="text-sm font-medium text-mist-100">Learning signal</p>
          <ul className="mt-5 grid gap-4">
            {journeySignals.map((signal) => (
              <li className="flex gap-3 text-sm leading-6 text-mist-300" key={signal}>
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue/80"
                  aria-hidden="true"
                />
                <span>{signal}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        className="grid min-w-0 gap-4 sm:grid-cols-2"
        initial="hidden"
        variants={staggerContainer}
        viewport={viewportReveal}
        whileInView="visible"
      >
        {journeyMilestones.map((milestone, index) => (
          <MilestoneCard
            index={index}
            key={milestone.title}
            milestone={milestone}
          />
        ))}
      </motion.div>
    </SectionWrapper>
  )
}

