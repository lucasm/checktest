import CheckLayout from '@/layouts/CheckLayout'
import { CATEGORIES } from '@/routes/categories'
import type { Metadata } from 'next'

const category = CATEGORIES['carbon-footprint']

export const metadata: Metadata = {
  title: category.title,
  description: category.description
}

export default function PageCarbonFootprint() {
  return (
    <CheckLayout category={category}>
      <article>
        <h1>How Carbon Footprint affects the Web?</h1>

        <p>
          The carbon footprint of the web is the total amount of greenhouse
          gases produced by the digital infrastructure that supports the
          internet. It includes the energy consumption of data centers,
          networks, and end-user devices.
        </p>

        <h2>What is Carbon Footprint?</h2>
        <p>
          Carbon footprint is the total amount of greenhouse gases produced
          directly and indirectly to support human activities, usually expressed
          in equivalent tons of carbon dioxide (CO2).
        </p>

        <h2>Why is it important?</h2>

        <p>
          The carbon footprint is a measure of the impact of human activities on
          the environment. It helps to understand the contribution of each
          activity to global warming and climate change.
        </p>

        <h2>How to reduce it?</h2>

        <p>
          There are many ways to reduce your carbon footprint, such as reducing
          energy consumption, using renewable energy sources, and choosing
          sustainable products and transportation.
        </p>

        <h3>Resources</h3>

        <ul>
          <li>
            <a
              href="https://www.epa.gov/carbon-footprint-calculator/"
              target="_blank"
              rel="noopener"
            >
              Carbon Footprint Calculator (EPA)
            </a>
          </li>
          <li>
            <a
              href="https://www.carbonfootprint.com/"
              target="_blank"
              rel="noopener"
            >
              CarbonFootprint.com
            </a>
          </li>
          <li>
            <a
              href="https://www.nature.org/en-us/get-involved/how-to-help/carbon-footprint-calculator/"
              target="_blank"
              rel="noopener"
            >
              Carbon Footprint Calculator (The Nature Conservancy)
            </a>
          </li>
        </ul>
      </article>
    </CheckLayout>
  )
}
