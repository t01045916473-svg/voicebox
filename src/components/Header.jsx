import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { ORG_NAME, ORG_ICON } from '../constants/org.js'

// DESIGN.md page-header: 아이콘 28px + 단체명, 구분선 없음
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          <img src={ORG_ICON} alt="" className={styles.icon} />
          <span className={styles.name}>{ORG_NAME}</span>
        </Link>
      </div>
    </header>
  )
}
