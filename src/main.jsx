import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes/Routers";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="container mx-auto">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
