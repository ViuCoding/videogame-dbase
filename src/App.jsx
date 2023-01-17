import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import GamesLayout from "./layouts/GamesLayout";

// Pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Faq from "./pages/help/Faq";
import Support from "./pages/help/Support";
import NotFound from "./pages/NotFound";
import GameDetails from "./pages/games/GameDetails";
import Games from "./pages/games/Games";

// Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path='about' element={<About />} />

      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route path='support' element={<Support />} />
      </Route>

      <Route path='games' element={<GamesLayout />}>
        <Route index element={<Games />} />
        <Route path=':id' element={<GameDetails />} />
      </Route>

      <Route path='*' element={<NotFound />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
