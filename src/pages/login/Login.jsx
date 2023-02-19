import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

// styles
import "./Login.scss";

export default function Login() {
  //state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //imports
  const { login, error } = useLogin();

  //functions
  const handleSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className='login-page'>
      <div className='container'>
        <form className='login-form' onSubmit={handleSubmit}>
          <h1>Welcome back..</h1>
          <h2 className='sub-heading margin-bot'>Log in to your account!</h2>
          <label htmlFor='email'>
            Email
            <input
              type='email'
              name='email'
              id='email'
              onChange={e => setEmail(e.target.value)}
              required
            />
          </label>

          <label htmlFor='password'>
            Password
            <input
              type='password'
              name='password'
              id='password'
              onChange={e => setPassword(e.target.value)}
              required
            />
          </label>
          <button className='btn'>LOG IN</button>
        </form>

        {error && <div>{error}</div>}
      </div>
    </div>
  );
}
