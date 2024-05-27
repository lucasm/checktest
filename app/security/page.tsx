import CheckLayout from '@/layouts/CheckLayout'
import { CATEGORIES } from '@/routes/categories'
import type { Metadata } from 'next'

const category = CATEGORIES['security']

export const metadata: Metadata = {
  title: category.title,
  description: category.description
}

export default function PageSecurity() {
  return <CheckLayout category={category} />
}
