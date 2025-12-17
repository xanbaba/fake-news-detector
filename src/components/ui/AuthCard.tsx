import type { ReactNode } from 'react'

export default function AuthCard({ children }: { children: ReactNode }) {
  return (
    <div className="relative glass-effect rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 overflow-hidden">
      <div className="absolute -top-16 -right-16 sm:-top-20 sm:-right-20 w-32 h-32 sm:w-40 sm:h-40 bg-white/5 rounded-full"></div>
      <div className="absolute -bottom-20 -left-12 sm:-bottom-24 sm:-left-16 w-40 h-40 sm:w-48 sm:h-48 bg-white/5 rounded-full"></div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
