import React, { useState } from "react";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import "../styles/Header.css";

function Header({ cartItems, onCartClick, onSearchClick }) {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false); // Toggle between Sign-Up and Sign-In forms
  const [user, setUser] = useState(null);

  const toggleAuthModal = () => {
    setIsAuthModalOpen(!isAuthModalOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">DISCOVER OUR PRODUCTS</h1>
        <nav>
          <a href="/">SHOP</a>
          <a href="/skills">SKILLS</a>
          <a href="/stories">STORIES</a>
          <a href="/about">ABOUT</a>
          <a href="/contact">CONTACT US</a>
        </nav>
        <div className="header-actions">
          <select className="language-select">
            <option value="en">EN</option>
            <option value="fr">FR</option>
          </select>
          <input type="text" placeholder="Search products..." className="search-input" />
          <button className="icon-btn" onClick={onSearchClick}>
            🔍
          </button>
          <button className="icon-btn" onClick={toggleAuthModal}>
            {user ? `👤 ${user.email}` : "👤 Login"}
          </button>
          <button className="icon-btn" onClick={onCartClick}>
            🛒 {cartItems} items
          </button>
        </div>
      </div>
      {isAuthModalOpen && (
        <div className="auth-modal-container">
          {showSignUp ? (
            <SignUp onClose={toggleAuthModal} />
          ) : (
            <SignIn onClose={toggleAuthModal} setUser={setUser} />
          )}
          <button onClick={() => setShowSignUp(!showSignUp)}>
            {showSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;