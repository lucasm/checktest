import CheckLayout from '@/layouts/CheckLayout'
import { CATEGORIES } from '@/routes/categories'
import type { Metadata } from 'next'

const category = CATEGORIES['domain-info']

export const metadata: Metadata = {
  title: category.title,
  description: category.description
}

export default function PageDomainInfo() {
  return <CheckLayout category={category} />
}
