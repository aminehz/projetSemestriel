import './App.css';
import SignIn from './components/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
  
     
     <Router>

<div className="App">
<Header/>
<Routes>
  <Route path="/" element={<SignIn/> } />
  
</Routes>
<Footer/>
</div>

     </Router>

     



    
  );
}

export default App;
