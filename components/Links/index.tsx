'use client'

import Link from 'next/link'
import Style from './Links.module.css'
import { useUser } from '@/contexts/UserContext'
import {
  ArrowGrow,
  IconAccessibility,
  IconArchive,
  IconArrowRepeat,
  IconCheck,
  IconCode,
  IconContactInfo,
  IconDoc,
  IconLeaf,
  IconLink,
  IconPhoneDesktop,
  IconRocket,
  IconSearchBox,
  IconShield,
  IconSparkle
} from '../SvgIcons'

// const Links: ILinks[] = [
//   {
//     url: '/domain-info',
//     image: <IconContactInfo />,
//     color: '#d4f1ff',
//     title: 'Domain info',
//     active: true
//   },
//   {
//     url: '/security',
//     image: <IconShield />,
//     color: '#fffdda',
//     title: 'Security',
//     active: true
//   },
//   {
//     url: '/performance',
//     image: <IconRocket />,
//     color: '#ffefef',
//     title: 'Performance',
//     active: true
//   },
//   {
//     url: '/ux-accessibility',
//     image: <IconAccessibility />,
//     color: '#ffeff7',
//     title: 'UX and accessibility',
//     active: true
//   },
//   {
//     url: '/technologies',
//     image: <IconCode />,
//     color: '#ebeef3',
//     title: 'Technology stack',
//     active: true
//   },
//   {
//     url: '/seo',
//     image: <IconSearchBox />,
//     color: '#eae8ff',
//     title: 'SEO',
//     active: true
//   },
//   {
//     url: '/market-analysis',
//     image: <ArrowGrow />,
//     color: '#dbfdfa',
//     title: 'Traffic and market share',
//     active: true
//   },
//   {
//     url: '/compliance',
//     image: <IconDoc />,
//     color: '#fff0e7',
//     title: 'Privacy compliance',
//     active: true
//   },
//   {
//     url: '/carbon-footprint',
//     image: <IconLeaf />,
//     color: '#dfffdd',
//     title: 'Carbon footprint',
//     active: true
//   },
//   {
//     url: '/pwa',
//     image: <IconPhoneDesktop />,
//     color: '#e8f2ff',
//     title: 'PWA',
//     active: true
//   },
//   {
//     url: '/status-uptime',
//     image: <IconCheck />,
//     color: '#e8f2ff',
//     title: 'Availability status',
//     active: true
//   },
//   {
//     url: '/broken-links',
//     image: <IconLink />,
//     color: '#e8f2ff',
//     title: 'Broken links',
//     active: true
//   },
//   {
//     url: '/ai-content-detection',
//     image: <IconSparkle />,
//     title: 'AI-generated content',
//     active: true
//   },
//   {
//     url: '/url-redirect',
//     image: <IconArrowRepeat />,
//     title: 'URL redirects',
//     active: true
//   },
//   {
//     url: '/archive-old-versions',
//     image: <IconArchive />,
//     title: 'Archive',
//     active: true
//   }
// ]

export const getIcon = (url: string) => {
  switch (url) {
    case 'domain-info':
      return <IconContactInfo />
    case 'security':
      return <IconShield />
    case 'performance':
      return <IconRocket />
    case 'ux-accessibility':
      return <IconAccessibility />
    case 'technology':
      return <IconCode />
    case 'seo':
      return <IconSearchBox />
    case 'market-analysis':
      return <ArrowGrow />
    case 'compliance':
      return <IconDoc />
    case 'carbon-footprint':
      return <IconLeaf />
    case 'pwa-progressive-web-app':
      return <IconPhoneDesktop />
    case 'status-uptime':
      return <IconCheck />
    case 'broken-links':
      return <IconLink />
    case 'ai-content-detection':
      return <IconSparkle />
    case 'url-redirect':
      return <IconArrowRepeat />
    case 'archive-versions':
      return <IconArchive />
    default:
      return <IconCheck />
  }

  // const updatedCategories = sources?.categories?.map((category) => ({
  //   ...category,
  //   image: findIcon(category.url),
  // }));

  // setSources((prevSources) => ({
  //   ...prevSources,
  //   categories: updatedCategories,
  // }));

  // return null;
}

const ComponentLinks = () => {
  const { sources } = useUser()

  return (
    <div className={Style.icons}>
      {sources?.categories
        ?.filter((source) => source.active)
        .map((link, index) => (
          <Link key={index} href={link.url}>
            {getIcon(link.url)}
            <h2>{link.title}</h2>
          </Link>
        ))}
    </div>
  )
}

export default ComponentLinks
