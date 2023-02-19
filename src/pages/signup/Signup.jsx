import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../../hooks/useSignup";

// styles
import "./Signup.scss";

export default function Signup() {
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  // imports
  const { signup, error } = useSignup();
  const navigate = useNavigate();

  // functions
  const handleSubmit = e => {
    e.preventDefault();
    signup(email, password, displayName);
    navigate("/");
  };

  return (
    <div className='signup-page'>
      <div className='container'>
        <h1>SIGNUP</h1>

        <form onSubmit={handleSubmit} className='signup-form'>
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

          <label htmlFor='displayName'>
            Display Name:
            <input
              type='text'
              name='displayName'
              id='displayName'
              onChange={e => setDisplayName(e.target.value)}
            />
          </label>

          <p>
            {email} {password} {displayName}
          </p>
          <button className='btn'>SIGN UP</button>
        </form>

        {error && <div>{error}</div>}
      </div>
    </div>
  );
}
