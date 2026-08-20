import { useParams } from 'react-router-dom'
import styles from './PostDetailPage.module.css'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import BackLink from '../components/BackLink.jsx'
import StatusBadge from '../components/StatusBadge.jsx'
import PhotoPlaceholderIcon from '../components/PhotoPlaceholderIcon.jsx'
import { MOCK_POSTS } from '../data/mockPosts.js'

export default function PostDetailPage() {
  const { id } = useParams()
  const post = MOCK_POSTS.find((p) => p.id === id)

  if (!post) {
    return (
      <>
        <Header />
        <main className={styles.main}>
          <BackLink>목록으로</BackLink>
          <p className={styles.notFound}>글을 찾을 수 없어요.</p>
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
