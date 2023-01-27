import { Link, useRouteError } from "react-router-dom";

export default function GamesError() {
  const error = useRouteError();

  return (
    <div className='games-error'>
      <h2>This page does not exist.</h2>
      <p>{error}</p>
      <p>
        Get back to the <Link to='/'>homepage...</Link>{" "}
      </p>
    </div>
  );
}
