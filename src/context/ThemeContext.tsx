'use client'

import { createContext, useContext, useEffect, useState } from 'react'

import { Theme, ThemeContextType, ThemeProviderProps } from '@/src/types/models'

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error(
      "useTheme doit être utilisé à l'intérieur d'un ThemeProvider",
    )
  }
  return context
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>('light')
  const [isComponentMounted, setIsComponentMounted] = useState(false)

  useEffect(() => {
    setIsComponentMounted(true)
    const storedTheme = localStorage.getItem('theme') as Theme | null
    if (storedTheme) {
      setTheme(storedTheme)
    }
  }, [])

  useEffect(() => {
    if (isComponentMounted) {
      const html = document.documentElement
      html.className = theme
      localStorage.setItem('theme', theme)
    }
  }, [theme, isComponentMounted])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  if (!isComponentMounted) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg font-semibold text-black">Chargement...</div>
      </div>
    )
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
