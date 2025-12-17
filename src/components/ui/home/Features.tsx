import GlassCard from '../GlassCard'

function FeatureCard({ icon, title, children, bubbleClass = '' }: { icon: string; title: string; children: React.ReactNode; bubbleClass?: string }) {
  return (
    <GlassCard className="p-4 sm:p-5 md:p-6">
      <div className={`absolute ${bubbleClass} bg-white/5 rounded-full`}></div>
      <div className="text-primary text-2xl sm:text-3xl">
        <span className="material-symbols-outlined !text-3xl sm:!text-4xl">{icon}</span>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-white text-base sm:text-lg font-bold leading-tight">{title}</h2>
        <p className="text-white/70 text-xs sm:text-sm font-normal leading-normal">{children}</p>
      </div>
    </GlassCard>
  )
}

export default function Features() {
  return (
    <section className="flex flex-col gap-6 sm:gap-8 md:gap-10 px-2 sm:px-4 py-6 sm:py-8 md:py-10 @container">
      <div className="flex flex-col gap-3 sm:gap-4 text-center items-center">
        <h1 className="text-white tracking-light text-xl sm:text-2xl md:text-[32px] lg:text-4xl font-bold leading-tight max-w-[720px]">Why Choose TruthGuard AI?</h1>
        <p className="text-white/80 text-sm sm:text-base font-normal leading-normal max-w-[720px]">
          Our platform leverages cutting-edge AI to provide you with fast, accurate, and transparent analysis of news sources.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 p-0">
        <FeatureCard icon="speed" title="Unparalleled Speed" bubbleClass="-top-1/3 -right-1/4 w-40 h-40">
          Get results in seconds, not minutes. Our AI processes articles instantly.
        </FeatureCard>
        <FeatureCard icon="model_training" title="Deep Accuracy" bubbleClass="-bottom-1/4 -left-1/4 w-32 h-32">
          We analyze text, context, and metadata for a comprehensive credibility score.
        </FeatureCard>
        <FeatureCard icon="verified" title="Source Verification" bubbleClass="top-1/4 -right-1/4 w-32 h-32 opacity-50">
          Cross-reference claims with a vast database of verified news sources.
        </FeatureCard>
      </div>
    </section>
  )
}
