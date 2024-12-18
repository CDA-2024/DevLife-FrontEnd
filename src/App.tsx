import { Button } from "./components/ui/button"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DashboardPage from "./app/screens/gamePage/GamePage"
export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div>
            <h1>Accueil</h1>
            <Button>Accueil</Button>
          </div>
        } />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  )
}
