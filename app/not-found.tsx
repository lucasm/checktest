import Button from '@/components/Button'
import Header from '@/components/Header'

function NotFoundPage() {
  return (
    <>
      <Header />
      <main>
        <section className="container">
          <h1>Page not found</h1>
          <p>The page you are looking for does not exist.</p>
          <Button type="link" href="/">
            Go back to home
          </Button>
        </section>
      </main>
    </>
  )
}

export default NotFoundPage
