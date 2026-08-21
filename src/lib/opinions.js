import { supabase } from './supabaseClient.js'

const EXCERPT_LENGTH = 60

function formatDate(isoString) {
  const d = new Date(isoString)
  const yyyy = d.getFullYear()
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${yyyy}.${mm}.${dd}`
}

function toPost(row) {
  return {
    id: row.id,
    title: row.title,
    content: row.content,
    excerpt:
      row.content.length > EXCERPT_LENGTH
        ? `${row.content.slice(0, EXCERPT_LENGTH)}...`
        : row.content,
    status: row.status,
    category: row.category,
    author: row.author,
    date: formatDate(row.created_at),
    photo: row.photo_url,
  }
}

export async function fetchOpinions() {
  const { data, error } = await supabase
    .from('opinions')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) throw error
  return data.map(toPost)
}

export async function fetchOpinionById(id) {
  const { data, error } = await supabase.from('opinions').select('*').eq('id', id).maybeSingle()
  if (error) throw error
  return data ? toPost(data) : null
}

async function uploadOpinionPhoto(file) {
  const ext = file.name.split('.').pop()
  const path = `${crypto.randomUUID()}.${ext}`
  const { error } = await supabase.storage.from('photos').upload(path, file)
  if (error) throw error
  const { data } = supabase.storage.from('photos').getPublicUrl(path)
  return data.publicUrl
}

export async function createOpinion({ title, content, author, category, photoFile }) {
  const photo_url = photoFile ? await uploadOpinionPhoto(photoFile) : null

  const { data, error } = await supabase
    .from('opinions')
    .insert({ title, content, author, category, photo_url })
    .select()
    .single()
  if (error) throw error
  return toPost(data)
}
