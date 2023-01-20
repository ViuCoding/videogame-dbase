// styles
import "./Home.scss";

import Hero from "../../components/Hero";
import Background1 from "../../assets/img/bg1.jpg";
import useFetch from "../../hooks/useFetch";
import GamesGrid from "../../components/GamesGrid";

export default function Home() {
  const { data, error, loading } = useFetch(
    "https://api.rawg.io/api/games?key=71806925a6f940ec8cf552ed24cf8b1a&page=1&ordering=-released&metacritic=85,100"
  );


  return (
    <>
      <section className='home-page'>
        <div className='container'>
          <h1 className='page-heading'>HOME PAGE</h1>

          <Hero src={Background1} message='Join the Empire' />

          <article>
            <p className='paragraph'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
              praesentium! Perspiciatis, iure. Nihil ab obcaecati quae laborum
              odio quaerat dolor enim, mollitia pariatur.
            </p>
          </article>

          <article>
            {loading && <div>Loading...</div>}
            {data && <GamesGrid games={data} />}
            {error && <div>Error..</div>}
            {}
          </article>

        </div>
      </section>
    </>
  );
}
