import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css'
import { UserContextProvider } from '../contexts/UserContext'
import Telemetry from './telemetry'

const inter = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    absolute: 'CheckTest',
    default: 'CheckTest',
    template: '%s | CheckTest'
  },
  description: 'Open source tests for developers and software engineers.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserContextProvider>
          {children}
          <Telemetry />
        </UserContextProvider>
      </body>
    </html>
  )
}
