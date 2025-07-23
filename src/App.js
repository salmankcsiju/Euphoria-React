import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/nav';
import Footer from './Components/Footer';
import Home from './pages/Home';
import Product from './pages/product';


function App() {
  return (
    <Router>
      <div>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="product/:id" element={<Product />} />


          </Routes>
        </div>
        <Footer />

    </Router>
  );
}

export default App;
