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

  console.log(data);

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
            <h2 className='sub-heading margin-bot'>TOP RATED GAMES</h2>
            {loading && <div>Loading...</div>}
            {data && <GamesGrid games={data} />}
            {error && <div>Error..</div>}
            {}
          </article>

          <article>
            <p className='paragraph'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
              praesentium! Perspiciatis, iure. Nihil ab obcaecati quae laborum
              odio quaerat dolor enim, mollitia pariatur vero voluptate quidem
              repudiandae exercitationem maxime sed doloremque cupiditate omnis
              numquam dolorem iusto provident qui, nobis iste! In maxime
              delectus, labore odio perspiciatis assumenda voluptatem aut neque
              sit voluptates tempora vitae voluptas accusamus reprehenderit,
              nemo optio soluta hic? Odio, ducimus dolor ea saepe deserunt vel
              reprehenderit maxime officiis? Sint quidem autem officiis earum
              nobis nostrum ad rerum quia sequi similique a atque facilis, nemo
              ipsa alias quo? Quisquam quod non officiis beatae consequatur nam
              saepe est repudiandae!
            </p>
          </article>

          <article>
            <p className='paragraph'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
              praesentium! Perspiciatis, iure. Nihil ab obcaecati quae laborum
              odio quaerat dolor enim, mollitia pariatur vero voluptate quidem
              repudiandae exercitationem maxime sed doloremque cupiditate omnis
              numquam dolorem iusto provident qui, nobis iste! In maxime
              delectus, labore odio perspiciatis assumenda voluptatem aut neque
              sit voluptates tempora vitae voluptas accusamus reprehenderit,
              nemo optio soluta hic? Odio, ducimus dolor ea saepe deserunt vel
              reprehenderit maxime officiis? Sint quidem autem officiis earum
              nobis nostrum ad rerum quia sequi similique a atque facilis, nemo
              ipsa alias quo? Quisquam quod non officiis beatae consequatur nam
              saepe est repudiandae!
            </p>
          </article>

          <article>
            <p className='paragraph'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
              praesentium! Perspiciatis, iure. Nihil ab obcaecati quae laborum
              odio quaerat dolor enim, mollitia pariatur vero voluptate quidem
              repudiandae exercitationem maxime sed doloremque cupiditate omnis
              numquam dolorem iusto provident qui, nobis iste! In maxime
              delectus, labore odio perspiciatis assumenda voluptatem aut neque
              sit voluptates tempora vitae voluptas accusamus reprehenderit,
              nemo optio soluta hic? Odio, ducimus dolor ea saepe deserunt vel
              reprehenderit maxime officiis? Sint quidem autem officiis earum
              nobis nostrum ad rerum quia sequi similique a atque facilis, nemo
              ipsa alias quo? Quisquam quod non officiis beatae consequatur nam
              saepe est repudiandae!
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
