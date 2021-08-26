import React from "react";
import styled from "styled-components";
import { filterContainer } from "../../styles";

interface CategoryButtonProps {
  category: string;
  // isLast?: boolean;
}

// interface Props {
//   isLast?: boolean;
// }

const StyledButton = styled(filterContainer)`
  width: 100%;
  color: ${(props) => props.theme.colors.lightRed};
  cursor: pointer;
  text-transform: uppercase;
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const CategoryButton: React.SFC<CategoryButtonProps> = ({
  category,
  // isLast,
}) => {
  return <StyledButton >{category}</StyledButton>;
};

export default CategoryButton;
