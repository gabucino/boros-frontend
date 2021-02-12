import React, { useState, Fragment } from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
    position: fixed;
    z-index: 100;
    top: 0;
    width: 100%;
    padding: 0;
    transition: all .25s ease-out;
    background-color: #000;
    height: 5rem;
`;

const ActionButton = styled.div`

`



//ctrl + space gives you the options of props for destructure
const Header: React.FC = () => {
  //type defined in an interface
  const [elephant, setElephant] = useState<string | boolean | null>('yes')

  return (<Fragment>
  <StyledHeader />
  </Fragment>
    //hovering over ref and onChange will tell you htmlelement it expects

  )
}

export default Header