import ExternalLinks from '@/components/ExternalLinks'
import CheckLayout from '@/layouts/CheckLayout'
import { CATEGORIES } from '@/routes/categories'
import type { Metadata } from 'next'

const category = CATEGORIES['domain-info']

export const metadata: Metadata = {
  title: category.title,
  description: category.description
}

export default function PageDomainInfo() {
  return (
    <CheckLayout category={category}>
      <article>
        <h2> What is a Web Domain?</h2>
        <p>
          A domain is a human-readable name that represents an IP address on the
          internet. It is used to identify websites and resources on the web.
          For example, the domain name "checktest.dev" represents the IP address
          "76.76.21.21".
        </p>

        <p>
          Domains are organized in a hierarchical structure, with the top-level
          domain (TLD) at the end of the domain name. The TLD can be generic
          (.com, .org, .net) or country-specific (.us, .fr, .br).
        </p>

        <p>
          Domain names are registered with registrars, which assign them to
          individuals or organizations for a fee. Once registered, the domain
          name can be used to host a website, create custom email addresses, and
          more.
        </p>

        <p>Check above domain name information.</p>

        <h3>Resources</h3>

        <ExternalLinks
          links={[
            {
              url: 'https://www.icann.org/en/beginners',
              text: 'ICANN - Internet Corporation'
            },
            {
              url: 'https://www.godaddy.com/',
              text: 'GoDaddy'
            },
            {
              url: 'https://www.cloudflare.com/products/registrar/',
              text: 'Cloudflare'
            },
            {
              url: 'https://www.namecheap.com/',
              text: 'Namecheap'
            }
          ]}
        />
      </article>
    </CheckLayout>
  )
}
