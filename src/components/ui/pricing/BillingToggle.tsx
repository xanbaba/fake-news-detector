type Props = {
  value: 'monthly' | 'annual'
  onChange: (value: 'monthly' | 'annual') => void
}

export default function BillingToggle({ value, onChange }: Props) {
  return (
    <div className="flex w-full max-w-sm px-4 py-3">
      <div className="flex h-10 flex-1 items-center justify-center rounded-lg bg-white/5 p-1 backdrop-blur-sm">
        <button
          className={[
            'flex h-full grow items-center justify-center rounded-lg px-2 text-sm font-medium',
            value === 'monthly' ? 'bg-background-dark text-white shadow-lg' : 'text-white/60',
          ].join(' ')}
          onClick={() => onChange('monthly')}
        >
          Monthly
        </button>
        <button
          className={[
            'flex h-full grow items-center justify-center rounded-lg px-2 text-sm font-medium',
            value === 'annual' ? 'bg-background-dark text-white shadow-lg' : 'text-white/60',
          ].join(' ')}
          onClick={() => onChange('annual')}
        >
          Annually (Save 20%)
        </button>
      </div>
    </div>
  )
}
