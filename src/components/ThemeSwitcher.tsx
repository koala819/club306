'use client'

import { Switch } from '@nextui-org/react'
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs'

import { useTheme } from 'next-themes'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <Switch
      defaultSelected
      size="lg"
      color="success"
      startContent={<BsFillSunFill />}
      endContent={<BsMoonFill />}
      onChange={toggleTheme}
    />
  )
}
