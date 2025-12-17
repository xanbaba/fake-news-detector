import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'
import {signOutUser} from '@/services/authService'
import type { AccountSection } from '@/hooks/useAccountModal'
import type {User} from "firebase/auth"
import ProfileIcon from "@/components/ui/ProfileIcon.tsx";

interface UserProfileDropdownProps {
  user: User
  onOpenModal: (section: AccountSection) => void
}

export default function UserProfileDropdown({ user, onOpenModal }: UserProfileDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [buttonRect, setButtonRect] = useState<DOMRect | null>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  // Dummy credits data
  const creditsUsed = 25
  const creditsTotal = 100
  const creditsRemaining = creditsTotal - creditsUsed
  const creditsRemainingPercent = (creditsRemaining / creditsTotal) * 100

  // Update button position when opening dropdown
  useEffect(() => {
    if (isOpen && buttonRef.current) {
      setButtonRect(buttonRef.current.getBoundingClientRect())
    }
  }, [isOpen])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleSignOut = () => {
    signOutUser().then(() => navigate('/'))
  }

  const handleMenuItemClick = (section: AccountSection) => {
    setIsOpen(false)
    onOpenModal(section)
  }

  return (
    <>
      {/* Profile Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 sm:gap-3 rounded-lg hover:bg-white/5 transition-colors p-1"
      >
        <ProfileIcon />
      </button>

      {/* Dropdown Menu - Rendered via Portal */}
      {isOpen && createPortal(
        <>
          {/* Backdrop for mobile */}
          <div
            className="fixed inset-0 bg-black/50 z-[9998] md:hidden"
            onClick={() => setIsOpen(false)}
          />

          <div
            ref={dropdownRef}
            className="fixed rounded-2xl shadow-2xl overflow-hidden z-[9999] w-80 max-w-[calc(100vw-2rem)]"
            style={{
              // Desktop: position near button
              // Mobile: bottom sheet style
              ...(buttonRect && window.innerWidth >= 768 ? {
                top: `${buttonRect.bottom + 8}px`,
                right: `${window.innerWidth - buttonRect.right}px`,
              } : {
                bottom: '1rem',
                left: '50%',
                transform: 'translateX(-50%)',
              }),
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
          {/* User Info */}
          <div className="p-3 sm:p-4 border-b border-white/10">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <ProfileIcon />
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold truncate text-sm sm:text-base">
                  {user?.displayName || 'User'}
                </p>
                <p className="text-white/60 text-xs sm:text-sm truncate">{user?.email}</p>
              </div>
            </div>

            {/* Credits Progress Bar */}
            <div className="space-y-1.5 sm:space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-white/70">Scans remaining</span>
                <span className="text-white font-medium">
                  {creditsRemaining}/{creditsTotal}
                </span>
              </div>
              <div className="w-full h-1.5 sm:h-2 rounded-full overflow-hidden bg-white/10">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${creditsRemainingPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-1 sm:py-2">
            <button
              onClick={() => handleMenuItemClick('profile')}
              className="w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 text-white/80 hover:bg-white/10 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined !text-lg sm:!text-xl">person</span>
              <span className="font-medium text-sm sm:text-base">Profile</span>
            </button>

            <button
              onClick={() => handleMenuItemClick('settings')}
              className="w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 text-white/80 hover:bg-white/10 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined !text-lg sm:!text-xl">settings</span>
              <span className="font-medium text-sm sm:text-base">Settings</span>
            </button>

            <button
              onClick={() => handleMenuItemClick('upgrade')}
              className="w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 text-white/80 hover:bg-white/10 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined !text-lg sm:!text-xl">upgrade</span>
              <span className="font-medium text-sm sm:text-base">Upgrade</span>
            </button>

            <button
              onClick={() => handleMenuItemClick('billing')}
              className="w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 text-white/80 hover:bg-white/10 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined !text-lg sm:!text-xl">receipt_long</span>
              <span className="font-medium text-sm sm:text-base">Billing History</span>
            </button>
          </div>

          {/* Sign Out */}
          <div className="border-t border-white/10 p-1.5 sm:p-2">
            <button
              onClick={handleSignOut}
              className="w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors rounded-lg"
            >
              <span className="material-symbols-outlined !text-lg sm:!text-xl">logout</span>
              <span className="font-medium text-sm sm:text-base">Sign Out</span>
            </button>
          </div>
        </div>
        </>,
        document.body
      )}
    </>
  )
}

