'use client'

import { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'

import { HeadlightBlue } from './HeadlightBlue'
import { HeadlightGreen } from './HeadlightGreen'

interface ThemeSwitcherProps {
  onThemeChange: (newTheme: string) => void
}
export function ThemeSwitcher({ onThemeChange }: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    onThemeChange(newTheme)
  }

  return (
    <div>
      <button
        onClick={toggleTheme}
        className={
          mounted && theme === 'light'
            ? 'mt-1 border-gray-300 border-3 rounded-lg hover:bg-white hover:border-[#174191]'
            : 'mt-1 border-black-900 border-3 rounded-lg hover:bg-black hover:border-green-600'
        }
      >
        {mounted && theme === 'light' ? (
          <HeadlightBlue color="Blue" />
        ) : (
          <HeadlightGreen color="green" />
        )}
      </button>
    </div>
  )
}
