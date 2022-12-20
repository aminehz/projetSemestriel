import "./App.css";
import SignIn from "./components/SignIn";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Acceuil from "./components/Acceuil";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignIn />} />
         <Route path="/Acceuil" element={<> <Header /><Acceuil /></>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
