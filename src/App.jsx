import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";

// Pages
import Home, { testimonialsLoader } from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Support from "./pages/help/Support";
import NotFound from "./pages/NotFound";

// Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} loader={testimonialsLoader} />
      <Route path='about' element={<About />} />
      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route path='support' element={<Support />} />
      </Route>

      <Route path='*' element={<NotFound />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
