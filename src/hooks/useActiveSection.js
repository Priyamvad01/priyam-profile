import { useEffect, useMemo, useState } from 'react'

function getInitialSection(sectionIds) {
  if (typeof window === 'undefined') {
    return sectionIds[0] ?? ''
  }

  const hashId = window.location.hash.replace('#', '')

  return sectionIds.includes(hashId) ? hashId : sectionIds[0] ?? ''
}

export function useActiveSection(sectionIds = []) {
  const sectionKey = useMemo(() => sectionIds.join('|'), [sectionIds])
  const [activeSectionId, setActiveSectionId] = useState(() =>
    getInitialSection(sectionIds),
  )

  useEffect(() => {
    const ids = sectionKey.split('|').filter(Boolean)
    const sections = ids
      .map((sectionId) => document.getElementById(sectionId))
      .filter(Boolean)

    if (!sections.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (!visibleSection?.target?.id) {
          return
        }

        setActiveSectionId((currentSectionId) =>
          currentSectionId === visibleSection.target.id
            ? currentSectionId
            : visibleSection.target.id,
        )
      },
      {
        rootMargin: '-28% 0px -58% 0px',
        threshold: [0, 0.2, 0.45, 0.7],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
    }
  }, [sectionKey])

  return activeSectionId
}
