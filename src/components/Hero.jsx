import { Link } from 'react-router-dom'
import styles from './Hero.module.css'
import { SERVICE_TAGLINE } from '../constants/org.js'

// DESIGN.md hero-banner. "의견 남기기" 버튼은 서비스 전체에서 여기에만 있다.
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <h1 className={styles.title}>{SERVICE_TAGLINE}</h1>
          <p className={styles.description}>
            주민이 남긴 이야기를 모아 확인하고 처리 과정을 알려드립니다. 접수 → 처리중 → 완료 순서로 진행 상황을 확인할 수 있어요.
          </p>
        </div>
        <Link to="/write" className={styles.cta}>
          의견 남기기
        </Link>
      </div>
    </section>
  )
}
