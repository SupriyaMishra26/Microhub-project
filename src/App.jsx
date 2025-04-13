import './App.css';
import Navbar from './component/Header/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import SingleProduct from './Pages/SingleProduct';
import Cart from './Pages/Cart';
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <CartProvider>
        <ProductProvider>
          <div className="app">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<SingleProduct />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
            <Toaster position="top-right" />
          </div>
        </ProductProvider>
      </CartProvider>
    </Router>
  );
}

export default App;