import React, { useState } from 'react';
import '../../Appp.css';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Succesfully Register");
      getdata(e); // Call getdata function here
    } catch (err) {
      console.log(err);
    }
  };

  const getdata = async (e) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name }),
    };
    try {
      const res = await fetch('https://sattacompany-947aa-default-rtdb.firebaseio.com/UserData.json', options);
      if (res.ok) {
        console.log('Message sent');
      } else {
        console.log('Error');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mainlogin">
      <div className="first">
        <a href="/"><button>&lt;</button></a>
        <h6>Register & Play</h6>
      </div>
      <div className="second">
        <h4>WELCOME TO VB</h4>
      </div>
      <div className="loginthird">
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="Email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="text" placeholder="Referrel Code" />
          <p>
            <input type="checkbox" />
            By signing up, I accept the Terms and conditions of the company
          </p>
          <h4>have an account? <a href="Login">Login</a></h4>
          <button type="Submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;