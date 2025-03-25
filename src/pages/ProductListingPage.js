import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/productListingPage.css';

function ProductListingPage() {
  return (
    <>
      <Header />
      <div className="product-listing-page">
        <h1>Product Listing</h1>
        {/* Add other components here */}
      </div>
      <Footer />
    </>
  );
}

export default ProductListingPage;