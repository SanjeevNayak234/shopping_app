import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FilterSidebar from '../components/FilterSidebar';
import ProductCard from '../components/ProductCard';


import '../styles/Homepage.css';

function HomePage() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [user, setUser] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    // Fetch products from API
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); // Initialize filtered products
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.title} added to cart!`);
  };

  const applyFilter = (filter) => {
    const filtered = products.filter((product) => product.category === filter);
    setFilteredProducts(filtered);
  };

  const handleSearch = (query) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="homepage">
      <Header
        cartItems={cart.length}
        onCartClick={() => setIsCartOpen(true)}
        onAccountClick={() => setIsAccountOpen(true)}
        onSearchClick={() => setIsSearchOpen(true)}
      />
      {isCartOpen && (
        <CartModal cart={cart} onClose={() => setIsCartOpen(false)} />
      )}
      {isAccountOpen && (
        <AccountModal user={user} onClose={() => setIsAccountOpen(false)} />
      )}
      {isSearchOpen && (
        <SearchModal onSearch={handleSearch} onClose={() => setIsSearchOpen(false)} />
      )}
      <div className="main-content">
        <FilterSidebar applyFilter={applyFilter} />
        <div className="product-section">
          <div className="product-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                />
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;