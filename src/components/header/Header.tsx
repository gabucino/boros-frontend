import React, {  Fragment } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { faWineGlassAlt } from '@fortawesome/free-solid-svg-icons'

const StyledWrapper = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  background-color: ${(props) => props.theme.colors.mainBlack};
  transition: all 0.25s ease-out;
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0;
  color: ${(props) => props.theme.colors.mainWhite};
`

const ActionButton = styled.div`
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0 1rem;
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  margin: 0;
`
const Title = styled.a`
  //h1 not in the middle because of font type
  font-family: 'Indie Flower';
  /* font-size: rem; */
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
`

export const PromoLine = styled.div`
  width: 100%;
  border-top: 1px solid #2c2c2d;
  height: 3rem;
  background-color: ${(props) => props.theme.colors.mainBlack};
  margin-top: 5rem;
  color: ${(props) => props.theme.colors.mainWhite};
font-size: 1.2rem;
display: flex;
align-items: center;
justify-content: center;
`

const Header: React.FC = () => {
  // const [elephant, setElephant] = useState<string | boolean | null>('yes')

  return (
    <Fragment>
      <StyledWrapper>
        <ActionButton>
          <FontAwesomeIcon icon={faBars} style={{ color: '#FFF' }} size="3x" />
        </ActionButton>
        <TitleContainer>
          <FontAwesomeIcon icon={faWineGlassAlt} size="2x"/>
          <Title>Boros</Title>
        </TitleContainer>
        <ActionButton>
          <FontAwesomeIcon
            icon={faShoppingBasket}
            style={{ color: '#FFF' }}
            size="3x"
          />
        </ActionButton>
      </StyledWrapper>
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
