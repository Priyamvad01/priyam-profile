import { LazyMotion, MotionConfig, domAnimation } from '@/animations/motion'
import { lazy, Suspense } from 'react'

import { healthcareCaseStudyRoute } from '@/data/healthcareCaseStudy'
import { HomePage } from '@/pages/HomePage'

const HealthcareCaseStudyPage = lazy(() =>
  import('@/pages/HealthcareCaseStudyPage').then((module) => ({
    default: module.HealthcareCaseStudyPage,
  })),
)

function RouteFallback() {
  return (
    <div className="route-fallback" role="status">
      Loading portfolio
    </div>
  )
}

function App() {
  const isCaseStudyRoute = window.location.pathname === healthcareCaseStudyRoute

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        {isCaseStudyRoute ? (
          <Suspense fallback={<RouteFallback />}>
            <HealthcareCaseStudyPage />
          </Suspense>
        ) : (
          <HomePage />
        )}
      </MotionConfig>
    </LazyMotion>
  )
}

export default App
