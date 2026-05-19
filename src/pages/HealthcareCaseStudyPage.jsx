import { motion } from '@/animations/motion'

import {
  cardHover,
  fadeInUp,
  staggerContainer,
  transitions,
  viewportReveal,
} from '@/animations'
import {
  APIFlowDiagram,
  ArchitecturePanel,
  DeploymentTimeline,
  InfrastructurePanel,
  PipelineVisualizer,
  SectionWrapper,
  SystemLayerCard,
  TechnicalMetricCard,
} from '@/components'
import {
  healthcareCaseStudy,
  healthcareCaseStudyNav,
  healthcareCaseStudySections,
} from '@/data/healthcareCaseStudy'
import { useActiveSection, useDocumentMetadata, useHashScroll } from '@/hooks'
import { AppLayout } from '@/layouts'
import { cn } from '@/lib'

const cardToneCycle = ['blue', 'green', 'violet', 'amber', 'rose', 'slate']

function CaseIntro({ description, eyebrow, title }) {
  return (
    <motion.div
      className="max-w-[54rem]"
      initial="hidden"
      variants={staggerContainer}
      viewport={viewportReveal}
      whileInView="visible"
    >
      <motion.p
        className="text-sm font-medium uppercase text-accent-blue/90"
        variants={fadeInUp}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        className="mt-5 text-balance text-3xl font-semibold leading-tight text-mist-100 sm:text-4xl lg:text-[2.65rem]"
        variants={fadeInUp}
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          className="mt-6 max-w-[46rem] text-pretty text-base leading-7 text-mist-300 sm:text-lg sm:leading-8"
          variants={fadeInUp}
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  )
}

function TechnicalCard({
  description,
  href,
  index,
  meta,
  title,
  tone = 'blue',
}) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          {meta ? (
            <p className="text-xs font-medium uppercase text-accent-blue/80">
              {meta}
            </p>
          ) : (
            <p className="text-xs font-medium uppercase text-mist-400">
              {String(index + 1).padStart(2, '0')}
            </p>
          )}
          <h3 className="mt-3 text-xl font-semibold leading-tight text-mist-100">
            {title}
          </h3>
        </div>
        <span
          className={cn(
            'mt-1 h-2.5 w-2.5 shrink-0 rounded-full',
            tone === 'green' && 'bg-[#72f3c6]',
            tone === 'violet' && 'bg-accent-violet',
            tone === 'amber' && 'bg-[#f8d77b]',
            tone === 'rose' && 'bg-[#ff9fb7]',
            tone === 'slate' && 'bg-mist-300',
            tone === 'blue' && 'bg-accent-blue',
          )}
          aria-hidden="true"
        />
      </div>
      <p className="mt-4 text-sm leading-6 text-mist-300">{description}</p>
    </>
  )

  const className =
    'surface group min-w-0 rounded-soft p-5'

  if (href) {
    const isExternal = href.startsWith('http')

    return (
      <motion.a
        className={className}
        href={href}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        target={isExternal ? '_blank' : undefined}
        transition={transitions.hover}
        variants={fadeInUp}
        whileHover={cardHover}
      >
        {content}
        <span className="mt-5 inline-flex text-sm font-medium text-accent-blue/90">
          {isExternal ? 'Open link' : 'Jump to section'}
        </span>
      </motion.a>
    )
  }

  return (
    <motion.article
      className={className}
      transition={transitions.hover}
      variants={fadeInUp}
      whileHover={cardHover}
    >
      {content}
    </motion.article>
  )
}

function TechnicalCardGrid({ items, columns = 'three' }) {
  return (
    <motion.div
      className={cn(
        'grid gap-4',
        columns === 'two' && 'md:grid-cols-2',
        columns === 'three' && 'md:grid-cols-2 xl:grid-cols-3',
      )}
      initial="hidden"
      variants={staggerContainer}
      viewport={viewportReveal}
      whileInView="visible"
    >
      {items.map((item, index) => (
        <TechnicalCard
          description={item.description}
          href={item.href}
          index={index}
          key={item.title}
          meta={item.meta}
          title={item.title}
          tone={cardToneCycle[index % cardToneCycle.length]}
        />
      ))}
    </motion.div>
  )
}

function CaseStudyHero() {
  const { hero, githubUrl } = healthcareCaseStudy

  return (
    <SectionWrapper
      className="case-hero-atmosphere border-t-0 pb-12 pt-[calc(var(--nav-height)+2rem)] sm:pb-16 sm:pt-[calc(var(--nav-height)+3rem)] lg:pb-16 lg:pt-[calc(var(--nav-height)+3.5rem)]"
      contentClassName="relative grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(21rem,0.72fr)] lg:items-center lg:gap-14"
      id="case-hero"
      width="wide"
    >
      <motion.div
        animate="visible"
        className="min-w-0"
        initial="hidden"
        variants={staggerContainer}
      >
        <motion.p
          className="text-sm font-medium uppercase text-accent-blue/90"
          variants={fadeInUp}
        >
          {hero.eyebrow}
        </motion.p>
        <motion.h1
          className="mt-5 text-balance text-[2.35rem] font-semibold leading-[1.04] text-mist-100 xs:text-[2.65rem] sm:text-[3.65rem] lg:text-[4.35rem]"
          variants={fadeInUp}
        >
          {hero.title}
        </motion.h1>
        <motion.p
          className="mt-6 max-w-[52rem] text-pretty text-base leading-7 text-mist-300 sm:text-lg sm:leading-8"
          variants={fadeInUp}
        >
          {hero.summary}
        </motion.p>
        <motion.div
          className="mt-7 flex flex-wrap gap-2 sm:mt-8"
          variants={fadeInUp}
        >
          {hero.tags.map((tag) => (
            <span
              className="rounded-soft border border-mist-300/10 bg-mist-100/5 px-3 py-1.5 text-sm text-mist-300"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </motion.div>
        <motion.div
          className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8"
          variants={fadeInUp}
        >
          <a
            className="inline-flex min-h-11 items-center rounded-soft border border-accent-blue/24 bg-accent-blue/10 px-4 py-2 text-sm font-medium text-mist-100 shadow-[inset_0_1px_0_rgba(246,249,255,0.055)] hover:border-accent-blue/40 hover:bg-accent-blue/14"
            href="#architecture-overview"
          >
            Explore architecture
          </a>
          <a
            className="inline-flex min-h-11 items-center rounded-soft border border-transparent px-4 py-2 text-sm font-medium text-mist-300 hover:border-mist-300/10 hover:bg-mist-100/[0.055] hover:text-mist-100"
            href={githubUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub profile
          </a>
        </motion.div>
      </motion.div>

      <motion.aside
        animate="visible"
        className="hero-system-console relative overflow-hidden rounded-soft border border-mist-300/10 bg-ink-900/50 p-4 sm:p-5"
        initial="hidden"
        variants={staggerContainer}
      >
        <div className="case-grid-overlay" aria-hidden="true" />
        <motion.div className="relative z-10" variants={fadeInUp}>
          <p className="text-xs font-medium uppercase text-accent-blue/85">
            Platform signal
          </p>
          <p className="mt-3 text-2xl font-semibold leading-tight text-mist-100">
            Advanced backend engineering platform
          </p>
          <p className="mt-3 text-sm leading-6 text-mist-300">
            A layered view of the product: healthcare workflows, AI processing,
            data persistence, and automated delivery.
          </p>
        </motion.div>
        <motion.ol className="relative z-10 mt-6 grid gap-3" variants={staggerContainer}>
          {[
            'Frontend workflow',
            'Spring Boot API',
            'FastAPI AI service',
            'OCR + ML pipeline',
            'Database + cloud delivery',
          ].map((item, index) => (
            <motion.li
              className="flex items-center gap-3 rounded-soft border border-mist-300/10 bg-mist-100/5 px-3 py-3 text-sm text-mist-300"
              key={item}
              variants={fadeInUp}
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-soft border border-accent-blue/18 bg-accent-blue/10 text-xs font-semibold text-accent-blue">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ol>
      </motion.aside>

      <motion.div
        className="grid gap-4 lg:col-span-2 md:grid-cols-3"
        initial="hidden"
        variants={staggerContainer}
        viewport={viewportReveal}
        whileInView="visible"
      >
        {hero.metrics.map((metric, index) => (
          <TechnicalMetricCard
            detail={metric.detail}
            key={metric.label}
            label={metric.label}
            tone={cardToneCycle[index]}
            value={metric.value}
          />
        ))}
      </motion.div>
    </SectionWrapper>
  )
}

function ProblemStatementSection() {
  const { problem } = healthcareCaseStudy

  return (
    <SectionWrapper
      className="case-section-atmosphere"
      contentClassName="grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-14"
      id="problem-statement"
      width="wide"
    >
      <CaseIntro
        description={problem.description}
        eyebrow={problem.eyebrow}
        title={problem.title}
      />
      <motion.ol
        className="grid gap-3"
        initial="hidden"
        variants={staggerContainer}
        viewport={viewportReveal}
        whileInView="visible"
      >
        {problem.items.map((item, index) => (
          <motion.li
            className="rounded-soft border border-mist-300/10 bg-ink-900/50 p-5 text-sm leading-6 text-mist-300"
            key={item}
            variants={fadeInUp}
          >
            <span className="mb-3 block text-xs font-medium uppercase text-[#ffb8c8]">
              Constraint {String(index + 1).padStart(2, '0')}
            </span>
            {item}
          </motion.li>
        ))}
      </motion.ol>
    </SectionWrapper>
  )
}

function DatabaseDesignSection() {
  const { database } = healthcareCaseStudy

  return (
    <SectionWrapper
      className="case-section-atmosphere"
      contentClassName="grid gap-8 sm:gap-10 lg:gap-12"
      id="database-design"
      width="wide"
    >
      <CaseIntro
        description={database.description}
        eyebrow={database.eyebrow}
        title={database.title}
      />
      <motion.div
        className="relative overflow-hidden rounded-soft border border-mist-300/10 bg-ink-900/38 p-4 sm:p-5 lg:p-6"
        initial="hidden"
        variants={staggerContainer}
        viewport={viewportReveal}
        whileInView="visible"
      >
        <div className="case-grid-overlay" aria-hidden="true" />
        <div className="relative z-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {database.entities.map((entity) => (
            <SystemLayerCard
              description={entity.description}
              fields={entity.fields}
              key={entity.title}
              label={entity.label}
              title={entity.title}
              tone={entity.tone}
            />
          ))}
        </div>
        <motion.div
          className="relative z-10 mt-6 rounded-soft border border-mist-300/10 bg-mist-100/5 p-5"
          variants={fadeInUp}
        >
          <p className="text-sm font-medium text-mist-100">Relationship map</p>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {database.relationships.map((relationship) => (
              <li className="text-sm leading-6 text-mist-300" key={relationship}>
                <span className="mr-3 inline-flex h-2 w-2 rounded-full bg-[#72f3c6]" aria-hidden="true" />
                {relationship}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}

function TechnologyEcosystemSection() {
  const { technologyEcosystem } = healthcareCaseStudy

  return (
    <SectionWrapper
      className="case-section-atmosphere"
      contentClassName="grid gap-8 sm:gap-10 lg:gap-12"
      id="technology-ecosystem"
      width="wide"
    >
      <CaseIntro
        description={technologyEcosystem.description}
        eyebrow={technologyEcosystem.eyebrow}
        title={technologyEcosystem.title}
      />
      <motion.div
        className="tech-cluster-grid"
        initial="hidden"
        variants={staggerContainer}
        viewport={viewportReveal}
        whileInView="visible"
      >
        {technologyEcosystem.groups.map((group) => (
          <SystemLayerCard
            description={group.description}
            key={group.title}
            label="Stack cluster"
            stack={group.tools}
            title={group.title}
            tone={group.tone}
          />
        ))}
      </motion.div>
    </SectionWrapper>
  )
}

function GithubDeploymentSection() {
  const { githubDeployment } = healthcareCaseStudy

  return (
    <SectionWrapper
      className="case-section-atmosphere"
      contentClassName="grid gap-8 sm:gap-10 lg:gap-12"
      id="github-deployment-direction"
      width="wide"
    >
      <CaseIntro
        description={githubDeployment.description}
        eyebrow={githubDeployment.eyebrow}
        title={githubDeployment.title}
      />
      <TechnicalCardGrid columns="two" items={githubDeployment.cards} />
    </SectionWrapper>
  )
}

function CtaSection() {
  const { cta } = healthcareCaseStudy

  return (
    <SectionWrapper
      className="case-cta-atmosphere"
      contentClassName="relative"
      id="case-study-cta"
      width="wide"
    >
      <motion.div
        className="relative mx-auto max-w-[62rem] overflow-hidden rounded-soft border border-accent-blue/18 bg-accent-blue/8 p-6 text-center sm:p-8 lg:p-10"
        initial="hidden"
        variants={staggerContainer}
        viewport={viewportReveal}
        whileInView="visible"
      >
        <div className="case-grid-overlay" aria-hidden="true" />
        <motion.p
          className="relative z-10 text-sm font-medium uppercase text-accent-blue/90"
          variants={fadeInUp}
        >
          {cta.eyebrow}
        </motion.p>
        <motion.h2
          className="relative z-10 mt-5 text-balance text-3xl font-semibold leading-tight text-mist-100 sm:text-4xl lg:text-[2.65rem]"
          variants={fadeInUp}
        >
          {cta.title}
        </motion.h2>
        <motion.p
          className="relative z-10 mx-auto mt-6 max-w-[44rem] text-pretty text-base leading-7 text-mist-300 sm:text-lg sm:leading-8"
          variants={fadeInUp}
        >
          {cta.description}
        </motion.p>
        <motion.div
          className="relative z-10 mt-8 flex flex-wrap justify-center gap-3"
          variants={fadeInUp}
        >
          {cta.actions.map((action) => (
            <a
              className={cn(
                'inline-flex min-h-11 items-center rounded-soft px-4 py-2 text-sm font-medium',
                action.external
                  ? 'border border-accent-blue/24 bg-accent-blue/10 text-mist-100 shadow-[inset_0_1px_0_rgba(246,249,255,0.055)] hover:border-accent-blue/40 hover:bg-accent-blue/14'
                  : 'border border-transparent text-mist-300 hover:border-mist-300/10 hover:bg-mist-100/[0.055] hover:text-mist-100',
              )}
              href={action.href}
              key={action.label}
              rel={action.external ? 'noopener noreferrer' : undefined}
              target={action.external ? '_blank' : undefined}
            >
              {action.label}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}

export function HealthcareCaseStudyPage() {
  useHashScroll()
  useDocumentMetadata({
    description: healthcareCaseStudy.seo.description,
    title: healthcareCaseStudy.seo.title,
  })

  const activeSectionId = useActiveSection(
    healthcareCaseStudySections.map((section) => section.id),
  )

  const {
    aiPipeline,
    apiFlow,
    architecture,
    backend,
    challenges,
    deployment,
    future,
    goals,
    infrastructure,
    machineLearning,
    microservices,
    ocrWorkflow,
    outcome,
    overview,
    securityScalability,
  } = healthcareCaseStudy

  return (
    <AppLayout
      activeSectionId={activeSectionId}
      homeHref="/"
      navItems={healthcareCaseStudyNav}
    >
      <CaseStudyHero />

      <SectionWrapper
        className="case-section-atmosphere"
        contentClassName="grid gap-8 sm:gap-10 lg:gap-12"
        id="project-overview"
        width="wide"
      >
        <CaseIntro
          description={overview.description}
          eyebrow={overview.eyebrow}
          title={overview.title}
        />
        <TechnicalCardGrid items={overview.cards} />
      </SectionWrapper>

      <ProblemStatementSection />

      <SectionWrapper
        className="case-section-atmosphere"
        contentClassName="grid gap-8 sm:gap-10 lg:gap-12"
        id="system-goals"
        width="wide"
      >
        <CaseIntro
          description="The goals translate the healthcare problem into system capabilities that can be designed, built, tested, and deployed."
          eyebrow="System Goals"
          title="The project objectives are technical, operational, and product-oriented."
        />
        <TechnicalCardGrid items={goals} />
      </SectionWrapper>

      <SectionWrapper
        className="case-architecture-atmosphere"
        contentClassName="grid gap-8 sm:gap-10 lg:gap-12"
        id="architecture-overview"
        width="wide"
      >
        <CaseIntro
          description={architecture.description}
          eyebrow={architecture.eyebrow}
          title={architecture.title}
        />
        <ArchitecturePanel flows={architecture.flows} layers={architecture.layers} />
      </SectionWrapper>

      <SectionWrapper
        className="case-section-atmosphere"
        contentClassName="grid gap-8 sm:gap-10 lg:gap-12"
        id="microservices-design"
        width="wide"
      >
        <CaseIntro
          description={microservices.description}
          eyebrow={microservices.eyebrow}
          title={microservices.title}
        />
        <motion.div
          className="grid gap-4 lg:grid-cols-3"
          initial="hidden"
          variants={staggerContainer}
          viewport={viewportReveal}
          whileInView="visible"
        >
          {microservices.services.map((service) => (
            <SystemLayerCard
              description={service.description}
              key={service.title}
              label={service.label}
              stack={service.stack}
              title={service.title}
              tone={service.tone}
            />
          ))}
        </motion.div>
        <APIFlowDiagram stages={microservices.communication} />
      </SectionWrapper>

      <SectionWrapper
        className="case-section-atmosphere"
        contentClassName="grid gap-8 sm:gap-10 lg:gap-12"
        id="backend-engineering"
        width="wide"
      >
        <CaseIntro
          description={backend.description}
          eyebrow={backend.eyebrow}
          title={backend.title}
        />
        <TechnicalCardGrid items={backend.modules} />
        <PipelineVisualizer
          description="A lightweight backend execution path from HTTP boundary to persisted response."
          stages={backend.flow.map((label) => ({
            detail: label,
            label,
            meta: 'Backend step',
          }))}
          title="Request handling path"
          tone="green"
        />
      </SectionWrapper>

      <SectionWrapper
        className="case-ai-atmosphere"
        contentClassName="grid gap-8 sm:gap-10 lg:gap-12"
        id="ai-processing-pipeline"
        width="wide"
      >
        <CaseIntro
          description={aiPipeline.description}
          eyebrow={aiPipeline.eyebrow}
          title={aiPipeline.title}
        />
        <PipelineVisualizer
          description="The AI service behaves like a small processing dashboard: every stage has a clear input, output, and responsibility."
          stages={aiPipeline.stages}
          title="AI report processing"
          tone="violet"
        />
      </SectionWrapper>

      <SectionWrapper
        className="case-section-atmosphere"
        contentClassName="grid gap-8 sm:gap-10 lg:gap-12"
        id="ocr-workflow"
        width="wide"
      >
        <CaseIntro
          description={ocrWorkflow.description}
          eyebrow={ocrWorkflow.eyebrow}
          title={ocrWorkflow.title}
        />
        <PipelineVisualizer
          description="The OCR stages make document handling observable instead of hiding it in one opaque function."
          stages={ocrWorkflow.stages}
          title="Tesseract OCR workflow"
          tone="amber"
        />
      </SectionWrapper>

      <SectionWrapper
        className="case-ai-atmosphere"
        contentClassName="grid gap-8 sm:gap-10 lg:gap-12"
        id="machine-learning-integration"
        width="wide"
      >
        <CaseIntro
          description={machineLearning.description}
          eyebrow={machineLearning.eyebrow}
          title={machineLearning.title}
        />
        <TechnicalCardGrid items={machineLearning.models} />
        <PipelineVisualizer
          description="The model path stays explicit so prediction behavior can be tested and improved later."
          stages={machineLearning.flow.map((label) => ({
            detail: label,
            label,
            meta: 'ML stage',
          }))}
          title="Prediction workflow"
          tone="violet"
        />
      </SectionWrapper>

      <DatabaseDesignSection />

      <SectionWrapper
        className="case-section-atmosphere"
        contentClassName="grid gap-8 sm:gap-10 lg:gap-12"
        id="api-communication-flow"
        width="wide"
      >
        <CaseIntro
          description={apiFlow.description}
          eyebrow={apiFlow.eyebrow}
          title={apiFlow.title}
        />
        <APIFlowDiagram stages={apiFlow.stages} />
      </SectionWrapper>

      <SectionWrapper
        className="case-cloud-atmosphere"
        contentClassName="grid gap-8 sm:gap-10 lg:gap-12"
        id="cloud-devops-infrastructure"
        width="wide"
      >
        <CaseIntro
          description={infrastructure.description}
          eyebrow={infrastructure.eyebrow}
          title={infrastructure.title}
        />
        <InfrastructurePanel nodes={infrastructure.nodes} />
      </SectionWrapper>

      <SectionWrapper
        className="case-cloud-atmosphere"
        contentClassName="grid gap-8 sm:gap-10 lg:gap-12"
        id="docker-cicd-workflow"
        width="wide"
      >
        <CaseIntro
          description={deployment.description}
          eyebrow={deployment.eyebrow}
          title={deployment.title}
        />
        <DeploymentTimeline stages={deployment.stages} />
      </SectionWrapper>

      <SectionWrapper
        className="case-section-atmosphere"
        contentClassName="grid gap-8 sm:gap-10 lg:gap-12"
        id="security-scalability"
        width="wide"
      >
        <CaseIntro
          description={securityScalability.description}
          eyebrow={securityScalability.eyebrow}
          title={securityScalability.title}
        />
        <TechnicalCardGrid columns="two" items={securityScalability.items} />
      </SectionWrapper>

      <SectionWrapper
        className="case-section-atmosphere"
        contentClassName="grid gap-8 sm:gap-10 lg:gap-12"
        id="challenges-learning"
        width="wide"
      >
        <CaseIntro
          description={challenges.description}
          eyebrow={challenges.eyebrow}
          title={challenges.title}
        />
        <TechnicalCardGrid columns="two" items={challenges.items} />
      </SectionWrapper>

      <SectionWrapper
        className="case-section-atmosphere"
        contentClassName="grid gap-8 sm:gap-10 lg:gap-12"
        id="system-outcome"
        width="wide"
      >
        <CaseIntro
          description={outcome.description}
          eyebrow={outcome.eyebrow}
          title={outcome.title}
        />
        <motion.div
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          variants={staggerContainer}
          viewport={viewportReveal}
          whileInView="visible"
        >
          {outcome.metrics.map((metric, index) => (
            <TechnicalMetricCard
              detail={metric.detail}
              key={metric.label}
              label={metric.label}
              tone={cardToneCycle[index % cardToneCycle.length]}
              value={metric.value}
            />
          ))}
        </motion.div>
      </SectionWrapper>

      <TechnologyEcosystemSection />
      <GithubDeploymentSection />

      <SectionWrapper
        className="case-section-atmosphere"
        contentClassName="grid gap-8 sm:gap-10 lg:gap-12"
        id="future-improvements"
        width="wide"
      >
        <CaseIntro
          description={future.description}
          eyebrow={future.eyebrow}
          title={future.title}
        />
        <TechnicalCardGrid items={future.items} />
      </SectionWrapper>

      <CtaSection />
    </AppLayout>
  )
}

