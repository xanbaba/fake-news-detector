import { useState } from 'react'

export type AccountSection = 'profile' | 'settings' | 'upgrade' | 'billing'

export function useAccountModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<AccountSection>('profile')

  const openModal = (section: AccountSection = 'profile') => {
    setActiveSection(section)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return {
    isOpen,
    activeSection,
    openModal,
    closeModal,
    setActiveSection,
  }
}

