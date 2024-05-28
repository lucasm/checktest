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
  stars: number
}

const UserContext = createContext<UserContextType>({
  theme: 'light',
  setTheme: () => {},
  sources: null,
  stars: 0
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

  //get github stars of repo https://api.github.com/repos/lucasm/checktest
  const [stars, setStars] = useState<number>(0)
  useEffect(() => {
    fetch('https://api.github.com/repos/lucasm/checktest')
      .then((response) => response.json())
      .then((data) => setStars(data.stargazers_count))
  }, [])

  return (
    <UserContext.Provider
      value={{
        theme,
        setTheme,
        sources,
        stars
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  return useContext(UserContext)
}
