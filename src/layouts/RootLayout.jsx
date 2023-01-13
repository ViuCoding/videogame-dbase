import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

// Components
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main className='content'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
