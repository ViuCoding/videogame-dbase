import { useState } from "react";
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

  // functions
  const handleSubmit = e => {
    e.preventDefault();
    signup(email, password, displayName);
  };

  return (
    <div className='signup-page'>
      <div className='container'>
        <form onSubmit={handleSubmit} className='signup-form'>
          <h1>
            Welcome to Gamerz<span className='color-accent'>Shack</span>
          </h1>
          <h2 className='sub-heading margin-bot'>Let's create your account!</h2>
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

          <label htmlFor='displayName'>
            Display Name:
            <input
              type='text'
              name='displayName'
              id='displayName'
              onChange={e => setDisplayName(e.target.value)}
            />
          </label>

          <button className='btn'>SIGN UP</button>
        </form>

        {error && <div>{error}</div>}
      </div>
    </div>
  );
}
