'use client'

import { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'

import { HeadlightBlue } from './HeadlightBlue'
import { HeadlightGreen } from './HeadlightGreen'

interface ThemeSwitcherProps {
  onThemeChange: (newTheme: string) => void
  withMember?: boolean
}
export function ThemeSwitcher({
  onThemeChange,
  withMember,
}: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    onThemeChange(newTheme)
  }

  return (
    <>
      <button
        onClick={toggleTheme}
        className={
          mounted && theme === 'light'
            ? `rounded-lg border-gray-300 border-3 hover:bg-white hover:border-[#174191] ${withMember ? 'border-[#6a6145] hover:bg-[#ADA075]' : ''}`
            : `rounded-lg border-black-900 border-3 hover:bg-black hover:border-green-600 ${withMember ? 'bg-bg-black' : ''}`
        }
      >
        {mounted && theme === 'light' ? (
          <HeadlightBlue color="Blue" />
        ) : (
          <HeadlightGreen color="green" />
        )}
      </button>
    </>
  )
}
