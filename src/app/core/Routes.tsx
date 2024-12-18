import { Route, Routes } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";
import TestPage from "./screens/TestPage";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TestPage />} />

        <Route path="*" element={<TestPage />} />

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
      </Routes>
    </>
  );
};

export default Routing;
