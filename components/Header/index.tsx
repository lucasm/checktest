'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Style from './Header.module.css'
import Button from '../Button'
import ImageIcon from '../ImageIcon'

export default function Header() {
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

        <Link href="/" className={Style.logo}>
          <ImageIcon src={'check'} width={32} height={32} /> CheckTest
        </Link>
      </div>

      <div>
        <Button type="link" href="#start">
          Make a donation <ImageIcon src={'heart'} width={18} height={18} />
        </Button>

        <Button
          type="link"
          target="external"
          href="https://github.com/lucasm/checktest"
        >
          Star on GitHub <ImageIcon src={'star'} width={18} height={18} />
        </Button>
      </div>

      <nav className={isActive ? Style.nav + ' ' + Style.openNav : Style.nav}>
        <ul>
          <li>
            <Link href="/domain-info">Domain info</Link>
          </li>
          <li>
            <Link href="/#about" onClick={handleToggle}>
              About
            </Link>
          </li>
          <li>
            <Link href="/#work" onClick={handleToggle}>
              Work
            </Link>
          </li>
          <li>
            <Link href="/#contact" onClick={handleToggle}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div
        className={
          isActive ? Style.layer + ' ' + Style.layerActive : Style.layer
        }
        onClick={handleToggle}
      ></div>
    </header>
  )
}
