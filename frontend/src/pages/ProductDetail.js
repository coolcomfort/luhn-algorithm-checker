import React, { useState } from "react";
import { useParams, Link } from "react-router-dom"; // Import Link
import { productList } from "./Products";
import PaymentPopup from "../components/PaymentPopUp";

const isOwned = (productName) => {
  return (
    localStorage.getItem(`product_${productName.toLowerCase()}`) === "purchased"
  );
};

function ProductDetail() {
  const { productName } = useParams();
  const formattedProductName = productName.replace(/-/g, " ");
  const [purchased, setPurchased] = useState(isOwned(formattedProductName));
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleBuyNow = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handlePaymentSubmit = (
    creditCardNumber,
    setErrorMessage,
    setSuccessMessage
  ) => {
    setLoading(true);
    console.log(creditCardNumber);
    fetch(process.env.validateRoute, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cardNumber: creditCardNumber }),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        if (data.message && data.message.startsWith("Success")) {
          localStorage.setItem(
            `product_${product.name.toLowerCase()}`,
            "purchased"
          );
          setSuccessMessage(`Congrats! You have purchased ${product.name}`);
          setPurchased(true);
        } else if (data.error) {
          setErrorMessage("Failed to validate credit card");
        } else {
          setErrorMessage("Payment failed. Please try again.");
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error:", error);
        setErrorMessage("Something went wrong. Please try again.");
      });
  };

  const product = productList.find(
    (p) => p.name.toLowerCase().replace(/ /g, "-") === productName
  );

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="box product-detail-box">
      <div className="navigation">
        <Link to="/products" className="back-btn">
          ← Back
        </Link>
      </div>
      <div className="product-detail-emoji">{product.emoji}</div>
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      {purchased ? (
        <span>You own {product.name}</span>
      ) : (
        <button onClick={() => handleBuyNow(product.name)}>Buy Now</button>
      )}

      {showPopup && (
        <PaymentPopup
          onClose={handleClosePopup}
          onSubmit={handlePaymentSubmit}
          loading={loading}
          setLoading={setLoading}
        />
      )}
    </div>
  );
}

export default ProductDetail;
