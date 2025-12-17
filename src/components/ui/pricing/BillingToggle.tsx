type Props = {
  value: 'monthly' | 'annual'
  onChange: (value: 'monthly' | 'annual') => void
}

export default function BillingToggle({ value, onChange }: Props) {
  return (
    <div className="flex w-full max-w-sm px-2 sm:px-4 py-2 sm:py-3">
      <div className="flex h-10 sm:h-10 flex-1 items-center justify-center rounded-lg bg-white/5 p-1 backdrop-blur-sm">
        <button
          className={[
            'flex h-full grow items-center justify-center rounded-lg px-2 sm:px-3 text-xs sm:text-sm font-medium transition-all',
            value === 'monthly' ? 'bg-background-dark text-white shadow-lg' : 'text-white/60',
          ].join(' ')}
          onClick={() => onChange('monthly')}
        >
          Monthly
        </button>
        <button
          className={[
            'flex h-full grow items-center justify-center rounded-lg px-2 sm:px-3 text-xs sm:text-sm font-medium transition-all',
            value === 'annual' ? 'bg-background-dark text-white shadow-lg' : 'text-white/60',
          ].join(' ')}
          onClick={() => onChange('annual')}
        >
          <span className="hidden sm:inline">Annually (Save 20%)</span>
          <span className="sm:hidden">Annual (-20%)</span>
        </button>
      </div>
    </div>
  )
}
