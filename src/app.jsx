import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Error from "./components/error";
import Layout from "./components/layout";
import { About, Contact, Home, LoginRegister } from "./pages";
import { registerOrLogin } from "./pages/actions.js";
import { loadThoughts } from "./pages/loaders";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} loader={loadThoughts} />
      <Route path="thoughts/:author" element={<Home />} loader={loadThoughts} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route
        path="login"
        element={<LoginRegister />}
        action={registerOrLogin}
      />
      {/* TODO: Add a `404` page */}
      <Route path="★" element={<Error />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
