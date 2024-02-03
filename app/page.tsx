import Links from '@/components/Links'
import Button from '@/components/Button'
import Header from '@/components/Header'

export default function PageHome() {
  return (
    <>
      <Header />

      <main>
        <section>
          <h1>Test your web application in one place</h1>
          <p>Test your web app on many ways</p>

          <Button type="link" href="#start">
            Get started
          </Button>
        </section>

        <section>
          <div className="container">
            <h2>What test do you want to do?</h2>

            <Links />
          </div>
        </section>

        <section>
          <div className="container">
            <h2>What's people are saying </h2>
          </div>
        </section>
      </main>
    </>
  )
}
