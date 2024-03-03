import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage, HomePage, ShoppingCartPage } from "./pages";
import SharedLayout from "./components/SharedLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "cart",
        element: <ShoppingCartPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
