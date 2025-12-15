import Button from '../Button'

export default function Hero() {
  return (
    <section className="py-6 md:py-6 @container">
      <div className="@[480px]:p-4">
        <div className="flex min-h-[480px] flex-col gap-8 items-center justify-center p-4">
          <div className="flex flex-col gap-4 text-center max-w-3xl items-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/20 px-4 py-1.5 text-sm text-white/90">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Real-time Analysis Engine v2.1
            </div>

            <div className={"typewriter"}>
                <h1 className="text-white text-5xl font-black leading-tight tracking-tighter text-7xl">Unmask the Truth, Instantly.</h1>
            </div>

            <h2 className="text-white/80 text-base font-normal leading-relaxed @[480px]:text-xl max-w-2xl">
              Paste any news article URL below to get an instant, unbiased analysis of its credibility. Fight misinformation with the power of AI.
            </h2>
          </div>
          <div className="w-full max-w-2xl mt-4">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/50 rounded-2xl blur-xl -z-10"></div>
              <div className="relative flex items-center w-full input-glass-effect rounded-2xl overflow-hidden ring-1 ring-inset ring-primary/40 focus-within:ring-primary h-16 p-2">
                <div className="text-white/70 flex items-center justify-center pl-3 pr-1">
                  <span className="material-symbols-outlined">link</span>
                </div>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-white focus:outline-0 focus:ring-0 bg-transparent border-none h-full placeholder:text-white/50 px-2 text-base font-normal leading-normal self-center"
                  placeholder="Paste news article URL here..."
                />
                <Button className="min-w-[96px] w-auto max-w-[480px] h-full rounded-xl text-base shadow-lg shadow-primary/30" rounded="xl">
                  Analyze
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
