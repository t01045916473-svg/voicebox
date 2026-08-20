import styles from './CategoryChip.module.css'

// DESIGN.md: 필터형(caption 12px) / 폼형(body-sm 14px). 활성 시 secondary 배경 + 흰 글자 + 700 굵기.
export default function CategoryChip({ label, active, size = 'filter', onClick }) {
  const sizeClass = size === 'form' ? styles.form : styles.filter
  return (
    <button
      type="button"
      className={`${styles.chip} ${sizeClass} ${active ? styles.active : ''}`}
      onClick={onClick}
      aria-pressed={active}
    >
      {label}
    </button>
  )
}
