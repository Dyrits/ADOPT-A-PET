import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import HomePage from "./pages/home";
import SearchPage from "./pages/search";
import PetDetailsPage from "./pages/detail";
import PetDetailsNotFound from "./pages/petDetailsNotFound";
import Root from "./components/root";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route index element={<HomePage />} />
    <Route path=":type" element={<HomePage />} />
    <Route path=":type/:id" element={<PetDetailsPage />} />
  </Route>
));

function App() {
  return <RouterProvider router={router} />;
}

export default App;
