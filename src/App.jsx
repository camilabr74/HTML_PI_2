// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import Button from './components/ButtonCTA/ButtonCTA.jsx'
import HomeCitizen from './pages/Citizen/HomeCitizen.jsx';
import ServicosAccordion from './pages/Citizen/ServiceSelection.jsx';
import AppRouter from "./routes/AppRoutes.jsx";
import Navbar from './components/Navbar/Navbar.jsx';

function App() {

  return (
    <AppRouter />
  )
}

export default App
