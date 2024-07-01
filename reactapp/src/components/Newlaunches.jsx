// src/components/ProductListing.js

import React, { useState } from 'react';
import "./Newlaunches.css";



const products = [
  {
    id: 1,
    name: 'Hand Sanitizer',
    rating: '* * * * *',
    price: '8,90 €',
    imgSrc: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2Fparent1stcard_2.jpg%3Fv%3D1695742994&w=256&q=75',
    hoverImgSrc: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2Fparent1stcard_2.jpg%3Fv%3D1695742994&w=256&q=75',
    status: 'In stock'
  },
  {
    id: 2,
    name: 'Hand Sanitizer Wood Night',
    rating: '* * * * *',
    price: '8,90 €',
    imgSrc: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2Fparent1stcard_2.jpg%3Fv%3D1695742994&w=256&q=75',
    hoverImgSrc: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2Fparent1stcard_2.jpg%3Fv%3D1695742994&w=256&q=75',
    status: 'In stock'
  },
  {
    id: 3,
    name: 'Hand Sanitizer Wood Night',
    rating: '* * * * *',
    price: '8,90 €',
    imgSrc: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2Fparent1stcard_2.jpg%3Fv%3D1695742994&w=256&q=75',
    hoverImgSrc: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2Fparent1stcard_2.jpg%3Fv%3D1695742994&w=256&q=75',
    status: 'In stock'
  },
  {
    id: 4,
    name: 'Hand Sanitizer Wood Night',
    rating: '* * * * *',
    price: '8,90 €',
    imgSrc: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2Fparent_image.jpg%3Fv%3D1685637553&w=256&q=75',
    hoverImgSrc: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2Fparent_image.jpg%3Fv%3D1685637553&w=256&q=75', 
    status: 'Sold Out'
  },
  {
    id: 5,
    name: 'Hand Sanitizer Wood Night',
    rating: '* * * * *',
    price: '8,90 €',
    imgSrc: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2Fparent_image.jpg%3Fv%3D1685637553&w=256&q=75',
    hoverImgSrc: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2Fparent_image.jpg%3Fv%3D1685637553&w=256&q=75', 
    status: 'In stock'
  },
  {
    id: 6,
    name: 'Hand Sanitizer Wood Night',
    rating: '* * * * *',
    price: '8,90 €',
    imgSrc: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2Fparent_image.jpg%3Fv%3D1685637553&w=256&q=75',
    hoverImgSrc: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2Fparent_image.jpg%3Fv%3D1685637553&w=256&q=75', 
    status: 'In stock'
  },
  {
    id: 7,
    name: 'Hand Sanitizer Wood Night',
    rating: '* * * * *',
    price: '8,90 €',
    imgSrc: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FParent.jpg%3Fv%3D1695829021&w=256&q=75',
    hoverImgSrc: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FParent.jpg%3Fv%3D1695829021&w=256&q=75',
    status: 'In stock'
  },
  {
    id: 8,
    name: 'Hand Sanitizer Wood Night',
    rating: '* * * * *',
    price: '8,90 €',
    imgSrc: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FParent.jpg%3Fv%3D1695829021&w=256&q=75',
    hoverImgSrc: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FParent.jpg%3Fv%3D1695829021&w=256&q=75',
    status: 'In stock'
  },
  {
    id: 9,
    name: 'Hand Sanitizer Wood Night',
    rating: '* * * * *',
    price: '8,90 €',
    imgSrc: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FParent.jpg%3Fv%3D1695829021&w=256&q=75',
    hoverImgSrc: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FParent.jpg%3Fv%3D1695829021&w=256&q=75',
    status: 'In stock'
  },
  {
    id: 10,
    name: 'Hand Sanitizer Wood Night',
    rating: '* * * * *',
    price: '8,90 €',
    imgSrc: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2Fsugar-cosmetics-lipping-on-the-edge-lip-liner-01-taffeta-terracotta-13278188568659.jpg%3Fv%3D1619109027&w=256&q=75',
    hoverImgSrc: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2Fsugar-cosmetics-lipping-on-the-edge-lip-liner-01-taffeta-terracotta-13278188568659.jpg%3Fv%3D1619109027&w=256&q=75',
    status: 'In stock'
  },
  {
    id: 11,
    name: 'Hand Sanitizer Wood Night',
    rating: '* * * * *',
    price: '8,90 €',
    imgSrc: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FArtboard1.jpg%3Fv%3D1676035816&w=256&q=75',
    hoverImgSrc: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FArtboard1.jpg%3Fv%3D1676035816&w=256&q=75',
    status: 'In stock'
  },
  {
    id: 12,
    name: 'Hand Sanitizer Wood Night',
    rating: '* * * * *',
    price: '8,90 €',
    imgSrc: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F599125845-01.jpg%3Fv%3D1711208074&w=256&q=75',
    hoverImgSrc: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F599125845-01.jpg%3Fv%3D1711208074&w=256&q=75',
    status: 'In stock'
  },
  {
    id: 13,
    name: 'Hand Sanitizer Wood Night',
    rating: '* * * * *',
    price: '8,90 €',
    imgSrc: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2Fsugar-cosmetics-mettle-liquid-lipstick-01-lyra-cool-toned-plum-13200549380179.jpg%3Fv%3D1619110238&w=256&q=75',
    hoverImgSrc: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2Fsugar-cosmetics-mettle-liquid-lipstick-01-lyra-cool-toned-plum-13200549380179.jpg%3Fv%3D1619110238&w=256&q=75',
    status: 'In stock'
  },
  {
    id: 14,
    name: 'Hand Sanitizer Wood Night',
    rating: '* * * * *',
    price: '8,90 €',
    imgSrc: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FSeal-The-Show-Lip-Primer-PDP-Images.jpg%3Fv%3D1690904074&w=256&q=75',
    hoverImgSrc: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FSeal-The-Show-Lip-Primer-PDP-Images.jpg%3Fv%3D1690904074&w=256&q=75',
    status: 'In stock'
  },
  {
    id: 15,
    name: 'Hand Sanitizer Wood Night',
    rating: '* * * * *',
    price: '8,90 €',
    imgSrc: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FTransferproofMatteLipstick_KajalCombo-WBG01KV.jpg%3Fv%3D1713542674&w=256&q=75',
    hoverImgSrc: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FTransferproofMatteLipstick_KajalCombo-WBG01KV.jpg%3Fv%3D1713542674&w=256&q=75',
    status: 'In stock'
  },
  {
    id: 16,
    name: 'Hand Sanitizer Wood Night',
    rating: '* * * * *',
    price: '8,90 €',
    imgSrc: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FArtboard1.jpg%3Fv%3D1676035816&w=256&q=75',
    hoverImgSrc: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FArtboard1.jpg%3Fv%3D1676035816&w=256&q=75',
    status: 'Sold out'
  },
  
  {
    id: 17,
    name: 'Hand Sanitizer Wood Night',
    rating: '* * * * *',
    price: '8,90 €',
    imgSrc: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FArtboard1.jpg%3Fv%3D1676035816&w=256&q=75',
    hoverImgSrc: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FArtboard1.jpg%3Fv%3D1676035816&w=256&q=75',
    status: 'Sold out'
  },
  
  {
    id: 18,
    name: 'Hand Sanitizer Wood Night',
    rating: '* * * * *',
    price: '8,90 €',
    imgSrc: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FArtboard1.jpg%3Fv%3D1676035816&w=256&q=75',
    hoverImgSrc: 'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FArtboard1.jpg%3Fv%3D1676035816&w=256&q=75',
    status: 'Sold out'
  },
];

const Newlaunches = () => {
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('All');
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);

  const productsPerPage = 9;

  // Filter products based on the selected filter
  const filteredProducts = products.filter((product) => {
    if (filter === 'All') return true;
    if (filter === 'In stock') return product.status === 'In stock';
    if (filter === 'Sold Out') return product.status === 'Sold Out';
    return true;
  });

  // Calculate the total number of pages for the filtered products
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Get the products for the current page
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  // Handle page click
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle filter change
  const handleFilterChange = (filter) => {
    setFilter(filter);
    setCurrentPage(1); // Reset to the first page when the filter changes
  };

  // Handle adding to cart
  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Handle quantity change
  const handleQuantityChange = (productId, quantity) => {
    if (quantity <= 0) {
      setCart(cart.filter((item) => item.id !== productId));
    } else {
      setCart(
        cart.map((item) =>
          item.id === productId ? { ...item, quantity: quantity } : item
        )
      );
    }
  };

  // Handle errors
  const handleError = (message) => {
    setError(message);
    setTimeout(() => setError(null), 3000); // Hide error after 3 seconds
  };

  return (

    <div className="container">
      <div className="filter-buttons">
        <button onClick={() => handleFilterChange('All')} className={filter === 'All' ? 'active' : ''}>
          All
        </button>
        <button onClick={() => handleFilterChange('In stock')} className={filter === 'In stock' ? 'active' : ''}>
          In stock
        </button>
        <button onClick={() => handleFilterChange('Sold Out')} className={filter === 'Sold Out' ? 'active' : ''}>
          Sold Out
        </button>
      </div>

      <div className="content">
        <div className="product-listing">
          {currentProducts.map((product) => (
            <div
              className="product-card"
              key={product.id}
              onMouseEnter={() => setHoveredProductId(product.id)}
              onMouseLeave={() => setHoveredProductId(null)}
            >
              <img
                src={hoveredProductId === product.id ? product.hoverImgSrc : product.imgSrc}
                alt={product.name}
              />
              <h2>{product.name}</h2>
              <p>{product.rating}</p>
              <p>{product.price}</p>
              {product.status === 'Sold Out' ? (
                <button disabled>Sold Out</button>
              ) : (
                <button onClick={() => handleAddToCart(product)}>Add to cart</button>
              )}
            </div>
          ))}
        </div>

        <div className="cart-container">
          <Cart cart={cart} onQuantityChange={handleQuantityChange} error={error} handleError={handleError} />
        </div>

      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageClick={handlePageClick} />
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, onPageClick }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button onClick={() => onPageClick(currentPage - 1)} disabled={currentPage === 1}>
        &lt;
      </button>
      {pageNumbers.map((number) => (
        <button key={number} onClick={() => onPageClick(number)} className={currentPage === number ? 'active' : ''}>
          {number}
        </button>
      ))}
      <button onClick={() => onPageClick(currentPage + 1)} disabled={currentPage === totalPages}>
        &gt;
      </button>
    </div>
  );
};

const Cart = ({ cart, onQuantityChange, error, handleError }) => {
  const handleIncrement = (product) => {
    onQuantityChange(product.id, product.quantity + 1);
  };

  const handleDecrement = (product) => {
    if (product.quantity === 1) {
      handleError('Quantity cannot be less than 1');
    } else {
      onQuantityChange(product.id, product.quantity - 1);
    }
  };

  const handleRemove = (product) => {
    onQuantityChange(product.id, 0);
  };

  return (
    <div className="cart">
      <h2></h2>
      {cart.length === 0 ? (
        <p></p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.imgSrc} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <div className="quantity-control">
                  <button onClick={() => handleDecrement(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item)}>+</button>
                </div>
                <button onClick={() => handleRemove(item)} className="remove-button">
                  Remove
                </button>
              </div>
              <p>{(parseFloat(item.price.replace('€', '').replace(',', '.')) * item.quantity).toFixed(2)} €</p>
            </li>
          ))}
        </ul>
      )}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Newlaunches;