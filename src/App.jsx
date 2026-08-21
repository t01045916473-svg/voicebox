import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import { ToastProvider } from './context/ToastContext.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import PostListPage from './pages/PostListPage.jsx'
import WritePostPage from './pages/WritePostPage.jsx'
import PostDetailPage from './pages/PostDetailPage.jsx'
import LoginGatePage from './pages/LoginGatePage.jsx'
import SignupGatePage from './pages/SignupGatePage.jsx'
import AuthCallbackPage from './pages/AuthCallbackPage.jsx'
import MyPage from './pages/MyPage.jsx'

export default function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <Routes>
          <Route path="/" element={<PostListPage />} />
          <Route
            path="/write"
            element={
              <ProtectedRoute>
                <WritePostPage />
              </ProtectedRoute>
            }
          />
          <Route path="/posts/:id" element={<PostDetailPage />} />
          <Route path="/login" element={<LoginGatePage />} />
          <Route path="/signup" element={<SignupGatePage />} />
          <Route path="/auth/callback" element={<AuthCallbackPage />} />
          <Route
            path="/mypage"
            element={
              <ProtectedRoute>
                <MyPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </ToastProvider>
    </AuthProvider>
  )
}
