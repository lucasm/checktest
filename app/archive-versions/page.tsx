import CheckLayout from '@/layouts/CheckLayout'
import { CATEGORIES } from '@/routes/categories'
import type { Metadata } from 'next'

const category = CATEGORIES['archive-versions']

export const metadata: Metadata = {
  title: category.title,
  description: category.description
}

export default function PageArchiveVersions() {
  return <CheckLayout category={category} />
}
