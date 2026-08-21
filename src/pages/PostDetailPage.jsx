import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './PostDetailPage.module.css'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import BackLink from '../components/BackLink.jsx'
import StatusBadge from '../components/StatusBadge.jsx'
import PhotoPlaceholderIcon from '../components/PhotoPlaceholderIcon.jsx'
import { fetchOpinionById } from '../lib/opinions.js'

export default function PostDetailPage() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let ignore = false
    setLoading(true)

    fetchOpinionById(id)
      .then((data) => {
        if (!ignore) setPost(data)
      })
      .catch(() => {
        if (!ignore) setError('의견을 불러오지 못했어요. 잠시 후 다시 시도해주세요.')
      })
      .finally(() => {
        if (!ignore) setLoading(false)
      })

    return () => {
      ignore = true
    }
  }, [id])

  if (loading) {
    return (
      <>
        <Header />
        <main className={styles.main}>
          <BackLink>목록으로</BackLink>
          <p className={styles.notFound}>불러오는 중이에요...</p>
        </main>
        <Footer />
      </>
    )
  }

  if (error || !post) {
    return (
      <>
        <Header />
        <main className={styles.main}>
          <BackLink>목록으로</BackLink>
          <p className={styles.notFound}>{error ?? '글을 찾을 수 없어요.'}</p>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <BackLink>목록으로</BackLink>

        <article className={styles.article}>
          <div className={styles.photo}>
            {post.photo ? (
              <img src={post.photo} alt="" className={styles.photoImg} />
            ) : (
              <PhotoPlaceholderIcon size={40} />
            )}
          </div>

          <div className={styles.topRow}>
            <StatusBadge status={post.status} />
            <span className={styles.category}>{post.category}</span>
          </div>

          <h1 className={styles.title}>{post.title}</h1>

          <div className={styles.meta}>
            <span>{post.author}</span>
            <span>·</span>
            <span>{post.date}</span>
          </div>

          <p className={styles.content}>{post.content}</p>
        </article>
      </main>
      <Footer />
    </>
  )
}
