'use client'

import Link from 'next/link'
import Style from './Links.module.css'
import { useUser } from '@/contexts/UserContext'
import { CATEGORIES } from '@/routes/categories'

const ComponentLinks = () => {
  const { sources } = useUser()

  // Ativos
  const activeCategories = sources?.categories?.filter(
    (category) => category.active
  )
  // Mapeia os IDs das categorias ativas para os dados correspondentes na constante CATEGORIES
  const activeCategoryDetails = activeCategories?.map(
    (category) => CATEGORIES[category.url]
  )

  return (
    <div className={Style.links}>
      {activeCategoryDetails?.map((category, index) => (
        <Link key={index} href={category.id}>
          {category.icon}
          <h2>{category.title}</h2>
        </Link>
      ))}
    </div>
  )
}

export default ComponentLinks
