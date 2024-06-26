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
            <h1>Easily Test Your Web Apps</h1>
            <p>
              Get reports from testing services, tools and learning resources.
            </p>

            <Button type="link" href="#start">
              Get started
            </Button>
          </div>

          <div className="box">
            <AnimatedShapes />
          </div>
        </div>

        <div id="start">
          <Links />
        </div>

        <section>
          <div className="container">
            <h2>What's community are saying</h2>

            <Button
              type="link"
              target="external"
              href="
            https://twitter.com/intent/tweet?text=Hey%20friends!%20I%20loved%20how%20%40CheckTestDev%20can%20easily%20test%20web%20apps.%20I%20recommend!%20%23CheckTest"
            >
              <IconX />
              Post #CheckTest
            </Button>
          </div>
        </section>

        <section>
          <div className="container">
            <h2>Open source</h2>

            <p>
              Someday I woke up and decided to create CheckTest to become a
              place for all Developers test Web Applications easily, get reports
              from testing services, and access learning resources. Help keep
              this project active by donating! — Lucas
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
