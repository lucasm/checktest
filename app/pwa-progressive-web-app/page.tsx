import ExternalLinks from '@/components/ExternalLinks'
import CheckLayout from '@/layouts/CheckLayout'
import { CATEGORIES } from '@/routes/categories'
import type { Metadata } from 'next'

const category = CATEGORIES['pwa-progressive-web-app']

export const metadata: Metadata = {
  title: category.title,
  description: category.description
}

export default function PagePwa() {
  return (
    <CheckLayout category={category}>
      <article>
        <h2>What is a Progressive Web App (PWA)?</h2>
        <p>
          A Progressive Web App (PWA) is a web application that uses modern web
          capabilities and latest APIs to provide a user experience similar to
          native mobile applications. PWAs are reliable, fast, and engaging.
          They can be installed on the user's device, and even work offline.
        </p>
        <p>
          Use our checker above and the reference links below to ensure your
          website meets the PWA requirements and provides the best user
          experience.
        </p>

        <h3>Resources</h3>

        <ExternalLinks
          links={[
            {
              url: 'https://web.dev/explore/progressive-web-apps',
              text: 'web.dev'
            },
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps',
              text: 'MDN Web Docs'
            },
            {
              url: 'https://whatpwacando.today/',
              text: 'What PWA Can Do Today'
            },
            {
              url: 'https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/',

              text: 'Microsoft Learn'
            },
            {
              url: 'https://www.freecodecamp.org/news/what-are-progressive-web-apps/',
              text: 'freeCodeCamp'
            }
          ]}
        />
      </article>
    </CheckLayout>
  )
}
