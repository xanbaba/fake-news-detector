import type { ReactNode } from 'react'

export default function AuthCard({ children }: { children: ReactNode }) {
  return (
    <div className="relative glass-effect rounded-3xl p-8 overflow-hidden">
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full"></div>
      <div className="absolute -bottom-24 -left-16 w-48 h-48 bg-white/5 rounded-full"></div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
