// styles
import "./Home.scss";

import Hero from "../../components/Hero";
import Background3 from "../../assets/img/bg3.jpg";
import useFetch from "../../hooks/useFetch";
import GamesGrid from "../../components/GamesGrid";
import LoadingSpinner from "../../components/LoadingSpinner";
import { Link } from "react-router-dom";

export default function Home() {
  const RAWG_KEY = "71806925a6f940ec8cf552ed24cf8b1a";

  const { data, error, loading } = useFetch(
    `https://api.rawg.io/api/games?key=${RAWG_KEY}&page_size=21&ordering=-released&metacritic=85,100`
  );

  return (
    <>
      <section className='home-page'>
        <div className='container'>
          <Hero
            src={Background3}
            message='Gamerz Shack'
            text='A React videogames database'
          />

          <article>
            <p className='paragraph'>
              Welcome to <span>GamerzShack</span>, a React video game database!
              Here you will find information on thousands of games across all
              platforms, including release dates, developer and publisher
              information, and user reviews. Whether you're a hardcore gamer or
              just a casual player, our easy-to-use website makes it simple to
              find the information you need. So start exploring, and discover
              your next favorite game today!
            </p>
          </article>

          <article>
            <h2 className='sub-heading'>TRENDING GAMES</h2>
            {loading && <LoadingSpinner />}
            {data && <GamesGrid games={data} />}
            {error && <div>Error..</div>}
            {}
          </article>

          <div className='margin-bot btn-container'>
            <button className='btn'>
              <Link to='/games'>EXPLORE GAMES</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
