import { motion } from '@/animations/motion'

import {
  cardHover,
  fadeInUp,
  staggerContainer,
  transitions,
  viewportReveal,
} from '@/animations'
import { SectionWrapper } from '@/components'
import {
  cloudIntro,
  cloudModules,
  deploymentFlow,
  infrastructureNotes,
} from '@/data'

function FlowStep({ detail, index, label }) {
  return (
    <motion.li
      className="surface relative min-w-0 rounded-soft p-4"
      variants={fadeInUp}
    >
      <div className="flex items-start gap-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-soft border border-accent-blue/20 bg-accent-blue/10 text-xs font-semibold text-accent-blue">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-mist-100">{label}</p>
          <p className="mt-2 text-sm leading-6 text-mist-300">{detail}</p>
        </div>
      </div>
    </motion.li>
  )
}

function CloudModuleCard({ description, index, stack, title }) {
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
          <h3 className="mt-4 text-xl font-semibold leading-tight text-mist-100">
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
        {stack.map((item) => (
          <li
            className="rounded-soft border border-mist-300/10 bg-mist-100/5 px-3 py-1.5 text-sm text-mist-300"
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.article>
  )
}

export function CloudDevOpsSection({ section }) {
  return (
    <SectionWrapper
      className="cloud-atmosphere"
      contentClassName="grid gap-8 sm:gap-10 lg:gap-12"
      id={section.id}
      width="wide"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(20rem,0.75fr)] lg:items-start lg:gap-14">
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
            {cloudIntro.eyebrow}
          </motion.p>
          <motion.h2
            className="mt-5 max-w-[48rem] text-balance text-3xl font-semibold leading-tight text-mist-100 sm:text-4xl lg:text-[2.65rem]"
            variants={fadeInUp}
          >
            {cloudIntro.title}
          </motion.h2>
          <motion.p
            className="mt-6 max-w-[42rem] text-pretty text-base leading-7 text-mist-300 sm:text-lg sm:leading-8"
            variants={fadeInUp}
          >
            {cloudIntro.description}
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
            My infrastructure mindset
          </motion.p>
          <ul className="mt-5 grid gap-4">
            {infrastructureNotes.map((note) => (
              <motion.li
                className="border-t border-mist-300/10 pt-4 text-sm leading-6 text-mist-300"
                key={note}
                variants={fadeInUp}
              >
                {note}
              </motion.li>
            ))}
          </ul>
        </motion.aside>
      </div>

      <motion.div
        className="surface rounded-soft p-4 sm:p-5"
        initial="hidden"
        variants={staggerContainer}
        viewport={viewportReveal}
        whileInView="visible"
      >
        <motion.div
          className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"
          variants={fadeInUp}
        >
          <div>
            <p className="text-sm font-medium text-mist-100">
              Deployment flow I am learning
            </p>
            <p className="mt-2 max-w-[40rem] text-sm leading-6 text-mist-400">
              A lightweight view of how I connect backend work to cloud-ready delivery.
            </p>
          </div>
          <p className="text-xs font-medium uppercase text-accent-blue/80">
            Backend to cloud
          </p>
        </motion.div>

        <ol className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {deploymentFlow.map((step, index) => (
            <FlowStep
              detail={step.detail}
              index={index}
              key={step.label}
              label={step.label}
            />
          ))}
        </ol>
      </motion.div>

      <motion.div
        className="grid gap-4 md:grid-cols-2"
        initial="hidden"
        variants={staggerContainer}
        viewport={viewportReveal}
        whileInView="visible"
      >
        {cloudModules.map((module, index) => (
          <CloudModuleCard
            description={module.description}
            index={index}
            key={module.title}
            stack={module.stack}
            title={module.title}
          />
        ))}
      </motion.div>
    </SectionWrapper>
  )
}

