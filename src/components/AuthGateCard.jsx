import { Link } from 'react-router-dom'
import styles from './AuthGateCard.module.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import GoogleAuthButton from './GoogleAuthButton.jsx'

export default function AuthGateCard({ title, description, switchText, switchLinkText, switchTo }) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.card}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
          <GoogleAuthButton />
          <p className={styles.switch}>
            {switchText} <Link to={switchTo} className={styles.switchLink}>{switchLinkText}</Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
