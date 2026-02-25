import { JSX } from 'react'
import {
  ArrowGrow,
  IconAccessibility,
  IconAppsAddIn,
  IconArchive,
  IconArrowRepeat,
  IconBeaker,
  IconClock,
  IconCloud,
  IconCode,
  IconContactInfo,
  IconDoc,
  IconLeaf,
  IconLink,
  IconPhoneDesktop,
  IconRocket,
  IconSearchBox,
  IconShield,
  IconSparkle,
  IconTabDesktop
} from '../components/SvgIcons'

export type Category = {
  id: string
  title: string
  description: string
  icon: JSX.Element
}
export type Categories = {
  [key: string]: Category
}

export const CATEGORIES: Categories = {
  'domain-info': {
    id: 'domain-info',
    title: 'Domain Information',
    description: 'Check domain name information, ownership, and availability.',
    icon: IconContactInfo
  },
  security: {
    id: 'security',
    title: 'Security',
    description: 'Check website security issues and vulnerabilities reports.',
    icon: IconShield
  },
  performance: {
    id: 'performance',
    title: 'Performance',
    description:
      'Check website speed, load time, and performance optimization.',
    icon: IconRocket
  },
  'ux-accessibility': {
    id: 'ux-accessibility',
    title: 'UX & Accessibility',
    description:
      'Check web app heuristics of UX and accessibility, and best practices to improve them.',
    icon: IconAccessibility
  },
  'code-technology': {
    id: 'code-technology',
    title: 'Code & Technology',
    description: 'Check website technology stack and code validation.',
    icon: IconCode
  },
  'api-endpoint': {
    id: 'api-endpoint',
    title: 'API Endpoint',
    description:
      'Test APIs endpoints, availability, response time, and status codes.',
    icon: IconCloud
  },
  'seo-meta-tags': {
    id: 'seo-meta-tags',
    title: 'SEO & Meta Tags',
    description:
      'Check page meta tags, and visibility on search engines and social media.',
    icon: IconSearchBox
  },
  'market-analysis': {
    id: 'market-analysis',
    title: 'Market Analysis',
    description: 'Check website traffic, competitors, and market share.',
    icon: ArrowGrow
  },
  'privacy-compliance': {
    id: 'privacy-compliance',
    title: 'Privacy Compliance',
    description:
      'Check website privacy policy compliance with data regulations, like GDPR, CCPA, LGPD, and cookies consent.',
    icon: IconDoc
  },
  'carbon-footprint': {
    id: 'carbon-footprint',
    title: 'Carbon Footprint',
    description:
      'Check website estimated carbon footprint to plan reduce actions.',
    icon: IconLeaf
  },
  'pwa-progressive-web-app': {
    id: 'pwa-progressive-web-app',
    title: 'Progressive Web App',
    description:
      'Check if a website is a PWA, with a valid manifest file, service worker and more.',
    icon: IconPhoneDesktop
  },
  'status-uptime': {
    id: 'status-uptime',
    title: 'Status & Uptime',
    description:
      'Check website status, uptime, downtime, and response time worldwide.',
    icon: IconClock
  },
  'broken-links': {
    id: 'broken-links',
    title: 'Broken Links',
    description: 'Check broken links, dead links, and anchor text.',
    icon: IconLink
  },
  'ai-content-detection': {
    id: 'ai-content-detection',
    title: 'AI Content Detection',
    description:
      'Check for plagiarism, duplicate content, and content quality.',
    icon: IconSparkle
  },
  'url-redirect': {
    id: 'url-redirect',
    title: 'URL Redirect',
    description:
      'Check URL redirection, HTTP status codes, and canonical tags.',
    icon: IconArrowRepeat
  },
  'archive-versions': {
    id: 'archive-versions',
    title: 'Archive & Versions',
    description:
      'Check website archive versions, snapshots, and historical data.',
    icon: IconArchive
  },
  'unit-tests': {
    id: 'unit-tests',
    title: 'Unit Tests',
    description: 'Learn how to write unit tests for your web applications.',
    icon: IconBeaker
  },
  'integration-tests': {
    id: 'integration-tests',
    title: 'Integration Tests',
    description:
      'Learn how to write integration tests for your web applications.',
    icon: IconAppsAddIn
  },
  'end-to-end-tests': {
    id: 'end-to-end-tests',
    title: 'End-to-End Tests',
    description:
      'Learn how to execute end-to-end tests for your web applications.',
    icon: IconTabDesktop
  }
}
