import { Route, Routes } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";
import TestPage from "./screens/TestPage";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TestPage />} />

        <Route path="auth">
          <Route path="login" element={<TestPage />} />
          <Route path="register" element={<TestPage />} />
        </Route>

        <Route
          path="/homepage"
          element={
            <BaseLayout>
              <TestPage />
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

        <Route path="*" element={<TestPage />} />
      </Routes>
    </>
  );
};

export default Routing;
