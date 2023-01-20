import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSteam,
  faPlaystation,
  faXbox,
} from "@fortawesome/free-brands-svg-icons";

// styles
import "./GamesGrid.scss";

export default function GamesGrid({ games }) {
  return (
    <div className='games-grid'>
      {games.map(game => {
        return (
          <Link
            to={`/games/${game.id.toString()}`}
            key={game.id}
            className='game-card'>
            <div>
              <div
                className='game-card__bg'
                style={{
                  backgroundImage: `url(${game.background_image})`,
                }}></div>
              <div className='game-card__info'>
                <h3 className='game-title'>{game.name}</h3>
                <p className='game-metacritic'>
                  Metacritic
                  <span
                    className='game-metacritic__vote'
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
                <p className='game-released'>
                  {new Date(game.released.toString()).toDateString()}
                </p>

                {game.platforms.map((plat, index) => {
                  return (
                    <span className='platform' key={index}>
                      {plat.platform.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
