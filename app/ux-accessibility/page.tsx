import CheckLayout from '@/layouts/CheckLayout'
import { CATEGORIES } from '@/routes/categories'
import type { Metadata } from 'next'

const category = CATEGORIES['ux-accessibility']

export const metadata: Metadata = {
  title: category.title,
  description: category.description
}

export default function PageUxAccessibility() {
  return <CheckLayout category={category} />
}
