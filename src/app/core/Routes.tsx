import { Route, Routes } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";
import TestPage from "./screens/TestPage";
import LoginScreen from "./screens/login/LoginScreen";
import RegisterScreen from "./screens/register/RegisterScreen";
import GamePage from "../pages/gamePage/Game";

import { MaterialScreen } from "../pages/materialPage/MaterialPage";
import StaffPage from "../pages/staffPage/StaffPage";
import EditUserProfilePage from "./screens/editUserProfile/EditUserProfile";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TestPage />} />

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
          path="/staff"
          element={
            <BaseLayout>
              <StaffPage />
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
              <EditUserProfilePage />
            </BaseLayout>
          }
        />

        <Route path="*" element={<TestPage />} />
      </Routes>
    </>
  );
};

export default Routing;
