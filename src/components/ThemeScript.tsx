'use client'

import { useEffect } from 'react'

export function ThemeScript() {
  useEffect(() => {
    try {
      const theme = localStorage.getItem('theme') || 'light'
      document.documentElement.className = theme
    } catch (e) {
      // Ignore errors
    }
  }, [])

  return null
}
