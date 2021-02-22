import React from 'react'
import styled from 'styled-components'

export interface CategoryButtonProps {
  category: string,

}

const StyledButton = styled.button`
width: 100%;
height: 5rem;
background-color: #ededed;
color: ${(props) => props.theme.colors.mainBlack};
cursor: pointer;
border: none;
text-transform: uppercase;
margin-bottom: 1rem;
`

const CategoryButton: React.SFC<CategoryButtonProps> = ({ category }) => {
  return <StyledButton>{category}</StyledButton>
}

export default CategoryButton
