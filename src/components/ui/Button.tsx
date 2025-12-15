import type { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline'
  rounded?: 'lg' | 'xl'
}

export default function Button({
  variant = 'primary',
  rounded = 'lg',
  className = '',
  children,
  ...rest
}: ButtonProps) {
  const base = 'flex cursor-pointer items-center justify-center overflow-hidden font-bold tracking-[0.015em] transition-opacity'
  const size = 'h-10 px-4 text-sm'
  const radius = rounded === 'xl' ? 'rounded-xl' : 'rounded-lg'
  const style =
    variant === 'outline'
      ? 'bg-primary/20 text-white border border-primary/50 hover:bg-primary/40'
      : 'bg-primary text-white hover:opacity-90'

  return (
    <button className={[base, size, radius, style, className].join(' ')} {...rest}>
      {children}
    </button>
  )
}
