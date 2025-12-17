import Button from '../../ui/Button'

type PlanCardProps = {
  title: string
  price?: string | number
  priceSuffix?: string
  features: string[]
  highlight?: boolean
  ctaLabel: string
  ctaVariant?: 'primary' | 'outline'
}

export default function PlanCard({
  title,
  price,
  priceSuffix,
  features,
  highlight = false,
  ctaLabel,
  ctaVariant = 'primary',
}: PlanCardProps) {
  const border = highlight ? 'border-2 border-primary' : 'border border-white/10'
  const badge = highlight ? (
    <p className="rounded-full bg-primary px-3 py-1 text-center text-xs font-medium tracking-[0.015em] text-white/90 mix-blend-screen">
      Most Popular
    </p>
  ) : null

  return (
    <div className={`flex flex-1 flex-col gap-4 sm:gap-6 rounded-xl ${border} bg-white/5 p-4 sm:p-6 backdrop-blur-lg relative overflow-hidden`}>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-primary text-sm sm:text-base font-bold leading-tight">{title}</h3>
          {badge}
        </div>
        <p className="flex items-baseline gap-1 text-white">
          {price !== undefined ? (
            <>
              <span className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">${String(price)}</span>
              {priceSuffix ? (
                <span className="text-sm sm:text-base font-bold leading-tight">{priceSuffix}</span>
              ) : null}
            </>
          ) : (
            <span className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Custom</span>
          )}
        </p>
      </div>
      <Button variant={ctaVariant} className="rounded-lg text-sm">
        {ctaLabel}
      </Button>
      <div className="flex flex-col gap-2 sm:gap-3">
        {features.map((text) => (
          <div key={text} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-[13px] text-white/80">
            <span className="material-symbols-outlined text-primary text-sm sm:text-base flex-shrink-0">check_circle</span>
            {text}
          </div>
        ))}
      </div>
    </div>
  )
}
