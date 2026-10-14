'use client'

import { ThemeSwitcherProps } from '@/src/types/models'

import { HeadlightBlue } from './HeadlightBlue'
import { HeadlightGreen } from './HeadlightGreen'

import { useTheme } from '@/src/context/ThemeContext'

export function ThemeSwitcher({
  withMember,
  compact = false,
}: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme()
  const isLight = theme === 'light'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? 'Activer le mode sombre' : 'Activer le mode clair'}
      className={`group relative inline-flex shrink-0 items-center rounded-full border transition-all duration-300 ${
        compact ? 'h-7 w-14 p-0.5' : 'h-9 w-[4.5rem] p-1'
      } ${
        isLight
          ? withMember
            ? 'border-white/40 bg-white/25'
            : 'border-principal-light/25 bg-[#e8eef8]'
          : withMember
            ? 'border-principal-dark/50 bg-black/40'
            : 'border-principal-dark/40 bg-[#1a1a2e]'
      }`}
    >
      {/* Icône du mode opposé — toujours lisible sur le rail */}
      <span
        className={`pointer-events-none absolute flex items-center justify-center transition-opacity duration-300 ${
          compact ? 'scale-[0.55]' : 'scale-[0.7]'
        } ${
          isLight
            ? 'right-1.5 opacity-100'
            : 'left-1.5 opacity-100'
        }`}
      >
        {isLight ? (
          <HeadlightGreen color="#E2A300" />
        ) : (
          <HeadlightBlue color="#5B8DEF" />
        )}
      </span>

      {/* Pastille active avec l’icône du mode courant */}
      <span
        className={`relative z-10 flex items-center justify-center rounded-full shadow-md transition-all duration-300 ease-out ${
          compact ? 'h-6 w-6' : 'h-7 w-7'
        } ${
          isLight
            ? 'translate-x-0 bg-principal-light'
            : compact
              ? 'translate-x-[1.55rem] bg-principal-dark shadow-[0_0_12px_rgba(226,163,0,0.55)]'
              : 'translate-x-[1.9rem] bg-principal-dark shadow-[0_0_14px_rgba(226,163,0,0.55)]'
        }`}
      >
        <span className={compact ? 'scale-[0.45]' : 'scale-[0.55]'}>
          {isLight ? (
            <HeadlightBlue color="#ffffff" />
          ) : (
            <HeadlightGreen color="#1a1a2e" />
          )}
        </span>
      </span>
    </button>
  )
}
