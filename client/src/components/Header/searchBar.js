import React from "react";
import styled from "styled-components";

const SearchBar = () => {
  return (
    <>
      <SearchBarContainer>
        <SearchInput type="text" placeholder="Search..." />
        <SearchButton type="button">Search</SearchButton>
      </SearchBarContainer>
    </>
  );
};

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SearchInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
`;
const SearchButton = styled.button`
  padding: 8px 16px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default SearchBar;
