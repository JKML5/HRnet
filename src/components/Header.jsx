import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/logo-horizontal.png';

const StyledHeader = styled.header`
  padding: 20px;
  font-family: 'Arial', 'Helvetica', sans-serif;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #000000;
`;

const StyledLink = styled(Link)`
  color: #000000;
  text-decoration: none;
`;

function Header() {
  return (
    <StyledLink to="/">
      <StyledHeader className="header">
        <img src={logo} alt="WealthHealth" />
        <p>- HRnet</p>
      </StyledHeader>
    </StyledLink>
  );
}

export default Header;
