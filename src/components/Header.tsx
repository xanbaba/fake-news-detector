import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap p-4 rounded-2xl glass-effect relative overflow-hidden">
      <div className="absolute -top-1/2 -left-1/2 w-48 h-48 bg-white/10 rounded-full"></div>
      <div className="flex items-center gap-3 text-white">
        <div className="flex items-center justify-center size-8 bg-primary/20 rounded-lg border border-primary/50">
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/><path d="m9 12 2 2 4-4"/></svg>
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">TruthGuard AI</h2>
      </div>
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Link className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" to="/">Home</Link>
          <Link className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" to="/pricing">Pricing</Link>
          <a className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Features</a>
          <a className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">About Us</a>
        </div>
        <div className="flex gap-2">
          <Link
            to="/get-started"
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity shadow-lg shadow-primary/30"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="md:hidden">
        <button className="text-white flex">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  )
}
