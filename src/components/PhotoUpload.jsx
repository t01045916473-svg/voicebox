import { useRef } from 'react'
import styles from './PhotoUpload.module.css'
import PhotoPlaceholderIcon from './PhotoPlaceholderIcon.jsx'

// DESIGN.md photo-upload: 점선 박스, 업로드 전/후 상태, 선택(1장) 항목
export default function PhotoUpload({ previewUrl, onSelect, onRemove }) {
  const inputRef = useRef(null)

  function handleChange(e) {
    const file = e.target.files?.[0]
    if (file) onSelect(file)
  }

  if (previewUrl) {
    return (
      <div className={styles.box}>
        <img src={previewUrl} alt="첨부한 사진 미리보기" className={styles.preview} />
        <button
          type="button"
          className={styles.remove}
          onClick={onRemove}
          aria-label="사진 삭제"
        >
          ×
        </button>
      </div>
    )
  }

  return (
    <button type="button" className={styles.box} onClick={() => inputRef.current?.click()}>
      <PhotoPlaceholderIcon size={28} />
      <span className={styles.hint}>사진을 추가해주세요(선택)</span>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className={styles.input}
        onChange={handleChange}
      />
    </button>
  )
}
