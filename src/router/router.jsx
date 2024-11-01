import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("@/views/Home"));
const Swap = lazy(() => import("@/views/Swap"));
const SwapFixedCoin = lazy(() => import("@/views/SwapFixedCoin"));
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
    path: "/swapfixed",
    element: <SwapFixedCoin />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
