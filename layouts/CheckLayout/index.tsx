'use client'

import Header from '@/components/Header'
import InputUrl from '@/components/InputUrl'
import Style from './CheckLayout.module.css'
import { getIcon } from '@/components/Links'

export default function CheckLayout({
  children,
  title,
  description,
  category
}: {
  children: React.ReactNode
  title: string
  description: string
  category: string
}) {
  return (
    <>
      <Header />

      <div className={Style.layoutCheck}>
        <div>
          <figure>{getIcon(category)}</figure>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>

      <InputUrl category={category} />

      {children}
    </>
  )
}
