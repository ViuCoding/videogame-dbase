import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";
import useFetchGame from "../../hooks/useFetchGame";
import Hero from "../../components/Hero";
import GamesError from "./GamesError";

// styles
import "./GameDetails.scss";
import Metacritic from "../../assets/img/Metacritic.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faReddit, faRedditAlien } from "@fortawesome/free-brands-svg-icons";

export default function GameDetails() {
  const { id } = useParams();
  const RAWG_KEY = "71806925a6f940ec8cf552ed24cf8b1a";

  let url = `https://api.rawg.io/api/games/${id}?key=${RAWG_KEY}`;

  const { data, error, loading } = useFetchGame(url);

  return (
    <div className='game-details'>
      {loading && <LoadingSpinner />}
      {data && (
        <>
          <Hero src={data.background_image} message={data.name} />

          <div className='game-content margin-bot'>
            <div className='game-info'>
              <p>
                Released on{" "}
                <span className='date'>
                  {data.released &&
                    new Date(data.released.toString()).toDateString()}
                </span>
              </p>

              <div className='game-metacritic'>
                <img src={Metacritic} alt='Metacritic logo' />
                <span
                  className='game-metacritic__vote'
                  style={{
                    backgroundColor:
                      data.metacritic > 75
                        ? "green"
                        : data.metacritic < 75 && data.metacritic > 50
                        ? "yellow"
                        : "crimson",
                  }}>
                  {data.metacritic}
                </span>
              </div>

              <div className='urls'>
                <div>
                  <a href={data.website} target='_blank' className='icon'>
                    {data.website && <FontAwesomeIcon icon={faGlobe} />}
                  </a>
                </div>
                <div>
                  <a href={data.reddit_url} target='_blank' className='icon'>
                    {data.reddit_url && (
                      <FontAwesomeIcon icon={faRedditAlien} />
                    )}
                  </a>
                </div>
              </div>

              <div className='developers'>
                <p className='devs'>Developed by</p>
                {data.developers.map(dev => {
                  return (
                    <p key={dev.id}>
                      <em>{dev.name}</em>{" "}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className='game-description'>
              <h3 className='sub-heading margin-bot'>Description</h3>
              {data.description_raw}
            </div>
          </div>
        </>
      )}
      {error && <GamesError />}
    </div>
  );
}
