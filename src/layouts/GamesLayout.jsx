import { Outlet } from "react-router-dom";

export default function GamesLayout() {
  return (
    <div className='container'>
      <h1 className='page-heading'>GAME PAGE</h1>
      <Outlet />
    </div>
  );
}
