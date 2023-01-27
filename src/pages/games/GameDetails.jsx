import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";
import useFetchGame from "../../hooks/useFetchGame";
import Hero from "../../components/Hero";
import GamesError from "./GamesError";

// styles
import "./GameDetails.scss";
import Metacritic from "../../assets/img/Metacritic.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faRedditAlien } from "@fortawesome/free-brands-svg-icons";
import GameStores from "../../components/GameStores";

export default function GameDetails() {
  const { id } = useParams();
  const RAWG_KEY = "71806925a6f940ec8cf552ed24cf8b1a";

  let url = `https://api.rawg.io/api/games/${id}?key=${RAWG_KEY}`;

  const { data, error, loading } = useFetchGame(url);

  return (
    <div className='game-details'>
      {/* // Display LoadingSpinner if loading is true */}
      {loading && <LoadingSpinner />}
      {/* // Display Data if data has been succesfully fetched; */}
      {data && (
        <>
          <Hero src={data.background_image} message={data.name} />

          <section className='game-content margin-bot'>
            <div className='game-info'>
              <h2 className='margin-bot'>{data.name}</h2>
              <p>
                Release Date{" "}
                <span className='date'>
                  {data.released
                    ? new Date(data.released.toString()).toDateString()
                    : "TBD"}
                </span>
              </p>

              {data.metacritic && (
                <div className='game-metacritic'>
                  <img src={Metacritic} alt='Metacritic logo' />
                  <span
                    className='game-metacritic__vote'
                    style={{
                      backgroundColor:
                        data.metacritic > 75
                          ? "green"
                          : data.metacritic < 75 && data.metacritic > 50
                          ? "goldenrod"
                          : "crimson",
                    }}>
                    {data.metacritic}
                  </span>
                </div>
              )}

              {data.website && (
                <div className='urls'>
                  <a href={data.website} target='_blank' className='icon'>
                    {data.website && <FontAwesomeIcon icon={faLink} />}
                  </a>
                  <a href={data.reddit_url} target='_blank' className='icon'>
                    {data.reddit_url && (
                      <FontAwesomeIcon
                        icon={faRedditAlien}
                        style={{ color: "#ff4500" }}
                      />
                    )}
                  </a>
                </div>
              )}

              {data.developers && (
                <div className='developers margin-bot'>
                  <p className='category'>Developer/s</p>
                  {data.developers.map(dev => {
                    return (
                      <p key={dev.id}>
                        <em>{dev.name}</em>{" "}
                      </p>
                    );
                  })}
                </div>
              )}

              {data.publishers && (
                <div className='publishers margin-bot'>
                  <p className='category'>Publisher/s</p>
                  {data.publishers.map(pub => {
                    return (
                      <p key={pub.id}>
                        <em>{pub.name}</em>{" "}
                      </p>
                    );
                  })}
                </div>
              )}

              {data.genres.length > 0 && (
                <div className='genres-list margin-bot'>
                  <p className='category'>Genre/s</p>
                  {data.genres.map(genre => {
                    return (
                      <p key={genre.id}>
                        <span>{genre.name}</span>
                      </p>
                    );
                  })}
                </div>
              )}

              {data.tags.length > 0 && (
                <div className='tags-list margin-bot'>
                  <p className='category'>Relevant Tags</p>
                  {data.tags.map(tag => {
                    return <span key={tag.id}>{tag.name}</span>;
                  })}
                </div>
              )}
            </div>

            <div className='game-description'>
              <h2 className='sub-heading margin-bot'>Description</h2>
              {data.description_raw}
            </div>
          </section>
        </>
      )}
      {error && <GamesError />}

      <section className='stores margin-bot'>
        <GameStores id={id} />
      </section>

      <div className='margin-bot btn-container'>
        <button className='btn'>
          <Link to='/games'>BACK TO GAMES</Link>
        </button>
      </div>
    </div>
  );
}
