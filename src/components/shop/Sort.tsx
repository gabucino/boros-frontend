import React from "react";
import styled from "styled-components";
import { filterContainer } from "../../styles";

const SelectContainer = styled(filterContainer)`
  justify-content: flex-start;
  /* padding: 0 5px; */
  @media (min-width: 768px) {
    flex: 1;
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  /* height: 5rem; */
  background: white;
  color: ${(props) => props.theme.colors.lightRed};
  border: none;
  text-transform: uppercase;
  margin-right: 5px;
  text-align: center;


  option {
    color: black;
    background: white;
    display: flex;
    /* white-space: pre; */
    min-height: 20px;
    /* padding: 0px 2px 1px; */
    text-transform: uppercase;
  }
`;

const Sort: React.FC = () => {
  return (
    <SelectContainer>
      <StyledSelect>
      <option value="" selected disabled hidden>SORT BY:</option>
        <option value="1">Featured items</option>
        <option value="2">Newest items</option>
        <option value="3">Price (Low To High)</option>
        <option value="4">Price (High To Low)</option>
      </StyledSelect>
    </SelectContainer>
  );
};

export default Sort;
