import React from 'react';
import '../styles/productCard.css';

function ProductCard({ product, addToCart }) {
  return (
    <div className={`product-card ${product.stock === 0 ? 'out-of-stock' : ''}`}>
      <img src={product.image} alt={product.title} className="product-image" />
      <h4>{product.title}</h4>
      <p>${product.price.toFixed(2)}</p>
      {product.stock === 0 && <span className="stock-label">OUT OF STOCK</span>}
      <button 
        className="add-to-cart-btn" 
        onClick={() => addToCart(product)}
        disabled={product.stock === 0}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;