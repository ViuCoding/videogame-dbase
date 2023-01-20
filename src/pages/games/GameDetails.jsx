import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import useFetchGame from "../../hooks/useFetchGame";

export default function GameDetails() {
  const { id } = useParams();
  const RAWG_KEY = "71806925a6f940ec8cf552ed24cf8b1a";

  let url = `https://api.rawg.io/api/games/${id}?key=${RAWG_KEY}`;

  const { data, error, loading } = useFetchGame(url);

  return <div className='game-details'>{data && <h1>{data.name}</h1>}</div>;
}
