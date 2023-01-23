import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import "./SearchPreview.scss";

export default function SearchPreview({ payload, loading, error, onClick }) {
  return (
    <div className='search-preview'>
      {loading && <LoadingSpinner />}
      {payload.map(game => {
        return (
          <Link
            to={`/games/${game.id.toString()}`}
            key={game.id}
            onClick={onClick}>
            <div className='game'>
              <div
                className='icon-box'
                style={{
                  backgroundImage: `url(${game.background_image})`,
                }}></div>
              <div className='game-info'>
                {/* <p
                className='game-metacritic'
                style={{
                  backgroundColor:
                    game.metacritic > 75
                      ? "green"
                      : game.metacritic < 75 && game.metacritic > 50
                      ? "yellow"
                      : "crimson",
                }}></p> */}
                <h3 className='game-name'>{game.name}</h3>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
