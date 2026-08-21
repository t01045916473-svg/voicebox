import { useEffect, useState } from 'react'
import styles from './MyPage.module.css'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import TabNav from '../components/TabNav.jsx'
import PostCard from '../components/PostCard.jsx'
import { useAuth } from '../context/AuthContext.jsx'
import { fetchOpinionsByUser } from '../lib/opinions.js'
import { updateProfile } from '../lib/profile.js'

const TABS = ['내가 쓴 글', '내 정보']

export default function MyPage() {
  const { user, profile, refreshProfile } = useAuth()
  const [tab, setTab] = useState(TABS[0])
  const [posts, setPosts] = useState([])
  const [loadingPosts, setLoadingPosts] = useState(true)
  const [nickname, setNickname] = useState('')
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (!user) return
    let active = true
    fetchOpinionsByUser(user.id)
      .then((data) => {
        if (active) setPosts(data)
      })
      .finally(() => {
        if (active) setLoadingPosts(false)
      })
    return () => {
      active = false
    }
  }, [user])

  useEffect(() => {
    setNickname(profile?.nickname ?? '')
  }, [profile])

  async function handleSaveProfile(e) {
    e.preventDefault()
    setSaving(true)
    try {
      await updateProfile(user.id, { nickname: nickname.trim() })
      refreshProfile()
    } finally {
      setSaving(false)
    }
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.pageTitle}>마이페이지</h1>
        <TabNav tabs={TABS} value={tab} onChange={setTab} />

        {tab === '내가 쓴 글' ? (
          loadingPosts ? (
            <p className={styles.empty}>불러오는 중이에요...</p>
          ) : posts.length > 0 ? (
            <div className={styles.grid}>
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <p className={styles.empty}>아직 작성한 의견이 없어요.</p>
          )
        ) : (
          <form className={styles.form} onSubmit={handleSaveProfile}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="nickname">
                닉네임
              </label>
              <input
                id="nickname"
                type="text"
                className={styles.input}
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </div>
            <div className={styles.submitRow}>
              <button type="submit" className={styles.submit} disabled={saving}>
                {saving ? '저장 중...' : '저장'}
              </button>
            </div>
          </form>
        )}
      </main>
      <Footer />
    </>
  )
}
