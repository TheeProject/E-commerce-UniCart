import React, { useState,useEffect } from 'react';
import styled from 'styled-components';

const CheckoutForm = styled.form`
background-color:yellow;
  margin-top: 20px;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column
  /* Add any specific styles for the checkout form here */
`;
const SectionHeader = styled.h3`
  color: green;
  margin: 20px 0;
`;
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;
const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

// Define a styled component for the payment method selection
const PaymentMethodGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const PaymentMethodLabel = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

// The rest of the styled components and the component itself
// remain the same as in the previous code.

function CheckoutPage() {
  

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

// State to store the cart items and total amount
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  // Function to handle adding items to the cart
  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  useEffect(() => {
    const calculateTotalAmount = () => {
      const amount = cartItems.reduce((total, item) => total + item.price, 0);
      setTotalAmount(amount);
    };
    calculateTotalAmount();
  }, [cartItems]);

  // Function to handle selecting the payment method
  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  // Function to handle form submission

  const handleSubmitCheckout = (event) => {
    event.preventDefault();
    // Perform any necessary actions with the form data (e.g., submit to the server)
    // For simplicity, we'll just display the success message here.
    setIsOrderPlaced(true);
  };

  return (
    <CheckoutForm onSubmit={handleSubmitCheckout}>
      <h3>Checkout Form</h3>
      <SectionHeader>YOUR DETAILS</SectionHeader>
      <FormGroup>
            <label>First name *</label>
            <input type="text" required />
          </FormGroup>
          <FormGroup>
            <label>Last name *</label>
            <input type="text" required />
            </FormGroup>
          <FormGroup>
            <label>Phone *</label>
            <input type="tel" required />
            </FormGroup>
            <FormGroup>
            <label>Email address *</label>
            <input type="email" required />
          </FormGroup>
          <SectionHeader>DELIVERY DETAILS</SectionHeader>
          <FormGroup>
            <label>Create an account?</label>
            <input type="checkbox" />
            </FormGroup>
          <FormGroup>
            <label>Deliver to: First name (optional)</label>
            <input type="text" />
            </FormGroup>
          <FormGroup>
            <label>Deliver to: Last name (optional)</label>
            <input type="text" />
            </FormGroup>
          <FormGroup>
            <label>Deliver to: Phone *</label>
            <input type="tel" required />
            </FormGroup>

          <FormGroup>
            <label>Country / Region *</label>
            <select required>
              <option value="Kenya"></option>
              <option value="Nairobi">Nairobi</option>
              <option value="Nanyuki">Nanyuki</option>
              <option value="Mombasa">Mombasa</option>
              <option value="Kisii">Kisii</option>
              <option value="Kericho">Kericho</option>
              <option value="Nyanza">Nyanza</option>
            </select>
            </FormGroup>

          <FormGroup>
            <label>Street address *</label>
            <input type="text" required />
            </FormGroup>
          <FormGroup>
            <label>Apartment, suite, unit, etc. (optional)</label>
            <input type="text" />
            </FormGroup>
          <FormGroup>
            <label>Order notes (optional)</label>
            <textarea />
            </FormGroup>

          <FormGroup>
            <label>Is this order a gift? Include a gift message here. (optional)</label>
            <textarea />
            </FormGroup>
      {/* <SubmitButton type="submit">Proceed to Payment</SubmitButton> */}
      <SectionHeader>SELECT PAYMENT METHOD</SectionHeader>
      <PaymentMethodGroup>
        <PaymentMethodLabel>
          <input
            type="radio"
            name="paymentMethod"
            value="mpesa"
            onChange={handlePaymentMethodChange}
            checked={selectedPaymentMethod === 'mpesa'}
          />
          M-Pesa
        </PaymentMethodLabel>
        <PaymentMethodLabel>
          <input
            type="radio"
            name="paymentMethod"
            value="visa"
            onChange={handlePaymentMethodChange}
            checked={selectedPaymentMethod === 'visa'}
          />
          Visa
        </PaymentMethodLabel>
        <PaymentMethodLabel>
          <input
            type="radio"
            name="paymentMethod"
            value="creditCard"
            onChange={handlePaymentMethodChange}
            checked={selectedPaymentMethod === 'creditCard'}
          />
          Credit Card
        </PaymentMethodLabel>
        {/* Add more payment methods if needed */}
      </PaymentMethodGroup>

      <SubmitButton type="submit">Proceed to Payment</SubmitButton>

      {isOrderPlaced && (
        <div>
          <h3>Order Receipt</h3>
          <p>Thank you for your order!</p>
          <h4>Items in Cart:</h4>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item.name} - ${item.price}</li>
            ))}
          </ul>
          <p>Total Amount: ${totalAmount}</p>
        </div>
      )}
    </CheckoutForm>
  );
}

export default CheckoutPage;