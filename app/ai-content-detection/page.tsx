import CheckLayout from '@/layouts/CheckLayout'
import { CATEGORIES } from '@/routes/categories'
import type { Metadata } from 'next'

const category = CATEGORIES['ai-content-detection']

export const metadata: Metadata = {
  title: category.title,
  description: category.description
}

export default function PageAiContentDetection() {
  return <CheckLayout category={category}></CheckLayout>
}
