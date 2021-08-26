import React from 'react'
import styled from 'styled-components'

export interface SidebarProps {
  show: boolean
  depth?: number
  depthStep?: number
  items: any
}

export interface SidebarItemProps {
  label: string
  name: string
  depthStep?: number
  depth?: number
  items?: any[]
}

const StyledList = styled.ul`
list-style-type: none;
text-transform: uppercase;
`

const StyledSidebarItem = styled.li`
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-transform: uppercase;
`

const Wrapper = styled.div<{ show: boolean }>`
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
  transform: ${(props) =>
    props.show ? 'translateX(0)' : 'translateX(-100%)}'};
  transition: all 0.5s ease 0s;
`



const SidebarItem: React.SFC<SidebarItemProps> = ({
  label,
  items,
  depthStep = 10,
  depth = 0,
}) => {
  console.log('sidebaritems',items)
  return (
    <>
      <li>{label}</li>
      {Array.isArray(items) ? (
        <StyledList>
          {items.map((subItem) => (
            <StyledSidebarItem
              key={subItem.name}
              depth={depth + 1}
              depthStep={depthStep}
              label={subItem.label}
              {...subItem}
            />
          ))}
        </StyledList>
      ) : null}
    </>
  )
}

const Sidebar: React.SFC<SidebarProps> = ({ show, items }) => {
  return (
    <Wrapper show={show}>
      <StyledList>
        {items.map((sidebarItem: any, index: number) => (
          <SidebarItem key={`${sidebarItem.name}${index}`} {...sidebarItem} />
        ))}
      </StyledList>
    </Wrapper>
  )
}

export default Sidebar
