'use client'

import { SourceFile } from '@/components/InputUrl/interfaces'
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode
} from 'react'

interface UserContextType {
  theme: string
  setTheme: (theme: string) => void
  sources: SourceFile | null
}

const UserContext = createContext<UserContextType>({
  theme: 'light',
  setTheme: () => {},
  sources: null
})

interface UserContextProviderProps {
  children: ReactNode
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [theme, setTheme] = useState<string>('light')
  const [sources, setSources] = useState<SourceFile | null>(null)
  const sourcesFile = require('../locales/sources.json')

  useEffect(() => {
    setSources(sourcesFile)
  }, [sourcesFile])

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    const storedTheme = window.localStorage.getItem('theme')

    storedTheme
      ? setTheme(storedTheme)
      : setTheme(prefersDarkMode ? 'dark' : 'light')
  }, [])

  return (
    <UserContext.Provider
      value={{
        theme,
        setTheme,
        sources
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  return useContext(UserContext)
}
