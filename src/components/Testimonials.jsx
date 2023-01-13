
export default function Testimonials({ testimonials }) {


  const testimonialElement = testimonials.map(testi => {
    return (
      <div className='testimonial margin-bot' key={testi.id}>
        <h3 className='testimonial-name' >
          {testi.name}{" "}
          <span className='testimonial-location'>{testi.location}</span>{" "}
        </h3>

        <p className='testimonial-designation'>{testi.designation}</p>

        <div className='row'>
          <img
            src={testi.avatar}
            alt={testi.name}
            className='testimonial-img'
          />

          <p className='testimonial-msg'>{testi.message}</p>
        </div>
      </div>
    );
  });

  return <>{testimonialElement}</>;
}
