import styles from './StatusBadge.module.css'

// DESIGN.md: 접수·처리중은 secondary-container, 완료는 primary-container.
// size="sm" → badge-status-sm (카드 안), size="default" → badge-status (카드 밖)
export default function StatusBadge({ status, size = 'default' }) {
  const isDone = status === '완료'
  const sizeClass = size === 'sm' ? styles.sm : styles.default
  const colorClass = isDone ? styles.done : styles.progress

  return <span className={`${styles.badge} ${sizeClass} ${colorClass}`}>{status}</span>
}
