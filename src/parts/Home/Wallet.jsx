import React from 'react';
import '../../Appp.css';

function App() {
  return (
    <div className="containerr">
      <div className="back-button">
        <a href="/mainpage"><button>&lt;</button></a>
      </div>
      <div className="wallett">
        Wallet
      </div>
      <div className="text-box">
        <h1 style={{backgroundColor:"transparent",color:"goldenrod",fontSize:"90px"}}>₹ 0</h1>
      </div>
      <div className="grid-container">
        <div className="grid-item">
            <h4 style={{backgroundColor:"transparent"}}>0</h4>
            <h4 style={{backgroundColor:"transparent"}}>Referrals</h4>
        </div>
        <div className="grid-item">
            <h4 style={{backgroundColor:"transparent"}}>₹ 0</h4>
            <h4 style={{backgroundColor:"transparent"}}>Bonus</h4>
        </div>
      </div>
      <div className="small-grid-container">
        <div className="small-grid-item" style={{backgroundColor:"green"}}>
            <h4 style={{backgroundColor:"transparent",color:"black"}}>ADD CASH</h4>
        </div>
        <div className="small-grid-item" style={{backgroundColor:"green"}}>
            <h4 style={{backgroundColor:"transparent",color:"black"}}>QR SCAN</h4>
        </div>
        <div className="small-grid-item" style={{backgroundColor:"red"}}>
            <h4 style={{backgroundColor:"transparent",color:"white"}}>WITHDRAW CASH</h4>
        </div>
      </div>
      <div className="bottom-bar">
      <h4 style={{backgroundColor:"transparent"}}>Deposite History</h4>
      </div>
    </div>
  );
}

export default App;
