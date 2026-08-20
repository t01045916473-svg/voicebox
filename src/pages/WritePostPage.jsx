import { useState } from 'react'
import styles from './WritePostPage.module.css'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import BackLink from '../components/BackLink.jsx'
import PhotoUpload from '../components/PhotoUpload.jsx'
import CategoryChip from '../components/CategoryChip.jsx'
import { CATEGORIES } from '../data/categories.js'

export default function WritePostPage() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState(null)
  const [photoFile, setPhotoFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)

  function handleSelectPhoto(file) {
    setPhotoFile(file)
    setPreviewUrl(URL.createObjectURL(file))
  }

  function handleRemovePhoto() {
    setPhotoFile(null)
    setPreviewUrl(null)
  }

  function handleSubmit(e) {
    // 저장 기능은 아직 연결하지 않았다 — 화면 확인 단계.
    e.preventDefault()
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <BackLink>목록으로</BackLink>
        <h1 className={styles.pageTitle}>의견 남기기</h1>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="title">
              제목
            </label>
            <input
              id="title"
              type="text"
              className={styles.input}
              placeholder="어떤 이야기인지 짧게 적어주세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className={styles.field}>
            <span className={styles.label}>사진 첨부</span>
            <PhotoUpload previewUrl={previewUrl} onSelect={handleSelectPhoto} onRemove={handleRemovePhoto} />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="content">
              내용
            </label>
            <textarea
              id="content"
              className={styles.textarea}
              placeholder="겪은 일이나 바라는 점을 자세히 적어주세요"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <div className={styles.field}>
            <span className={styles.label}>분야</span>
            <div className={styles.categoryRow}>
              {CATEGORIES.map((c) => (
                <CategoryChip
                  key={c}
                  label={c}
                  size="form"
                  active={category === c}
                  onClick={() => setCategory(c)}
                />
              ))}
            </div>
          </div>

          <div className={styles.submitRow}>
            <button type="submit" className={styles.submit}>
              저장하기
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </>
  )
}
