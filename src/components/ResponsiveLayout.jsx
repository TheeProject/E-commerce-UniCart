// components/ResponsiveLayout.js
import styled from 'styled-components';

const Container = styled.div`
  /* Default styles for all screen sizes */
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  
  /* Media queries for responsiveness */
  @media (min-width: 768px) {
    /* Styles for tablets and larger screens */
    padding: 30px;
  }

  @media (min-width: 1024px) {
    /* Styles for desktop screens */
    padding: 40px;
  }
`;

export default Container;
