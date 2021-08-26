import styled from "styled-components";

export const flexContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const filterContainer = styled(flexContainer)`
box-sizing: border-box;
  height: 5rem;
  padding-left: 15px;
  margin-right: 1.2rem;
  border: 0.6px solid black;
  width: 100%;
  @media (min-width: 768px) {
    width: 49.5%;
    justify-content: center;
  }
  @media (min-width: 1024px) {
    margin-right: 1rem;
    flex: 1;
  }
`;
