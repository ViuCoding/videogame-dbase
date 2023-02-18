import { useState } from "react";

// styles
import "./Signup.scss";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className='signup-page'>
      <div className='container'>
        <h1>SIGNUP</h1>
        <p>WORK IN PROGRESS</p>

        <form className='signup-form'>
          <button className='btn'>SIGN UP</button>
        </form>
      </div>
    </div>
  );
}
