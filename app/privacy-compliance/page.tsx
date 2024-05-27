import CheckLayout from '@/layouts/CheckLayout'
import { CATEGORIES } from '@/routes/categories'
import type { Metadata } from 'next'

const category = CATEGORIES['privacy-compliance']

export const metadata: Metadata = {
  title: category.title,
  description: category.description
}

export default function PagePrivacyCompliance() {
  return <CheckLayout category={category}></CheckLayout>
}
