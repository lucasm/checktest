import Links from '@/components/Links'
import Button from '@/components/Button'
import Header from '@/components/Header'
import CookiesPopup from '@/components/CookiesPopup'
import AnimatedShapes from '@/components/SvgAnimatedShapes'
import Footer from '@/components/Footer'
import { IconCoffee, IconX } from '@/components/SvgIcons'

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
            <h2>What's community are saying</h2>

            <Button
              type="link"
              target="external"
              href="
            https://twitter.com/intent/tweet?text=Post%20%23CheckTestDev%20on%20X%20https%3A%2F%2Fchecktest.dev%2F%20%40lucasmenezes&source=checktest.dev"
            >
              <IconX />
              Post @CheckTestDev
            </Button>
          </div>
        </section>

        <section>
          <div className="container">
            <h2>Open source</h2>

            <p>
              Someday I wake up and decided to create CheckTest.dev to became a
              place to Developers easily test Web Apps, get reports from the
              leading testing services and learning resources from the
              community. Help keep this project active by donating!
            </p>

            <Button
              type="link"
              target="external"
              href="https://buymeacoffee.com/lucasm"
            >
              <IconCoffee />
              Buy Me a Coffee
            </Button>
          </div>
        </section>
      </main>

      <CookiesPopup />
      <Footer />
    </>
  )
}
