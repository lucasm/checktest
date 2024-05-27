import CheckLayout from '@/layouts/CheckLayout'
import { CATEGORIES } from '@/routes/categories'
import type { Metadata } from 'next'

const category = CATEGORIES['seo-meta-tags']

export const metadata: Metadata = {
  title: category.title,
  description: category.description
}

export default function PageSeoMetaTags() {
  return <CheckLayout category={category}></CheckLayout>
}
