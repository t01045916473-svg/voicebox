import { supabase } from './supabaseClient.js'

export async function fetchProfile(userId) {
  const { data, error } = await supabase.from('profiles').select('*').eq('id', userId).maybeSingle()
  if (error) throw error
  return data
}

export async function createProfile(user) {
  const { data, error } = await supabase
    .from('profiles')
    .insert({
      id: user.id,
      nickname: user.user_metadata?.full_name ?? user.user_metadata?.name ?? '',
      avatar_url: user.user_metadata?.avatar_url ?? user.user_metadata?.picture ?? null,
    })
    .select()
    .single()
  if (error) throw error
  return data
}

export async function updateProfile(userId, { nickname }) {
  const { error } = await supabase.from('profiles').update({ nickname }).eq('id', userId)
  if (error) throw error
}
