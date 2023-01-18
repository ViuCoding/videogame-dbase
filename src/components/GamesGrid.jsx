import { Link } from "react-router-dom";
import "./GamesGrid.scss";

export default function GamesGrid({ games }) {
  return (
    <div className='games-grid'>
      {games.map(game => {
        return (
          <Link to={`/games/${game.id.toString()}`} key={game.id}>
            <div className='game-card'>
              <div
                className='game-card__bg'
                style={{
                  backgroundImage: `url(${game.background_image})`,
                }}></div>
              <div className='game-card__info'>
                <h3 className='game-title'>{game.name}</h3>
                <p>
                  Metacritic
                  <span
                    className='game-metacritic'
                    style={{
                      backgroundColor:
                        game.metacritic > 75
                          ? "green"
                          : game.metacritic < 75 && game.metacritic > 50
                          ? "yellow"
                          : "crimson",
                    }}>
                    {game.metacritic}
                  </span>
                </p>
                <p className='game-released'>{game.released}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
