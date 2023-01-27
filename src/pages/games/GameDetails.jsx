import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";
import useFetchGame from "../../hooks/useFetchGame";
import Hero from "../../components/Hero";
import GamesError from "./GamesError";

// styles
import "./GameDetails.scss";
import Metacritic from "../../assets/img/Metacritic.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faRedditAlien } from "@fortawesome/free-brands-svg-icons";

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

          <div className='game-content margin-bot'>
            <div className='game-info'>
              <h2 className='margin-bot'>{data.name}</h2>
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
                        ? "goldenrod"
                        : "crimson",
                  }}>
                  {data.metacritic}
                </span>
              </div>

              {data.website && (
                <div className='urls'>
                  <a href={data.website} target='_blank' className='icon'>
                    {data.website && <FontAwesomeIcon icon={faGlobe} />}
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
                  <p className='devs'>Developed by</p>
                  {data.developers.map(dev => {
                    return (
                      <p key={dev.id}>
                        <em>{dev.name}</em>{" "}
                      </p>
                    );
                  })}
                </div>
              )}

              {data.genres.length > 0 && (
                <div className='genres-list margin-bot'>
                  <p className='genre'>Genre</p>
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
                  <p className='tags'>Relevant Tags</p>
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
          </div>
        </>
      )}
      {error && <GamesError />}
      <div className='margin-bot btn-container'>
        <button className='btn'>
          <Link to='/games'>BACK TO GAMES</Link>
        </button>
      </div>
    </div>
  );
}
