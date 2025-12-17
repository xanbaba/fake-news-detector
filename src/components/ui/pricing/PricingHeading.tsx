export default function PricingHeading() {
  return (
    <div className="flex flex-wrap justify-center gap-3 p-2 sm:p-4">
      <div className="flex min-w-0 sm:min-w-72 flex-col gap-2 sm:gap-3">
        <div>
            <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight tracking-[-0.033em]">
                Transparent Pricing for a Clearer Truth
            </p>
        </div>

        <p className="text-white/60 text-sm sm:text-base md:text-lg">
          Choose the plan that's right for you and start detecting fake news today.
        </p>
      </div>
    </div>
  )
}
