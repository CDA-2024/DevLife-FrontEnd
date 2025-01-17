import { Route, Routes } from "react-router-dom";
import { MaterialScreen } from "../pages/materialPage/MaterialPage";
import BaseLayout from "./layout/BaseLayout";
import TestPage from "./screens/TestPage";
import LoginScreen from "./screens/login/LoginScreen";
import RegisterScreen from "./screens/register/RegisterScreen";
import GamePage from "../pages/gamePage/Game";
import EmployePage from "../pages/staffPage/EmployePage";
import EditUserProfilePage from "./screens/editUserProfile/EditUserProfile";
import LandingPage from "./screens/LandingPage/LandingPage";
import BusinessScreenFreelance from "./pages/businessPage/BusinessScreenFreelance";
import BusinessScreenCompany from "./pages/businessPage/BusinessScreenCompany";
import BudgetPage from "./pages/budgetPage/BudgetPage";
import ContractsPage from "../pages/contractPage/ContractsPage";

const Routing = () => {
  return (
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
        path="/employe"
        element={
          <BaseLayout>
            <EmployePage />
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
  );
};

export default Routing;
