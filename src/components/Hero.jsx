import "./Hero.scss";

export default function Hero({ src, message, text }) {
  return (
    <section className='hero'>
      <img src={src} alt='' />
      <div className='overlay'>
        <div className='overlay-text'>
          <h3>{message}</h3>
          <p>{text}</p>
        </div>
      </div>
    </section>
  );
}
