export const SECTION_IDS = {
  hero: 'hero',
  about: 'about',
  expertise: 'technical-expertise',
  projects: 'featured-projects',
  cloud: 'cloud-devops',
  journey: 'experience-learning-journey',
  contact: 'contact',
}

export const PAGE_SECTIONS = [
  {
    id: SECTION_IDS.hero,
    eyebrow: 'Python Backend / AI / Cloud',
    title: 'I build Python backends for AI-ready cloud systems.',
    description:
      'My work focuses on clean APIs, practical AI/ML foundations, and the cloud engineering habits that make software reliable as it grows.',
    layout: 'hero',
  },
  {
    id: SECTION_IDS.about,
    eyebrow: 'About',
    title: 'About',
    description:
      'My technical journey, engineering mindset, and current learning direction.',
    layout: 'about',
  },
  {
    id: SECTION_IDS.expertise,
    eyebrow: 'Expertise',
    title: 'Technical Expertise',
    description:
      'My backend, cloud, DevOps, database, and AI-related engineering stack.',
    layout: 'expertise',
  },
  {
    id: SECTION_IDS.projects,
    eyebrow: 'Projects',
    title: 'Featured Projects',
    description:
      'My strongest backend, AI-assisted, and cloud-focused project work.',
    layout: 'projects',
  },
  {
    id: SECTION_IDS.cloud,
    eyebrow: 'Cloud',
    title: 'Cloud & DevOps',
    description:
      'My AWS learning, deployment workflows, Docker exposure, and DevOps fundamentals.',
    layout: 'cloud',
  },
  {
    id: SECTION_IDS.journey,
    eyebrow: 'Journey',
    title: 'Experience & Learning Journey',
    description:
      'Experience, learning milestones, and growth narrative.',
    layout: 'journey',
  },
  {
    id: SECTION_IDS.contact,
    eyebrow: 'Contact',
    title: 'Contact',
    description:
      'A clean path for reaching out, connecting, and starting focused conversations.',
    layout: 'contact',
  },
]

export const NAV_ITEMS = [
  {
    label: 'About',
    sectionId: SECTION_IDS.about,
  },
  {
    label: 'Expertise',
    sectionId: SECTION_IDS.expertise,
  },
  {
    label: 'Projects',
    sectionId: SECTION_IDS.projects,
  },
  {
    label: 'Cloud',
    sectionId: SECTION_IDS.cloud,
  },
  {
    label: 'Journey',
    sectionId: SECTION_IDS.journey,
  },
  {
    label: 'Contact',
    sectionId: SECTION_IDS.contact,
  },
]
