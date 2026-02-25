import Link from 'next/link'
import React, { JSX } from 'react'
import Style from './Button.module.css'

interface ButtonProps {
  type: 'link' | 'button'
  target?: 'internal' | 'external'
  onClick?: () => void
  href?: string
  icon?: JSX.Element
  children: React.ReactNode
  size?: 'small' | 'large'
}

const Button: React.FC<ButtonProps> = ({
  type,
  onClick,
  href,
  target,
  icon,
  size,
  children
}) => {
  const getSizeClass = () => {
    if (size === 'small') return Style.small
    if (size === 'large') return Style.large
    return ''
  }

  if (type === 'link') {
    return (
      <Link
        href={href ?? '#'}
        className={`${Style.button} ${getSizeClass()}`}
        target={target === 'external' ? '_blank' : '_self'}
      >
        {icon ?? null}
        {children}
      </Link>
    )
  } else {
    return (
      <button className={`${Style.button} ${getSizeClass()}`} onClick={onClick}>
        {icon ?? null}
        {children}
      </button>
    )
  }
}

export default Button
