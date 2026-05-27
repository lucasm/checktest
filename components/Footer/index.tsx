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
            Copyright &copy; {getYear()}{' '}
            <Link href="/" translate="no">
              Checktest
            </Link>{' '}
            made by{' '}
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
            <Link
              href="https://lucasmaues.com/legal"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy & Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
