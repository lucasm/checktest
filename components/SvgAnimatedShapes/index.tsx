import React from 'react'
import styles from './SvgAnimatedShapes.module.css'

const SvgAnimatedShapes = () => {
  return (
    <div className={styles.container}>
      <svg className={styles.svg} viewBox="0 0 600 300">
        <rect className={styles.rectangle} />
        <rect className={styles.logo} />
        <rect className={styles.content} />
        <polygon className={styles.triangle} points="300,140 280,180 320,180" />
        <circle className={styles.circle} cx="300" cy="160" r="20" />
      </svg>
    </div>
  )
}

export default SvgAnimatedShapes
