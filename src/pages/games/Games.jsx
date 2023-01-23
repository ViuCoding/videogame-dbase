import { useEffect, useState } from "react";

// styles

import "./Games.scss";

// we can try passing one object for the url and the page

// Components
import GamesGrid from "../../components/GamesGrid";
import LoadingSpinner from "../../components/LoadingSpinner";

export default function Games() {
  // state
  const [page, setPage] = useState(1);

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // functions
  async function fetchData() {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.rawg.io/api/games?key=71806925a6f940ec8cf552ed24cf8b1a&page=${page}&page_size=21`
      );
      const parsedData = await res.json();
      if (page < 2) {
        console.log("FIRST FETCH");
        setData(prevData => (prevData = parsedData.results));
      } else {
        console.log("NEXT FETCH");
        setData(prevData => {
          return prevData.concat(parsedData.results);
        });
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <section className='games-page'>
      <h1 className='page-heading '>EXPLORE GAMES</h1>
      {loading && <LoadingSpinner />}
      {data && <GamesGrid games={data} />}
      {error && <div>Error..</div>}
      <div className='next-page'>
        <button onClick={() => setPage(p => p + 1)} className='btn margin-bot'>
          NEXT PAGE
        </button>
      </div>
    </section>
  );
}
