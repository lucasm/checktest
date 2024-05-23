import CheckLayout from '@/layouts/CheckLayout'
import type { Metadata } from 'next'

const title = 'Carbon Footprint'
const description =
  'Check and calculate the carbon footprint of a website, and get suggestions to reduce it.'

export const metadata: Metadata = {
  title: title + ' - CheckTest',
  description: description
}

export default function PageDomainInfo() {
  return (
    <CheckLayout
      title={title}
      description={description}
      category="carbon-footprint"
    >
      <section></section>
    </CheckLayout>
  )
}
