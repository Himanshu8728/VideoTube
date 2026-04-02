import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Home from './pages/home/Home'
import VideoDetail from './pages/video/VideoDetail'
import Upload from './pages/upload/Upload'
import Profile from './pages/profile/Profile'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="video/:id" element={<VideoDetail />} />
        <Route path="upload" element={<Upload />} />
        <Route path="dashboard" element={<Profile />} />
        <Route path="history" element={<div className="home-container"><h2 className="page-title">History</h2><p style={{color:'var(--text-secondary)'}}>No watch history yet.</p></div>} />
        <Route path="liked" element={<div className="home-container"><h2 className="page-title">Liked Videos</h2><p style={{color:'var(--text-secondary)'}}>No liked videos yet.</p></div>} />
        <Route path="subscriptions" element={<div className="home-container"><h2 className="page-title">Subscriptions</h2><p style={{color:'var(--text-secondary)'}}>You haven't subscribed to anyone.</p></div>} />
      </Route>
    </Routes>
  )
}

export default App
