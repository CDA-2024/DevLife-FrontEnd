import { Button } from "../src/app/shared/components/ui/button";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "./app/core/layout/BaseLayout";
import LandingPage from "./app/core/pages/LandingPage/LandingPage";
export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landingpage" element={<LandingPage />} />

        <Route
          path="/"
          element={
            <BaseLayout>
              <div>
                <h1>Accueil</h1>
                <Button>Accueil</Button>
              </div>
            </BaseLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
