import { Link } from "react-router-dom";
import NotFoundImg from "../assets/img/404.jpg";

export default function NotFound() {
  return (
    <>
      <section className='not-fount-page'>
        <div className='container'>
          <h1 className='page-heading'>SORRY, PAGE NOT FOUND.</h1>
          <div className='error-img__container'>
            <img src={NotFoundImg} alt='' />
            <div className='overlay'>
              <div className='overlay-text'>
                Go back to the <Link to='/'>homepage.</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
