import { SITE_CONFIG } from '@/constants'
import { healthcareCaseStudyRoute } from './healthcareCaseStudy'

export const projectsIntro = {
  eyebrow: '03 / Projects',
  title: 'My featured projects focus on backend systems, AI-assisted workflows, and cloud-ready delivery.',
  description:
    'I use projects to practice how real systems fit together: APIs, databases, authentication, deployment, automation, and practical AI integrations.',
}

export const featuredProjects = [
  {
    title: 'AI-Powered Smart Healthcare Management System',
    category: 'AI-assisted healthcare platform',
    summary:
      'I designed this project around healthcare management workflows, backend services, OCR-assisted document handling, and cloud deployment practice.',
    stack: ['Python', 'Flask', 'FastAPI', 'MySQL', 'Docker', 'AWS', 'CI/CD', 'AI/ML', 'OCR'],
    direction: [
      'Backend services for managing healthcare workflows and structured data',
      'AI/ML and OCR direction for assisting document-heavy processes',
      'Docker, AWS, and CI/CD learning for deployment-focused engineering',
    ],
    concepts: ['Backend APIs', 'OCR integration', 'Cloud deployment', 'DevOps automation'],
    link: healthcareCaseStudyRoute,
    actionLabel: 'Case study',
  },
  {
    title: 'Cloud-Based Student Management System',
    category: 'Cloud-hosted backend application',
    summary:
      'I built this project to practice student record management, REST API structure, cloud hosting, and reliable data handling with authentication workflows.',
    stack: ['Python', 'Flask', 'MySQL', 'AWS EC2', 'AWS S3', 'REST APIs', 'Git', 'GitHub'],
    direction: [
      'REST APIs for student records, structured data operations, and admin workflows',
      'AWS EC2 and S3 direction for hosting, storage, and cloud fundamentals',
      'Version-controlled backend workflow with Git and GitHub',
    ],
    concepts: ['Student records', 'Authentication basics', 'Cloud hosting', 'Structured data'],
    link: SITE_CONFIG.links.github,
    actionLabel: 'GitHub',
  },
]
