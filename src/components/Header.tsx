import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useAccountModal } from '@/hooks/useAccountModal'
import UserProfileDropdown from './ui/UserProfileDropdown'
import AccountModal from './ui/AccountModal'

export default function Header() {
  const { user, loading } = useAuth()
  const { isOpen, activeSection, openModal, closeModal, setActiveSection } = useAccountModal()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="flex items-center justify-between whitespace-nowrap p-4 rounded-2xl glass-effect relative">
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -left-1/2 w-48 h-48 bg-white/10 rounded-full"></div>
        </div>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 text-white relative z-10">
          <div className="flex items-center justify-center size-8 bg-primary/20 rounded-lg border border-primary/50">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/><path d="m9 12 2 2 4-4"/></svg>
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">TruthGuard AI</h2>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-end gap-8 relative z-10">
          <div className="flex items-center gap-9">
            <Link className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" to="/">Home</Link>
            <Link className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" to="/pricing">Pricing</Link>
            <a className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Features</a>
            <a className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">About Us</a>
          </div>
          <div className="flex gap-2 items-center">
            {!loading && (
              user ? (
                <UserProfileDropdown user={user} onOpenModal={openModal} />
              ) : (
                <Link
                  to="/get-started"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity shadow-lg shadow-primary/30"
                >
                  Get Started
                </Link>
              )
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden relative z-10">
          <button
            className="text-white flex"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 glass-effect rounded-2xl overflow-hidden">
          <nav className="flex flex-col p-2">
            <Link
              className="text-white text-sm font-medium px-4 py-3 hover:bg-white/5 rounded-lg transition-colors"
              to="/"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              className="text-white text-sm font-medium px-4 py-3 hover:bg-white/5 rounded-lg transition-colors"
              to="/pricing"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <a
              className="text-white text-sm font-medium px-4 py-3 hover:bg-white/5 rounded-lg transition-colors"
              href="#"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              className="text-white text-sm font-medium px-4 py-3 hover:bg-white/5 rounded-lg transition-colors"
              href="#"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </a>

            {!loading && (
              <div className="border-t border-white/10 mt-2 pt-2">
                {user ? (
                  <div className="p-2">
                    <UserProfileDropdown user={user} onOpenModal={openModal} />
                  </div>
                ) : (
                  <Link
                    to="/get-started"
                    className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity shadow-lg shadow-primary/30"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                )}
              </div>
            )}
          </nav>
        </div>
      )}

      {/* Account Modal */}
      <AccountModal
        isOpen={isOpen}
        activeSection={activeSection}
        onClose={closeModal}
        onSectionChange={setActiveSection}
      />
    </>
  )
}
