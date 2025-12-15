import {useState} from 'react'

interface ToggleProps {
    defaultChecked?: boolean
    onChange?: (checked: boolean) => void
    disabled?: boolean
}

export default function Toggle({defaultChecked = false, onChange, disabled = false}: ToggleProps) {
    const [checked, setChecked] = useState(defaultChecked)

    const handleToggle = () => {
        if (disabled) return
        const newValue = !checked
        setChecked(newValue)
        onChange?.(newValue)
    }

    return (
        <button
            type="button"
            role="switch"
            aria-checked={checked}
            disabled={disabled}
            onClick={handleToggle}
            className={`relative inline-flex h-7 w-12 items-center rounded-full glass-effect transition-colors focus:outline-none ${
                checked ? 'bg-primary' : 'bg-white/20'
            } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        >
      <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white/70 glass-effect shadow-md transition-transform duration-200 ${
              checked ? 'translate-x-3' : 'translate-x-[2px]'
          }`}
      />
        </button>
    )
}

