import React from 'react'
import { centeredFlexContainer } from '../../styles'
import styled from 'styled-components'
import CategoryButton from './CategoryButton'
import Sort from './Sort'
import SearchFilter from './SearchFilter'
import ItemCard from './ItemCard'

const MainContainer = styled(centeredFlexContainer)`
  flex-direction: column;
  padding: 0 2rem;
`

const ShopTitleContainer = styled(centeredFlexContainer)`
  height: 9rem;
`

const ShopTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  letter-spacing: -3px;
  text-transform: uppercase;
`

const ItemsWrapper = styled.div`
  width: 100%;
  padding: 3rem 0;
  margin: 0;
`

const Shop: React.FC = () => {
  return (
    <MainContainer>
      <ShopTitleContainer>
        <ShopTitle>Shop</ShopTitle>
      </ShopTitleContainer>

      <SearchFilter />
      <CategoryButton category="Bottles" />
      <CategoryButton category="Food" />
      <CategoryButton category="Other" isLast={true} />
      <Sort />

      <ItemsWrapper>
        <ItemCard src="https://secure.ce-tescoassets.com/assets/HU/227/5998421102227/ShotType1_540x540.jpg" name="Frittmann rose" price={35} />
        <ItemCard  name="Nyakas - Aligvarom" price={40} />
      </ItemsWrapper>
    </MainContainer>
  )
}

export default Shop
