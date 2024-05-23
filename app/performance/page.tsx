import CheckLayout from '@/layouts/CheckLayout'
import type { Metadata } from 'next'

const title = 'Performance'
const description =
  'Check website load time, performance issues, and get page speed optimization suggestions.'

export const metadata: Metadata = {
  title: title + ' - CheckTest',
  description: description
}

export default function PagePerformance() {
  return (
    <CheckLayout title={title} description={description} category="performance">
      <section></section>
    </CheckLayout>
  )
}
