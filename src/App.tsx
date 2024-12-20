import { BrowserRouter, Routes, Route } from "react-router-dom"
import BaseLayout from "./app/core/layout/BaseLayout"
import ProfilePage from "./app/core/pages/Profile"

export default function Home() {
  return (
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<ProfilePage />} />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  )
}
