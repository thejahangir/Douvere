import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import Ingredients from './pages/Ingredients';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;