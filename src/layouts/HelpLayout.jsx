import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className='container'>
      <h1 className='page-heading'>HELP PAGE</h1>
      <p className='margin-bot'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A aspernatur
        rerum asperiores, debitis facilis numquam! Totam voluptates excepturi
        officia recusandae quidem.
      </p>

      <nav className='page-nav margin-bot'>
        <NavLink to='faq'>F.A.Q.</NavLink>
        <NavLink to='support'>Support</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
