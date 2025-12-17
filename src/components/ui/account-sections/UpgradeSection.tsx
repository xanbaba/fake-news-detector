import Button from '../Button'

export default function UpgradeSection() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h2 className="text-white text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Upgrade Plan</h2>
        <p className="text-white/60 text-xs sm:text-sm">Choose the plan that fits your needs</p>
      </div>

      <div className="grid gap-4 sm:gap-6">
        {/* Current Plan */}
        <div className="rounded-xl bg-white/5 border-2 border-primary p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 sm:mb-4">
            <div>
              <h3 className="text-white text-lg sm:text-xl font-bold">Free Plan</h3>
              <p className="text-white/60 text-xs sm:text-sm">Current Plan</p>
            </div>
            <div className="rounded-full bg-primary/20 px-3 py-1 text-primary text-xs font-medium w-fit">
              Active
            </div>
          </div>
          <div className="mb-3 sm:mb-4">
            <p className="text-white text-2xl sm:text-3xl font-bold">$0<span className="text-white/60 text-base sm:text-lg font-normal">/month</span></p>
          </div>
          <ul className="space-y-2 mb-4 sm:mb-6">
            <li className="flex items-center gap-2 text-white/80 text-xs sm:text-sm">
              <span className="material-symbols-outlined text-primary !text-base sm:!text-lg flex-shrink-0">check_circle</span>
              100 scans per month
            </li>
            <li className="flex items-center gap-2 text-white/80 text-xs sm:text-sm">
              <span className="material-symbols-outlined text-primary !text-base sm:!text-lg flex-shrink-0">check_circle</span>
              Basic analysis
            </li>
            <li className="flex items-center gap-2 text-white/80 text-xs sm:text-sm">
              <span className="material-symbols-outlined text-primary !text-base sm:!text-lg flex-shrink-0">check_circle</span>
              Email support
            </li>
          </ul>
        </div>

        {/* Pro Plan */}
        <div className="rounded-xl bg-white/5 border border-white/10 p-4 sm:p-6">
          <div className="mb-3 sm:mb-4">
            <h3 className="text-white text-lg sm:text-xl font-bold">Pro Plan</h3>
            <p className="text-white/60 text-xs sm:text-sm">For power users</p>
          </div>
          <div className="mb-3 sm:mb-4">
            <p className="text-white text-2xl sm:text-3xl font-bold">$19<span className="text-white/60 text-base sm:text-lg font-normal">/month</span></p>
          </div>
          <ul className="space-y-2 mb-4 sm:mb-6">
            <li className="flex items-center gap-2 text-white/80 text-xs sm:text-sm">
              <span className="material-symbols-outlined text-primary !text-base sm:!text-lg flex-shrink-0">check_circle</span>
              1,000 scans per month
            </li>
            <li className="flex items-center gap-2 text-white/80 text-xs sm:text-sm">
              <span className="material-symbols-outlined text-primary !text-base sm:!text-lg flex-shrink-0">check_circle</span>
              Advanced analysis
            </li>
            <li className="flex items-center gap-2 text-white/80 text-xs sm:text-sm">
              <span className="material-symbols-outlined text-primary !text-base sm:!text-lg flex-shrink-0">check_circle</span>
              Priority support
            </li>
            <li className="flex items-center gap-2 text-white/80 text-xs sm:text-sm">
              <span className="material-symbols-outlined text-primary !text-base sm:!text-lg flex-shrink-0">check_circle</span>
              API access
            </li>
          </ul>
          <Button className="w-full text-sm">Upgrade to Pro</Button>
        </div>

        {/* Enterprise Plan */}
        <div className="rounded-xl bg-white/5 border border-white/10 p-4 sm:p-6">
          <div className="mb-3 sm:mb-4">
            <h3 className="text-white text-lg sm:text-xl font-bold">Enterprise Plan</h3>
            <p className="text-white/60 text-xs sm:text-sm">For organizations</p>
          </div>
          <div className="mb-3 sm:mb-4">
            <p className="text-white text-2xl sm:text-3xl font-bold">Custom</p>
          </div>
          <ul className="space-y-2 mb-4 sm:mb-6">
            <li className="flex items-center gap-2 text-white/80 text-xs sm:text-sm">
              <span className="material-symbols-outlined text-primary !text-base sm:!text-lg flex-shrink-0">check_circle</span>
              Unlimited scans
            </li>
            <li className="flex items-center gap-2 text-white/80 text-xs sm:text-sm">
              <span className="material-symbols-outlined text-primary !text-base sm:!text-lg flex-shrink-0">check_circle</span>
              Custom integrations
            </li>
            <li className="flex items-center gap-2 text-white/80 text-xs sm:text-sm">
              <span className="material-symbols-outlined text-primary !text-base sm:!text-lg flex-shrink-0">check_circle</span>
              Dedicated support
            </li>
            <li className="flex items-center gap-2 text-white/80 text-xs sm:text-sm">
              <span className="material-symbols-outlined text-primary !text-base sm:!text-lg flex-shrink-0">check_circle</span>
              SLA guarantee
            </li>
          </ul>
          <Button variant="outline" className="w-full text-sm">Contact Sales</Button>
        </div>
      </div>
    </div>
  )
}

