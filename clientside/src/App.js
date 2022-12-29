import './App.css';
import SignIn from './components/SignIn';
import Apropos from './components/Aprops';
import OffreStage from './components/OffreStage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Acceuil from "./components/Acceuil";
import Documents from "./components/Documents";
import Contact from "./components/Contact";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import HeaderSign from './components/layouts/HeaderSign';
import Certifications from './components/Certifications';
import React from 'react';
import Admin from './components/Admin';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<><HeaderSign/><SignIn /></>} />
         <Route path="/Acceuil" element={<> <Header /><Acceuil /></>} />
         <Route path="/Documents" element={<><Header/><Documents/></>} />
         <Route path="/Contact" element={<><Header/><Contact/></>} />
         <Route path="/apropos" element={<><Header/><Apropos/></>} />
         <Route path="/offredestage" element={<><Header/><OffreStage/></>} />
         <Route path="/certifications" element={<><Header/><Certifications/></>} />
         <Route path="/admin" element={<><Header/><Admin/></>} />
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
