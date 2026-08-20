import styles from './Footer.module.css'
import { ORG_NAME, ORG_INTRO } from '../constants/org.js'

// DESIGN.md page-footer: 단체명 → 단체 한 줄 소개 순서
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.name}>{ORG_NAME}</p>
        <p className={styles.intro}>{ORG_INTRO}</p>
      </div>
    </footer>
  )
}
