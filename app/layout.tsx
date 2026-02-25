import type { Metadata, Viewport } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css'
import { UserContextProvider } from '../contexts/UserContext'
import Telemetry from './telemetry'

const inter = Work_Sans({ subsets: ['latin'] })

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://checktest.app'

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
  metadataBase: new URL(baseUrl),
  title: {
    absolute: 'Checktest',
    default: 'Checktest',
    template: '%s — Checktest'
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
  authors: [{ name: 'Checktest', url: baseUrl }],
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
    type: 'website',
    url: baseUrl,
    siteName: 'Checktest',
    title: 'Checktest',
    description: 'Open source tests for developers and software engineers.',
    images: [
      {
        url: `${baseUrl}/share.png`,
        width: 1200,
        height: 630,
        alt: 'Checktest - open source tests for developers',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Checktest',
    description: 'Open source tests for developers and software engineers.',
    images: [`${baseUrl}/share.png`]
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
