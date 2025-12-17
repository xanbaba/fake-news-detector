import { useEffect } from 'react'
import type { AccountSection } from '@/hooks/useAccountModal'
import ProfileSection from './account-sections/ProfileSection'
import SettingsSection from './account-sections/SettingsSection'
import UpgradeSection from './account-sections/UpgradeSection'
import BillingHistorySection from './account-sections/BillingHistorySection'

interface AccountModalProps {
  isOpen: boolean
  activeSection: AccountSection
  onClose: () => void
  onSectionChange: (section: AccountSection) => void
}

export default function AccountModal({ isOpen, activeSection, onClose, onSectionChange }: AccountModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const sections = [
    { id: 'profile' as AccountSection, label: 'Profile', icon: 'person' },
    { id: 'settings' as AccountSection, label: 'Settings', icon: 'settings' },
    { id: 'upgrade' as AccountSection, label: 'Upgrade', icon: 'upgrade' },
    { id: 'billing' as AccountSection, label: 'Billing History', icon: 'receipt_long' },
  ]

  const renderSection = () => {
    switch (activeSection) {
      case 'profile':
        return <ProfileSection />
      case 'settings':
        return <SettingsSection />
      case 'upgrade':
        return <UpgradeSection />
      case 'billing':
        return <BillingHistorySection />
      default:
        return <ProfileSection />
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-5xl max-h-[95vh] sm:max-h-[90vh] glass-effect rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col md:flex-row">
        {/* Sidebar Navigation */}
        <div className="w-full md:w-56 lg:w-64 bg-white/5 border-b md:border-b-0 md:border-r border-white/10 p-3 sm:p-4 md:p-6">
          <div className="flex items-center justify-between mb-3 md:mb-8">
            <h2 className="text-white text-lg sm:text-xl font-bold">Account</h2>
            <button
              onClick={onClose}
              className="md:hidden text-white/60 hover:text-white transition-colors p-1"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Horizontal scroll on mobile, vertical on desktop */}
          <nav className="flex md:flex-col gap-1 sm:gap-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 -mx-1 px-1 md:mx-0 md:px-0">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-all whitespace-nowrap flex-shrink-0 md:flex-shrink md:w-full ${
                  activeSection === section.id
                    ? 'bg-primary text-white'
                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined !text-lg sm:!text-xl">{section.icon}</span>
                <span className="font-medium text-sm sm:text-base">{section.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden min-h-0">
          {/* Close button for desktop */}
          <div className="hidden md:flex justify-end p-3 sm:p-4">
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors p-1"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 pt-2 md:pt-0 scrollbar-thin">
            {renderSection()}
          </div>
        </div>
      </div>
    </div>
  )
}

