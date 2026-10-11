import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import BrowsePage from "./pages/BrowsePage"
import WatchPage from "./pages/WatchPage"

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white antialiased">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/watch/:id" element={<WatchPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
