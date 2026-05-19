import { motion } from '@/animations/motion'

import { fadeInUp, staggerContainer, viewportReveal } from '@/animations'
import { SectionWrapper } from '@/components'
import { aboutDirections, aboutHighlights, aboutStory } from '@/data'

function AboutHighlightCard({ description, index, title }) {
  return (
    <motion.article
      className="surface min-w-0 rounded-soft p-5"
      variants={fadeInUp}
    >
      <p className="text-xs font-medium text-accent-blue/80">
        {String(index + 1).padStart(2, '0')}
      </p>
      <h3 className="mt-4 text-lg font-semibold leading-tight text-mist-100">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-mist-300">{description}</p>
    </motion.article>
  )
}

export function AboutSection({ section }) {
  return (
    <SectionWrapper
      className="about-atmosphere"
      contentClassName="grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-14"
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
          {aboutStory.eyebrow}
        </motion.p>
        <motion.h2
          className="mt-5 max-w-[42rem] text-balance text-3xl font-semibold leading-tight text-mist-100 sm:text-4xl lg:text-[2.65rem]"
          variants={fadeInUp}
        >
          {aboutStory.title}
        </motion.h2>
        <motion.div
          className="mt-7 grid max-w-[42rem] gap-5 text-pretty text-base leading-7 text-mist-300 sm:text-lg sm:leading-8"
          variants={fadeInUp}
        >
          {aboutStory.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="grid gap-4"
        initial="hidden"
        variants={staggerContainer}
        viewport={viewportReveal}
        whileInView="visible"
      >
        <motion.div
          className="rounded-soft border border-accent-blue/16 bg-accent-blue/8 p-5"
          variants={fadeInUp}
        >
          <p className="text-sm font-medium text-mist-100">
            My current direction
          </p>
          <ul className="mt-4 grid gap-3">
            {aboutDirections.map((direction) => (
              <li className="flex gap-3 text-sm leading-6 text-mist-300" key={direction}>
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue/80"
                  aria-hidden="true"
                />
                <span>{direction}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {aboutHighlights.map((highlight, index) => (
            <AboutHighlightCard
              description={highlight.description}
              index={index}
              key={highlight.title}
              title={highlight.title}
            />
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}

