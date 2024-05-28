import ExternalLinks from '@/components/ExternalLinks'
import CheckLayout from '@/layouts/CheckLayout'
import { CATEGORIES } from '@/routes/categories'
import type { Metadata } from 'next'

const category = CATEGORIES['security']

export const metadata: Metadata = {
  title: category.title,
  description: category.description
}

export default function PageSecurity() {
  return (
    <CheckLayout category={category}>
      <article>
        <h2>What is Web Security?</h2>

        <p>
          Security is the practice of defending digital information from
          unauthorized access, use, disclosure, disruption, modification,
          perusal, inspection, recording or destruction.
        </p>

        <p>
          Security is a critical aspect of any website, application, or digital
          service. It is essential to protect sensitive information, prevent
          data breaches, and ensure the privacy and safety of users.
        </p>

        <p>Check your website security above.</p>

        <h3>Resources</h3>

        <ExternalLinks
          links={[
            {
              url: 'https://www.owasp.org/',
              text: 'OWASP - Open Web Application Security Project'
            },
            {
              url: 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Website_security',
              text: 'Website Security (MDN Web Docs)'
            }
          ]}
        />
      </article>
    </CheckLayout>
  )
}
