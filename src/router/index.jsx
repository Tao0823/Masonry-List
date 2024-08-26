import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import Loading from "../components/Loading/index.jsx";

const CRouter = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default CRouter;
