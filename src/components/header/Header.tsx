import React, { useState, Fragment } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const StyledWrapper = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  background-color: ${props => props.theme.mainBlack};
  transition: all 0.25s ease-out;
  height: 5rem;
  width: 100%;
`

const StyledHeader = styled.div`
  width: 100%;
  padding: 0;
  z-index: 20;
`
const ActionButton = styled.div`
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: 'center';
  align-items: 'center';
  margin: 0;
`

//ctrl + space gives you the options of props for destructure
const Header: React.FC = () => {
  //type defined in an interface
  const [elephant, setElephant] = useState<string | boolean | null>('yes')

  return (
    <Fragment>
      <StyledWrapper>
        <ActionButton>
          <FontAwesomeIcon icon={faBars} style={{ color: '#FFF' }} size="2x" />
        </ActionButton>
      </StyledWrapper>
    </Fragment>
    //hovering over ref and onChange will tell you htmlelement it expects
  )
}

export default Header
;