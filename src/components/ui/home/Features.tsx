import GlassCard from '../GlassCard'

function FeatureCard({ icon, title, children, bubbleClass = '' }: { icon: string; title: string; children: React.ReactNode; bubbleClass?: string }) {
  return (
    <GlassCard>
      <div className={`absolute ${bubbleClass} bg-white/5 rounded-full`}></div>
      <div className="text-primary text-3xl">
        <span className="material-symbols-outlined !text-4xl">{icon}</span>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-white text-lg font-bold leading-tight">{title}</h2>
        <p className="text-white/70 text-sm font-normal leading-normal">{children}</p>
      </div>
    </GlassCard>
  )
}

export default function Features() {
  return (
    <section className="flex flex-col gap-10 px-4 py-10 @container">
      <div className="flex flex-col gap-4 text-center items-center">
        <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl max-w-[720px]">Why Choose TruthGuard AI?</h1>
        <p className="text-white/80 text-base font-normal leading-normal max-w-[720px]">
          Our platform leverages cutting-edge AI to provide you with fast, accurate, and transparent analysis of news sources.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-0">
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
