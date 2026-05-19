import { motion } from '@/animations/motion'

import {
  cardHover,
  fadeInUp,
  staggerContainer,
  transitions,
  viewportReveal,
} from '@/animations'
import { cn } from '@/lib'

const toneStyles = {
  amber: {
    dot: 'bg-[#f8d77b]',
    panel: 'border-[#f8d77b]/20 bg-[#f8d77b]/7',
    text: 'text-[#f8d77b]',
    chip: 'border-[#f8d77b]/15 bg-[#f8d77b]/7 text-[#f6e3a7]',
    glow: 'shadow-[0_0_42px_rgba(248,215,123,0.1)]',
  },
  blue: {
    dot: 'bg-accent-blue',
    panel: 'border-accent-blue/18 bg-accent-blue/7',
    text: 'text-accent-blue',
    chip: 'border-accent-blue/15 bg-accent-blue/7 text-[#cfe6ff]',
    glow: 'shadow-glow',
  },
  green: {
    dot: 'bg-[#72f3c6]',
    panel: 'border-[#72f3c6]/20 bg-[#72f3c6]/7',
    text: 'text-[#72f3c6]',
    chip: 'border-[#72f3c6]/15 bg-[#72f3c6]/7 text-[#c8f8e8]',
    glow: 'shadow-[0_0_42px_rgba(114,243,198,0.1)]',
  },
  rose: {
    dot: 'bg-[#ff9fb7]',
    panel: 'border-[#ff9fb7]/20 bg-[#ff9fb7]/7',
    text: 'text-[#ffb8c8]',
    chip: 'border-[#ff9fb7]/15 bg-[#ff9fb7]/7 text-[#ffd4de]',
    glow: 'shadow-[0_0_42px_rgba(255,159,183,0.1)]',
  },
  slate: {
    dot: 'bg-mist-300',
    panel: 'border-mist-300/14 bg-mist-100/5',
    text: 'text-mist-200',
    chip: 'border-mist-300/12 bg-mist-100/5 text-mist-300',
    glow: 'shadow-[0_0_38px_rgba(175,190,211,0.07)]',
  },
  violet: {
    dot: 'bg-accent-violet',
    panel: 'border-accent-violet/18 bg-accent-violet/7',
    text: 'text-accent-violet',
    chip: 'border-accent-violet/15 bg-accent-violet/7 text-[#e3d8ff]',
    glow: 'shadow-glow-violet',
  },
}

function getTone(tone = 'blue') {
  return toneStyles[tone] ?? toneStyles.blue
}

export function TechnicalMetricCard({ detail, label, tone = 'blue', value }) {
  const styles = getTone(tone)

  return (
    <motion.article
      className={cn('surface rounded-soft p-5', styles.glow)}
      transition={transitions.hover}
      variants={fadeInUp}
      whileHover={cardHover}
    >
      <div className="flex items-start justify-between gap-4">
        <p className="text-xs font-medium uppercase text-mist-400">{label}</p>
        <span className={cn('mt-1 h-2 w-2 shrink-0 rounded-full', styles.dot)} aria-hidden="true" />
      </div>
      <p className={cn('mt-4 text-2xl font-semibold leading-tight sm:text-3xl', styles.text)}>
        {value}
      </p>
      <p className="mt-3 text-sm leading-6 text-mist-300">{detail}</p>
    </motion.article>
  )
}

export function SystemLayerCard({
  description,
  fields,
  label,
  stack = [],
  title,
  tone = 'blue',
}) {
  const styles = getTone(tone)
  const chips = fields ?? stack

  return (
    <motion.article
      className={cn(
        'system-layer-card relative min-w-0 overflow-hidden rounded-soft border p-5',
        styles.panel,
        styles.glow,
      )}
      transition={transitions.hover}
      variants={fadeInUp}
      whileHover={cardHover}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mist-100/35 to-transparent" />
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className={cn('text-xs font-medium uppercase', styles.text)}>{label}</p>
          <h3 className="mt-3 text-xl font-semibold leading-tight text-mist-100">{title}</h3>
        </div>
        <span className={cn('mt-1 h-2.5 w-2.5 shrink-0 rounded-full', styles.dot)} aria-hidden="true" />
      </div>
      <p className="mt-4 text-sm leading-6 text-mist-300">{description}</p>
      {chips.length ? (
        <ul className="mt-5 flex flex-wrap gap-2">
          {chips.map((item) => (
            <li className={cn('rounded-soft border px-3 py-1.5 text-xs font-medium', styles.chip)} key={item}>
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </motion.article>
  )
}

export function WorkflowNode({ detail, index, label, meta, tone = 'blue' }) {
  const styles = getTone(tone)

  return (
    <motion.li
      className="workflow-node relative min-w-0 rounded-soft border border-mist-300/10 bg-ink-900/50 p-4"
      variants={fadeInUp}
    >
      <div className="flex items-start gap-3">
        <span
          className={cn(
            'flex h-8 w-8 shrink-0 items-center justify-center rounded-soft border text-xs font-semibold',
            styles.panel,
            styles.text,
          )}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="min-w-0">
          {meta ? (
            <p className={cn('text-xs font-medium uppercase', styles.text)}>{meta}</p>
          ) : null}
          <h3 className="mt-1 text-base font-semibold leading-tight text-mist-100">{label}</h3>
          <p className="mt-3 text-sm leading-6 text-mist-300">{detail}</p>
        </div>
      </div>
    </motion.li>
  )
}

export function PipelineVisualizer({
  description,
  stages,
  title,
  tone = 'blue',
}) {
  const styles = getTone(tone)

  return (
    <motion.div
      className="relative overflow-hidden rounded-soft border border-mist-300/10 bg-ink-900/42 p-4 sm:p-5"
      initial="hidden"
      variants={staggerContainer}
      viewport={viewportReveal}
      whileInView="visible"
    >
      <div className="case-scanline" aria-hidden="true" />
      <motion.div
        className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
        variants={fadeInUp}
      >
        <div className="min-w-0">
          <p className={cn('text-sm font-medium', styles.text)}>{title}</p>
          {description ? (
            <p className="mt-2 max-w-[42rem] text-sm leading-6 text-mist-400">{description}</p>
          ) : null}
        </div>
        <p className="text-xs font-medium uppercase text-mist-400">Sequential workflow</p>
      </motion.div>
      <ol className="pipeline-visual-grid mt-6">
        {stages.map((stage, index) => (
          <WorkflowNode
            detail={stage.detail}
            index={index}
            key={stage.label}
            label={stage.label}
            meta={stage.meta}
            tone={tone}
          />
        ))}
      </ol>
    </motion.div>
  )
}

export function ArchitecturePanel({ flows, layers }) {
  return (
    <motion.div
      aria-label="Healthcare AI system architecture"
      className="architecture-panel relative overflow-hidden rounded-soft border border-mist-300/10 bg-ink-900/38 p-4 sm:p-5 lg:p-6"
      initial="hidden"
      variants={staggerContainer}
      viewport={viewportReveal}
      whileInView="visible"
    >
      <div className="case-grid-overlay" aria-hidden="true" />
      <motion.div
        className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        variants={fadeInUp}
      >
        <div>
          <p className="text-sm font-medium text-mist-100">System topology</p>
          <p className="mt-2 max-w-[42rem] text-sm leading-6 text-mist-400">
            Service layers are displayed by responsibility so the runtime, data, AI, and deployment boundaries stay visible.
          </p>
        </div>
        <p className="text-xs font-medium uppercase text-accent-blue/85">Architecture map</p>
      </motion.div>
      <div className="architecture-layer-grid relative z-10 mt-6">
        {layers.map((layer) => (
          <SystemLayerCard
            description={layer.description}
            key={layer.title}
            label={layer.label}
            stack={layer.stack}
            title={layer.title}
            tone={layer.tone}
          />
        ))}
      </div>
      <motion.ol
        className="relative z-10 mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4"
        variants={staggerContainer}
      >
        {flows.map((flow, index) => (
          <motion.li
            className="rounded-soft border border-mist-300/10 bg-mist-100/5 p-4 text-sm leading-6 text-mist-300"
            key={flow}
            variants={fadeInUp}
          >
            <span className="mb-2 block text-xs font-medium uppercase text-accent-blue/80">
              Flow {String(index + 1).padStart(2, '0')}
            </span>
            {flow}
          </motion.li>
        ))}
      </motion.ol>
    </motion.div>
  )
}

export function APIFlowDiagram({ stages }) {
  return (
    <motion.div
      aria-label="Frontend to backend to AI service to database API flow"
      className="relative overflow-hidden rounded-soft border border-mist-300/10 bg-ink-900/42 p-4 sm:p-5"
      initial="hidden"
      variants={staggerContainer}
      viewport={viewportReveal}
      whileInView="visible"
    >
      <div className="case-grid-overlay" aria-hidden="true" />
      <ol className="api-flow-grid relative z-10">
        {stages.map((stage, index) => (
          <WorkflowNode
            detail={stage.detail}
            index={index}
            key={stage.label}
            label={stage.label}
            meta={stage.meta}
            tone={index % 2 === 0 ? 'blue' : 'green'}
          />
        ))}
      </ol>
    </motion.div>
  )
}

export function InfrastructurePanel({ nodes }) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-soft border border-mist-300/10 bg-ink-900/38 p-4 sm:p-5 lg:p-6"
      initial="hidden"
      variants={staggerContainer}
      viewport={viewportReveal}
      whileInView="visible"
    >
      <div className="case-grid-overlay" aria-hidden="true" />
      <div className="relative z-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {nodes.map((node) => (
          <SystemLayerCard
            description={node.description}
            key={node.title}
            label={node.label}
            stack={node.stack}
            title={node.title}
            tone={node.tone}
          />
        ))}
      </div>
    </motion.div>
  )
}

export function DeploymentTimeline({ stages }) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-soft border border-mist-300/10 bg-ink-900/42 p-4 sm:p-5"
      initial="hidden"
      variants={staggerContainer}
      viewport={viewportReveal}
      whileInView="visible"
    >
      <div className="case-scanline" aria-hidden="true" />
      <ol className="deployment-timeline-grid">
        {stages.map((stage, index) => (
          <WorkflowNode
            detail={stage.detail}
            index={index}
            key={stage.label}
            label={stage.label}
            meta={stage.meta}
            tone={index % 2 === 0 ? 'amber' : 'blue'}
          />
        ))}
      </ol>
    </motion.div>
  )
}
