import {Link} from 'react-router-dom'
import {useState} from 'react'
import {useAuth} from '@/contexts/AuthContext'
import {useAccountModal} from '@/hooks/useAccountModal'
import UserProfileDropdown from './ui/UserProfileDropdown'
import AccountModal from './ui/AccountModal'

export default function Header() {
    const {user, loading} = useAuth()
    const {isOpen, activeSection, openModal, closeModal, setActiveSection} = useAccountModal()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
            <header
                className="flex items-center justify-between whitespace-nowrap p-3 sm:p-4 rounded-xl sm:rounded-2xl glass-effect relative">
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden pointer-events-none">
                    <div
                        className="absolute -top-1/2 -left-1/2 w-32 sm:w-48 h-32 sm:h-48 bg-white/10 rounded-full"></div>
                </div>

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 sm:gap-3 text-white relative z-10">
                    <div
                        className="flex items-center justify-center size-7 sm:size-8 bg-primary/20 rounded-lg border border-primary/50">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" stroke="currentColor"
                             strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                            <path d="m9 12 2 2 4-4"/>
                        </svg>
                    </div>
                    <h2 className="text-white text-base sm:text-lg font-bold leading-tight tracking-[-0.015em]">TruthGuard
                        AI</h2>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex flex-1 justify-center gap-4 lg:gap-8 relative z-10">
                    <div className="flex items-center gap-4 lg:gap-9">
                        <Link
                            className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
                            to="/">Home</Link>
                        <Link
                            className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
                            to="/pricing">Pricing</Link>
                        <Link
                            className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
                            to="/features">Features</Link>
                        <Link
                            className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
                            to="/about">About Us</Link>
                    </div>
                    <div className="flex gap-2 md:hidden items-center">
                        {!loading && (
                            user && (
                                <UserProfileDropdown user={user} onOpenModal={openModal}/>
                            )
                        )}
                    </div>
                </div>

                <div className={'flex items-center'}>

                    {!loading && (
                        <div className="flex-shrink-0">
                            {user ? (
                                <div className="p-2">
                                    <UserProfileDropdown user={user} onOpenModal={openModal}/>
                                </div>
                            ) : (
                                <Link
                                    to="/get-started"
                                    className="hidden sm:flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 sm:h-11 px-4 sm:px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity shadow-lg shadow-primary/30 whitespace-nowrap"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Get Started
                                </Link>
                            )}
                        </div>
                    )}
                    {/* Mobile Menu Button */}
                    <div className="md:hidden relative z-10">
                        <button
                            className="text-white flex items-center justify-center min-h-[44px] min-w-[44px] rounded-lg hover:bg-white/5 transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            <span className="material-symbols-outlined">
                              {mobileMenuOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div
                    className="md:hidden mt-2 glass-effect rounded-xl sm:rounded-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <nav className="flex flex-col text-center p-2">
                        <Link
                            className="text-white text-sm font-medium px-4 py-3 hover:bg-white/5 rounded-lg transition-colors min-h-[44px] items-center"
                            to="/"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            className="text-white text-sm font-medium px-4 py-3 hover:bg-white/5 rounded-lg transition-colors min-h-[44px] items-center"
                            to="/pricing"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Pricing
                        </Link>
                        <Link
                            className="text-white text-sm font-medium px-4 py-3 hover:bg-white/5 rounded-lg transition-colors min-h-[44px] items-center"
                            to="/features"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Features
                        </Link>
                        <Link
                            className="text-white text-sm font-medium px-4 py-3 hover:bg-white/5 rounded-lg transition-colors min-h-[44px] items-center"
                            to="/about"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About Us
                        </Link>
                        {!user && !loading && (
                            <Link
                                to="/get-started"
                                className="sm:hidden mt-2 flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity shadow-lg shadow-primary/30"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Get Started
                            </Link>
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
