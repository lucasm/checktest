import CheckLayout from '@/layouts/CheckLayout'
import type { Metadata } from 'next'

const title = 'Domain info'
const description =
  'Check domain availability, WHOIS ownership, DNS records and IP address.'

export const metadata: Metadata = {
  title: title + ' - CheckTest',
  description: description
}

export default function PageDomainInfo() {
  return (
    <CheckLayout title={title} description={description} category="domain-info">
      <section></section>
    </CheckLayout>
  )
}
