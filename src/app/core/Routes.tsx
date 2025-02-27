import { Route, Routes } from "react-router-dom";
import { MaterialScreen } from "../pages/materialPage/MaterialPage";
import BaseLayout from "./layout/BaseLayout";
import TestPage from "./screens/TestPage";
import LoginScreen from "./screens/auth/LoginScreen";
import RegisterScreen from "./screens/auth/RegisterScreen";
import GamePage from "../pages/gamePage/Game";
import EmployeePage from "../pages/employePage/EmployeePage";
import EditUserProfilePage from "./screens/editUserProfile/EditUserProfile";
import LandingPage from "./screens/LandingPage/LandingPage";
import BusinessScreenFreelance from "./pages/businessPage/BusinessScreenFreelance";
import BusinessScreenCompany from "./pages/businessPage/BusinessScreenCompany";
import BudgetPage from "./pages/budgetPage/BudgetPage";
import ContractsPage from "../pages/contractPage/ContractsPage";
import EmailVerificationScreen from "./screens/auth/EmailVerificationScreen";
import EmailConfirmedScreen from "./screens/auth/EmailConfirmedScreen";
import { Toaster } from "../shared/components/Shadcn/ui/toaster";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="auth">
          <Route path="login" element={<LoginScreen />} />
          <Route path="register" element={<RegisterScreen />} />
          <Route path="verify-email" element={<EmailVerificationScreen />} />
          <Route path="email-confirmed" element={<EmailConfirmedScreen />} />
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
          path="/buisness"
          element={
            <BaseLayout>
              <BusinessScreenFreelance />
            </BaseLayout>
          }
        />
        <Route
          path="/buisnesscompany"
          element={
            <BaseLayout>
              <BusinessScreenCompany />
            </BaseLayout>
          }
        />
        <Route
          path="/contract"
          element={
            <BaseLayout>
              <ContractsPage />
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
          path="/employee"
          element={
            <BaseLayout>
              <EmployeePage />
            </BaseLayout>
          }
        />

        <Route
          path="/budget"
          element={
            <BaseLayout>
              <BudgetPage />
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
      <Toaster />
    </>
  );
};

export default Routing;
