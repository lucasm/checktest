import Link from 'next/link'
import Style from './Links.module.css'
import ImageIcon from '../ImageIcon'

interface ILinks {
  url: string
  icon: string
  color: string
  title: string
  active: boolean
}

const Links: ILinks[] = [
  {
    url: '/domain-info',
    icon: 'identification_card',
    color: '#d4f1ff',
    title: 'Domain information',
    active: true
  },
  {
    url: '/technologies',
    icon: 'laptop',
    color: '#ebeef3',
    title: 'Technologies',
    active: true
  },
  {
    url: '/security',
    icon: 'locked',
    color: '#fffdda',
    title: 'Security',
    active: true
  },
  {
    url: '/ux-accessibility',
    icon: 'rainbow',
    color: '#ffeff7',
    title: 'UX and accessibility',
    active: true
  },
  {
    url: '/performance',
    icon: 'rocket',
    color: '#ffefef',
    title: 'Performance',
    active: true
  },
  {
    url: '/seo-metadata',
    icon: 'magnifying_right',
    color: '#eae8ff',
    title: 'SEO and metadata',
    active: true
  },
  {
    url: '/market-analysis',
    icon: 'bar_chart',
    color: '#dbfdfa',
    title: 'Market analysis',
    active: true
  },
  {
    url: '/compliance',
    icon: 'scroll',
    color: '#fff0e7',
    title: 'Compliance',
    active: true
  },
  {
    url: '/carbon-footprint',
    icon: 'leaf_fluttering',
    color: '#dfffdd',
    title: 'Carbon footprint',
    active: true
  },
  {
    url: '/pwa',
    icon: 'mobile_phone',
    color: '#e8f2ff',
    title: 'PWA',
    active: true
  }
]

export default function ComponentLinks() {
  return (
    <div className={Style.icons} id="start">
      {Links?.filter((link) => link.active).map((link, index) => (
        <Link key={index} href={link.url} style={{ background: link.color }}>
          <ImageIcon src={link.icon} width={64} height={64} />
          <h2>{link.title}</h2>
        </Link>
      ))}
    </div>
  )
}
