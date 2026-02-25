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
        <h2>Why User Experience (UX) and Web Accessibility matter?</h2>

        <p>
          User Experience (UX) and web accessibility are important because they
          help create a positive experience for users. By making websites
          accessible to all users, you can increase your audience, sales
          conversion, brand feels and improve the overall user experience.
        </p>

        <p>
          UX focuses on how users interact with a website, while accessibility
          ensures that all users, including those with disabilities, can access
          and use the website effectively. Both are crucial for creating
          inclusive and user-friendly web applications.
        </p>

        <h3>Resources:</h3>

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
