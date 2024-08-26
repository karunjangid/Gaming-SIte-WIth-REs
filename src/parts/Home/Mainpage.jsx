import React, { useState } from "react";
import "../../Appp.css";
import Logo from '../../images/logo.png' 
import { FaWallet,FaTrophy,FaChartArea  } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GrTransaction } from "react-icons/gr";
import { RiShareLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { SiSimpleanalytics } from "react-icons/si";


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container">
      <header className="header">
        <div className="hamburger-menu" onClick={toggleMenu}>
        <GiHamburgerMenu  style={{fontSize:"30px"}}/>
        </div>
        <div className="logo"><img src={Logo} alt="" style={{height:"62px"}} /></div>
        <a href="/Wallet"><div className="wallet">₹ 0/- <br /><FaWallet /> Wallet</div></a>
      </header>

      {isMenuOpen && (
        <nav className="dropdown-menu">
          <ul>
            <img src={Logo} alt="" />
            <li style={{marginLeft:"55px"}}>Veer Bhai Satta</li>
            <li style={{marginLeft:"74px"}}>8619448841</li>
            <br />
            ---------------------------------------------------
            <br />
            <br />
            <br />
            <li><FaHome style={{background:"black"}}/> Home</li>
            <li><VscWorkspaceTrusted style={{background:"black"}} />Company trust Profile</li>
            <li><GrTransaction style={{background:"black"}}/>Transaction History</li>
            <li><RiShareLine style={{background:"black"}}/>Share</li>
            <a href="/"><li><FiLogOut style={{background:"black"}}/>Logout</li></a>
          </ul>
        </nav>
      )}

      <main className="main-content">
        <div className="content-section1">
          <marquee behavior="" direction="">यदि आप पैसे जोड़ना या निकालना चाहते हैं तो आप बस घंटी आइकन पर टैप कर सकते हैं और फोनपे, जीपे आदि भी उपलब्ध हैं</marquee>
          <h3 style={{backgroundColor:"rgb(144, 0, 0)"}}>(Veer Bhai)</h3>
          <h5 style={{backgroundColor:"rgb(144, 0, 0)"}}>Rs. 0/-</h5>
          <a href="" style={{backgroundColor:"rgb(144, 0, 0)"}}>wallet balance</a>
          <p style={{backgroundColor:"rgb(144, 0, 0)"}}>Whatsapp Help number (+91 8619448841)</p>
        </div>
        <div className="content-section2">
            <h1 style={{backgroundColor:"white",color:"black"}}>TAJ</h1>
            <h2 style={{backgroundColor:"white",color:"black"}}>81</h2>
            <br />
            <h3 style={{backgroundColor:"white",color:"black"}}>03:00pm</h3>
            <h3 style={{backgroundColor:"white",color:"black"}}>2024-08-26</h3>
            <br />
            <br />
            <marquee behavior="" direction="" style={{backgroundColor:"rgb(144, 0, 0)"}}>यदि आप अपनी जीत की राशि जोड़ना और निकालना चाहते हैं तो आप बस वॉलेट या वॉलेट बैलेंस के माध्यम से जा सकते हैं</marquee>
        </div>
      </main>

        <ul  className="footer">
          <li className="footer-item"><FaHome style={{backgroundColor:"rgb(35, 33, 33)"}}/>Home</li>
          <li className="footer-item"><SiSimpleanalytics style={{backgroundColor:"rgb(35, 33, 33)"}}/>Play</li>
          <li className="footer-item"><FaTrophy style={{backgroundColor:"rgb(35, 33, 33)"}}/>My match</li>
          <li className="footer-item"><FaWallet style={{backgroundColor:"rgb(35, 33, 33)"}}/>Wallet</li>
          <li className="footer-item"><FaChartArea style={{backgroundColor:"rgb(35, 33, 33)"}}/>Chart</li>
        </ul>
    </div>
  );
};

export default App;
