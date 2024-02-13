'use client'

import { ThemeSwitcherProps } from '@/types/models'

import { HeadlightBlue } from './HeadlightBlue'
import { HeadlightGreen } from './HeadlightGreen'

import { useTheme } from '@/context/ThemeContext'

export function ThemeSwitcher({ withMember }: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={
        theme === 'light'
          ? `rounded-lg border-3 border-gray  ${
              withMember
                ? ' border-bg-gray-400 hover:border-principal-light'
                : ' hover:bg-bg-light hover:border-principal-light'
            }`
          : `rounded-lg border-black-900 border-3 ${
              withMember
                ? 'bg-bg-dark hover:border-green'
                : ' hover:bg-bg-dark hover:border-green'
            }`
      }
    >
      {theme === 'light' ? (
        <HeadlightBlue color="Blue" />
      ) : (
        <HeadlightGreen color="green" />
      )}
    </button>
  )
}
