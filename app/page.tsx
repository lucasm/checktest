import Links from '@/components/Links'
import Button from '@/components/Button'
import Header from '@/components/Header'
import CookiesPopup from '@/components/CookiesPopup'
import AnimatedShapes from '@/components/SvgAnimatedShapes'
import Footer from '@/components/Footer'
import { IconCoffee, IconGitHubSponsors, IconX } from '@/components/SvgIcons'

export default function PageHome() {
  return (
    <>
      <Header />

      <main>
        <div className="home">
          <div className="box">
            <h1>Easily test your Web Apps</h1>
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
            https://twitter.com/intent/tweet?text=Hey%20friends!%20I%20loved%20how%20%40CheckTestDev%20can%20easily%20test%20web%20apps.%20I%20recommend!%20%23Checktest"
            >
              <IconX />
              Post #Checktest
            </Button>
          </div>
        </section>

        <section>
          <div className="container">
            <h2>Testing shouldn't be a hurdle</h2>

            <p>
              Checktest started with a simple goal: to make web testing
              accessible to all types of developers. From detailed reports
              services to learning resources, everything is built with precision
              to help you level up. Your sponsorship is what keeps the lights on
              and the features rolling. If you value what we’re building, I’d be
              honored to have your support. — Lucas Maués
            </p>

            <Button
              type="link"
              target="external"
              href="https://github.com/sponsors/lucasm"
            >
              <IconGitHubSponsors /> Sponsor Checktest
            </Button>
          </div>
        </section>
      </main>

      <CookiesPopup />
      <Footer />
    </>
  )
}
