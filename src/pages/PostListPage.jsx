import { useEffect, useMemo, useState } from 'react'
import styles from './PostListPage.module.css'
import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import Footer from '../components/Footer.jsx'
import StatusFilterTabs from '../components/StatusFilterTabs.jsx'
import CategoryChip from '../components/CategoryChip.jsx'
import PostCard from '../components/PostCard.jsx'
import { CATEGORIES } from '../data/categories.js'
import { fetchOpinions } from '../lib/opinions.js'

export default function PostListPage() {
  const [status, setStatus] = useState('전체')
  const [category, setCategory] = useState('전체')
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let ignore = false

    fetchOpinions()
      .then((data) => {
        if (!ignore) setPosts(data)
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
  }, [])

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const statusMatch = status === '전체' || post.status === status
      const categoryMatch = category === '전체' || post.category === category
      return statusMatch && categoryMatch
    })
  }, [posts, status, category])

  return (
    <>
      <Header />
      <Hero />
      <main className={styles.main}>
        <section className={styles.filters}>
          <StatusFilterTabs value={status} onChange={setStatus} />
          <div className={styles.categoryRow}>
            <CategoryChip label="전체" active={category === '전체'} onClick={() => setCategory('전체')} />
            {CATEGORIES.map((c) => (
              <CategoryChip key={c} label={c} active={category === c} onClick={() => setCategory(c)} />
            ))}
          </div>
        </section>

        <section>
          {loading ? (
            <p className={styles.empty}>불러오는 중이에요...</p>
          ) : error ? (
            <p className={styles.empty}>{error}</p>
          ) : (
            <>
              <p className={styles.count}>전체 {filteredPosts.length}건</p>
              {filteredPosts.length > 0 ? (
                <div className={styles.grid}>
                  {filteredPosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <p className={styles.empty}>조건에 맞는 의견이 아직 없어요.</p>
              )}
            </>
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}
