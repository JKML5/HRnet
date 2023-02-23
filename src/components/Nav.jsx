import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledUl = styled.ul`
  display: flex;
`;

const StyledLink = styled(Link)`
  color: #000000;
  font-weight: 500;
  text-decoration: none;
  margin-left: 30px;
  &:hover {
    color: #4e6701;
  }
`;

function Nav() {
  return (
    <nav className="nav">
      <StyledUl>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/employee-list">View current employees</StyledLink>
        </li>
      </StyledUl>
    </nav>
  );
}

export default Nav;
