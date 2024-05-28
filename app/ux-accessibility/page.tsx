import ExternalLinks from '@/components/ExternalLinks'
import CheckLayout from '@/layouts/CheckLayout'
import { CATEGORIES } from '@/routes/categories'
import type { Metadata } from 'next'

const category = CATEGORIES['ux-accessibility']

export const metadata: Metadata = {
  title: category.title,
  description: category.description
}

export default function PageUxAccessibility() {
  return (
    <CheckLayout category={category}>
      <article>
        <h2>What is UX and Web Accessibility?</h2>

        <p>
          UX stands for User Experience, which is the overall experience a user
          has when interacting with a product or service. Web accessibility is
          the practice of making websites usable by all people with abilities or
          disabilities.
        </p>

        <p>
          UX and web accessibility are important because they help create a
          positive experience for users. By making websites accessible to all
          users, you can increase your audience, sales conversion, brand feels
          and improve the overall user experience.
        </p>

        <h3>Resources</h3>

        <ExternalLinks
          links={[
            {
              text: 'Laws of UX',
              url: 'https://lawsofux.com/'
            },
            {
              text: 'Web Accessibility Initiative (WAI)',
              url: 'https://www.w3.org/WAI/'
            },
            {
              text: 'Web Content Accessibility Guidelines (WCAG)',
              url: 'https://www.w3.org/WAI/standards-guidelines/wcag/'
            },
            {
              text: 'UX Association (UXPA)',
              url: 'https://uxpa.org/'
            },
            {
              text: 'Nielsen Norman Group',
              url: 'https://www.nngroup.com/'
            },
            {
              text: 'A11Y Project',
              url: 'https://www.a11yproject.com/'
            },
            {
              text: 'UX Collective',
              url: 'https://uxdesign.cc/'
            },
            {
              text: 'WebAIM',
              url: 'https://webaim.org/'
            },
            {
              text: 'Web Accessibility Tools List (W3C)',
              url: 'https://www.w3.org/WAI/ER/tools/'
            }
          ]}
        />
      </article>
    </CheckLayout>
  )
}
