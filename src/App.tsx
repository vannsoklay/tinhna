import Container from "./components/Container";
import { createBrowserRouter, json, RouterProvider } from "react-router-dom";

// === ** pages ** ===
import { Home, SlugProduct, Checkout } from "./pages";
import Setting from "./pages/Setting";
import NotFound from "./pages/404";
import ErrorPage from "./pages/403";
import ErrorBoundary from "./components/ErrorBoundary";
import products from "./api/products.json";

export async function loader({ params }: any) {
  let product = products.products.find((p) => p.id == params.productId);
  if (!product) {
    throw json({ message: "Not Found" }, { status: 400 });
  }
  return json(product);
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Container />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/dt/:productId",
          loader: loader,
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
  return <RouterProvider router={router} />;
}

export default App;
