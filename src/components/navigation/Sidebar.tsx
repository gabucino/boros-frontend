import React from 'react'
import styled from 'styled-components'

export interface SidebarProps {
    show: boolean
}

const Wrapper = styled.div<{show: boolean}>`
  width: 75vw;
  height: 100%;
  display: flex;
  position: fixed;
  flex-direction: column;
  top: 0;
  left: 0;
  z-index: 40;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(1px);
  transform: ${props => props.show ? 'translateX(0)' :'translateX(-100%)}'};
  transition: all 0.5s ease 0s;

`

const Sidebar: React.SFC<SidebarProps> = ({show}) => {
  return <Wrapper show={show}></Wrapper>
}

export default Sidebar
