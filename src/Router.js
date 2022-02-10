import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detailpage from './pages/Detailpage/Detailpage';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Mainpage/Main';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Cart from './pages/Cart/Cart';
import OrderComplete from './pages/OrderComplete/OrderComplete';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/mentor" element={<Main />} />
        <Route path="/company" element={<Main />} />
        <Route path="/school" element={<Main />} />
        <Route path="/covid" element={<Main />} />
        <Route path="/randombox" element={<Main />} />
        <Route path="/commnuity" element={<Main />} />
        <Route path="/products/:id" element={<Detailpage />} />
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/complete" element={<OrderComplete />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
