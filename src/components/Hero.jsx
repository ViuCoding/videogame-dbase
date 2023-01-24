import "./Hero.scss";

export default function Hero({ src, message }) {
  return (
    <section className='hero'>
      <img src={src} alt='' />
      <div className='overlay'>
        <div className='overlay-text'>{message}</div>
      </div>
    </section>
  );
}
