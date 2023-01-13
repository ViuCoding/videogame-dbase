// styles
import "./Support.scss";

export default function Support() {
  return (
    <section className='support-page'>
      <h2 className='sub-heading margin-bot'>SUPPORT PAGE</h2>

      <article>
        <form className='support-form'>
          <label htmlFor='fname'>
            First name:
            <input type='text' name='fname' id='fname' />
          </label>
          <label htmlFor='lname'>
            Last name:
            <input type='text' name='lname' id='lname' />
          </label>
          <label htmlFor='form-question'>
            What's on your mind?
            <textarea name='form-question' id='form-question'></textarea>
          </label>

          <button className='btn'>Submit</button>
        </form>
      </article>
    </section>
  );
}
