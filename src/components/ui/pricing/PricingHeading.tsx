export default function PricingHeading() {
  return (
    <div className="flex flex-wrap justify-center gap-3 p-4">
      <div className="flex min-w-72 flex-col gap-3">
        <div className={"typewriter"}>
            <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl lg:text-6xl">
                Transparent Pricing for a Clearer Truth
            </p>
        </div>

        <p className="text-white/60 text-base md:text-lg">
          Choose the plan that's right for you and start detecting fake news today.
        </p>
      </div>
    </div>
  )
}
