import Links from '@/components/Links'
import Button from '@/components/Button'
import Header from '@/components/Header'
import CookiesPopup from '@/components/CookiesPopup'
import AnimatedShapes from '@/components/SvgAnimatedShapes'

export default function PageHome() {
  return (
    <>
      <Header />

      <main>
        <div className="home">
          <div className="box">
            <h1>Web testing made easy</h1>
            <p>
              Get reports from testing services, tools and learning resources.
            </p>

            <Button type="link" href="#start">
              Start testing
            </Button>
          </div>

          <div className="box">
            <AnimatedShapes />
          </div>
        </div>

        <section id="start">
          <h2>Most popular tests</h2>

          <Links />
        </section>

        <section>
          <div className="container">
            <h2>What's people are saying</h2>

            <Button
              type="link"
              target="external"
              href="
            https://twitter.com/intent/tweet?text=Post%20%23CheckTestDev%20on%20X%20https%3A%2F%2Fchecktest.dev%2F%20%40lucasmenezes&source=checktest.dev"
            >
              Post #CheckTestDev on X
            </Button>
          </div>
        </section>

        <section>
          <div className="container">
            <h2>Open source</h2>

            <p>
              Someday I thought, why don't we developers have a single place to
              test our production web applications? So, I decided to create
              CheckTest.dev, a place where you can easily test your web
              applications and get reports from the leading testing services.
              CheckTest.dev is fully open source. Help keep this project active
              by donating. —{' '}
              <a
                href="https://lucasm.dev?utm_source=checktest.dev&utm_medium=footer&utm_campaign=checktest.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lucas Menezes
              </a>
            </p>

            <Button
              type="link"
              target="external"
              href="https://buymeacoffee.com/lucasm"
            >
              Buy me a coffee
            </Button>
          </div>
        </section>
      </main>

      <CookiesPopup />
    </>
  )
}
