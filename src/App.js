import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Header from './components/header/Header.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Main from './pages/main/Main.jsx';
import About from './pages/about/About.jsx';
import Footer from './components/footer/Footer.jsx';
import { useEffect } from 'react';
import Admin from './pages/admin/Admin.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import CreatePizza from './pages/create-pizza/CreatePizza.jsx';
import { useDispatch, useSelector } from "react-redux"
import { getPizzaAC } from './redux/actionCreators.js';


const PrivateRoute = ( { Component } ) => {
  const auth = useSelector( (state) => state.auth.data?.token);

  if(!auth) {
    return <Navigate to="/admin" />
  } else {
    return <Component />
  }
}



function App() {
  const pending = useSelector((state) => state.pizza.pending)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPizzaAC())
  }, [dispatch])

  if (pending) {
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
          <Route path="/dashboard" element={<PrivateRoute Component={Dashboard} />} />
          <Route path="/create-pizza" element={<PrivateRoute Component={CreatePizza} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
