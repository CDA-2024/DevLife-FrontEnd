import { Button } from "./components/ui/button"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import BaseLayout from "./app/core/layout/BaseLayout"
export default function Home() {
  return (
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route path="/" element={
            <div>
              <h1>Accueil</h1>
              <Button>Accueil</Button>
            </div>
          } />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  )
}
