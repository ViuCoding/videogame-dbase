import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

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
import GamesError from "./pages/games/GamesError";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";

// Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path='about' element={<About />} />
      <Route path='signup' element={<Signup />} />
      <Route path='login' element={<Login />} />

      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route path='support' element={<Support />} />
      </Route>

      <Route
        path='games'
        errorElement={<GamesError />}
        element={<GamesLayout />}>
        <Route index element={<Games />} />
        <Route path=':id' element={<GameDetails />} />
      </Route>

      <Route path='*' element={<NotFound />}></Route>
    </Route>
  )
);

function App() {
  const { authIsReady } = useAuthContext();
  return <>{authIsReady && <RouterProvider router={router} />}</>;
}

export default App;
