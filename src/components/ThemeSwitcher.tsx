'use client'

import { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'

import { ThemeSwitcherProps } from '@/types/models'

import { HeadlightBlue } from './HeadlightBlue'
import { HeadlightGreen } from './HeadlightGreen'

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
    <button
      onClick={toggleTheme}
      className={
        mounted && theme === 'light'
          ? `rounded-lg border-3 border-gris  ${withMember ? ' border-bg-gray-400 hover:border-principal-light' : ' hover:bg-bg-light hover:border-principal-light'}`
          : `rounded-lg border-black-900 border-3 ${withMember ? 'bg-bg-dark hover:border-vert' : ' hover:bg-bg-dark hover:border-vert'}`
      }
    >
      {mounted && theme === 'light' ? (
        <HeadlightBlue color="Blue" />
      ) : (
        <HeadlightGreen color="green" />
      )}
    </button>
  )
}
