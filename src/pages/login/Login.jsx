import { useState } from "react";

// styles
import "./Login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className='login-page'>
      <div className='container'>
        <h1>LOGIN</h1>
        <p>WORK IN PROGRESS</p>

        <form className='login-form'>
          <button className='btn'>LOG IN</button>
        </form>
      </div>
    </div>
  );
}
