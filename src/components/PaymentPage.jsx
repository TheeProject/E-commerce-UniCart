// import React from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// const PaymentContainer = styled.div`
//   max-width: 600px;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
// `;

// const PaymentOption = styled.div`
//   margin: 10px 0;
// `;

// const PaymentMethodButton = styled.button`
//   padding: 10px 20px;
//   background-color: green;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// function PaymentPage() {
//   // Function to handle payment method selection
//   const handlePaymentMethod = (method) => {
//     // Implement your logic here to handle the selected payment method
//     console.log('Selected Payment Method:', method);
//   };

//   return (
//     <PaymentContainer>
//       <h2>Choose Payment Method</h2>
//       <PaymentOption>
//         <PaymentMethodButton onClick={() => handlePaymentMethod('Cheque')}>
//           Pay with Cheque
//         </PaymentMethodButton>
//       </PaymentOption>
//       <PaymentOption>
//         <PaymentMethodButton onClick={() => handlePaymentMethod('Mpesa')}>
//           Pay with Mpesa
//         </PaymentMethodButton>
//       </PaymentOption>
//       <PaymentOption>
//         <PaymentMethodButton onClick={() => handlePaymentMethod('Visa')}>
//           Pay with Visa
//         </PaymentMethodButton>
//       </PaymentOption>
//       <PaymentOption>
//         <PaymentMethodButton onClick={() => handlePaymentMethod('Credit/Debit Card')}>
//           Pay with Credit/Debit Card
//         </PaymentMethodButton>
//       </PaymentOption>
//       <Link to="/checkout-details">
//         <button>Back to Checkout</button>
//       </Link>
//     </PaymentContainer>
//   );
// }

// export default PaymentPage;
// PaymentPage.js
import React from 'react';
import styled from 'styled-components';

const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const TotalAmount = styled.h3`
  color: blue;
`;

const Receipt = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  width: 50%;
  margin-top: 20px;
`;

const PaymentPage = ({ totalAmount, receiptData }) => {
  return (
    <PaymentContainer>
      <TotalAmount>Total Amount: ${totalAmount}</TotalAmount>
      <Receipt>
        <h4>Receipt:</h4>
        {/* Display receipt data */}
        <pre>{JSON.stringify(receiptData, null, 2)}</pre>
      </Receipt>
    </PaymentContainer>
  );
};

export default PaymentPage;
