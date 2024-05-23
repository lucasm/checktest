import Links from '@/components/Links'
import Button from '@/components/Button'
import Header from '@/components/Header'

export default function PageHome() {
  return (
    <>
      <Header />

      <main>
        <section>
          <div className="container home">
            <h1>A place to test web sites & apps</h1>
            <p>Get reports from the top test checking services.</p>

            <Button type="link" href="#start">
              Get started
            </Button>
          </div>
        </section>

        <section id="start">
          <div className="container">
            <h2>Most popular tests</h2>

            <Links />
          </div>
        </section>

        <section>
          <div className="container">
            <h2>What's people are saying</h2>

            <Button type="link" href="#">
              Post #CheckTestDev on X
            </Button>
          </div>
        </section>
      </main>
    </>
  )
}
