import React from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../data/products";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = PRODUCTS.find(
    (product) => product.id === parseInt(productId)
  );

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="text-orange-600 text-center font-semibold text-3xl">
          Product not found.
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-orange-600 mb-4">
        {product.name}
      </h1>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-lg font-bold text-orange-600">
        ${product.price.toFixed(2)}
      </p>
      <p className="text-sm text-gray-500 mt-2">Category: {product.category}</p>
    </div>
  );
};

export default ProductDetails;
