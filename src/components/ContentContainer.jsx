import { cn } from '@/lib'

const widths = {
  default: 'container-responsive',
  narrow: 'max-w-readable mx-auto w-full px-gutter',
  wide: 'container-wide',
}

export function ContentContainer({
  as: Component = 'div',
  children,
  className,
  width = 'default',
  ...props
}) {
  return (
    <Component className={cn(widths[width] ?? widths.default, className)} {...props}>
      {children}
    </Component>
  )
}
