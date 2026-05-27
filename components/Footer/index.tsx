import Style from './Footer.module.css'
import Link from 'next/link'

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear()
  }

  return (
    <footer className={Style.footer}>
      <div className="container">
        <div className={Style.footerContainer}>
          <p>
            Open source project made by{' '}
            <Link
              href="https://lucasmaues.com/?utm_source=checktest.dev&utm_medium=footer&utm_campaign=checktest.dev"
              target="_blank"
              rel="noopener noreferrer
              "
            >
              Lucas Maués
            </Link>
          </p>

          <p>
            <Link href="/privacy">Privacy Policy</Link>
          </p>

          <p translate="no">
            {getYear()} &copy; <Link href="/">Checktest</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
