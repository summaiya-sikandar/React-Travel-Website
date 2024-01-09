import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact  Component={Home}/>
        <Route path='/products' exact  Component={Products}/>
        <Route path='/services' exact  Component={Services}/>
        <Route path='/sign-up' exact  Component={SignUp}/>
      </Routes>
      <Footer></Footer>
    </Router>
   
    </>
  );
}

export default App;
