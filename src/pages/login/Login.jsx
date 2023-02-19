import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

// styles
import "./Login.scss";

export default function Login() {
  //state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //imports
  const { login, error } = useLogin();
  const navigate = useNavigate();

  //functions
  const handleSubmit = e => {
    e.preventDefault();
    login(email, password);
    navigate("/");
  };

  return (
    <div className='login-page'>
      <div className='container'>
        <h1>LOGIN</h1>

        <form className='login-form' onSubmit={handleSubmit}>
          <label htmlFor='email'>
            Email
            <input
              type='email'
              name='email'
              id='email'
              onChange={e => setEmail(e.target.value)}
            />
          </label>

          <label htmlFor='password'>
            Password
            <input
              type='password'
              name='password'
              id='password'
              onChange={e => setPassword(e.target.value)}
            />
          </label>
          <button className='btn'>LOG IN</button>
        </form>

        {error && <div>{error}</div>}
      </div>
    </div>
  );
}
