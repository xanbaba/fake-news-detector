import GlassCard from '../ui/GlassCard'

function ValueCard({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <GlassCard className="p-5 sm:p-6 md:p-8 text-center">
      <div className="flex justify-center mb-2">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/20 border border-primary/50">
          <span className="material-symbols-outlined text-primary !text-3xl">{icon}</span>
        </div>
      </div>
      <h3 className="text-white text-lg sm:text-xl font-bold mb-2">{title}</h3>
      <p className="text-white/70 text-sm sm:text-base leading-relaxed">{children}</p>
    </GlassCard>
  )
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-primary text-3xl sm:text-4xl md:text-5xl font-bold">{value}</span>
      <span className="text-white/70 text-sm sm:text-base">{label}</span>
    </div>
  )
}

export default function AboutUsPage() {
  return (
    <section className="mt-8 sm:mt-12 md:mt-16 lg:mt-24 flex flex-col items-center gap-12 sm:gap-16 md:gap-20">
      {/* Hero Section */}
      <div className="flex flex-col gap-4 sm:gap-5 text-center items-center px-2">
        <h1 className="text-white tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-[800px]">
          Fighting Misinformation, One Article at a Time
        </h1>
        <p className="text-white/80 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-[640px]">
          We believe in a world where everyone has access to the tools they need to distinguish fact from fiction. TruthGuard AI is our contribution to that future.
        </p>
      </div>

      {/* Mission Section */}
      <div className="w-full px-2 sm:px-4">
        <GlassCard className="p-6 sm:p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/20 px-3 py-1 text-xs text-white/90 mb-4">
                <span className="material-symbols-outlined !text-sm">flag</span>
                Our Mission
              </div>
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                Empowering Critical Thinking in the Digital Age
              </h2>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-4">
                In an era of information overload, distinguishing credible news from misinformation has become increasingly challenging. Our mission is to democratize access to fact-checking technology, giving every individual the power to verify the news they consume.
              </p>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                We're not here to tell you what to think—we're here to give you the tools to think critically and make informed decisions about the information you encounter every day.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary !text-6xl sm:!text-7xl md:!text-8xl">target</span>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Vision Section */}
      <div className="w-full px-2 sm:px-4">
        <GlassCard className="p-6 sm:p-8 md:p-10">
          <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/20 px-3 py-1 text-xs text-white/90 mb-4">
                <span className="material-symbols-outlined !text-sm">visibility</span>
                Our Vision
              </div>
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                A World Where Truth Prevails
              </h2>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-4">
                We envision a future where misinformation no longer has the power to divide communities, influence elections, or endanger public health. A future where technology serves as a shield against manipulation rather than a weapon for it.
              </p>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                By 2030, we aim to have our technology integrated into major platforms and used by millions of people daily, creating a more informed and resilient global community.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary !text-6xl sm:!text-7xl md:!text-8xl">rocket_launch</span>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Values Section */}
      <div className="w-full px-2 sm:px-4">
        <div className="flex flex-col gap-6 sm:gap-8 items-center">
          <div className="text-center">
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-3">Our Core Values</h2>
            <p className="text-white/70 text-sm sm:text-base max-w-xl">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 w-full">
            <ValueCard icon="verified_user" title="Integrity">
              We hold ourselves to the highest standards of honesty and transparency in everything we build and communicate.
            </ValueCard>
            <ValueCard icon="groups" title="Accessibility">
              We believe truth-verification tools should be available to everyone, regardless of technical expertise or budget.
            </ValueCard>
            <ValueCard icon="balance" title="Objectivity">
              Our AI is trained to be politically neutral and culturally unbiased, focusing only on factual accuracy.
            </ValueCard>
            <ValueCard icon="lock" title="Privacy">
              We never store, sell, or share user data. Your searches and results are yours alone.
            </ValueCard>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full px-2 sm:px-4">
        <GlassCard className="p-6 sm:p-8 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <StatCard value="10M+" label="Articles Analyzed" />
            <StatCard value="50+" label="Languages Supported" />
            <StatCard value="99.2%" label="Accuracy Rate" />
            <StatCard value="150+" label="Countries Reached" />
          </div>
        </GlassCard>
      </div>

      {/* Story Section */}
      <div className="w-full px-2 sm:px-4">
        <GlassCard className="p-6 sm:p-8 md:p-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/20 px-3 py-1 text-xs text-white/90 mb-4">
              <span className="material-symbols-outlined !text-sm">history_edu</span>
              Our Story
            </div>
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              Born from Necessity
            </h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-4">
              TruthGuard AI was founded in 2024 by a team of AI researchers, journalists, and technologists who witnessed firsthand the damage caused by viral misinformation. After seeing how fake news affected everything from public health decisions to family relationships, we knew we had to act.
            </p>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-4">
              What started as a research project at a university lab has grown into a comprehensive platform used by individuals, newsrooms, and organizations around the world. But our core mission remains the same: making truth accessible to everyone.
            </p>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              We're just getting started. Join us in the fight against misinformation.
            </p>
          </div>
        </GlassCard>
      </div>

      {/* CTA Section */}
      <div className="w-full px-2 sm:px-4 pb-8">
        <GlassCard className="p-6 sm:p-8 md:p-10 text-center bg-primary/10">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-3">
            Join the Movement
          </h2>
          <p className="text-white/70 text-sm sm:text-base mb-6 max-w-lg mx-auto">
            Be part of the solution. Start using TruthGuard AI today and help build a more informed world.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/get-started"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-primary/30"
            >
              Get Started Free
            </a>
            <a
              href="/features"
              className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/20"
            >
              Explore Features
            </a>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}

