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
            <h1>Fix vibe coded Web Apps</h1>
            <p>
              Get reports, tools and learning resources from popular services.
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
            <h2>What's community are saying?</h2>

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
            <h2>Web apps testing, simplified!</h2>

            <p>
              Checktest makes web testing accessible for every developer —
              especially beginners and vibe-coders. Get detailed reports, tools,
              and resources to level up your project. As an open-source tool,
              your sponsorship keeps the features rolling. If Checktest helps
              you, I’d be honored to have your support. — Lucas Maués
            </p>

            <Button
              type="link"
              target="external"
              href="https://github.com/sponsors/lucasm"
            >
              <IconGitHubSponsors /> Sponsor #Checktest
            </Button>
          </div>
        </section>
      </main>

      <CookiesPopup />
      <Footer />
    </>
  )
}
