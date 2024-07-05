import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";

const Products = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-orange-600 mb-8">Products</h1>
      <ul className="grid grid-cols-1 gap-4">
        {PRODUCTS.map((product) => (
          <li key={product.id} className="bg-white shadow-md rounded-lg p-4">
            <Link
              to={`/products/${product.id}`}
              className="text-xl font-semibold text-orange-600 hover:text-orange-800"
            >
              {product.name}
            </Link>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <p className="text-lg font-bold text-orange-600">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Category: {product.category}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
