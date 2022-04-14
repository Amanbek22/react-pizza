import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/header/Header.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Main from './pages/main/Main.jsx';
import About from './pages/about/About.jsx';
import Footer from './components/footer/Footer.jsx';
import { useEffect, useState } from 'react';
import Admin from './pages/admin/Admin.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import CreatePizza from './pages/create-pizza/CreatePizza.jsx';
import { Api } from './api/Api.js';
import { pizzaApi } from './constants/api.js';
import { useDispatch } from "react-redux"

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // const data = JSON.parse(localStorage.getItem("basket")) || [];

    Api.get(pizzaApi)
      .then((res) => {
        dispatch( {
          type: "SET_PIZZAS",
          data: res.data
        })
      })
  }, [])

  // useEffect(() => {
  //   localStorage.setItem("basket", JSON.stringify(basket))
  // }, [basket])

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-pizza" element={<CreatePizza />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
