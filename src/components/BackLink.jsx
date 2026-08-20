import { Link } from 'react-router-dom'
import styles from './BackLink.module.css'

// DESIGN.md button-secondary를 뒤로가기 용도로 재사용
export default function BackLink({ to = '/', children = '목록으로' }) {
  return (
    <Link to={to} className={styles.link}>
      ← {children}
    </Link>
  )
}
