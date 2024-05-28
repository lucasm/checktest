import ExternalLinks from '@/components/ExternalLinks'
import CheckLayout from '@/layouts/CheckLayout'
import { CATEGORIES } from '@/routes/categories'
import type { Metadata } from 'next'

const category = CATEGORIES['performance']

export const metadata: Metadata = {
  title: category.title,
  description: category.description
}

export default function PagePerformance() {
  return (
    <CheckLayout category={category}>
      <article>
        <h2>What is Web Performance? </h2>

        <p>
          Web performance is the speed in which web pages are downloaded and
          displayed on the user's web browser. Faster website speeds have been
          shown to increase sales or visitor engagement. The average user has no
          patience for a page that takes too long to load. Website performance
          optimization, the science of speeding up a website, involves a
          combination of front-end and back-end optimizations.{' '}
        </p>

        <p>Check website performance above and see reference below </p>

        <h3>Resources</h3>

        <ExternalLinks
          links={[
            {
              text: 'Why does speed matter? (web.dev)',
              url: 'https://web.dev/learn/performance/why-speed-matters'
            },
            {
              text: 'Web performance (MDN Web Docs)',
              url: 'https://developer.mozilla.org/pt-BR/docs/Web/Performance'
            },
            {
              text: 'How to speed up websites (Cloudflare)',
              url: 'https://www.cloudflare.com/learning/performance/speed-up-a-website/'
            }
          ]}
        />
      </article>
    </CheckLayout>
  )
}
