// styles
import "./Home.scss";

import Hero from "../../components/Hero";
import Background1 from "../../assets/img/bg1.jpg";
import useFetch from "../../hooks/useFetch";
import GamesGrid from "../../components/GamesGrid";
import LoadingSpinner from "../../components/LoadingSpinner";

export default function Home() {
  const RAWG_KEY = "71806925a6f940ec8cf552ed24cf8b1a";

  const { data, error, loading } = useFetch(
    `https://api.rawg.io/api/games?key=${RAWG_KEY}&page_size=21&ordering=-released&metacritic=85,100`
  );

  return (
    <>
      <section className='home-page'>
        <div className='container'>
          <Hero src={Background1} message='Join the Empire' />

          <article>
            <p className='paragraph'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
              praesentium! Perspiciatis, iure. Nihil ab obcaecati quae laborum
              odio quaerat dolor enim, mollitia pariatur.
            </p>
          </article>

          <article>
            <h2 className='sub-heading'>TRENDING GAMES</h2>
            {loading && <LoadingSpinner />}
            {data && <GamesGrid games={data} />}
            {error && <div>Error..</div>}
            {}
          </article>
        </div>
      </section>
    </>
  );
}
