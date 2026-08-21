import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { supabase } from '../lib/supabaseClient.js'
import { fetchProfile } from '../lib/profile.js'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(undefined)
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    let active = true

    supabase.auth.getSession().then(({ data }) => {
      if (active) setUser(data.session?.user ?? null)
    })

    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => {
      active = false
      subscription.subscription.unsubscribe()
    }
  }, [])

  const refreshProfile = useCallback(() => {
    if (!user) return
    fetchProfile(user.id).then(setProfile)
  }, [user])

  useEffect(() => {
    if (!user) {
      setProfile(null)
      return
    }
    let active = true
    fetchProfile(user.id).then((data) => {
      if (active) setProfile(data)
    })
    return () => {
      active = false
    }
  }, [user])

  const value = {
    user: user ?? null,
    profile,
    loading: user === undefined,
    refreshProfile,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}
