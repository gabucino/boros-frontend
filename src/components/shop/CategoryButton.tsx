import React from 'react'
import styled from 'styled-components'

interface CategoryButtonProps {
  category: string,
  isLast?: boolean;
}


const StyledButton = styled.button<{isLast?: boolean}>`
  width: 100%;
  height: 5rem;
  background-color:  '#ededed';
  color: ${(props) => props.theme.colors.mainBlack};
  cursor: pointer;
  border: none;
  text-transform: uppercase;
  margin-bottom: ${props => props.isLast? 0 : '1rem'};
`

const CategoryButton: React.SFC<CategoryButtonProps> = ({ category, isLast  }) => {

  return <StyledButton isLast={isLast}>{category}</StyledButton>
}

export default CategoryButton
