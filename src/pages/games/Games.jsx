import { useEffect, useState } from "react";

// we can try passing one object for the url and the page

// Components
import GamesGrid from "../../components/GamesGrid";

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
        console.log("SECOND FETCH");
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

  console.log(data);
  return (
    <section className='games-page'>
      <h1 className='page-heading '>EXPLORE GAMES</h1>
      {loading && <div>Loading...</div>}
      {data && <GamesGrid games={data} />}
      {error && <div>Error..</div>}
      <button className='btn margin-bot' onClick={() => setPage(p => p + 1)}>
        NEXT PAGE
      </button>
    </section>
  );
}
