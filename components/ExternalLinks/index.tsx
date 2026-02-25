import Style from './ExternalLinks.module.css'
import Button from '../Button'
import { IconArrowUpRight } from '../SvgIcons'

interface Link {
  url: string
  text: string
}

export default function ExternalLinks({ links }: { links: Link[] }) {
  return (
    <ul className={Style.list}>
      {links.map((link, index) => (
        <li key={index}>
          <Button type="link" target="external" href={link.url} size="small">
            {link.text}
            <IconArrowUpRight />
          </Button>
        </li>
      ))}
    </ul>
  )
}
