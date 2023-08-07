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
