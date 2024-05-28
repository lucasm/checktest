import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function PagesLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <div className="container-"> {children}</div>
      <Footer />
    </>
  )
}
