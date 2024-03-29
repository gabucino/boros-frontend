import React, { Fragment } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'

import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { faWineGlassAlt } from '@fortawesome/free-solid-svg-icons'

interface HeaderProps {
  toggleSidebar: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const MainHeader = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  background-color: ${(props) => props.theme.colors.mainBlack};
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0;
  color: ${(props) => props.theme.colors.mainWhite};
  @media (min-width: 992px) {
    padding: 0 2rem;
    height: 5.8rem;
  }
`

const DesktopIconContainer = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
`

const ActionButton = styled.div<{ isMenu?: boolean, isBasket?: boolean }>`
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0 1rem;
  cursor: pointer;
  @media (min-width: 992px) {
    display: ${(props) => props.isMenu && "none"};
    margin-right: ${(props) => props.isBasket && "7.5%"};

  }
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  margin: 0;
  @media (min-width: 992px) {
    justify-content: flex-start;
    margin-left: 7.5%;
  }
`
const Title = styled.a`
  //h1 not in the middle because of font type
  font-family: 'Indie Flower';
  display: flex;
  position: relative;
  z-index: 20;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 0;
  font-size: 2.4rem;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  @media (min-width: 992px) {
    font-size: 3.1rem;

  }
`

export const PromoLine = styled.div`
  width: 100%;
  border-top: 1px solid #2c2c2d;
  min-height: 3rem;
  background-color: ${(props) => props.theme.colors.mainBlack};
  margin-top: 5rem;
  color: ${(props) => props.theme.colors.mainWhite};
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  // const [elephant, setElephant] = useState<string | boolean | null>('yes')

  return (
    <Fragment>
      <MainHeader>
        <ActionButton isMenu onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} style={{ color: '#FFF' }} size="3x" />
        </ActionButton>
        <TitleContainer>
          <FontAwesomeIcon icon={faWineGlassAlt} size="2x" />
          <Title>Boros</Title>
        </TitleContainer>
        <DesktopIconContainer>
        <ActionButton >
          <FontAwesomeIcon
            icon={faUser}
            style={{ color: '#FFF' }}
            size="3x"
          />
                  </ActionButton>

        <ActionButton >
          <FontAwesomeIcon
            icon={faSearch}
            style={{ color: '#FFF' }}
            size="3x"
          />
        </ActionButton>
        </DesktopIconContainer>

        <ActionButton isBasket>
          <FontAwesomeIcon
            icon={faShoppingBasket}
            style={{ color: '#FFF' }}
            size="3x"
          />
        </ActionButton>
      </MainHeader>
      <PromoLine>
        <p>
          Free Economy shipping over $100 | Due to COVID-19, some orders may
          experience delays
        </p>
      </PromoLine>
    </Fragment>
  )
}

export default Header
