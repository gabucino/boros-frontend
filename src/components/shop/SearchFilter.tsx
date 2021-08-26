import React from "react";
import styled from "styled-components";
import { Search } from "@styled-icons/evil/Search";
import { filterContainer } from "../../styles";

const Container = styled(filterContainer)`
  height: 5rem;
  margin-bottom: 1rem;
`;

const TextInput = styled.input`
  /* flex: 1 0; */
  /* width: 100%; */
  min-height: 5rem;
  background-color: transparent;
  border: 0;
  font-size: 1.6rem;
  &:focus {
    outline: none;
  }
  &::-webkit-input-placeholder {
    color: ${(props) => props.theme.colors.lightRed};
    font-weight: lighter;
  }
`;

const Icon = styled.div`
  /* flex: 0 0; */
  /* margin: 0 1rem; */
`;

const SearchIcon = styled(Search)`
  width: 2.7rem;
  height: 2.7rem;
  color: ${(props) => props.theme.colors.lightRed};
`;

const SearchFilter: React.FC = () => {
  return (
    <Container>
      <Icon>
        <SearchIcon />
      </Icon>
      <TextInput placeholder="Search something" />
    </Container>
  );
};
export default SearchFilter;
