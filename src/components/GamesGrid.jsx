import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSteam,
  faPlaystation,
  faXbox,
} from "@fortawesome/free-brands-svg-icons";

// styles
import "./GamesGrid.scss";
import Metacritic from "../assets/img/Metacritic.svg";

export default function GamesGrid({ games }) {
  return (
    <div className='games-grid'>
      {games.map(game => {
        return (
          <div key={game.id} className='game-card'>
            <Link to={`/games/${game.id.toString()}`}>
              <div
                className='game-card__bg'
                style={{
                  backgroundImage: `url(${game.background_image})`,
                }}></div>
              <div className='game-card__info'>
                <h3 className='game-title'>{game.name}</h3>
                <div className='game-metacritic'>
                  <img src={Metacritic} alt='Metacritic logo' />
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
                </div>
                <p className='game-released'>
                  {new Date(game.released.toString()).toDateString()}
                </p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
