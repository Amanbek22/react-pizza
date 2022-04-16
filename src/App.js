import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/header/Header.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Main from './pages/main/Main.jsx';
import About from './pages/about/About.jsx';
import Footer from './components/footer/Footer.jsx';
import { useEffect } from 'react';
import Admin from './pages/admin/Admin.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import CreatePizza from './pages/create-pizza/CreatePizza.jsx';
import { Api } from './api/Api.js';
import { pizzaApi } from './constants/api.js';
import { useDispatch } from "react-redux"
import { SET_PIZZAS } from './redux/actionTypes.js';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    Api.get(pizzaApi)
      .then((res) => {
        dispatch( {
          type: SET_PIZZAS,
          data: res.data
        })
      })
  }, [])

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
