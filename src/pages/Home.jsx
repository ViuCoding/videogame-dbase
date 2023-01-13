import Hero from "../components/Hero";
import Background1 from "../assets/img/bg1.jpg";

import { useLoaderData } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import Testimonials from "../components/Testimonials";

export default function Home() {
  const { ref: testimonialRef, inView: testimonialVisible } = useInView();
  console.log(testimonialVisible);

  const testimonials = useLoaderData();

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

          <div
            className={`pos-relative ${testimonialVisible ? "visible" : ""}`}
            ref={testimonialRef}>
            <article
              className={`testimonials ${testimonialVisible ? "visible" : ""}`}>
              <h2 className='sub-heading margin-bot'>Testimonials</h2>
              <Testimonials testimonials={testimonials} />
            </article>
          </div>

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

export const testimonialsLoader = async () => {
  const URL = "https://testimonialapi.toolcarton.com/api";
  const res = await fetch(URL);
  const data = await res.json();

  return data;
};
