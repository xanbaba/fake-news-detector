import type {HTMLAttributes} from 'react'

type Props = HTMLAttributes<HTMLDivElement>

export default function GlassCard({ className = '', children, ...rest }: Props) {
  return (
    <div className={[
      'relative flex flex-1 gap-3 sm:gap-4 rounded-2xl sm:rounded-3xl glass-effect p-4 sm:p-5 md:p-6 flex-col overflow-hidden',
      className,
    ].join(' ')}
    {...rest}
    >
      {children}
    </div>
  )
}
