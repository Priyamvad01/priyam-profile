import { useEffect } from 'react'

export function useHashScroll() {
  useEffect(() => {
    const scrollToHash = () => {
      const sectionId = window.location.hash.replace('#', '')

      if (!sectionId) {
        return
      }

      document.getElementById(sectionId)?.scrollIntoView({ block: 'start' })
    }

    const frameId = window.requestAnimationFrame(scrollToHash)

    window.addEventListener('hashchange', scrollToHash)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('hashchange', scrollToHash)
    }
  }, [])
}
