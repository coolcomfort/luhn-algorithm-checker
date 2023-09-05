import React, { useState } from "react";

function PaymentPopup({ onClose, onSubmit, loading, setLoading }) {
  const [creditCard, setCreditCard] = useState(""); // credit card
  const [errorMessage, setErrorMessage] = useState(""); // error message on submit
  const [successMessage, setSuccessMessage] = useState(""); // success message on submit

  const handleSubmit = () => {
    setLoading(true);
    onSubmit(creditCard, setErrorMessage, setSuccessMessage); // pass setters for functionality
  };

  // close modal by clicking outside
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("popup-overlay")) {
      // reset error/success messages so it wont appear when opening again
      setErrorMessage("");
      setSuccessMessage("");
      onClose();
    }
  };

  return (
    <div className="popup-overlay" onClick={handleOutsideClick}>
      <div className="popup">
        <button onClick={onClose} className="close-btn">
          X
        </button>
        {successMessage ? (
          <div className="success-message">{successMessage}</div>
        ) : (
          <>
            <h2>Enter Credit Card Details</h2>
            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
            <input
              type="text"
              placeholder="Credit Card Number"
              value={creditCard}
              onChange={(e) => setCreditCard(e.target.value)}
            />
            <button onClick={handleSubmit} className="submit-btn">
              Submit
            </button>
            <div className="card-info">
              <div className="valid-card">
                <span className="card-title">Valid credit card:</span>{" "}
                4532015112830366
              </div>
              <div className="invalid-card">
                <span className="card-title">Invalid credit card:</span>{" "}
                4532015112830367
              </div>
            </div>
            {loading && (
              <div className="loader-overlay">
                <div className="loader"></div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default PaymentPopup;
