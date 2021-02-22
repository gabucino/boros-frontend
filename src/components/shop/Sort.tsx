import React from 'react'
import styled from 'styled-components'

const SelectContainer = styled.div`
  width: 100%;
  height: 5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.mainBlack};
`
const StyledSelect = styled.select`
  width: 100%;
  height: 5rem;
  background: white;
  color: ${(props) => props.theme.colors.mainBlack};
  padding-left: 5px;
  border: none;
  text-transform: uppercase;



  option {
    color: black;
    background: white;
    display: flex;
    /* white-space: pre; */
    min-height: 20px;
    padding: 0px 2px 1px;
    text-transform: uppercase;
  }
`

const Sort: React.FC = () => {
  return (
    <SelectContainer>
      <StyledSelect>
        <option value="" hidden>
          SORT BY:
        </option>
        <option value="1">Featured items</option>
        <option value="2">Newest items</option>
        <option value="3">Price (Low To High)</option>
        <option value="4">Price (High To Low)</option>
      </StyledSelect>
    </SelectContainer>
  )
}

export default Sort
