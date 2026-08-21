import styles from './TabNav.module.css'

export default function TabNav({ tabs, value, onChange }) {
  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          className={`${styles.tab} ${value === tab ? styles.active : ''}`}
          onClick={() => onChange(tab)}
          aria-pressed={value === tab}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
