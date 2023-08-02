import React, { useContext } from 'react';
// import styled from 'styled-component
import SearchBar from './SearchBar';
import SearchBarContainer from './SearchBarContainer';;

// const SearchBarContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 60px; // adjust height as needed
//   background-color: #f5f5f5; // adjust color as needed
//   margin-bottom: 20px; // adjust margin as needed
// `;

function HomePage() {

  
  return (
    <div>
      <SearchBarContainer>
        <SearchBar />
      </SearchBarContainer>

    </div>
  );
}

export default HomePage;