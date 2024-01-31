'use client'

import { useSession } from 'next-auth/react'
// import { useEffect } from 'react'
// import { GiPartyPopper } from 'react-icons/gi'
// import { GoFlame, GoRuby } from 'react-icons/go'
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import { useTheme } from 'next-themes'
// import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Event() {
  const { data: session } = useSession()
  const router = useRouter()
  const { resolvedTheme } = useTheme()
  return
}
