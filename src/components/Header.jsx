import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <div>
      <NavbarContainer>
  <LogoImg src='/images/logo.svg'/>
      </NavbarContainer>
    </div>
  )
}

const NavbarContainer = styled.div`
position: fixed;
top: 0;
    width: 100vw;
    height: 300px;
    overflow-x:hidden ;
    width: 300px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;

`
const LogoImg = styled.img`
    width: 80vw;
`

export default Header
