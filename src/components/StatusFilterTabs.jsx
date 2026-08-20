import styles from './StatusFilterTabs.module.css'
import { STATUS_OPTIONS } from '../data/mockPosts.js'

// DESIGN.md tab-filter: 4개 고정 pill, 라디오형 단일 선택
export default function StatusFilterTabs({ value, onChange }) {
  return (
    <div className={styles.tabs}>
      {STATUS_OPTIONS.map((status) => (
        <button
          key={status}
          type="button"
          className={`${styles.tab} ${value === status ? styles.active : ''}`}
          onClick={() => onChange(status)}
          aria-pressed={value === status}
        >
          {status}
        </button>
      ))}
    </div>
  )
}
