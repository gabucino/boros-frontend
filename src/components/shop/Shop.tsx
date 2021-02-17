import React from 'react'
import {centeredFlexContainer} from '../../styles'
import styled from 'styled-components'

// export interface ShopProps {

// }

const ShopTitleContainer = styled(centeredFlexContainer)`
height: 9rem;
`

const ShopTitle = styled.h1`
font-size: 4rem;
font-weight: 700;
letter-spacing: -3px;
text-transform: uppercase;`

const Shop: React.FC = () => {
  return <ShopTitleContainer>
<ShopTitle>Shop</ShopTitle>
  </ShopTitleContainer>
}

export default Shop
