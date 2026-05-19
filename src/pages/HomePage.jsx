import { NAV_ITEMS, PAGE_SECTIONS, SITE_CONFIG } from '@/constants'
import { useActiveSection, useDocumentMetadata, useHashScroll } from '@/hooks'
import { AppLayout } from '@/layouts'
import {
  AboutSection,
  CloudDevOpsSection,
  ContactSection,
  ExperienceLearningJourneySection,
  FeaturedProjectsSection,
  HeroSection,
  TechnicalExpertiseSection,
} from '@/sections'

const sectionComponents = {
  about: AboutSection,
  cloud: CloudDevOpsSection,
  contact: ContactSection,
  expertise: TechnicalExpertiseSection,
  hero: HeroSection,
  journey: ExperienceLearningJourneySection,
  projects: FeaturedProjectsSection,
}

export function HomePage() {
  useHashScroll()
  useDocumentMetadata({
    description: SITE_CONFIG.seo.defaultDescription,
    title: SITE_CONFIG.seo.defaultTitle,
  })

  const activeSectionId = useActiveSection(
    PAGE_SECTIONS.map((section) => section.id),
  )

  return (
    <AppLayout activeSectionId={activeSectionId} navItems={NAV_ITEMS}>
      {PAGE_SECTIONS.map((section) => {
        const SectionComponent = sectionComponents[section.layout]

        return SectionComponent ? (
          <SectionComponent key={section.id} section={section} />
        ) : null
      })}
    </AppLayout>
  )
}
