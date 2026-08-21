import { useState } from 'react'
import styles from './GoogleAuthButton.module.css'
import GoogleIcon from './GoogleIcon.jsx'
import { signInWithGoogle } from '../lib/auth.js'

export default function GoogleAuthButton() {
  const [loading, setLoading] = useState(false)

  async function handleClick() {
    const confirmed = window.confirm(
      '구글 계정으로 계속합니다. 처음이면 회원가입이, 이미 회원이면 로그인이 진행됩니다. 계속할까요?',
    )
    if (!confirmed) return

    setLoading(true)
    try {
      await signInWithGoogle()
    } catch {
      setLoading(false)
      window.alert('구글 인증을 시작하지 못했어요. 잠시 후 다시 시도해주세요.')
    }
  }

  return (
    <button type="button" className={styles.button} onClick={handleClick} disabled={loading}>
      <GoogleIcon />
      <span>{loading ? '이동 중...' : 'Google로 계속하기'}</span>
    </button>
  )
}
