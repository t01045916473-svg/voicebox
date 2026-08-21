import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { ORG_NAME, ORG_ICON } from '../constants/org.js'
import { useAuth } from '../context/AuthContext.jsx'

// DESIGN.md page-header: 아이콘 28px + 단체명, 구분선 없음
export default function Header() {
  const { user, profile, loading } = useAuth()

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          <img src={ORG_ICON} alt="" className={styles.icon} />
          <span className={styles.name}>{ORG_NAME}</span>
        </Link>

        {!loading &&
          (user ? (
            <Link to="/mypage" className={styles.avatarLink} aria-label="마이페이지">
              <img src={profile?.avatar_url || ORG_ICON} alt="" className={styles.avatar} />
            </Link>
          ) : (
            <nav className={styles.authNav}>
              <Link to="/login" className={styles.authButton}>
                로그인
              </Link>
              <Link to="/signup" className={styles.authButton}>
                회원가입
              </Link>
            </nav>
          ))}
      </div>
    </header>
  )
}
