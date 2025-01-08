'use client'

import { useEffect, useState } from 'react'
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs'

import { useTheme } from 'next-themes'

import { Switch } from '@/components/ui/switch'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Évite les problèmes d'hydratation
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="flex items-center space-x-2">
      <BsFillSunFill className="h-4 w-4" />
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-primary"
      />
      <BsMoonFill className="h-4 w-4" />
    </div>
  )
}
