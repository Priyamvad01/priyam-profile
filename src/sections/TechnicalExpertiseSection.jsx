import { motion } from '@/animations/motion'

import {
  cardHover,
  fadeInUp,
  staggerContainer,
  transitions,
  viewportReveal,
} from '@/animations'
import { SectionWrapper } from '@/components'
import { expertiseGroups, expertiseIntro, expertisePrinciples } from '@/data'

function PrincipleItem({ label, text }) {
  return (
    <motion.div className="border-t border-mist-300/10 pt-4" variants={fadeInUp}>
      <p className="text-sm font-semibold text-mist-100">{label}</p>
      <p className="mt-2 text-sm leading-6 text-mist-300">{text}</p>
    </motion.div>
  )
}

function ExpertiseCard({ description, index, technologies, title }) {
  return (
    <motion.article
      className="surface group flex min-w-0 flex-col rounded-soft p-5"
      transition={transitions.hover}
      variants={fadeInUp}
      whileHover={cardHover}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs font-medium text-accent-blue/80">
            {String(index + 1).padStart(2, '0')}
          </p>
          <h3 className="mt-4 text-lg font-semibold leading-tight text-mist-100">
            {title}
          </h3>
        </div>
        <span
          className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent-blue/60 opacity-70 transition-opacity group-hover:opacity-100"
          aria-hidden="true"
        />
      </div>

      <p className="mt-4 text-sm leading-6 text-mist-300">{description}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <li
            className="rounded-soft border border-mist-300/10 bg-mist-100/5 px-3 py-1.5 text-sm text-mist-300"
            key={technology}
          >
            {technology}
          </li>
        ))}
      </ul>
    </motion.article>
  )
}

export function TechnicalExpertiseSection({ section }) {
  return (
    <SectionWrapper
      className="expertise-atmosphere"
      contentClassName="grid gap-8 sm:gap-10 lg:gap-12"
      id={section.id}
      width="wide"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(20rem,0.75fr)] lg:items-end lg:gap-14">
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
            {expertiseIntro.eyebrow}
          </motion.p>
          <motion.h2
            className="mt-5 max-w-[48rem] text-balance text-3xl font-semibold leading-tight text-mist-100 sm:text-4xl lg:text-[2.65rem]"
            variants={fadeInUp}
          >
            {expertiseIntro.title}
          </motion.h2>
          <motion.p
            className="mt-6 max-w-[42rem] text-pretty text-base leading-7 text-mist-300 sm:text-lg sm:leading-8"
            variants={fadeInUp}
          >
            {expertiseIntro.description}
          </motion.p>
        </motion.div>

        <motion.aside
          className="rounded-soft border border-accent-blue/14 bg-accent-blue/7 p-5"
          initial="hidden"
          variants={staggerContainer}
          viewport={viewportReveal}
          whileInView="visible"
        >
          <motion.p
            className="text-sm font-medium text-mist-100"
            variants={fadeInUp}
          >
            How I think about skills
          </motion.p>
          <div className="mt-5 grid gap-4">
            {expertisePrinciples.map((principle) => (
              <PrincipleItem
                key={principle.label}
                label={principle.label}
                text={principle.text}
              />
            ))}
          </div>
        </motion.aside>
      </div>

      <motion.div
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        initial="hidden"
        variants={staggerContainer}
        viewport={viewportReveal}
        whileInView="visible"
      >
        {expertiseGroups.map((group, index) => (
          <ExpertiseCard
            description={group.description}
            index={index}
            key={group.title}
            technologies={group.technologies}
            title={group.title}
          />
        ))}
      </motion.div>
    </SectionWrapper>
  )
}

