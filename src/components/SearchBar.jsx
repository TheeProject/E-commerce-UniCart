import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import useProducts from './useProducts';

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

const SearchResult = styled.ul`
  list-style: none;
`;

const SearchBar = () => {
  const products = useProducts();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filteredProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(value);
    });

    setSearchResults(filteredProducts);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <SearchButton>
        <FaSearch />
      </SearchButton>
      <SearchResult>
        {searchResults.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </SearchResult>
    </SearchContainer>
  );
};

export default SearchBar;
