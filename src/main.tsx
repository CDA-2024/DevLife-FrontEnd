import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DataProvider } from "./app/core/providers/DataProvider.tsx";
import { dataProvider } from "./app/core/providers/dataProvider.ts";
import App from "./app/core/App.tsx";

import "./assets/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DataProvider provider={dataProvider}>
      <App />
    </DataProvider>
  </StrictMode>
);
