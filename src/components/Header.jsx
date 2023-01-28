import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';
import Logo from './Logo';

const StyledHeader = styled.header`
  background-color: #ffffff;
  padding: 30px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #4e6701;
`;

const StyledLink = styled(Link)`
  color: #000000;
  text-decoration: none;
`;

function Header() {
  return (
    <StyledLink to="/">
      <StyledHeader className="header">
        <Logo />
        <Nav />
      </StyledHeader>
    </StyledLink>
  );
}

export default Header;
