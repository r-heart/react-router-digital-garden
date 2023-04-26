import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import { About, Contact, Home, LoginRegister } from "./pages";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <LoginRegister /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
