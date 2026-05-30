import type { Metadata, Viewport } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css'
import { UserContextProvider } from '../contexts/UserContext'
import Telemetry from './telemetry'

const inter = Work_Sans({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#8df6c5' },
    { media: '(prefers-color-scheme: dark)', color: '#8df6c5' }
  ],
  colorScheme: 'light dark'
}

export const metadata: Metadata = {
  metadataBase: new URL('https://checktest.dev'),
  title: {
    absolute: 'Checktest — Fix your Web Apps',
    default: 'Checktest',
    template: 'Check %s of Web Application — Checktest'
  },
  description: 'Open source tests for developers and software engineers.',
  keywords: [
    'web test',
    'seo',
    'performance',
    'accessibility',
    'security',
    'developer tools',
    'checktest'
  ],
  authors: [
    { name: 'Checktest', url: 'https://checktest.dev/' },
    { name: 'Lucas Maués', url: 'https://lucasmaues.com/' }
  ],
  creator: 'Checktest',
  publisher: 'Checktest',
  applicationName: 'Checktest',
  icons: {
    icon: [{ url: 'favicon.ico' }, { url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    other: [{ rel: 'mask-icon', url: '/icon-maskable.svg', color: '#8df6c5' }]
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Checktest'
  },
  formatDetection: { telephone: false, email: false, address: false },
  manifest: '/manifest.json',
  category: 'technology',
  robots: { index: true, follow: true, nocache: false },

  openGraph: {
    title: 'Checktest — Fix your Web Apps',
    description: 'Checktest is an open source testing tool for web apps.',
    type: 'website',
    siteName: 'Checktest',
    images: '/share.png'
  },
  twitter: {
    title: 'Checktest — Fix your Web Apps',
    description: 'Checktest is an open source testing tool for web apps.',
    site: '@checktestdev',
    creator: '@lucasmmau',
    card: 'summary_large_image',
    images: '/share.png'
  }
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
