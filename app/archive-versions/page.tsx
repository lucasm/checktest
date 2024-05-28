import ExternalLinks from '@/components/ExternalLinks'
import CheckLayout from '@/layouts/CheckLayout'
import { CATEGORIES } from '@/routes/categories'
import type { Metadata } from 'next'

const category = CATEGORIES['archive-versions']

export const metadata: Metadata = {
  title: category.title,
  description: category.description
}

export default function PageArchiveVersions() {
  return (
    <CheckLayout category={category}>
      <article>
        <h2>What is a Website Archive & Versions?</h2>

        <p>
          A website archive is a collection of historical versions of a website
          that are preserved for future reference. It allows you to see how a
          website looked and functioned at different points in time.
        </p>

        <p>
          Website archives are useful for historical research, digital
          preservation, and tracking changes to a website over time.{' '}
        </p>

        <p>Check above website archive versions and learn more below.</p>

        <h3>Resources</h3>

        <ExternalLinks
          links={[
            {
              url: 'https://archive.org/',
              text: 'Internet Archive'
            },
            {
              url: 'https://web.archive.org/',
              text: 'Wayback Machine'
            },
            {
              url: 'https://archive.is/',
              text: 'Archive.is'
            },
            {
              url: 'https://www.dpconline.org/',
              text: 'Digital Preservation Coalition'
            },
            {
              url: 'https://perma.cc/',
              text: 'Perma.cc'
            }
          ]}
        />
      </article>
    </CheckLayout>
  )
}
