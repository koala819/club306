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
          ? `rounded-full border-3 border-gray-300 p-0.5 flex justify-center items-center h-3/5 ${
              withMember
                ? ' border-gray-300 hover:border-principal-light bg-gray-300'
                : ' hover:bg-bg-light hover:border-principal-light'
            }`
          : `rounded-full border-3 border-black-900 p-0.5 flex justify-center items-center h-3/5  ${
              withMember
                ? 'bg-bg-dark hover:border-green-600'
                : ' hover:bg-bg-dark hover:border-green-600'
            }`
      }
    >
      <div className="flex items-center relative">
        <div className={theme === 'light' ? 'opacity-100' : 'opacity-0'}>
          <HeadlightBlue color="blue" />
        </div>

        <div className={theme === 'dark' ? 'opacity-100 ' : 'opacity-0'}>
          <HeadlightGreen color="green" />
        </div>

        <div
          className={
            theme === 'light'
              ? 'bg-principal-light w-7 h-7 rounded-full absolute right-0'
              : 'bg-principal-dark w-7 h-7 rounded-full ml-px absolute left-0'
          }
        />
      </div>
      {/* {theme === 'light' ? (
        
      ) : (
         
      )} */}
    </button>
  )
}
