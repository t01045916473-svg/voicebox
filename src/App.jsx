import { Routes, Route } from 'react-router-dom'
import PostListPage from './pages/PostListPage.jsx'
import WritePostPage from './pages/WritePostPage.jsx'
import PostDetailPage from './pages/PostDetailPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PostListPage />} />
      <Route path="/write" element={<WritePostPage />} />
      <Route path="/posts/:id" element={<PostDetailPage />} />
    </Routes>
  )
}
