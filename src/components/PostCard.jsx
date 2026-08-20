import { Link } from 'react-router-dom'
import styles from './PostCard.module.css'
import StatusBadge from './StatusBadge.jsx'
import PhotoPlaceholderIcon from './PhotoPlaceholderIcon.jsx'

// DESIGN.md card-post: 좌측 56px 사진 + 우측 본문(배지 → 제목 → 요약 → 메타)
export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`} className={styles.card}>
      <div className={styles.photo}>
        {post.photo ? (
          <img src={post.photo} alt="" className={styles.photoImg} />
        ) : (
          <PhotoPlaceholderIcon size={22} />
        )}
      </div>
      <div className={styles.body}>
        <div className={styles.top}>
          <StatusBadge status={post.status} size="sm" />
        </div>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <div className={styles.meta}>
          <span className={styles.category}>{post.category}</span>
          <span>·</span>
          <span>{post.author}</span>
          <span>·</span>
          <span>{post.date}</span>
        </div>
      </div>
    </Link>
  )
}
