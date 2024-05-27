'use client'

import { useEffect, useState } from 'react'
import styles from './CookiesPopup.module.css'

const CookiesPopup = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [isAccepted, setIsAccepted] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cookiesAccepted')
      return saved ? JSON.parse(saved) : false
    } else {
      return false
    }
  })

  useEffect(() => {
    if (!isAccepted) {
      setIsVisible(true)
    }
  }, [isAccepted])

  const handleAccept = () => {
    setIsAccepted(true)
    setIsVisible(false)
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookiesAccepted', JSON.stringify(true))
    }
  }

  return (
    <div
      className={`${styles.cookiesPopup} ${
        isVisible ? styles.slideUp : styles.slideDown
      }`}
    >
      <p>We use Cookies to ensure the best experience!</p>
      <button onClick={handleAccept}>Ok</button>
    </div>
  )
}

export default CookiesPopup
