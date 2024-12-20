import { Route, Routes } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";
import TestPage from "./screens/TestPage";
import LoginScreen from "./pages/login/LoginScreen";
import RegisterScreen from "./pages/register/RegisterScreen";
import GamePage from "./pages/Game";
import EditProfileScreen from "./pages/EditUserProfile";
import { MaterialScreen } from "../screens/materialPage/MaterialPage";
import LandingPage from "./pages/LandingPage/LandingPage";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="auth">
          <Route path="login" element={<LoginScreen />} />
          <Route path="register" element={<RegisterScreen />} />
        </Route>

        <Route
          path="/game"
          element={
            <BaseLayout>
              <GamePage />
            </BaseLayout>
          }
        />

        <Route
          path="/compagnie"
          element={
            <BaseLayout>
              <TestPage />
            </BaseLayout>
          }
        />

        <Route
          path="/contract"
          element={
            <BaseLayout>
              <TestPage />
            </BaseLayout>
          }
        />

        <Route
          path="/material"
          element={
            <BaseLayout>
              <MaterialScreen />
            </BaseLayout>
          }
        />

        <Route
          path="/shop"
          element={
            <BaseLayout>
              <TestPage />
            </BaseLayout>
          }
        />

        <Route
          path="/recruitment"
          element={
            <BaseLayout>
              <TestPage />
            </BaseLayout>
          }
        />

        <Route
          path="/budjet"
          element={
            <BaseLayout>
              <TestPage />
            </BaseLayout>
          }
        />

        <Route
          path="/profile/edit"
          element={
            <BaseLayout>
              <EditProfileScreen />
            </BaseLayout>
          }
        />

        <Route path="*" element={<TestPage />} />
      </Routes>
    </>
  );
};

export default Routing;
