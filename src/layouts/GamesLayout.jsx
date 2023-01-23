import { Outlet } from "react-router-dom";

export default function GamesLayout() {
  return (
    <div className='container'>
      <Outlet />
    </div>
  );
}
