import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InputUrl from '@/components/InputUrl'
import Style from './CheckLayout.module.css'
import { Category } from '@/routes/categories'
import Button from '@/components/Button'

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
          <div className="container">
            {children ?? (
              <p>
                Contibute to this page on{' '}
                <Button
                  type="link"
                  size="small"
                  target="external"
                  href={
                    'https://github.com/lucasm/checktest/tree/main/app/' +
                    category.id
                  }
                >
                  GitHub
                </Button>
              </p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
