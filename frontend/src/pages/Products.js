import React from "react";
import { Link } from "react-router-dom";

export const productList = [
  { id: 1, name: "Product A", price: "$100", emoji: "📱" },
  { id: 2, name: "Product B", price: "$200", emoji: "💻" },
  { id: 3, name: "Product C", price: "$300", emoji: "🖥" },
];

function Products() {
  return (
    <div className="box">
      <h2>Products</h2>
      <p>Check out our amazing products!</p>
      <ul className="product-list">
        {productList.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.name.toLowerCase().replace(/ /g, "-")}`}
          >
            <li className="product-item">
              <span className="product-emoji">{product.emoji}</span>
              <span className="product-name">{product.name}</span>
              <span className="product-price">{product.price}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Products;
