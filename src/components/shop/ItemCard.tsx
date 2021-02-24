import React from 'react'
import styled from 'styled-components'
import NoPhoto from './img/nophoto.png'

export interface ItemCardProps {
  name: string
  price: number
  src?: string
}

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
  font-family: 'Roboto', sans-serif;
  max-height: 60vh;
  width: 100%;
`

const Image = styled.div<{ src?: string }>`
  width: 100%;
  min-height: 40rem;
  background: url(${props => props.src || NoPhoto}) no-repeat center;
  background-size: contain;
`


const ItemName = styled.h4`
  font-weight: 400;
  font-size: 1.6rem;
  margin: 0.5rem;
`

const ItemPrice = styled.h6`
  font-weight: 400;
  font-size: 1.3rem;
  margin: 0.5rem;
`

const ItemCard: React.SFC<ItemCardProps> = ({ name, price, src }) => {
  return (
    <Wrapper>
      <Image src={src} />
      <ItemName>{name}</ItemName>
      <ItemPrice>{price} PLN</ItemPrice>
    </Wrapper>
  )
}

export default ItemCard
