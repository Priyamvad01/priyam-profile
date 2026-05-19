import { SITE_CONFIG } from '@/constants'

export const contactIntro = {
  eyebrow: 'Contact & Connectivity',
  title: 'A direct path for thoughtful engineering conversations.',
  description:
    'I am open to backend, AI, cloud, DevOps, and engineering conversations where the work is practical, clear, and worth building well.',
  status: 'Open to recruiting conversations, collaboration, and focused technical networking.',
}

export const contactAvailability = {
  label: 'Professional availability',
  title: 'Reach me through the channel that fits the conversation.',
  description:
    'No long form or noisy funnel. Just direct, professional paths for project discussions, role conversations, collaboration, and code-level context.',
  notes: [
    {
      label: 'Detailed context',
      text: 'Email is best for opportunities, project details, and thoughtful follow-up.',
    },
    {
      label: 'Professional network',
      text: 'LinkedIn works well for introductions, recruiting context, and quick alignment.',
    },
    {
      label: 'Engineering signal',
      text: 'GitHub is the right path for reviewing projects, repositories, and direction.',
    },
  ],
}

export const contactMethods = [
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/Priyamvad01',
    description: 'Repositories, project decisions, and backend/cloud engineering signal.',
    href: SITE_CONFIG.links.github,
    action: 'View GitHub',
    meta: 'Code profile',
    token: 'GH',
    tone: 'blue',
    external: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'priyamvad-ranjan-5767a0250',
    description: 'Professional profile, recruiting context, and network conversations.',
    href: SITE_CONFIG.links.linkedin,
    action: 'Open LinkedIn',
    meta: 'Career profile',
    token: 'in',
    tone: 'violet',
    external: true,
  },
  {
    id: 'email',
    label: 'Email',
    value: 'priyamvad2104@gmail.com',
    description: 'Best for detailed project notes, role conversations, and follow-up.',
    href: SITE_CONFIG.links.email,
    action: 'Send email',
    meta: 'Best for detail',
    token: '@',
    tone: 'green',
  },
  {
    id: 'phone',
    label: 'Phone',
    value: '+91 8829926478',
    description: 'Direct mobile contact for time-sensitive professional conversations.',
    href: SITE_CONFIG.links.phone,
    action: 'Call',
    meta: 'Direct mobile',
    token: '+',
    tone: 'amber',
  },
]
