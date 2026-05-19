import { cn } from '@/lib'

import { ContentContainer } from './ContentContainer'

export function SectionWrapper({
  children,
  className,
  contentClassName,
  id,
  width = 'default',
}) {
  return (
    <section
      className={cn(
        'section-anchor relative overflow-hidden border-t border-mist-300/[0.075] py-14 sm:py-18 lg:py-16 2xl:py-24',
        className,
      )}
      id={id}
    >
      <ContentContainer className={contentClassName} width={width}>
        {children}
      </ContentContainer>
    </section>
  )
}
