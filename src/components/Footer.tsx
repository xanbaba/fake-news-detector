export default function Footer() {
  return (
    <footer className="flex flex-col gap-4 sm:gap-6 md:gap-8 px-3 sm:px-5 py-6 sm:py-8 md:py-10 text-center @container mt-8 sm:mt-12 md:mt-16 border-t border-white/10">
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
        <a className="text-white/70 text-sm sm:text-base font-normal leading-normal hover:text-primary transition-colors" href="#">Terms of Service</a>
        <a className="text-white/70 text-sm sm:text-base font-normal leading-normal hover:text-primary transition-colors" href="#">Privacy Policy</a>
        <a className="text-white/70 text-sm sm:text-base font-normal leading-normal hover:text-primary transition-colors" href="#">Contact</a>
      </div>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        <a className="text-white/70 hover:text-primary transition-colors p-1" data-alt="X social media link" href="#" aria-label="X">
          <svg aria-hidden="true" className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
        </a>
        <a className="text-white/70 hover:text-primary transition-colors p-1" data-alt="LinkedIn social media link" href="#" aria-label="LinkedIn">
          <svg aria-hidden="true" className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fillRule="evenodd"></path></svg>
        </a>
        <a className="text-white/70 hover:text-primary transition-colors p-1" data-alt="Facebook social media link" href="#" aria-label="Facebook">
          <svg aria-hidden="true" className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 5.523 4.477 10 10 10s10-4.477 10-10zm-10 8c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-5h-2v-3h2v-1.4c0-2.16 1.155-3.6 3.53-3.6h1.47v3h-1.021c-.88 0-1.054.56-1.054 1.125v.875h2.075l-.274 3h-1.801v5z"></path></svg>
        </a>
      </div>
      <p className="text-white/70 text-xs sm:text-sm md:text-base font-normal leading-normal">© 2025 TruthGuard AI. All rights reserved.</p>
    </footer>
  )
}
