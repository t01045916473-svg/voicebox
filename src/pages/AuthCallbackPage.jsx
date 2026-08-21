import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient.js'
import { fetchProfile, createProfile } from '../lib/profile.js'
import { useToast } from '../context/ToastContext.jsx'

export default function AuthCallbackPage() {
  const navigate = useNavigate()
  const showToast = useToast()
  const handledRef = useRef(false)

  useEffect(() => {
    let active = true

    async function handle(session) {
      if (!session?.user || handledRef.current) return
      handledRef.current = true

      try {
        const existing = await fetchProfile(session.user.id)
        if (!existing) {
          await createProfile(session.user)
          if (active) showToast('가입을 마쳤습니다. 환영해요!')
        } else if (active) {
          showToast('로그인되었습니다.')
        }
      } finally {
        if (active) navigate('/', { replace: true })
      }
    }

    supabase.auth.getSession().then(({ data }) => {
      if (data.session) handle(data.session)
    })

    const { data: subscription } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') handle(session)
    })

    return () => {
      active = false
      subscription.subscription.unsubscribe()
    }
  }, [navigate, showToast])

  return null
}
