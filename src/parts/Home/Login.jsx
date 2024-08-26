import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('logged in');
      navigate('/mainpage', { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mainlogin">
      <div className="first">
        <a href="/register">
          <button>&lt;</button>
        </a>
        <h6>Login</h6>
      </div>
      <div className="second">
        <h4>WELCOME TO VB</h4>
      </div>
      <div className="third">
        <form action="" onSubmit={handleSubmit}>
          <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
          <a href="">Forgot password?</a>
          <button className="btn-2-third" type="submit">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;