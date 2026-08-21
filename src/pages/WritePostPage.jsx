import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './WritePostPage.module.css'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import BackLink from '../components/BackLink.jsx'
import PhotoUpload from '../components/PhotoUpload.jsx'
import CategoryChip from '../components/CategoryChip.jsx'
import { CATEGORIES } from '../data/categories.js'
import { createOpinion } from '../lib/opinions.js'

export default function WritePostPage() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  const [category, setCategory] = useState(null)
  const [photoFile, setPhotoFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  function handleSelectPhoto(file) {
    setPhotoFile(file)
    setPreviewUrl(URL.createObjectURL(file))
  }

  function handleRemovePhoto() {
    setPhotoFile(null)
    setPreviewUrl(null)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (!title.trim() || !content.trim() || !author.trim() || !category) {
      setError('제목, 내용, 작성자, 분야를 모두 입력해주세요.')
      return
    }

    setSubmitting(true)
    setError(null)

    try {
      await createOpinion({
        title: title.trim(),
        content: content.trim(),
        author: author.trim(),
        category,
        photoFile,
      })
      navigate('/')
    } catch {
      setError('저장하지 못했어요. 잠시 후 다시 시도해주세요.')
      setSubmitting(false)
    }
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
            <label className={styles.label} htmlFor="author">
              작성자
            </label>
            <input
              id="author"
              type="text"
              className={styles.input}
              placeholder="이름 또는 닉네임을 적어주세요"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
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

          {error && <p className={styles.error}>{error}</p>}

          <div className={styles.submitRow}>
            <button type="submit" className={styles.submit} disabled={submitting}>
              {submitting ? '저장 중...' : '저장하기'}
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </>
  )
}
