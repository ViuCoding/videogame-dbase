import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";
import useFetchGame from "../../hooks/useFetchGame";

import Metacritic from "../../assets/img/Metacritic.svg";
import Hero from "../../components/Hero";

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
          <h1 className='page-heading'>{data.name}</h1>
          <Hero src={data.background_image} message={data.name} />
          {/* <div className='game-metacritic'>
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
          </div> */}
          <div className='game-description'>{data.description_raw}</div>
        </>
      )}
      {error && <div>Error...</div>}
    </div>
  );
}
