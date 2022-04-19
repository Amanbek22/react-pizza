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
import { useDispatch, useSelector } from "react-redux"
import { ACsetPending, ACsetPizza } from './redux/actionCreators.js';


function App() {
  const pending = useSelector( (state) => state.pizza.pending )
  const dispatch = useDispatch();

  useEffect(() => {
    Api.get(pizzaApi)
      .finally(() => {
        dispatch( ACsetPending() )
      })
      .then((res) => {
        dispatch( ACsetPizza(res.data) )
      })
  }, [dispatch])

  if(pending) {
    return <h1>Loading...</h1>
  }
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
