import React from 'react'
import { centeredFlexContainer } from '../../styles'
import styled from 'styled-components'
import CategoryButton from './CategoryButton'
import Sort from './Sort'
import SearchFilter from './SearchFilter'


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

const Shop: React.FC = () => {
  return (
    <MainContainer>
      <ShopTitleContainer>
        <ShopTitle>Shop</ShopTitle>
      </ShopTitleContainer>

      <SearchFilter />
      <CategoryButton category="Bottles" />
      <CategoryButton category="Food" />
      <CategoryButton category="Other" />
      <Sort />
    </MainContainer>
  )
}

export default Shop
