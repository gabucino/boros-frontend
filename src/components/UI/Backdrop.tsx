import React from 'react'
import styled from 'styled-components'

export interface BackdropProps {
    closeSidebar: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const StyledBackdrop = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 30;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,0.5);
`
 
const Backdrop: React.SFC<BackdropProps> = ({closeSidebar}) => {
    return ( <StyledBackdrop onClick={closeSidebar}></StyledBackdrop> );
}
 
export default Backdrop;