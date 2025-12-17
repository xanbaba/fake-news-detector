import GlassCard from '../ui/GlassCard'

function FeatureCard({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <GlassCard className="p-4 sm:p-5 md:p-6">
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

function HowItWorksStep({ step, title, description }: { step: number; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 border border-primary/50 text-primary font-bold text-xl">
        {step}
      </div>
      <h3 className="text-white font-semibold text-lg">{title}</h3>
      <p className="text-white/70 text-sm max-w-xs">{description}</p>
    </div>
  )
}

export default function FeaturesPage() {
  return (
    <section className="mt-8 sm:mt-12 md:mt-16 lg:mt-24 flex flex-col items-center gap-10 sm:gap-14 md:gap-20">
      {/* Hero Section */}
      <div className="flex flex-col gap-3 sm:gap-4 text-center items-center px-2">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/20 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm text-white/90">
          <span className="material-symbols-outlined !text-base">auto_awesome</span>
          <span>Powered by Advanced AI</span>
        </div>
        <h1 className="text-white tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-[720px]">
          Powerful Features to Combat Misinformation
        </h1>
        <p className="text-white/80 text-sm sm:text-base md:text-lg font-normal leading-normal max-w-[640px]">
          Our comprehensive suite of tools gives you everything you need to verify news authenticity and make informed decisions.
        </p>
      </div>

      {/* Core Features Grid */}
      <div className="w-full px-2 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          <FeatureCard icon="speed" title="Unparalleled Speed">
            Get results in seconds, not minutes. Our AI processes articles instantly with real-time analysis capabilities.
          </FeatureCard>
          <FeatureCard icon="model_training" title="Deep Accuracy">
            We analyze text, context, and metadata for a comprehensive credibility score using multi-layered neural networks.
          </FeatureCard>
          <FeatureCard icon="verified" title="Source Verification">
            Cross-reference claims with a vast database of verified news sources and fact-checking organizations worldwide.
          </FeatureCard>
          <FeatureCard icon="psychology" title="Sentiment Analysis">
            Detect emotional manipulation and bias in articles through advanced natural language processing.
          </FeatureCard>
          <FeatureCard icon="history" title="Historical Tracking">
            Track the reliability history of news sources over time to identify patterns and trends.
          </FeatureCard>
          <FeatureCard icon="extension" title="Browser Extension">
            Analyze articles directly while browsing with our lightweight, privacy-focused browser extension.
          </FeatureCard>
          <FeatureCard icon="api" title="Developer API">
            Integrate our detection capabilities into your own applications with our robust REST API.
          </FeatureCard>
          <FeatureCard icon="translate" title="Multi-Language Support">
            Analyze content in 50+ languages with the same accuracy as English-language detection.
          </FeatureCard>
          <FeatureCard icon="shield" title="Privacy First">
            Your data is never stored or shared. All analysis happens in real-time with zero data retention.
          </FeatureCard>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="w-full px-2 sm:px-4">
        <div className="flex flex-col gap-8 sm:gap-12 items-center">
          <div className="text-center">
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-3">How It Works</h2>
            <p className="text-white/70 text-sm sm:text-base max-w-xl">
              Three simple steps to verify any news article
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-4xl">
            <HowItWorksStep
              step={1}
              title="Paste URL"
              description="Simply paste the URL of any news article you want to verify into our analyzer."
            />
            <HowItWorksStep
              step={2}
              title="AI Analysis"
              description="Our AI examines the content, source credibility, language patterns, and cross-references claims."
            />
            <HowItWorksStep
              step={3}
              title="Get Results"
              description="Receive a detailed credibility report with scores, explanations, and actionable insights."
            />
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="w-full px-2 sm:px-4">
        <GlassCard className="p-6 sm:p-8 md:p-10">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-3">Why TruthGuard AI?</h2>
            <p className="text-white/70 text-sm sm:text-base">See how we compare to manual fact-checking</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="flex flex-col gap-4">
              <h3 className="text-white/50 text-sm font-semibold uppercase tracking-wider">Traditional Fact-Checking</h3>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-3 text-white/60 text-sm">
                  <span className="material-symbols-outlined text-red-400 !text-lg">close</span>
                  Takes hours or days to verify
                </li>
                <li className="flex items-center gap-3 text-white/60 text-sm">
                  <span className="material-symbols-outlined text-red-400 !text-lg">close</span>
                  Limited to popular stories
                </li>
                <li className="flex items-center gap-3 text-white/60 text-sm">
                  <span className="material-symbols-outlined text-red-400 !text-lg">close</span>
                  Potential for human bias
                </li>
                <li className="flex items-center gap-3 text-white/60 text-sm">
                  <span className="material-symbols-outlined text-red-400 !text-lg">close</span>
                  Expensive to scale
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-primary text-sm font-semibold uppercase tracking-wider">TruthGuard AI</h3>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-3 text-white text-sm">
                  <span className="material-symbols-outlined text-green-400 !text-lg">check</span>
                  Results in seconds
                </li>
                <li className="flex items-center gap-3 text-white text-sm">
                  <span className="material-symbols-outlined text-green-400 !text-lg">check</span>
                  Analyze any article, any time
                </li>
                <li className="flex items-center gap-3 text-white text-sm">
                  <span className="material-symbols-outlined text-green-400 !text-lg">check</span>
                  Objective AI-driven analysis
                </li>
                <li className="flex items-center gap-3 text-white text-sm">
                  <span className="material-symbols-outlined text-green-400 !text-lg">check</span>
                  Affordable for everyone
                </li>
              </ul>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* CTA Section */}
      <div className="w-full px-2 sm:px-4 pb-8">
        <GlassCard className="p-6 sm:p-8 md:p-10 text-center bg-primary/10">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-3">
            Ready to Fight Misinformation?
          </h2>
          <p className="text-white/70 text-sm sm:text-base mb-6 max-w-lg mx-auto">
            Join thousands of users who trust TruthGuard AI to help them navigate the news landscape.
          </p>
          <a
            href="/get-started"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-primary/30"
          >
            Get Started Free
          </a>
        </GlassCard>
      </div>
    </section>
  )
}

