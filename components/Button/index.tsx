import Link from 'next/link'
import React from 'react'
import Style from './Button.module.css'

interface ButtonProps {
  type: 'link' | 'button'
  target?: 'internal' | 'external'
  onClick?: () => void
  href?: string
  icon?: JSX.Element
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  type,
  onClick,
  href,
  target,
  icon,
  children
}) => {
  if (type === 'link') {
    return (
      <Link
        href={href ?? '#'}
        className={Style.button}
        target={target == 'external' ? '_blank' : '_self'}
      >
        {icon ?? null}
        {children}
      </Link>
    )
  } else {
    return (
      <button className={Style.button} onClick={onClick}>
        {icon ?? null}
        {children}
      </button>
    )
  }
}

export default Button
