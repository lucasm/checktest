'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Style from './Header.module.css'
import Button from '../Button'
import ImageIcon from '../ImageIcon'
import { IconCoffee, IconGitHub, IconHome, IconX } from '../SvgIcons'
import { CATEGORIES } from '@/routes/categories'
import { useUser } from '@/contexts/UserContext'

export default function Header() {
  const { stars } = useUser()
  const [isActive, setActive] = useState<boolean>(false)

  useEffect(() => {
    isActive
      ? document.body.classList.add(Style.removeScroll)
      : document.body.classList.remove(Style.removeScroll)
  }, [isActive])

  const handleToggle = () => {
    setActive(!isActive)
  }

  return (
    <header className={Style.header}>
      <div>
        <button
          onClick={handleToggle}
          className={
            isActive
              ? Style.buttonMenu + ' ' + Style.openMenu
              : Style.buttonMenu
          }
          aria-label={isActive ? 'Close menu' : 'Open menu'}
          aria-expanded={isActive ? true : false}
        >
          Menu <div className={Style.hamburger}></div>
        </button>

        <Link href="/" className={Style.logo} translate="no">
          {/* <ImageIcon src={'check'} width={32} height={32} /> */}
          CheckTest
        </Link>
      </div>

      <div className={Style.headerButtons}>
        <Button
          type="link"
          target="external"
          href="https://github.com/lucasm/checktest"
        >
          <IconGitHub /> {stars}
        </Button>

        <Button type="link" target="external" href="https://x.com/checktestdev">
          <IconX /> Follow
        </Button>

        <Button
          type="link"
          target="external"
          href="https://buymeacoffee.com/lucasm"
        >
          <IconCoffee />
          Buy Me a Coffee
        </Button>
      </div>

      {isActive && (
        <nav className={isActive ? Style.nav + ' ' + Style.openNav : Style.nav}>
          <ul>
            <li>
              <Link href="/" onClick={handleToggle}>
                <figure className="icon">{IconHome}</figure>
                Home
              </Link>
            </li>

            {Object.keys(CATEGORIES).map((key) => {
              const { id, title, icon } = CATEGORIES[key]
              return (
                <li key={id}>
                  <Link href={id} onClick={handleToggle}>
                    <figure className="icon">{icon}</figure>
                    {title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      )}

      {isActive && (
        <div
          className={
            isActive ? Style.layer + ' ' + Style.layerActive : Style.layer
          }
          onClick={handleToggle}
        ></div>
      )}
    </header>
  )
}
