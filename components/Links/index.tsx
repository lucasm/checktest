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
      <h2>Most popular tests</h2>

      {activeCategoryDetails?.map((category, index) => (
        <Link key={index} href={category.id}>
          {category.icon}
          <h3>{category.title}</h3>
        </Link>
      ))}
    </div>
  )
}

export default ComponentLinks
