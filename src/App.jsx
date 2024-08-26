import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './parts/Home/Home';
import Login from './parts/Home/Login';
import Register from './parts/Home/Register'
import Mainpage from './parts/Home/Mainpage'
import Wallet from './parts/Home/Wallet'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/Wallet" element={<Wallet />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;