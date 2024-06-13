import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'

export function ToggleTheme(): ReactNode {
  const { setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex items-center">
      <button
        className="flex w-full items-center justify-center border-b-2 p-8 dark:border-b-0 dark:bg-[#111111]"
        onClick={() => {
          setTheme('light')
        }}
      >
        <SunIcon />
      </button>
      <button
        className="flex w-full items-center justify-center border-b-0 p-8 dark:border-b-2 dark:border-b-[#2d2d34] dark:bg-[#111111]"
        onClick={() => {
          setTheme('dark')
        }}
      >
        <MoonIcon />
      </button>
    </div>
  )
}
