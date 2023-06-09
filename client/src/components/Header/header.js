import React from "react";
import styled from "styled-components";
import SearchBar from "./searchBar";

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <TitleText>Rockkit</TitleText>
        <SearchBar />
      </HeaderWrapper>
    </>
  );
};

const HeaderWrapper = styled.div`
  border: 1px solid red;
  border-radius: 10px;
  padding: 30px;
`;
const Logo = styled.image``;
const TitleText = styled.text``;

export default Header;
