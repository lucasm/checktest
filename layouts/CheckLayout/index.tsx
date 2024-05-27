import Header from '@/components/Header'
import InputUrl from '@/components/InputUrl'
import Style from './CheckLayout.module.css'
import { Category } from '@/routes/categories'

interface PropsCheckLayout {
  category: Category
  children?: React.ReactNode
}

export default function CheckLayout({ category, children }: PropsCheckLayout) {
  return (
    <>
      <Header />
      <InputUrl category={category} />

      <div className={Style.layoutCheck}>
        <div className={Style.layoutCheckHeader}>
          <div className="container">{children}</div>
        </div>
      </div>
    </>
  )
}
