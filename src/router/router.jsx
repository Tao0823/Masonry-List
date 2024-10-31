import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("@/views/Home"));
const Swap = lazy(() => import("@/views/Swap"));
const NotFound = lazy(() => import("@/views/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/swap",
    element: <Swap />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
