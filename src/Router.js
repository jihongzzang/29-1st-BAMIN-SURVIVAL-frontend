import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Mainpage/Main';
import Detailpage from './pages/Detailpage/Detailpage';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Cart from './pages/Cart/Cart';
import OrderComplete from './pages/OrderComplete/OrderComplete';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} exact={true} />
        <Route path="/products/:id" element={<Detailpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/complete" element={<OrderComplete />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
