import React from 'react'
import styled from 'styled-components'
import { Search } from '@styled-icons/evil/Search'

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.mainBlack};
  margin-bottom: 1rem;

`

const TextInput = styled.input`
  flex: 1 0;
  width: 100%;
  min-height: 5rem;
  background-color: transparent;
  padding-left: 5px;
  border: 0;
  font-size: 1.6rem;
  font-style: italic;
  &:focus {
    outline: none;
  }
`

const Icon = styled.div`
  flex: 0 0;
  margin: 0 1rem;
`

const SearchIcon = styled(Search)`
  width: 2.7rem;
  height: 2.7rem;
`

const SearchFilter: React.FC = () => {
  return (
    <Container>
      <Icon>
        <SearchIcon />
      </Icon>
      <TextInput placeholder="Search something"/>
    </Container>
  )
}
export default SearchFilter
