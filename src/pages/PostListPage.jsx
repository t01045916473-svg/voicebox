import { useMemo, useState } from 'react'
import styles from './PostListPage.module.css'
import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import Footer from '../components/Footer.jsx'
import StatusFilterTabs from '../components/StatusFilterTabs.jsx'
import CategoryChip from '../components/CategoryChip.jsx'
import PostCard from '../components/PostCard.jsx'
import { MOCK_POSTS } from '../data/mockPosts.js'
import { CATEGORIES } from '../data/categories.js'

export default function PostListPage() {
  const [status, setStatus] = useState('전체')
  const [category, setCategory] = useState('전체')

  const filteredPosts = useMemo(() => {
    return MOCK_POSTS.filter((post) => {
      const statusMatch = status === '전체' || post.status === status
      const categoryMatch = category === '전체' || post.category === category
      return statusMatch && categoryMatch
    })
  }, [status, category])

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
        </section>
      </main>
      <Footer />
    </>
  )
}
