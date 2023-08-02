import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 50%;
  margin: auto;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 5px 10px;
  font-size: 16px;
`;
const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;


function SearchBar() {
  const handleSearch = () => {
    // Perform the search operation here
  }

  return (
    <SearchContainer>
      <SearchInput type="text" placeholder="Search..." />
      <SearchButton onClick={handleSearch}>
        <FaSearch />
      </SearchButton>
    </SearchContainer>
  );
}



export default SearchBar;