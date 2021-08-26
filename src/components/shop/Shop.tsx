import React from "react";
import { flexContainer } from "../../styles";
import styled from "styled-components";
import CategoryButton from "./CategoryButton";
import Sort from "./Sort";
import SearchFilter from "./SearchFilter";
import ItemCard from "./ItemCard";

const MainContainer = styled(flexContainer)`
  flex-direction: column;
  padding: 0 2rem;
`;

const ShopTitleContainer = styled(flexContainer)`
  height: 9rem;
  @media (min-width: 768px) {
    height: 11rem;
  }
`;

const ShopTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.lightRed};
  letter-spacing: -3px;
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 5rem;
  }
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 85%;
    flex-direction: row;
    /* flex-wrap: wrap; */
    align-items: space-between;
    justify-content: space-between;
  }
`;

const ItemsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  margin-top: 2rem;
`;

const Shop: React.FC = () => {
  return (
    <MainContainer>
      <ShopTitleContainer>
        <ShopTitle>Shop</ShopTitle>
      </ShopTitleContainer>

      <ButtonsWrapper>
        <SearchFilter />
        <CategoryButton category="Bottles" />
        <CategoryButton category="Food" />
        <CategoryButton category="Other"  />
        <Sort />
      </ButtonsWrapper>

      <ItemsWrapper>
        <ItemCard
          src="https://secure.ce-tescoassets.com/assets/HU/227/5998421102227/ShotType1_540x540.jpg"
          name="Frittmann rose"
          price={35}
        />
        <ItemCard name="Nyakas - Aligvarom" price={40} />
      </ItemsWrapper>
    </MainContainer>
  );
};

export default Shop;
