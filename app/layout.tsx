import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css'
import { UserContextProvider } from '../contexts/UserContext'

const inter = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CheckTest',
  description: 'Open source tool to audit URLs and get reports'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserContextProvider>{children}</UserContextProvider>
      </body>
    </html>
  )
}
