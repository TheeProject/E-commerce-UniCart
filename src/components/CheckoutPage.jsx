import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { faCcPaypal, faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { CartContext } from "../Authentication/CartContext";
// import { OrderContext } from "../Authentication/OrderContext";

// const ProductCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   width: 50%; /* Full width on mobile */
//   max-width: 200px;
//   height: auto;
//   margin: 15px;
//   padding: 15px;
//   border: 1px solid #333;
//   border-radius: 10px;

//   @media (min-width: 768px) {
//     /* Adjust to larger size on bigger screens */
//     width: 200px;
//   }

//   img {
//     max-width: 100%;
//     max-height: 100px; /* Limit image height */
//     height: auto;
//     object-fit: contain; /* Ensure the entire image is visible */
//   }

//   h2 {
//     margin: 10px 0;
//     font-size: 16px;
//     font-weight: bold;
//   }

//   button {
//     background-color: orange;
//     color: white;
//     padding: 5px 10px;
//     text-align: center;
//     text-decoration: none;
//     display: inline-block;
//     font-size: 14px;
//     margin: 2px 2px;
//     cursor: pointer;
//   }
// `;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const MainContent = styled.div`
  flex: 1;
  background-color: #f2f2f2;
`;

const OrderContainer = styled.div`
  flex: 1;
`;

// const OrderSummary = styled.div`
//   background-color: #f2f2f2;
// `;

// const BagSummary = styled.div`
//   background-color: #f8f8f8;
// `;

const PaymentMethods = styled.div`
  /* Additional styles if needed */
`;

const PaymentMethodLabel = styled.label`
  display: block;
  cursor: pointer;
  background-color: orange;
`;

const CheckoutPage = () => {
	const { cartProducts, setCartProducts } = useContext(CartContext);
  
	// State for customer details
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [city, setCity] = useState("");
	const [postalCode, setPostalCode] = useState("");
	const [streetAddress, setStreetAddress] = useState("");
	const [paymentMode, setPaymentMode] = useState("Mpesa");


	// Function to calculate the total amount
	const calculateTotalAmount = () => {
		return cartProducts.reduce(
		  (total, item) => total + item.unit_price * item.quantity,
		  0
		);
	  };
  
	// Function to remove an item from the cart
	const removeFromCart = (index) => {
	  const newCart = cartProducts.filter((_, idx) => idx !== index);
	  setCartProducts(newCart);
	};
  
	// Check if all required fields are filled
	const isFormComplete =
	  firstName &&
	  lastName &&
	  phoneNumber &&
	  email &&
	  city &&
	  postalCode &&
	  streetAddress;
  
	// Handle checkout
	const handleCheckout = () => {
	  if (!isFormComplete) {
		alert("Please fill all required fields before proceeding.");
		return;
	  }
	  // Clear the cart and navigate to the success page or do payment processing
	  setCartProducts([]);
	  alert("Order placed successfully!");
	};
  

  return (
    <Container>
      <MainContent>
        <div style={{ padding: "20px", display: "block" }}>
          <div>
            <p>
              Have an account? <Link to="/login">Login</Link>
            </p>
          </div>
          <div style={{ display: "block" }}>
            <h1>Personal Details</h1>
            <label>
              {/* First Name:{" "} */}
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <label>
              {/* Last Name:{" "} */}
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
            <label>
              {/* Phone Number:{" "} */}
              <input
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </label>
            <label>
              {/* Email:{" "} */}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              {/* City:{" "} */}
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </label>
            <label>
              {/* Postal Code:{" "} */}
              <input
                type="text"
                placeholder="Postal Code"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </label>
            <label>
              {/* Street Address:{" "} */}
              <input
                type="text"
                placeholder="Street Address"
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
              />
            </label>
          </div>

          <h1>Payment Method</h1>
          <p>Selected Payment Mode: {paymentMode}</p>
          <PaymentMethods>
            <PaymentMethodLabel onClick={() => setPaymentMode("Paypal")}>
              <FontAwesomeIcon icon={faCcPaypal} /> Paypal
            </PaymentMethodLabel>
            <PaymentMethodLabel onClick={() => setPaymentMode("Mastercard")}>
              <FontAwesomeIcon icon={faCcMastercard} /> MasterCard
            </PaymentMethodLabel>
          </PaymentMethods>
          <button onClick={handleCheckout} disabled={!isFormComplete}>
            Proceed to Payment
          </button>
        </div>
      </MainContent>
      <OrderContainer>
        <div>
          <h2>Bag Summary</h2>
          {cartProducts.length > 0 && (
            <div>
              {cartProducts.map((item, index) => (
                <div key={index}>
                  <p>
                    {item.product_name}: Ksh.{item.unit_price.toFixed(2)} x{" "}
                    {item.quantity} = Ksh.
                    {(item.unit_price * item.quantity).toFixed(2)}
                  </p>
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </div>
              ))}
              <p>Total Amount: Ksh.{calculateTotalAmount().toFixed(2)}</p>
              <button onClick={handleCheckout}>Proceed to Payment</button>
            </div>
          )}
        </div>
      </OrderContainer>
    </Container>
  );
};

export default CheckoutPage;
