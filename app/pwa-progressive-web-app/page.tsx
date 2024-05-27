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
        <ul>
          <li>
            <a
              href="https://web.dev/explore/progressive-web-apps"
              target="_blank"
              rel="noopener"
            >
              Progressive Web Apps (web.dev)
            </a>
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"
              target="_blank"
              rel="noopener"
            >
              Progressive Web Apps (MDN Web Docs)
            </a>
          </li>
          <li>
            <a
              href="https://whatpwacando.today/"
              target="_blank"
              rel="noopener"
            >
              What PWA Can Do Today
            </a>
          </li>
          <li>
            <a
              href="https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/"
              target="_blank"
              rel="noopener"
            >
              Microsoft Learn
            </a>
          </li>
          <li>
            <a
              href="https://www.freecodecamp.org/news/what-are-progressive-web-apps/"
              target="_blank"
              rel="noopener"
            >
              FreeCodeCamp
            </a>
          </li>
        </ul>
      </article>
    </CheckLayout>
  )
}
