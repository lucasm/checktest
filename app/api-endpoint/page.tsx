import CheckLayout from '@/layouts/CheckLayout'
import { CATEGORIES } from '@/routes/categories'
import type { Metadata } from 'next'

const category = CATEGORIES['api-endpoint']

export const metadata: Metadata = {
  title: category.title,
  description: category.description
}

export default function PageApiEndpoint() {
  return <CheckLayout category={category}></CheckLayout>
}
