import React from 'react'
import '../../Appp.css';
import Logo from '../../images/logo.png'
const Home = () => {
  return (
    <>
    <div className="mainreg">
      <img src={Logo} alt="" />
    <div className="securelogin">
        <a href="/register"><button>Register</button></a>
        <div className="secure2">
            <a href="">Invited By a friend</a>
            <p>Already a User? <a href="/login">Login</a></p>
        </div>
    </div>
 </div>
 </>
  )
}

export default Home