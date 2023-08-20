import Layout from "./components/Layout";
import { createBrowserRouter } from "react-router-dom";

// === ** pages ** ===
import { Home, SlugProduct, Checkout } from "./pages";
import Setting from "./pages/Setting";
import NotFound from "./pages/404";
import ErrorPage from "./pages/403";
import ErrorBoundary from "./components/ErrorBoundary";
import { LoaderSlugProduct } from "./api/loader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dt/:id",
        loader: LoaderSlugProduct,
        errorElement: <ErrorBoundary />,
        element: <SlugProduct />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/setting",
        element: <Setting />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
