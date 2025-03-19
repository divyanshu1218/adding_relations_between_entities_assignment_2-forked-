import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";

// Import local images
import product1Image from "./assets/ghidorah.png";
import product2Image from "./assets/shopping.png";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      description: "This is product 1",
      image: product1Image, // Use imported image
      avgRating: 0,
      totalRatings: 0,
    },
    {
      id: 2,
      name: "Product 2",
      description: "This is product 2",
      image: product2Image, // Use imported image
      avgRating: 0,
      totalRatings: 0,
    },
  ]);

  const handleRatingSubmit = (productId, newRating) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? {
              ...product,
              avgRating:
                (product.avgRating * product.totalRatings + newRating) /
                (product.totalRatings + 1),
              totalRatings: product.totalRatings + 1,
            }
          : product
      )
    );
  };

  return (
    <div className="app">
      <h1>Product Ratings</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onRatingSubmit={handleRatingSubmit}
          />
        ))}
      </div>
    </div>
  );
};

export default App;