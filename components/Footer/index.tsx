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
            {' '}
            {getYear()} &copy; <Link href="/">CheckTest</Link>.dev
          </p>
          <p>
            Made by{' '}
            <Link
              href="https://lucasm.dev/?utm_source=checktest.dev&utm_medium=footer&utm_campaign=checktest.dev"
              target="_blank"
              rel="noopener noreferrer
              "
            >
              Lucas Menezes
            </Link>
          </p>
          <p>
            <Link href="/privacy">Privacy</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
