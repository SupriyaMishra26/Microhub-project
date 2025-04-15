import React, { useState } from 'react';
import './Navbar.css';
import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import CartNotification from '../../Carts/Notification/CartNotification';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { cart, showNotification } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    if (searchOpen) setSearchOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  const handleAuthClick = () => {
    if (user) {
      logout();
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <CartNotification show={showNotification} />
      <nav className="navBar">
        <div className="logoLinkContainer">
          <Link to="/" className="logo">
            MICROHUB
          </Link>
          <div className="linkContainer">
            <Link to="/">HOME</Link>
            <Link to="/shop">SHOP</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
          </div>
        </div>
        <div className="iconContainer">
          <div className="searchContainer">
            <AiOutlineSearch className="searchIcon" onClick={toggleSearch} />
            <div className={`searchBar ${searchOpen ? 'open' : ''}`}>
              <input type="text" placeholder="Search..." />
              <AiOutlineSearch className="searchIcon-input" />
            </div>
          </div>
          <AiOutlineHeart />
          <div onClick={handleAuthClick} style={{ cursor: 'pointer' }}>
            <FiUser />
          </div>
          <div className="cartIcon">
            <Link to="/cart">
              <HiOutlineShoppingBag />
              {cartItemsCount > 0 && <span className="cartCount">{cartItemsCount}</span>}
            </Link>
          </div>
        </div>
      </nav>

      <div className="mobile-nav">
        <div className="mobile-nav-header">
          <div className="menu-toggle" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
          <div className="logo">microhub</div>
          <div className="mobile-icons">
            <div className={`mobile-search-container ${searchOpen ? 'open' : ''}`}>
              <input type="text" placeholder="Search..." />
              <FaTimes className="close-search" onClick={toggleSearch} />
            </div>
            <AiOutlineSearch onClick={toggleSearch} />
            <div className="cartIcon">
              <Link to="/cart">
                <HiOutlineShoppingBag />
                {cartItemsCount > 0 && <span className="cartCount">{cartItemsCount}</span>}
              </Link>
            </div>
          </div>
        </div>

        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link to="/" onClick={toggleMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" onClick={toggleMobileMenu}>
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMobileMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMobileMenu}>
                Contact
              </Link>
            </li>
            <li>
              <Link 
                to={user ? "#" : "/login"} 
                onClick={() => {
                  if (user) {
                    logout();
                  }
                  toggleMobileMenu();
                }}
              >
                {user ? 'Logout' : 'Login'}
              </Link>
            </li>
          </ul>

          <div className="socialIcons">
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;