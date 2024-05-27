import CheckLayout from '@/layouts/CheckLayout'
import { CATEGORIES } from '@/routes/categories'
import type { Metadata } from 'next'

const category = CATEGORIES['code-technology']

export const metadata: Metadata = {
  title: category.title,
  description: category.description
}

export default function PageCodeTechnology() {
  return <CheckLayout category={category} />
}
