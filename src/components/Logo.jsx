import styled from 'styled-components';
import logo from '../assets/logo-horizontal.png';

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
`;

function Logo() {
  return (
    <StyledLogo>
      <img src={logo} alt="WealthHealth" />
      <p>- HRnet</p>
    </StyledLogo>
  );
}

export default Logo;
