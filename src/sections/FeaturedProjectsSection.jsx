import { motion } from '@/animations/motion'

import {
  cardHover,
  fadeInUp,
  staggerContainer,
  transitions,
  viewportReveal,
} from '@/animations'
import { SectionWrapper } from '@/components'
import { featuredProjects, projectsIntro } from '@/data'

function ProjectCard({ project, index }) {
  const isExternalLink = project.link.startsWith('http')

  return (
    <motion.article
      className="surface group flex min-w-0 flex-col rounded-soft p-5 sm:p-6"
      transition={transitions.hover}
      variants={fadeInUp}
      whileHover={cardHover}
    >
      <div className="flex items-start justify-between gap-5">
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase text-accent-blue/85">
            {String(index + 1).padStart(2, '0')} / {project.category}
          </p>
          <h3 className="mt-4 text-balance text-2xl font-semibold leading-tight text-mist-100">
            {project.title}
          </h3>
        </div>
        <span
          className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent-blue/60 opacity-70 transition-opacity group-hover:opacity-100"
          aria-hidden="true"
        />
      </div>

      <p className="mt-5 text-pretty text-base leading-7 text-mist-300">
        {project.summary}
      </p>

      <div className="mt-6 grid gap-3">
        <p className="text-sm font-medium text-mist-100">Technical direction</p>
        <ul className="grid gap-3">
          {project.direction.map((item) => (
            <li className="flex gap-3 text-sm leading-6 text-mist-300" key={item}>
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue/75"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <p className="text-sm font-medium text-mist-100">Stack</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((technology) => (
            <li
              className="rounded-soft border border-mist-300/10 bg-mist-100/5 px-3 py-1.5 text-sm text-mist-300"
              key={technology}
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-col gap-4 border-t border-mist-300/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <ul className="flex flex-wrap gap-2">
          {project.concepts.map((concept) => (
            <li className="text-xs font-medium text-mist-400" key={concept}>
              {concept}
            </li>
          ))}
        </ul>
        <a
          className="inline-flex min-h-11 w-fit items-center rounded-soft border border-transparent px-3 py-2 text-sm font-medium text-mist-300 hover:border-mist-300/10 hover:bg-mist-100/[0.055] hover:text-mist-100"
          href={project.link}
          rel={isExternalLink ? 'noopener noreferrer' : undefined}
          target={isExternalLink ? '_blank' : undefined}
        >
          {project.actionLabel ?? 'Open'}
        </a>
      </div>
    </motion.article>
  )
}

export function FeaturedProjectsSection({ section }) {
  return (
    <SectionWrapper
      className="projects-atmosphere"
      contentClassName="grid gap-8 sm:gap-10 lg:gap-12"
      id={section.id}
      width="wide"
    >
      <motion.div
        className="max-w-[52rem]"
        initial="hidden"
        variants={staggerContainer}
        viewport={viewportReveal}
        whileInView="visible"
      >
        <motion.p
          className="text-sm font-medium uppercase text-accent-blue/90"
          variants={fadeInUp}
        >
          {projectsIntro.eyebrow}
        </motion.p>
        <motion.h2
          className="mt-5 text-balance text-3xl font-semibold leading-tight text-mist-100 sm:text-4xl lg:text-[2.65rem]"
          variants={fadeInUp}
        >
          {projectsIntro.title}
        </motion.h2>
        <motion.p
          className="mt-6 max-w-[42rem] text-pretty text-base leading-7 text-mist-300 sm:text-lg sm:leading-8"
          variants={fadeInUp}
        >
          {projectsIntro.description}
        </motion.p>
      </motion.div>

      <motion.div
        className="grid gap-4 lg:grid-cols-2"
        initial="hidden"
        variants={staggerContainer}
        viewport={viewportReveal}
        whileInView="visible"
      >
        {featuredProjects.map((project, index) => (
          <ProjectCard index={index} key={project.title} project={project} />
        ))}
      </motion.div>
    </SectionWrapper>
  )
}

